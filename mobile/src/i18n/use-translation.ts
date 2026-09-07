import { useCallback, useSyncExternalStore } from "react";

import {
  getLocales,
  useLocales,
} from "expo-localization";

import { i18nStore } from "./store";
import type { Language, Translations } from "./translations";

export { Language };

function getDeviceLanguage(): Language {
  const locales = getLocales();
  const primary = locales[0]?.languageCode;
  return primary === "ar" ? "ar" : "en";
}

export function useLanguage(): {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
} {
  const language = useSyncExternalStore(
    i18nStore.subscribe,
    () => i18nStore.getLanguage(),
    () => getDeviceLanguage()
  );

  const setLanguage = useCallback((next: Language) => {
    i18nStore.setLanguage(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    i18nStore.setLanguage(language === "ar" ? "en" : "ar");
  }, [language]);

  return { language, setLanguage, toggleLanguage };
}

export function useTranslation(): { t: Translations; language: Language } {
  const { language } = useLanguage();
  // Keep hook reactive to locale changes reported by expo-localization
  useLocales();

  return { t: i18nStore.getTranslations(language), language };
}
