import * as Haptics from "expo-haptics";

export type HapticType =
  | "impactLight"
  | "impactMedium"
  | "impactHeavy"
  | "rigid"
  | "soft"
  | "selection"
  | "success"
  | "warning"
  | "error";

export interface HapticOptions {
  enableVibrateFallback?: boolean;
  ignoreAndroidSystemSettings?: boolean;
}

const impactMap: Record<string, Haptics.ImpactFeedbackStyle> = {
  impactLight: Haptics.ImpactFeedbackStyle.Light,
  impactMedium: Haptics.ImpactFeedbackStyle.Medium,
  impactHeavy: Haptics.ImpactFeedbackStyle.Heavy,
  rigid: Haptics.ImpactFeedbackStyle.Rigid,
  soft: Haptics.ImpactFeedbackStyle.Soft,
};

const notificationMap: Record<string, Haptics.NotificationFeedbackType> = {
  success: Haptics.NotificationFeedbackType.Success,
  warning: Haptics.NotificationFeedbackType.Warning,
  error: Haptics.NotificationFeedbackType.Error,
};

export function triggerHaptic(
  type: HapticType = "impactLight",
  _options: HapticOptions = {}
) {
  if (type === "selection") {
    Haptics.selectionAsync().catch(() => {
      // Ignore haptic errors on platforms where haptics are unavailable.
    });
    return;
  }

  const impactStyle = impactMap[type];
  if (impactStyle) {
    Haptics.impactAsync(impactStyle).catch(() => {
      // Ignore haptic errors on platforms where haptics are unavailable.
    });
    return;
  }

  const notificationType = notificationMap[type];
  if (notificationType) {
    Haptics.notificationAsync(notificationType).catch(() => {
      // Ignore haptic errors on platforms where haptics are unavailable.
    });
  }
}
