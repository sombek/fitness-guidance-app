import type { HapticFeedbackTypes, HapticOptions } from "react-native-haptic-feedback";

export type HapticType = keyof typeof HapticFeedbackTypes;

type HapticModule = typeof import("react-native-haptic-feedback").default;

let hapticModule: HapticModule | null = null;
let hasTriedLoading = false;

function getHapticModule(): HapticModule | null {
  if (hasTriedLoading) return hapticModule;

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    hapticModule = require("react-native-haptic-feedback").default;
  } catch {
    hapticModule = null;
  }
  hasTriedLoading = true;

  return hapticModule;
}

export function triggerHaptic(
  type: HapticType = "impactLight",
  options: HapticOptions = {}
) {
  const module = getHapticModule();
  if (!module) return;

  try {
    module.trigger(type, {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
      ...options,
    });
  } catch {
    // Ignore haptic errors on platforms where the native module is unavailable.
  }
}
