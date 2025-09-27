import type { Language } from '../lib/i18n';

// サポート言語
export const SUPPORTED_LOCALES: Language[] = ["ja", "en", "zh", "es", "ko"];
export const DEFAULT_LOCALE: Language = "ja";

// URLから言語を取得
export function getLocaleFromPathname(pathname: string): Language {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (SUPPORTED_LOCALES.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }

  return DEFAULT_LOCALE;
}

// 翻訳ファイルを同期的にインポート（ビルド時に解決）
const translations = {
  ja: () => import('../locales/ja/translation.json'),
  en: () => import('../locales/en/translation.json'),
  zh: () => import('../locales/zh/translation.json'),
  ko: () => import('../locales/ko/translation.json'),
  es: () => import('../locales/es/translation.json'),
};

// 翻訳ファイルを動的ロード
export async function loadTranslation(locale: Language) {
  try {
    const module = await translations[locale]();
    return module.default || module;
  } catch (error) {
    console.warn(`Failed to load translation for locale: ${locale}`, error);
    // フォールバック
    const fallbackModule = await translations[DEFAULT_LOCALE]();
    return fallbackModule.default || fallbackModule;
  }
}

// ネストされたキーから翻訳を取得
export function getTranslation(translations: any, key: string): string {
  const keys = key.split(".");
  let value = translations;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key; // 見つからない場合はキーを返す
    }
  }

  return typeof value === "string" ? value : key;
}

// 翻訳ヘルパー関数を作成
export function createTranslator(translations: any) {
  return (key: string) => getTranslation(translations, key);
}