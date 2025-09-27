# TapForge 多言語実装ドキュメント

## 概要

TapForgeプロジェクトにおける多言語対応実装の詳細な記録と解決策のドキュメントです。

## 実装前の問題

### 1. データ管理の混乱
- すべての翻訳データが単一の `lib/i18n.ts` ファイルに集約
- 2000行を超える巨大なTypeScriptファイル
- メンテナンスが困難で、翻訳の追加・修正が煩雑

### 2. 翻訳エラー
- 中国語（zh）の翻訳にスペイン語が混入
- `Cannot read properties of undefined` エラーが頻発
- 特に `title`, `traditional` などのプロパティアクセスでエラー

### 3. ルーティングの問題
- クエリパラメータベース（`?lang=zh`）の古い実装
- プレフィックスベースのルーティングが未実装
- 言語切り替え時に404エラーが発生
- トレーリングスラッシュの不統一

## 実装した解決策

### 1. 翻訳ファイルの分離

#### 構造
```
src/
├── locales/
│   ├── ja/
│   │   └── translation.json
│   ├── en/
│   │   └── translation.json
│   ├── zh/
│   │   └── translation.json
│   ├── ko/
│   │   └── translation.json
│   └── es/
│       └── translation.json
```

#### 利点
- 各言語の翻訳を独立したJSONファイルとして管理
- Git管理が容易（変更の追跡、コンフリクトの解決）
- 翻訳者への共有が簡単

### 2. 動的翻訳ローディングシステム

#### `/src/utils/i18n.ts`
```typescript
export async function loadTranslation(locale: Language) {
  try {
    const module = await translations[locale]();
    return module.default || module;
  } catch (error) {
    console.warn(`Failed to load translation for locale: ${locale}`, error);
    const fallbackModule = await translations[DEFAULT_LOCALE]();
    return fallbackModule.default || fallbackModule;
  }
}

export function getLocaleFromPathname(pathname: string): Language {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (SUPPORTED_LOCALES.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }
  return DEFAULT_LOCALE;
}
```

### 3. Astro i18n設定

#### `/astro.config.mjs`
```javascript
i18n: {
  defaultLocale: "ja",
  locales: ["ja", "en", "zh", "ko", "es"],
  routing: {
    prefixDefaultLocale: false,
    strategy: "pathname"
  }
},
trailingSlash: "always",
```

### 4. プレフィックスベースのルーティング

#### URL構造
- 日本語（デフォルト）: `/`, `/terms/`, `/privacy/`
- 英語: `/en/`, `/en/terms/`, `/en/privacy/`
- 中国語: `/zh/`, `/zh/terms/`, `/zh/privacy/`
- 韓国語: `/ko/`, `/ko/terms/`, `/ko/privacy/`
- スペイン語: `/es/`, `/es/terms/`, `/es/privacy/`

### 5. コンポーネントの更新

#### 翻訳データの読み込みパターン
```astro
---
const { lang } = Astro.props;
const locale = lang || getLocaleFromPathname(Astro.url.pathname);
const translations = await loadTranslation(locale);
const t = translations.componentName;
---
```

### 6. 言語セレクターの修正

#### LanguageSwitcher.astro
- 現在のページに関わらず、言語切り替え時は各言語のトップページへ遷移
- 404エラーを防ぐための安全な実装

## 実装手順

1. **翻訳ファイルの移行**
   - `lib/i18n.ts` から各言語のJSONファイルへデータを分離
   - 中国語翻訳の修正（スペイン語の混入を除去）

2. **ユーティリティ関数の作成**
   - 動的翻訳ローディング関数
   - URLパスから言語を検出する関数

3. **Astro設定の更新**
   - i18n設定の追加
   - トレーリングスラッシュの統一設定

4. **コンポーネントの更新**
   - 全コンポーネントを新しい翻訳システムに対応
   - 非同期ローディングパターンの適用

5. **言語別ページの作成**
   - 各言語用のterms/privacyページを作成
   - プレフィックスベースのルーティングを実装

6. **テスト実施**
   - 全言語URLの動作確認
   - 言語切り替えの動作確認
   - 翻訳内容の表示確認

## 成果

✅ **解決された問題**
- 中国語翻訳の不具合を修正
- `undefined` エラーを完全に解消
- 404エラーなしで言語切り替えが可能
- プレフィックスベースの適切なURL構造を実現

✅ **改善された点**
- コードの保守性が大幅に向上
- 翻訳管理が簡素化
- パフォーマンスの向上（動的ローディング）
- SEOフレンドリーなURL構造

## メンテナンス

### 新しい翻訳の追加
1. 対応する言語の `translation.json` を編集
2. 必要に応じて新しいキーを追加
3. 全言語で同じ構造を維持

### 新しい言語の追加
1. `/src/locales/{新言語}/translation.json` を作成
2. `lib/i18n.ts` の `languages` オブジェクトに追加
3. `astro.config.mjs` の `locales` 配列に追加
4. 必要なページファイルを `/src/pages/{新言語}/` に作成

## 技術スタック

- **Astro 5.8**: 静的サイトジェネレーター
- **TypeScript**: 型安全性の確保
- **JSON**: 翻訳データ形式
- **動的インポート**: パフォーマンスの最適化

## 今後の改善案

1. **翻訳管理システムの導入**
   - Crowdin、Lokalise等のサービス統合
   - 翻訳ワークフローの自動化

2. **言語自動検出**
   - ブラウザの言語設定に基づく自動リダイレクト
   - Accept-Languageヘッダーの活用

3. **部分的な翻訳対応**
   - 翻訳が不完全な場合のフォールバック強化
   - プログレッシブエンハンスメント

## 参考リンク

- [Astro i18n Documentation](https://docs.astro.build/en/guides/internationalization/)
- [プロジェクトリポジトリ](https://github.com/Cor-Incorporated/TapForge)

---

最終更新日: 2025年9月27日