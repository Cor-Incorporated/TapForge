// Icon and styling configuration for features
export const featureIcons = {
  "aiScan": {
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    svgPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  "multilingual": {
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    svgPath:
      "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
  },
  "noApp": {
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    svgPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  "paperless": {
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    svgPath:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
} as const;

// Icon and styling configuration for benefits
export const benefitIcons = {
  "costReduction": {
    metricColor: "text-green-600",
    metricGradient: "from-green-600 to-green-500",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    svgPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
  },
  "timeEfficiency": {
    metricColor: "text-blue-600",
    metricGradient: "from-blue-600 to-blue-500",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  "businessGrowth": {
    metricColor: "text-purple-600",
    metricGradient: "from-purple-600 to-purple-500",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    svgPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  "environmental": {
    metricColor: "text-orange-600",
    metricGradient: "from-orange-600 to-orange-500",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    svgPath:
      "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
} as const;

// Pricing color configuration
export const pricingColors = {
  beta: {
    initial: "text-blue-600",
    monthly: "text-blue-600",
    additional: "text-green-600",
  },
  regular: {
    initial: "text-blue-600",
    monthly: "text-blue-600",
    additional: "text-green-600",
  },
} as const;
