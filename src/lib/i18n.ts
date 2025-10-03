// Internationalization configuration for TapForge
export const languages = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  ko: "한국어",
  es: "Español",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "ja";
