# Explore Brand Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Expo starter Explore tab with a polished bilingual Arabic/English coaching demo that follows the supplied brand palette in light and dark themes.

**Architecture:** Keep the screen as a single focused Expo Router route, but move palette semantics into the shared theme constants so components consume role names rather than raw hex values. Reuse the existing `ThemedText`, `ThemedView`, safe-area, spacing, and symbol patterns; keep interactions local to press feedback and avoid adding data, navigation, or dependencies.

**Tech Stack:** Expo 57, React Native 0.86, React 19, TypeScript, Expo Router, `expo-symbols`, `react-native-safe-area-context`, `StyleSheet`.

## Global Constraints

- Preserve the supplied source colors as immutable brand anchors.
- Use semantic color roles rather than raw hex values inside components.
- Use `#F9CF4E` as the dominant CTA color with `#10141A` text; never white text on yellow.
- Use `#143D5E` for navigation, strong hierarchy, headings, and trusted coaching surfaces.
- Use `#85B9E5` for informational/selected/chart states, not competing CTAs.
- Use `#FDF2D7` for calm coach and nutrition highlights.
- Use `#7BC62A` only for successful completion and healthy progress, with an icon and bilingual label.
- Use `#C54C33` only for errors/destructive/missed states, with an icon and bilingual label.
- Avoid pure white, pure black, purple gradients, excessive glassmorphism, decorative analytics, repeated card grids, and stock photography.
- Preserve light/dark theme support, safe-area behavior, scroll behavior, and web compatibility.
- Do not add dependencies, backend data, navigation destinations, or unrelated Home-tab changes.

## File Map

- Modify `mobile/src/constants/theme.ts`: define immutable palette anchors, semantic theme roles, and documented derived light/dark colors.
- Modify `mobile/src/components/themed-text.tsx`: keep the existing API compatible while resolving semantic text roles through the expanded theme.
- Modify `mobile/src/components/themed-view.tsx`: keep the existing API compatible while allowing semantic surface roles.
- Modify `mobile/src/app/explore.tsx`: build the bilingual coaching feed, local press feedback, progress cue, and supporting guidance sections.

### Task 1: Define semantic brand themes

**Files:**
- Modify: `/Users/abdullah/fitness-guidance-app/mobile/src/constants/theme.ts`
- Modify: `/Users/abdullah/fitness-guidance-app/mobile/src/components/themed-text.tsx`
- Modify: `/Users/abdullah/fitness-guidance-app/mobile/src/components/themed-view.tsx`

**Interfaces:**
- Produces `Colors.light` and `Colors.dark` objects with the exact semantic role keys listed below.
- Keeps `ThemeColor` derived from the shared theme object so existing `type` and `themeColor` callers remain type-safe.

- [ ] **Step 1: Replace the starter color map with immutable anchors and semantic roles.**

  Define a local `BrandColors` object containing the eight supplied source colors. Add both theme objects with:

  ```ts
  background, backgroundSubtle, surface, surfaceRaised, surfaceSelected,
  textPrimary, textSecondary, textMuted, textInverse, borderDefault,
  borderStrong, actionPrimary, actionPrimaryHover, actionSecondary, focusRing,
  highlight, information, success, warning, danger, chartSeries,
  progressComplete, progressIncomplete
  ```

  Use `#FEFAF1` as light `background`, `#10141A` as dark `background`, warm surfaces in light mode, and deep navy raised/selected surfaces in dark mode. Add short comments for every derived color explaining its anchor and purpose; do not use pure white or pure black.

- [ ] **Step 2: Preserve compatibility for existing themed primitives.**

  Keep `ThemedTextProps.type` unchanged. Map its default text color to `textPrimary`; update `linkPrimary` to use `actionSecondary` or another semantic role instead of its inline raw blue. Keep `ThemedView` defaulting to `background`, and ensure all existing `type` values still compile.

- [ ] **Step 3: Run the project type/lint check after the theme edit.**

  Run from `/Users/abdullah/fitness-guidance-app/mobile`:

  ```bash
  npm run lint
  ```

  Expected: the existing Expo lint command completes without new errors.

- [ ] **Step 4: Commit the theme foundation.**

  ```bash
  git add mobile/src/constants/theme.ts mobile/src/components/themed-text.tsx mobile/src/components/themed-view.tsx
  git commit -m "feat: add semantic brand themes"
  ```

### Task 2: Build the bilingual Explore coaching feed

**Files:**
- Modify: `/Users/abdullah/fitness-guidance-app/mobile/src/app/explore.tsx`

**Interfaces:**
- Consumes `useTheme`, `ThemedText`, `ThemedView`, `SymbolView`, `useSafeAreaInsets`, `BottomTabInset`, `MaxContentWidth`, and `Spacing`.
- Produces one screen with a compact header, one featured coaching panel, a progress cue, and two supporting guidance sections.

- [ ] **Step 1: Replace starter-only imports and content.**

  Remove the Expo documentation/demo imports and keep only the primitives needed for the screen. Keep `ScrollView`, `Platform`, `Pressable`, and safe-area inset handling so the existing cross-platform behavior remains intact.

- [ ] **Step 2: Add local screen data and bilingual copy.**

  Use static arrays/objects inside the route for the demo content. Include Arabic-first labels with English translations, such as:

  ```ts
  { title: "خطوتك اليوم", subtitle: "Your focus today" }
  { title: "تنفّس، تحرّك، واستمر", subtitle: "Breathe, move, and keep going" }
  { title: "جاهز للإكمال", subtitle: "Ready to complete" }
  ```

  Keep copy concise and supportive. Include explicit completion text and an icon name for the success cue so success is not communicated through green alone.

- [ ] **Step 3: Implement the layout with semantic theme roles.**

  Build the JSX in this order:

  1. Scroll container with themed `background`.
  2. Header with eyebrow, bilingual greeting, and muted subtitle.
  3. Featured panel on `surfaceRaised` or `highlight`, with navy heading, information accent, progress line, and a yellow `Pressable` CTA with soft-black text.
  4. Compact success row using `progressComplete`, a checkmark symbol, and Arabic/English completion text.
  5. “Today’s focus” guidance rows on `surface`.
  6. “Explore guidance” rows using cream/blue accents without making blue a CTA.

  Add `accessibilityRole="button"` and bilingual `accessibilityLabel` values to pressables. Use `SymbolView` icons with theme-derived tint colors.

- [ ] **Step 4: Add restrained press feedback and styles.**

  Use the existing `pressed` opacity pattern for the CTA and guidance rows. Define styles with `Spacing`, `MaxContentWidth`, and semantic theme values passed inline where theme-dependent. Avoid a large title, excessive rounded pills, and repeated identical cards.

- [ ] **Step 5: Run lint and inspect both theme branches.**

  Run:

  ```bash
  cd /Users/abdullah/fitness-guidance-app/mobile
  npm run lint
  ```

  Expected: lint passes. Then run the existing Expo web target (`npm run web`) and inspect the Explore route in light and dark system themes, checking safe-area spacing, bilingual copy, CTA contrast, and that selected/informational colors remain secondary.

- [ ] **Step 6: Commit the screen implementation.**

  ```bash
  git add mobile/src/app/explore.tsx
  git commit -m "feat: redesign Explore coaching demo"
  ```

### Task 3: Final verification against the brand brief

**Files:**
- Verify: `/Users/abdullah/fitness-guidance-app/mobile/src/constants/theme.ts`
- Verify: `/Users/abdullah/fitness-guidance-app/mobile/src/components/themed-text.tsx`
- Verify: `/Users/abdullah/fitness-guidance-app/mobile/src/components/themed-view.tsx`
- Verify: `/Users/abdullah/fitness-guidance-app/mobile/src/app/explore.tsx`

- [ ] **Step 1: Confirm no screen-level raw hex colors remain.**

  Run:

  ```bash
  rg -n "#[0-9A-Fa-f]{6}" /Users/abdullah/fitness-guidance-app/mobile/src/app/explore.tsx
  ```

  Expected: no matches.

- [ ] **Step 2: Confirm the required semantic roles exist in both themes.**

  Run:

  ```bash
  rg -n "backgroundSubtle|surfaceRaised|surfaceSelected|textMuted|actionPrimaryHover|progressIncomplete" /Users/abdullah/fitness-guidance-app/mobile/src/constants/theme.ts
  ```

  Expected: each role is present in the shared theme definitions and resolves for both light and dark themes.

- [ ] **Step 3: Run the final lint check.**

  ```bash
  cd /Users/abdullah/fitness-guidance-app/mobile
  npm run lint
  ```

  Expected: pass with no new errors.

- [ ] **Step 4: Review the worktree and preserve unrelated user files.**

  ```bash
  git --no-pager status --short
  git --no-pager diff HEAD~2..HEAD --check
  ```

  Expected: only the committed theme, primitive, screen, and documentation changes are attributable to this work; existing `.vscode/` and starter-project changes are not removed.

