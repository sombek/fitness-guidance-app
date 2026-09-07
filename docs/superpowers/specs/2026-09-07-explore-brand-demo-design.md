# Explore Brand Demo Design

## Goal

Turn the starter Expo Explore tab into a polished bilingual Arabic/English brand
demo. This is a visual presentation surface, not a data-backed product flow.
It should feel focused, energetic, trustworthy, personal, supportive, and
premium without becoming a generic analytics dashboard.

## Screen structure

1. **Header**
   - A compact bilingual greeting and a short contextual subtitle.
   - Strong navy hierarchy with restrained sizing so the content remains above
     the fold.
2. **Featured coaching panel**
   - One dominant warm surface with a short coaching recommendation.
   - Arabic and English labels appear together, with Arabic visually leading.
   - A yellow primary action uses soft-black text and includes press feedback.
3. **Progress cue**
   - A small completion/progress treatment attached to the featured content.
   - Success uses the green token plus an icon and explicit Arabic/English
     completion text; color is never the only signal.
4. **Supporting guidance**
   - A “Today’s focus” section with one or two concise guidance rows.
   - An “Explore guidance” section for calm nutrition, mobility, or recovery
     prompts.
   - Avoid a grid of identical cards and avoid decorative metrics without an
     action.

## Theme and semantic tokens

Extend the shared theme model so the screen uses semantic roles instead of raw
hex values. Both light and dark themes must expose:

`background`, `backgroundSubtle`, `surface`, `surfaceRaised`,
`surfaceSelected`, `textPrimary`, `textSecondary`, `textMuted`, `textInverse`,
`borderDefault`, `borderStrong`, `actionPrimary`, `actionPrimaryHover`,
`actionSecondary`, `focusRing`, `highlight`, `information`, `success`,
`warning`, `danger`, `chartSeries`, `progressComplete`, and
`progressIncomplete`.

Source palette anchors remain immutable:

- `#FEFAF1` warm off white
- `#10141A` soft black
- `#143D5E` deep navy
- `#F9CF4E` energy yellow
- `#85B9E5` light blue
- `#FDF2D7` highlight cream
- `#7BC62A` success green
- `#C54C33` error red

Derived colors will be documented inline in the theme constants, including the
source anchor and purpose of each tint/shade. The light theme uses warm off
white as its principal background and soft black for primary text. The dark
theme uses soft black as its principal background, warm off white for primary
text, and deep navy only for raised/selected surfaces. Pure white and pure
black are not used.

## Accessibility and interaction

- Verify all text, button, selected-state, and focus-ring combinations against
  WCAG AA contrast expectations.
- Yellow actions always use soft-black text.
- Success and danger states include both an icon and bilingual labels.
- Pressable elements use a consistent opacity/scale feedback pattern without
  introducing new navigation or data state.
- Preserve safe-area handling, scroll behavior, and web compatibility.

## Implementation boundaries

- Replace the starter content in `mobile/src/app/explore.tsx`.
- Update `mobile/src/constants/theme.ts` and the existing themed primitives
  only as needed to expose semantic theme roles.
- Reuse the existing Expo Router, safe-area, spacing, symbol, and themed
  component patterns.
- Do not add dependencies, backend data, navigation destinations, or unrelated
  changes to the Home tab.

## Validation

- Run the existing mobile lint command.
- Run the TypeScript/build validation available in the project if needed.
- Inspect the rendered screen in light and dark themes and verify bilingual
  labels, press feedback, contrast-sensitive colors, and safe-area spacing.
