---
name: react-native-rtl
description: Use when adding, fixing, or reviewing right-to-left (RTL) layout support for Arabic, Hebrew, or other RTL languages in React Native or Expo apps. Covers logical style properties, textAlign behavior, directional icon flipping, I18nManager, Expo config, gestures, and RTL testing.
---

# React Native RTL (Right-to-Left) Support

## Overview

React Native's layout engine (Yoga) is built on `start`/`end`, so most flexbox layout flips for free when the layout direction is RTL. The bugs come from the exceptions: physical style properties, text alignment defaults, icons with directional meaning, and gesture/animation math — none of which flip automatically.

## Enabling RTL

**Expo:** install `expo-localization` and declare supported locales — on iOS, RTL only activates if the RTL locale is listed:

```json
{ "expo": { "plugins": [["expo-localization", { "supportedLocales": ["en", "ar"] }]] } }
```

- Config plugin options: `supportsRTL: false` opts out; `forcesRTL: true` forces RTL (RTL-only apps). Requires a new build (`npx expo prebuild` / EAS).
- Dynamic RTL overrides do **not** work in Expo Go (it resets RTL preferences; pre-SDK 58 Expo Go disabled RTL entirely). Use a development build.
- **Bare RN:** Android needs `android:supportsRtl="true"` on `<application>`; iOS needs the RTL language in the Xcode project's localizations.

**Runtime override** (e.g., in-app language picker) — direction is fixed at native startup, so a reload is mandatory. `allowRTL`/`forceRTL` settings **persist across restarts**:

```tsx
import { I18nManager, Platform } from 'react-native';
import * as Updates from 'expo-updates';

if (shouldBeRTL !== I18nManager.isRTL && Platform.OS !== 'web') {
  I18nManager.allowRTL(shouldBeRTL);
  I18nManager.forceRTL(shouldBeRTL);
  await Updates.reloadAsync();
}
```

Never ship `forceRTL(true)` in a multilingual production app — let the device locale drive it.

## Styles: logical properties, always

Flexbox (`flexDirection: 'row'`, `justifyContent`, `alignItems` with flex-start/end) flips automatically. Physical properties do not:

| Avoid (physical) | Use (logical) | NativeWind class |
|---|---|---|
| `left` / `right` | `start` / `end` | `start-0` / `end-0` |
| `marginLeft` / `marginRight` | `marginStart` / `marginEnd` | `ms-2` / `me-2` |
| `paddingLeft` / `paddingRight` | `paddingStart` / `paddingEnd` | `ps-4` / `pe-4` |
| `borderLeftWidth` / `borderRightWidth` | `borderStartWidth` / `borderEndWidth` | `border-s-2` / `border-e-2` |
| `borderTopLeftRadius` etc. | `borderTopStartRadius` etc. | `rounded-ss-lg` etc. |

- Never gate `flexDirection: 'row-reverse'` on `isRTL` — that double-flips against the native flip.
- Prefer `gap` over sibling margins; it's direction-agnostic.
- Absolute positions and `translateX` transforms do **not** flip — adjust with `I18nManager.isRTL`.

## Text alignment — the biggest trap

`textAlign` has **no `start`/`end` values** in React Native. `'left'` acts as start (flips to right in RTL) and `'right'` acts as end. But the **unset default is actual left in both directions** — so text that should follow the direction must set `textAlign` explicitly. Centralize this in one reusable Text component:

```tsx
import { Text as RNText, TextProps } from 'react-native';

export function Text(props: TextProps) {
  return <RNText {...props} style={[{ textAlign: 'left' }, props.style]} />;
}
```

Unset alignment also differs by platform (iOS follows the app language bundle; Android follows the content language) — another reason to always set it. For mixed-direction runs, nest a `Text` with `writingDirection: 'ltr'`. Use `Intl.NumberFormat`/`Intl.DateTimeFormat` for numbers and dates.

## Directional icons

RN never flips icon/image sources. Mirror back/forward arrows, chevrons, send/reply icons:

```tsx
<Ionicons name="arrow-back" style={{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }} />
```

or swap to a mirrored variant (`chevron-back` ↔ `chevron-forward`). **Do not mirror:** media playback controls, clocks, checkmarks, logos, or icons containing text.

## Gestures and animations

Drag deltas and animated distances don't flip. Negate by direction:

```ts
const dx = I18nManager.isRTL ? -gestureState.dx : gestureState.dx;
```

## Web (react-native-web)

`I18nManager` doesn't touch the DOM. Set the `dir` attribute on the root:

```tsx
<View dir={getLocales()[0].textDirection || 'ltr'}>...</View>
```

For instant (no-reload) direction changes, set `document.documentElement.dir`/`lang` and skip `Updates.reloadAsync()` on web. Put `lang`/`dir` in `+html.tsx` when using Expo Router static rendering to avoid an LTR flash.

## Testing RTL

- Fast loop: dev-only toggle calling `I18nManager.allowRTL(true); I18nManager.forceRTL(!I18nManager.isRTL)` + reload. **Caveat:** flips layout but not language, so content-driven text alignment won't change — always do a final pass with the device in a real RTL language.
- Audit physical-property leftovers: temporarily set `I18nManager.swapLeftAndRightInRTL(false)` and look for breakage.
- Screenshot both directions; RTL bugs rarely surface in unit tests.
- Android locale can change while the app runs — re-read `getLocales()` on `AppState` foreground.

## Common mistakes

- Assuming `textAlign: 'left'` is "wrong" for RTL or that unset means auto/start — unset is physical left; `'left'` flips. Set it explicitly everywhere via a shared Text.
- Using `left`/`right`/`marginLeft`-style props and wondering why layouts break in Arabic.
- Mirroring every icon — media controls and logos must stay unmirrored.
- Expecting direction changes without an app reload on native.
- Testing only in Expo Go, where dynamic RTL overrides silently do nothing.
