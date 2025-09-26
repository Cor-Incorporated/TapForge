import type { Feature, Benefit, PricingPlan } from "../types/features";

export const features: Feature[] = [
  {
    id: "ai-scan",
    title: "OCR名刺読み取り機能付きNFC名刺",
    description:
      "通常別アプリで月額500円のOCR機能を無料で統合。紙の名刺をAIでデータ化（精度95%）し、VCardとしてスマートフォンに直接保存",
    icon: {
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  },
  {
    id: "multilingual",
    title: "多言語対応",
    description:
      "日本語、英語、中国語（簡体字）、スペイン語の4言語に自動で切り替わり",
    icon: {
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      svgPath:
        "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
    },
  },
  {
    id: "no-app",
    title: "アプリ不要",
    description: "NFCタップで即座にプロフィールを表示（オンライン環境）",
    icon: {
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      svgPath:
        "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
  },
  {
    id: "paperless",
    title: "ペーパーレス",
    description: "SDGs目標12に貢献、完全ペーパーレスで環境に配慮",
    icon: {
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      svgPath:
        "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
  },
];

export const benefits: Benefit[] = [
  {
    id: "cost-reduction",
    title: "コスト削減",
    metric: "年間¥5,000節約",
    description: "従来¥11,000→TapForge¥6,000（早期アクセス価格）",
    metricColor: "text-green-600",
    icon: {
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      svgPath:
        "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
    },
  },
  {
    id: "time-efficiency",
    title: "効率化",
    metric: "5分",
    description: "名刺整理が50枚一括デジタル化で完了",
    metricColor: "text-blue-600",
    icon: {
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  },
  {
    id: "business-growth",
    title: "ビジネス拡大",
    metric: "40%",
    description: "フォロー率が15%から向上",
    metricColor: "text-purple-600",
    icon: {
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      svgPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },
  },
  {
    id: "environmental",
    title: "環境配慮",
    metric: "300枚",
    description: "年間の紙削減でSDGsに貢献",
    metricColor: "text-orange-600",
    icon: {
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      svgPath:
        "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    },
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "early-initial",
    title: "【早期アクセス】初期費用",
    price: "¥0",
    description: "初期費用無料",
    priceColor: "text-red-600",
  },
  {
    id: "early-monthly",
    title: "【早期アクセス】月額料金",
    price: "¥500/アカウント",
    description: "初月NFCカード1枚含む・100名限定",
    priceColor: "text-red-600",
  },
  {
    id: "additional",
    title: "追加カード",
    price: "¥500",
    description: "2枚目以降",
    priceColor: "text-green-600",
  },
];

export const regularPricingPlans: PricingPlan[] = [
  {
    id: "regular-initial",
    title: "通常料金 初期費用",
    price: "¥0",
    description: "初期費用無料",
    priceColor: "text-blue-600",
  },
  {
    id: "regular-monthly",
    title: "通常料金 月額",
    price: "¥700~/アカウント",
    description: "段階的割引制（¥700→¥600→¥500）",
    priceColor: "text-blue-600",
  },
  {
    id: "regular-additional",
    title: "追加カード",
    price: "¥600",
    description: "2枚目以降",
    priceColor: "text-green-600",
  },
];
