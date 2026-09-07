/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import "@/global.css";

import { Platform } from "react-native";

export const BrandColors = {
  warmOffWhite: "#FEFAF1",
  softBlack: "#10141A",
  deepNavy: "#143D5E",
  energyYellow: "#F9CF4E",
  lightBlue: "#85B9E5",
  highlightCream: "#FDF2D7",
  successGreen: "#7BC62A",
  errorRed: "#C54C33",
} as const;

const DerivedColors = {
  // Warm Off White darkened slightly for quiet light-theme separation.
  warmCanvas: "#F8F2E7",
  // Warm Off White darkened further for elevated light-theme surfaces.
  warmRaised: "#F2E8D8",
  // Light Blue mixed with Warm Off White for selected content.
  selectedBlue: "#DCEAF5",
  // Soft Black softened with Deep Navy for secondary light-theme text.
  slateText: "#344452",
  // Soft Black softened with Warm Off White for muted light-theme text.
  mutedSlate: "#667078",
  // Warm Off White shaded for borders and incomplete progress.
  warmBorder: "#D8D1C4",
  // Energy Yellow darkened for pressed primary actions.
  yellowPressed: "#DDB43E",
  // Deep Navy lightened with Light Blue for a visible focus indicator.
  focusBlue: "#3979A8",
  // Soft Black lifted with Deep Navy for dark-theme subtle backgrounds.
  darkSubtle: "#17212B",
  // Soft Black lifted further with Deep Navy for dark-theme surfaces.
  darkSurface: "#1D2933",
  // Deep Navy lightened for selected dark-theme surfaces.
  navySelected: "#1B4D73",
  // Warm Off White shaded for secondary dark-theme text.
  warmSecondary: "#DDD5C7",
  // Warm Off White shaded further for muted dark-theme text.
  warmMuted: "#B4AEA4",
  // Deep Navy lightened for dark-theme borders.
  navyBorder: "#35546C",
  // Highlight Cream mixed into Soft Black for calm dark-theme highlights.
  darkCream: "#393326",
  // Energy Yellow lightened for dark-theme pressed actions.
  yellowPressedDark: "#FFD967",
  // Warm Off White shaded heavily for incomplete dark-theme progress.
  darkIncomplete: "#6E716F",
} as const;

export const Colors = {
  light: {
    background: BrandColors.warmOffWhite,
    backgroundSubtle: DerivedColors.warmCanvas,
    surface: BrandColors.warmOffWhite,
    surfaceRaised: DerivedColors.warmRaised,
    surfaceSelected: DerivedColors.selectedBlue,
    textPrimary: BrandColors.softBlack,
    textSecondary: DerivedColors.slateText,
    textMuted: DerivedColors.mutedSlate,
    textInverse: BrandColors.softBlack,
    borderDefault: DerivedColors.warmBorder,
    borderStrong: BrandColors.deepNavy,
    actionPrimary: BrandColors.energyYellow,
    actionPrimaryHover: DerivedColors.yellowPressed,
    actionSecondary: BrandColors.deepNavy,
    focusRing: DerivedColors.focusBlue,
    highlight: BrandColors.highlightCream,
    information: BrandColors.lightBlue,
    success: BrandColors.successGreen,
    warning: BrandColors.energyYellow,
    danger: BrandColors.errorRed,
    chartSeries: BrandColors.lightBlue,
    progressComplete: BrandColors.successGreen,
    progressIncomplete: DerivedColors.warmBorder,
    text: BrandColors.softBlack,
    backgroundElement: DerivedColors.warmRaised,
    backgroundSelected: DerivedColors.selectedBlue,
  },
  dark: {
    background: BrandColors.softBlack,
    backgroundSubtle: DerivedColors.darkSubtle,
    surface: DerivedColors.darkSurface,
    surfaceRaised: BrandColors.deepNavy,
    surfaceSelected: DerivedColors.navySelected,
    textPrimary: BrandColors.warmOffWhite,
    textSecondary: DerivedColors.warmSecondary,
    textMuted: DerivedColors.warmMuted,
    textInverse: BrandColors.softBlack,
    borderDefault: DerivedColors.navyBorder,
    borderStrong: BrandColors.lightBlue,
    actionPrimary: BrandColors.energyYellow,
    actionPrimaryHover: DerivedColors.yellowPressedDark,
    actionSecondary: BrandColors.lightBlue,
    focusRing: BrandColors.lightBlue,
    highlight: DerivedColors.darkCream,
    information: BrandColors.lightBlue,
    success: BrandColors.successGreen,
    warning: BrandColors.energyYellow,
    danger: BrandColors.errorRed,
    chartSeries: BrandColors.lightBlue,
    progressComplete: BrandColors.successGreen,
    progressIncomplete: DerivedColors.darkIncomplete,
    text: BrandColors.warmOffWhite,
    backgroundElement: DerivedColors.darkSurface,
    backgroundSelected: DerivedColors.navySelected,
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
