import { getLocales } from "expo-localization";
import { I18nManager } from "react-native";

import { translations, type Language } from "./translations";

function getDeviceLanguage(): Language {
  const locales = getLocales();
  const primary = locales[0]?.languageCode;
  return primary === "ar" ? "ar" : "en";
}

let currentLanguage: Language = getDeviceLanguage();
const listeners = new Set<() => void>();

function shouldForceRtl(language: Language): boolean {
  return language === "ar";
}

function applyLayoutDirection(language: Language) {
  const shouldBeRtl = shouldForceRtl(language);
  if (I18nManager.isRTL !== shouldBeRtl) {
    I18nManager.allowRTL(shouldBeRtl);
    I18nManager.forceRTL(shouldBeRtl);
  }
}

applyLayoutDirection(currentLanguage);

export const i18nStore = {
  getLanguage: () => currentLanguage,

  getTranslations: (language: Language = currentLanguage) =>
    translations[language],

  setLanguage: (language: Language) => {
    if (language === currentLanguage) return;
    currentLanguage = language;
    applyLayoutDirection(language);
    listeners.forEach((notify) => notify());
  },

  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};
