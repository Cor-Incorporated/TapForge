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

export const translations = {
  ja: {
    // Navigation
    nav: {
      home: "ホーム",
      features: "特徴",
      pricing: "料金",
      testimonials: "レビュー",
      faq: "FAQ",
      contact: "お問合せ",
    },
    // Hero Section
    hero: {
      title: "タップで世界と繋がる。",
      subtitle: "AI駆動の次世代名刺",
      description: "であなたのビジネスを加速",
      subDescription:
        "アプリ不要、月額無料。NFCタップ一つで多言語プロフィールを共有。\nフリーランサーの海外案件獲得を支援します。",
      cta: "無料トライアル申し込み",
      limited: "50名限定!",
      features: {
        noApp: "アプリ不要",
        free: "月額無料",
        multilingual: "4言語対応",
      },
    },
    // Problems & Solutions
    problems: {
      title: "名刺整理、面倒ですよね？",
      subtitle: "TapForgeなら5分で解決！",
      problems: {
        title: "フリーランサーの悩み",
        cost: {
          title: "紙の名刺にかかるコスト",
          description: "年間500枚で約5,000円の印刷費",
        },
        organization: {
          title: "整理の手間",
          description: "50枚の名刺整理に30分以上",
        },
        language: {
          title: "海外クライアントとの言語の壁",
          description: "英語プロフィール作成に時間がかかる",
        },
        followup: {
          title: "フォローアップ率の低さ",
          description: "名刺交換後の連絡率は15%程度",
        },
      },
      solutions: {
        title: "TapForgeの解決策",
        cost: {
          title: "コストゼロ",
          description: "初期3,000円のみ、月額無料",
        },
        time: {
          title: "5分で完了",
          description: "AI名刺撮影でVCard変換",
        },
        language: {
          title: "4言語対応",
          description: "日英中西で国際ビジネス支援",
        },
        followup: {
          title: "フォロー率40%",
          description: "AIと多言語効果で向上",
        },
      },
    },
    // CTA Section
    cta: {
      title: "今すぐ始めませんか？",
      description: "50名限定の無料トライアルで、TapForgeの力を体験してください",
      trialButton: "無料トライアル申し込み",
      contactButton: "お問い合わせ（共創パートナー向け）",
      tapNow: "今すぐタップ!",
      profileDisplay: "プロフィール表示",
      features: {
        noApp: "アプリ不要",
        free: "月額無料",
        multilingual: "4言語対応",
        aiScanning: "AI名刺撮影",
      },
    },
    // Trial Form
    trialForm: {
      title: "無料トライアル申し込み",
      description: "あなたの名刺を1枚無料で作成します。",
      subDescription: "デザイン変更無制限、AI名刺撮影・VCard変換利用可",
      contactFormTitle: "お問い合わせフォーム",
      contactFormDescription:
        "無料トライアルのお申し込みは、下記のボタンからお問い合わせください。",
      contactFormButton: "お問い合わせフォームへ",
      termsText: "申し込みにより、",
      termsLink: "利用規約",
      andText: "および",
      privacyLink: "プライバシーポリシー",
      agreementText: "に同意したものとみなされます。",
    },
    // Cost Comparison
    costComparison: {
      title: "コスト比較",
      traditional: {
        title: "従来の紙名刺",
        period: "年間500枚",
        printingCost: "印刷費: ¥5,000",
        orgTime: "整理時間: 30分",
        envImpact: "環境負荷: 高",
      },
      tapforge: {
        title: "TapForge",
        period: "初期費用のみ",
        monthlyCost: "月額料金: ¥0",
        orgTime: "整理時間: 5分",
        envImpact: "環境負荷: ゼロ",
      },
      targetAudience: "海外案件を増やしたいフリーランサーに最適",
    },
    // Features Section
    features: {
      title: "TapForgeの特徴",
      subtitle: "最新技術で名刺交換を革新",
      items: {
        aiScan: {
          title: "OCR名刺読み取り機能付きNFC名刺",
          description:
            "通常別アプリで月額500円のOCR機能を無料で統合。紙の名刺をAIでデータ化（精度95%）し、VCardとしてスマートフォンに直接保存",
        },
        multilingual: {
          title: "多言語対応",
          description:
            "日本語、英語、中国語（簡体字）、スペイン語の4言語に自動で切り替わり",
        },
        noApp: {
          title: "アプリ不要",
          description: "NFCタップで即座にプロフィールを表示（オンライン環境）",
        },
        paperless: {
          title: "ペーパーレス",
          description: "SDGs目標12に貢献、完全ペーパーレスで環境に配慮",
        },
      },
      pricing: {
        title: "料金体系（税込）",
        plans: {
          initial: {
            title: "初期費用",
            price: "¥3,000",
            description: "1枚目",
          },
          additional: {
            title: "追加カード",
            price: "¥600",
            description: "2枚目以降",
          },
          monthly: {
            title: "月額料金",
            price: "¥0",
            description: "完全無料",
          },
        },
        tagline:
          "OCR機能付きNFC名刺の業界最安値 - 通常年間11,000円の機能を3,000円で提供",
      },
      demo: {
        title: "デモ動画",
        description: "AI名刺撮影デモ動画",
        note: "（YouTubeリンク予定）",
      },
    },
    // Benefits Section
    benefits: {
      title: "導入効果",
      subtitle: "フリーランサーのビジネスを加速させる具体的な効果",
      items: {
        costReduction: {
          title: "コスト削減",
          metric: "¥8,000",
          description:
            "従来の紙名刺5,000円+OCRアプリ6,000円→TapForge3,000円で実現",
        },
        timeEfficiency: {
          title: "効率化",
          metric: "5分",
          description: "名刺整理が50枚一括デジタル化で完了",
        },
        businessGrowth: {
          title: "ビジネス拡大",
          metric: "40%",
          description: "フォロー率が15%から向上",
        },
        environmental: {
          title: "環境配慮",
          metric: "500枚",
          description: "年間の紙削減でSDGsに貢献",
        },
      },
      comparison: {
        title: "詳細比較",
        headers: {
          item: "項目",
          traditional: "従来の紙名刺+OCRアプリ",
          tapforge: "TapForge",
        },
        rows: {
          annualCost: {
            item: "年間コスト",
            traditional: "¥11,000",
            tapforge: "¥3,000",
            tapforgeNote: "（初期費用のみ）",
          },
          organizationTime: {
            item: "整理時間",
            traditional: "30分/50枚",
            tapforge: "5分",
            tapforgeNote: "/50枚",
          },
          followUpRate: {
            item: "フォロー率",
            traditional: "15%",
            tapforge: "40%",
          },
          multilingual: {
            item: "多言語対応",
            traditional: "なし",
            tapforge: "4言語",
            tapforgeNote: "対応",
          },
          environmentalImpact: {
            item: "環境負荷",
            traditional: "高（紙使用）",
            tapforge: "ゼロ",
            tapforgeNote: "（ペーパーレス）",
          },
          updateEase: {
            item: "更新の容易さ",
            traditional: "再印刷が必要",
            tapforge: "即座",
            tapforgeNote: "更新可能",
          },
        },
      },
      target: {
        title: "海外案件を増やしたいフリーランサーに最適",
        description:
          "多言語対応とAI機能により、国際的なビジネス展開を強力にサポートします",
        tags: {
          global: "🌍 グローバル対応",
          ai: "🤖 AI活用",
          noApp: "📱 アプリ不要",
          costReduction: "💰 コスト削減",
        },
      },
    },
    // SDGs Section
    sdgs: {
      title: "SDGsへの貢献",
      subtitle: "環境とキャリアを両立",
      goals: {
        goal12: {
          title: "つくる責任 つかう責任",
          items: ["ペーパーレス化", "年間500枚の紙削減", "持続可能な消費"],
        },
        goal10: {
          title: "人や国の不平等をなくそう",
          items: ["4言語対応", "国際案件での不平等解消", "言語バリアの解消"],
        },
        goal17: {
          title: "パートナーシップで目標を達成しよう",
          items: [
            "名刺交換を通じた共創",
            "グローバルなつながり",
            "技術革新の共有",
          ],
        },
      },
      environmental: {
        title: "環境への配慮",
        metrics: {
          paperReduction: {
            value: "500枚",
            description: "年間削減される紙の枚数",
          },
          paperless: {
            value: "100%",
            description: "ペーパーレス化の実現",
          },
          updates: {
            value: "∞",
            description: "更新可能なデジタル名刺",
          },
        },
        summary: "持続可能なビジネス活動で、地球環境とビジネス成長を両立",
      },
    },
    // Partner Program Section
    partnerProgram: {
      title: "共創パートナー優待制度",
      subtitle: "長期的なパートナーシップに基づく特別価格",
      heading: "Cor.株式会社の他のサービスをご利用中のお客様へ",
      description:
        "Cor.株式会社の他のサービスを利用中の顧客には、長期的なパートナーシップに基づき特別価格で提供いたします。",
      contactNote: "詳細はお問い合わせください。",
      benefits: {
        specialPrice: {
          title: "特別価格での提供",
          description: "既存顧客様限定の優待価格",
        },
        prioritySupport: {
          title: "優先サポート",
          description: "専任担当者によるサポート",
        },
        customization: {
          title: "カスタマイズ対応",
          description: "お客様のニーズに合わせた調整",
        },
        longTermPartnership: {
          title: "長期パートナーシップ",
          description: "継続的な関係構築",
        },
      },
      ctaButton: "お問い合わせ",
      additionalInfo:
        "この制度は公式サイト（cor-jp.com）の内容に基づいています",
    },
    // Testimonials Section
    testimonials: {
      title: "お客様の声",
      subtitle: "実際にご利用いただいている方々からの声",
      items: [
        {
          name: "鈴木様",
          role: "Webデザイナー",
          message:
            "紙名刺の整理が5分で完了！英語プロフィールで海外案件が増えました。AI名刺撮影の精度も高く、VCard変換もスムーズです。フリーランサーにとって本当に便利なサービスです。",
          tags: ["効率化", "海外案件", "AI精度"],
        },
        {
          name: "田中様",
          role: "ITコンサルタント",
          message:
            "アプリ不要で簡単。クライアントに好印象を与えています。多言語対応で海外のクライアントとのコミュニケーションもスムーズになりました。コストパフォーマンスも抜群です。",
          tags: ["簡単操作", "好印象", "コスパ"],
        },
      ],
      note: "これらの声は仮想的なものです。トライアル参加者50名の中から5件の実際のレビューを選抜して差し替える予定です。",
    },
    // FAQ Section
    faq: {
      title: "よくある質問",
      subtitle: "お客様からよくいただくご質問にお答えします",
      items: [
        {
          question: "どのスマホでもNFCは使えますか？",
          answer:
            "95%のスマホで互換性があります。iPhone 7以降、Android NFC対応機種でご利用いただけます。\n具体的な対応機種については、各スマホメーカーの公式サイトをご確認ください。",
        },
        {
          question: "名刺読み取りの精度は？",
          answer:
            "AI名刺撮影・VCard変換の精度は95%です。継続的な改善により、さらなる精度向上を目指しています。\n認識に失敗した場合は、手動での修正も可能です。",
        },
        {
          question: "デザイン変更は自分でできるのですか？",
          answer:
            "管理画面から無制限でデザイン変更が可能です。\nライトカラー（白・ライトブルー・ベージュ）の3種類から選択でき、テキストや連絡先情報も簡単に更新できます。",
        },
        {
          question: "多言語対応の使い方を教えてください",
          answer:
            "4言語（日本語・英語・中国語・スペイン語）にご自身で切り替えることができます。\nプロフィール画面で表示言語を選択できるため、相手のスマートフォンの言語設定に関わらず、好きな言語でご利用いただけます。",
        },
        {
          question: "オフラインでも使えますか？",
          answer:
            "現在はオンライン環境でのご利用を推奨しています。\nオフライン機能は今後検討中です。アプリ不要のメリットを活かし、オンライン環境での安定したサービス提供を優先しています。",
        },
      ],
      additionalHelp: {
        title: "その他のご質問はお気軽にお問い合わせください",
        description: "専門スタッフが丁寧にお答えいたします",
        button: "お問い合わせ",
      },
    },
    // Footer Section
    footer: {
      description:
        "NFCデジタル名刺で世界と繋がる。AI駆動の次世代名刺であなたのビジネスを加速。",
      tagline: "未来を先取る、スマートな出会いをすべての人へ",
      quickLinks: {
        title: "クイックリンク",
        features: "特徴",
        pricing: "料金",
        testimonials: "お客様の声",
        faq: "FAQ",
      },
      contact: {
        title: "お問い合わせ",
        company: "Cor.株式会社",
        trial: "無料トライアル",
      },
      copyright: "© 2025 TapForge by Cor.株式会社. All rights reserved.",
      legal: {
        privacy: "プライバシーポリシー",
        terms: "利用規約",
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      testimonials: "Reviews",
      faq: "FAQ",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      title: "Connect with the world with a tap.",
      subtitle: "AI-powered next-generation business card",
      description: "to accelerate your business",
      subDescription:
        "No app required, free monthly. Share multilingual profiles with one NFC tap.\nSupporting freelancers in acquiring overseas projects.",
      cta: "Apply for Free Trial",
      limited: "Limited to 50!",
      features: {
        noApp: "No App Required",
        free: "Free Monthly",
        multilingual: "4 Languages",
      },
    },
    // Problems & Solutions
    problems: {
      title: "Business card organization is troublesome, right?",
      subtitle: "TapForge solves it in 5 minutes!",
      problems: {
        title: "Freelancer Problems",
        cost: {
          title: "Cost of paper business cards",
          description: "About 5,000 yen for 500 cards per year",
        },
        organization: {
          title: "Organization hassle",
          description: "30+ minutes to organize 50 business cards",
        },
        language: {
          title: "Language barriers with overseas clients",
          description: "Time-consuming to create English profiles",
        },
        followup: {
          title: "Low follow-up rate",
          description: "Only 15% contact rate after business card exchange",
        },
      },
      solutions: {
        title: "TapForge Solutions",
        cost: {
          title: "Zero Cost",
          description: "Only initial 3,000 yen, free monthly",
        },
        time: {
          title: "Complete in 5 minutes",
          description: "AI business card shooting to VCard conversion",
        },
        language: {
          title: "4 Language Support",
          description:
            "Japanese, English, Chinese, Spanish for international business",
        },
        followup: {
          title: "40% Follow-up Rate",
          description: "Improved with AI and multilingual effects",
        },
      },
    },
    // CTA Section
    cta: {
      title: "Ready to get started?",
      description:
        "Experience the power of TapForge with our limited free trial for 50 people",
      trialButton: "Apply for Free Trial",
      contactButton: "Contact (For Co-creation Partners)",
      tapNow: "Tap Now!",
      profileDisplay: "Profile Display",
      features: {
        noApp: "No App Required",
        free: "Free Monthly",
        multilingual: "4 Languages",
        aiScanning: "AI Business Card Scanning",
      },
    },
    // Trial Form
    trialForm: {
      title: "Apply for Free Trial",
      description: "We'll create one business card for you for free.",
      subDescription:
        "Unlimited design changes, AI business card scanning & VCard conversion available",
      contactFormTitle: "Contact Form",
      contactFormDescription:
        "To apply for the free trial, please contact us through the button below.",
      contactFormButton: "Go to Contact Form",
      termsText: "By applying, you agree to our ",
      termsLink: "Terms of Service",
      andText: " and ",
      privacyLink: "Privacy Policy",
      agreementText: ".",
    },
    // Cost Comparison
    costComparison: {
      title: "Cost Comparison",
      traditional: {
        title: "Traditional Paper Business Cards",
        period: "500 cards per year",
        printingCost: "Printing cost: ¥5,000",
        orgTime: "Organization time: 30 minutes",
        envImpact: "Environmental impact: High",
      },
      tapforge: {
        title: "TapForge",
        period: "Initial cost only",
        monthlyCost: "Monthly fee: ¥0",
        orgTime: "Organization time: 5 minutes",
        envImpact: "Environmental impact: Zero",
      },
      targetAudience:
        "Perfect for freelancers who want to increase overseas projects",
    },
    // Features Section
    features: {
      title: "TapForge Features",
      subtitle:
        "Revolutionizing business card exchange with cutting-edge technology",
      items: {
        aiScan: {
          title: "AI Business Card Scanning & VCard Conversion",
          description:
            "Digitize paper business cards with AI (95% accuracy) and save as VCard to smartphones",
        },
        multilingual: {
          title: "Multilingual Support",
          description:
            "Automatically switches between 4 languages: Japanese, English, Chinese (Simplified), Spanish",
        },
        noApp: {
          title: "No App Required",
          description:
            "Instantly display profiles with NFC tap (online environment)",
        },
        paperless: {
          title: "Paperless",
          description:
            "Contributes to SDGs Goal 12, completely paperless and environmentally conscious",
        },
      },
      pricing: {
        title: "Pricing (Tax Included)",
        plans: {
          initial: {
            title: "Initial Cost",
            price: "¥3,000",
            description: "First card",
          },
          additional: {
            title: "Additional Cards",
            price: "¥600",
            description: "2nd card onwards",
          },
          monthly: {
            title: "Monthly Fee",
            price: "¥0",
            description: "Completely free",
          },
        },
        tagline: "Democratizing technology at industry's lowest price",
      },
      demo: {
        title: "Demo Video",
        description: "AI Business Card Scanning Demo Video",
        note: "(YouTube link coming soon)",
      },
    },
    // Benefits Section
    benefits: {
      title: "Introduction Effects",
      subtitle: "Specific effects that accelerate freelancers' businesses",
      items: {
        costReduction: {
          title: "Cost Reduction",
          metric: "¥2,000",
          description: "Annual cost of 500 paper business cards becomes 0 yen",
        },
        timeEfficiency: {
          title: "Efficiency",
          metric: "5 min",
          description:
            "Business card organization of 50 cards completed with batch digitalization",
        },
        businessGrowth: {
          title: "Business Growth",
          metric: "40%",
          description: "Follow-up rate improved from 15%",
        },
        environmental: {
          title: "Environmental Consideration",
          metric: "500 cards",
          description: "Annual paper reduction contributes to SDGs",
        },
      },
      comparison: {
        title: "Detailed Comparison",
        headers: {
          item: "Item",
          traditional: "Traditional Paper Business Cards",
          tapforge: "TapForge",
        },
        rows: {
          annualCost: {
            item: "Annual Cost",
            traditional: "$70",
            tapforge: "$40",
            tapforgeNote: "(Initial cost only)",
          },
          organizationTime: {
            item: "Organization Time",
            traditional: "30 min/50 cards",
            tapforge: "5 min",
            tapforgeNote: "/50 cards",
          },
          followUpRate: {
            item: "Follow-up Rate",
            traditional: "15%",
            tapforge: "40%",
          },
          multilingual: {
            item: "Multilingual Support",
            traditional: "None",
            tapforge: "4 Languages",
            tapforgeNote: "Support",
          },
          environmentalImpact: {
            item: "Environmental Impact",
            traditional: "High (Paper use)",
            tapforge: "Zero",
            tapforgeNote: "(Paperless)",
          },
          updateEase: {
            item: "Update Ease",
            traditional: "Re-printing required",
            tapforge: "Instant",
            tapforgeNote: "Update possible",
          },
        },
      },
      target: {
        title: "Perfect for freelancers who want to increase overseas projects",
        description:
          "Supports international business expansion with multilingual support and AI features",
        tags: {
          global: "🌍 Global Support",
          ai: "🤖 AI Utilization",
          noApp: "📱 No App Required",
          costReduction: "💰 Cost Reduction",
        },
      },
    },
    // SDGs Section
    sdgs: {
      title: "SDGs Contribution",
      subtitle: "Balancing environment and career",
      goals: {
        goal12: {
          title: "Responsible Consumption and Production",
          items: [
            "Paperless",
            "500 sheets of paper reduced annually",
            "Sustainable consumption",
          ],
        },
        goal10: {
          title: "Reduced Inequalities",
          items: [
            "4-language support",
            "Elimination of inequality in international projects",
            "Elimination of language barriers",
          ],
        },
        goal17: {
          title: "Partnerships for the Goals",
          items: [
            "Co-creation through business card exchange",
            "Global connections",
            "Sharing technological innovation",
          ],
        },
      },
      environmental: {
        title: "Environmental Consideration",
        metrics: {
          paperReduction: {
            value: "500 sheets",
            description: "Annual paper reduction",
          },
          paperless: {
            value: "100%",
            description: "Paperless achievement",
          },
          updates: {
            value: "∞",
            description: "Updatable digital business cards",
          },
        },
        summary:
          "Sustainable business activities that balance environmental protection and business growth",
      },
    },
    // Partner Program Section
    partnerProgram: {
      title: "Co-creation Partner Program",
      subtitle: "Special pricing based on long-term partnership",
      heading: "To customers using other services of Cor. Co., Ltd.",
      description:
        "For customers using other services of Cor. Co., Ltd., we provide special pricing based on long-term partnership.",
      contactNote: "Please contact us for details.",
      benefits: {
        specialPrice: {
          title: "Special Pricing",
          description: "Exclusive preferential pricing for existing customers",
        },
        prioritySupport: {
          title: "Priority Support",
          description: "Support by dedicated staff",
        },
        customization: {
          title: "Customization Support",
          description: "Adjustments tailored to customer needs",
        },
        longTermPartnership: {
          title: "Long-term Partnership",
          description: "Continuous relationship building",
        },
      },
      ctaButton: "Contact Us",
      additionalInfo:
        "This program is based on the content of the official website (cor-jp.com)",
    },
    // Testimonials Section
    testimonials: {
      title: "Customer Testimonials",
      subtitle: "Voices from those who are actually using our service",
      items: [
        {
          name: "Mr. Suzuki",
          role: "Web Designer",
          message:
            "Paper business card organization completed in 5 minutes! English profiles have increased overseas projects. AI business card shooting accuracy is high, and VCard conversion is smooth. It's really a convenient service for freelancers.",
          tags: ["Efficiency", "Overseas Projects", "AI Accuracy"],
        },
        {
          name: "Mr. Tanaka",
          role: "IT Consultant",
          message:
            "No app required, simple. It makes a good impression on clients. Multilingual support has made communication with overseas clients smooth. The cost performance is also excellent.",
          tags: ["Easy Operation", "Good Impression", "Cost Performance"],
        },
      ],
      note: "These voices are hypothetical. We plan to select 5 actual reviews from 50 trial participants and replace them.",
    },
    // FAQ Section
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "We answer frequently asked questions from our customers",
      items: [
        {
          question: "Can NFC be used on any smartphone?",
          answer:
            "Compatible with 95% of smartphones. Available on iPhone 7 and later, and Android NFC-compatible models.\nFor specific compatible models, please check the official website of each smartphone manufacturer.",
        },
        {
          question: "What is the accuracy of business card reading?",
          answer:
            "AI business card shooting and VCard conversion accuracy is 95%. We aim for further accuracy improvement through continuous improvement.\nIf recognition fails, manual correction is also possible.",
        },
        {
          question: "Can I change the design myself?",
          answer:
            "Unlimited design changes are possible from the management screen.\nYou can choose from 3 types of light colors (white, light blue, beige), and text and contact information can be easily updated.",
        },
        {
          question: "Please tell me how to use multilingual support",
          answer:
            "You can switch to 4 languages (Japanese, English, Chinese, Spanish) yourself.\nYou can select the display language on the profile screen, so you can use it in your preferred language regardless of the other party's smartphone language settings.",
        },
        {
          question: "Can it be used offline?",
          answer:
            "Currently, we recommend using it in an online environment.\nOffline functionality is under consideration for the future. We prioritize stable service provision in an online environment, taking advantage of the no-app benefit.",
        },
      ],
      additionalHelp: {
        title: "Please feel free to contact us for other questions",
        description: "Our professional staff will answer you carefully",
        button: "Contact Us",
      },
    },
    // Footer Section
    footer: {
      description:
        "Connect with the world through NFC digital business cards. Accelerate your business with AI-powered next-generation business cards.",
      tagline: "Pioneering the future, smart encounters for everyone",
      quickLinks: {
        title: "Quick Links",
        features: "Features",
        pricing: "Pricing",
        testimonials: "Testimonials",
        faq: "FAQ",
      },
      contact: {
        title: "Contact",
        company: "Cor. Co., Ltd.",
        trial: "Free Trial",
      },
      copyright: "© 2025 TapForge by Cor. Co., Ltd. All rights reserved.",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    // Legal pages content
    legal: {
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: September 20, 2025",
        sections: [
          {
            title: "1. Introduction",
            content:
              'Cor. Co., Ltd. ("Company") considers the protection of user personal information an important responsibility and establishes this Privacy Policy ("Policy") for the TapForge service ("Service").',
          },
          {
            title: "2. Information We Collect",
            content:
              "We may collect the following information:\n\n【Automatically Collected Information】\n• IP address\n• Browser type and version\n• Device information\n• Access date and time\n• Referrer information\n\n【Information Provided by Users】\n• Name\n• Email address\n• Phone number\n• Company/Organization name\n• Job title/Position\n• Profile information\n• Social media account information",
          },
          {
            title: "3. Use of Information",
            content:
              "We use collected information for:\n• Service provision and operation\n• User support\n• Service improvement and feature development\n• Usage statistics analysis\n• Security maintenance and enhancement\n• Marketing and advertising (only with consent)\n• Legal compliance",
          },
          {
            title: "4. Information Sharing and Disclosure",
            content:
              "We do not sell, rent, or share personal information with third parties except:\n• With user consent\n• To service providers necessary for operations\n• When legally required\n• To protect user or public safety\n• In case of business succession",
          },
          {
            title: "5. Data Storage and Security",
            content:
              "We implement industry-standard security measures to prevent unauthorized access, loss, destruction, alteration, or leakage of personal information. Data is encrypted and stored on secure servers.",
          },
          {
            title: "6. Use of Cookies",
            content:
              "The Service uses cookies to improve user experience for:\n• Maintaining login status\n• Saving language preferences\n• Usage analysis\n• Advertising effectiveness measurement\n\nYou can disable cookies through browser settings, though some features may become unavailable.",
          },
          {
            title: "7. Third-Party Services",
            content:
              "The Service may use third-party services like Google Analytics. These services are subject to their own privacy policies.",
          },
          {
            title: "8. Children's Privacy",
            content:
              "The Service is not intended for children under 13. Children under 13 should not provide personal information without parental consent.",
          },
          {
            title: "9. User Rights",
            content:
              "Users have the following rights regarding their personal information:\n• Right of access\n• Right to rectification\n• Right to erasure\n• Right to restrict processing\n• Right to data portability\n• Right to object\n\nTo exercise these rights, please contact us.",
          },
          {
            title: "10. Data Retention",
            content:
              "Personal information is retained for the period necessary for service provision or as legally required. Unnecessary information is appropriately deleted or anonymized.",
          },
          {
            title: "11. International Data Transfer",
            content:
              "Personal information may be processed on servers outside Japan. Such information will be protected according to this Policy.",
          },
          {
            title: "12. Policy Changes",
            content:
              "This Policy may be updated as necessary. Significant changes will be notified through the Service.",
          },
          {
            title: "13. Contact Us",
            content:
              "For inquiries about this Policy, please contact:\n\nCor. Co., Ltd.\nPrivacy Department\nWebsite: https://cor-jp.com/\n\nWe have appointed a personal information protection manager for appropriate management.",
          },
        ],
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last Updated: September 20, 2025",
        sections: [
          {
            title: "1. Acceptance of Terms",
            content:
              'By using the TapForge service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.',
          },
          {
            title: "2. Description of Service",
            content:
              "TapForge is a digital business card service utilizing NFC (Near Field Communication) technology. Users can create, share, and manage digital profiles through our Service.",
          },
          {
            title: "3. Account Registration",
            content:
              "Some features require account registration. You must provide accurate and complete information and keep it updated. You are responsible for maintaining the security of your account.",
          },
          {
            title: "4. Fees",
            content:
              "Basic services are free. Additional features may incur fees. We will notify you in advance of any changes to our pricing structure.",
          },
          {
            title: "5. Prohibited Activities",
            content:
              "The following activities are prohibited:\n• Violating any applicable laws\n• Infringing on the rights of other users or third parties\n• Registering false information\n• Interfering with Service operations\n• Unauthorized access or hacking\n• Unauthorized commercial use",
          },
          {
            title: "6. Intellectual Property",
            content:
              "All intellectual property rights related to the Service belong to Cor. Co., Ltd. or its licensors. While you retain copyright to your content, you grant us a license to use it as necessary for Service provision.",
          },
          {
            title: "7. Privacy",
            content:
              "Personal information is handled according to our separate Privacy Policy.",
          },
          {
            title: "8. Disclaimer",
            content:
              'The Service is provided "as is" without warranties. Cor. Co., Ltd. is not liable for damages arising from Service use, except in cases of willful misconduct or gross negligence.',
          },
          {
            title: "9. Service Modification/Termination",
            content:
              "Cor. Co., Ltd. may modify or terminate the Service with prior notice.",
          },
          {
            title: "10. Changes to Terms",
            content:
              "These Terms may be updated as needed. Updated Terms become effective upon publication on the Service.",
          },
          {
            title: "11. Governing Law",
            content:
              "These Terms are governed by Japanese law. Disputes shall be subject to the exclusive jurisdiction of the Tokyo District Court.",
          },
          {
            title: "12. Contact",
            content:
              "For inquiries regarding these Terms, please contact:\nCor. Co., Ltd.\nWebsite: https://cor-jp.com/",
          },
        ],
      },
    },
  },
  zh: {
    // Navigation
    nav: {
      home: "首页",
      features: "特点",
      pricing: "价格",
      testimonials: "评价",
      faq: "FAQ",
      contact: "联系",
    },
    // Hero Section
    hero: {
      title: "轻触连接世界。",
      subtitle: "AI驱动的下一代名片",
      description: "加速您的业务",
      subDescription:
        "无需应用，月费免费。一次NFC轻触即可分享多语言个人资料。\n支持自由职业者获得海外项目。",
      cta: "申请免费试用",
      limited: "限50名！",
      features: {
        noApp: "无需应用",
        free: "月费免费",
        multilingual: "4种语言",
      },
    },
    // Problems & Solutions
    problems: {
      title: "名片整理很麻烦，对吧？",
      subtitle: "TapForge 5分钟解决！",
      problems: {
        title: "自由职业者的烦恼",
        cost: {
          title: "纸质名片的成本",
          description: "每年500张约5,000日元的印刷费",
        },
        organization: {
          title: "整理的麻烦",
          description: "整理50张名片需要30分钟以上",
        },
        language: {
          title: "与海外客户的语言障碍",
          description: "制作英文个人资料很耗时",
        },
        followup: {
          title: "跟进率低",
          description: "名片交换后的联系率只有15%左右",
        },
      },
      solutions: {
        title: "TapForge解决方案",
        cost: {
          title: "零成本",
          description: "仅初始3,000日元，月费免费",
        },
        time: {
          title: "5分钟完成",
          description: "AI名片拍摄到VCard转换",
        },
        language: {
          title: "4语言支持",
          description: "日英中西支持国际业务",
        },
        followup: {
          title: "40%跟进率",
          description: "通过AI和多语言效果提升",
        },
      },
    },
    // CTA Section
    cta: {
      title: "准备开始吗？",
      description:
        "体验TapForge的强大功能，限50人免费试用",
      trialButton: "申请免费试用",
      contactButton: "联系（共创合作伙伴）",
      tapNow: "立即点击！",
      profileDisplay: "个人资料显示",
      features: {
        noApp: "无需应用",
        free: "月费免费",
        multilingual: "4种语言",
        aiScanning: "AI名片扫描",
      },
    },
    // Trial Form
    trialForm: {
      title: "申请免费试用",
      description: "我们将为您免费制作一张名片。",
      subDescription:
        "无限设计更改，AI名片扫描和VCard转换可用",
      contactFormTitle: "联系表单",
      contactFormDescription:
        "要申请免费试用，请通过下面的按钮与我们联系。",
      contactFormButton: "前往联系表单",
      termsText: "申请即表示您同意我们的",
      termsLink: "服务条款",
      andText: "和",
      privacyLink: "隐私政策",
      agreementText: "。",
    },
    // Cost Comparison
    costComparison: {
      title: "成本比较",
      traditional: {
        title: "传统纸质名片",
        period: "每年500张",
        printingCost: "印刷费: ¥5,000",
        orgTime: "整理时间: 30分钟",
        envImpact: "环境影响: 高",
      },
      tapforge: {
        title: "TapForge",
        period: "仅初始费用",
        monthlyCost: "月费: ¥0",
        orgTime: "整理时间: 5分钟",
        envImpact: "环境影响: 零",
      },
      targetAudience: "适合想要增加海外项目的自由职业者",
    },
    // Features Section
    features: {
      title: "TapForge特点",
      subtitle: "用最新技术革新名片交换",
      items: {
        aiScan: {
          title: "AI名片扫描·VCard转换",
          description: "用AI将纸质名片数字化（精度95%），保存为VCard到智能手机",
        },
        multilingual: {
          title: "多语言支持",
          description: "自动切换4种语言：日语、英语、中文（简体）、西班牙语",
        },
        noApp: {
          title: "无需应用",
          description: "NFC轻触即可立即显示个人资料（在线环境）",
        },
        paperless: {
          title: "无纸化",
          description: "为SDGs目标12做贡献，完全无纸化，环保意识",
        },
      },
      pricing: {
        title: "价格体系（含税）",
        plans: {
          initial: {
            title: "初始费用",
            price: "¥3,000",
            description: "第1张",
          },
          additional: {
            title: "追加卡片",
            price: "¥600",
            description: "第2张起",
          },
          monthly: {
            title: "月费",
            price: "¥0",
            description: "完全免费",
          },
        },
        tagline: "以行业最低价格普及技术",
      },
      demo: {
        title: "演示视频",
        description: "AI名片扫描演示视频",
        note: "（YouTube链接即将推出）",
      },
    },
    // Benefits Section
    benefits: {
      title: "导入效果",
      subtitle: "加速自由职业者业务的具体效果",
      items: {
        costReduction: {
          title: "成本削减",
          metric: "¥2,000",
          description: "每年500张纸质名片成本变为0日元",
        },
        timeEfficiency: {
          title: "效率化",
          metric: "5分钟",
          description: "50张名片整理通过批量数字化完成",
        },
        businessGrowth: {
          title: "业务扩展",
          metric: "40%",
          description: "跟进率从15%提升",
        },
        environmental: {
          title: "环保考虑",
          metric: "500张",
          description: "年度纸张减少为SDGs做贡献",
        },
      },
      comparison: {
        title: "详细比较",
        headers: {
          item: "项目",
          traditional: "传统纸质名片",
          tapforge: "TapForge",
        },
        rows: {
          annualCost: {
            item: "年度成本",
            traditional: "¥350",
            tapforge: "¥200",
            tapforgeNote: "（仅初始费用）",
          },
          organizationTime: {
            item: "整理时间",
            traditional: "30分钟/50张",
            tapforge: "5分钟",
            tapforgeNote: "/50张",
          },
          followUpRate: {
            item: "跟进率",
            traditional: "15%",
            tapforge: "40%",
          },
          multilingual: {
            item: "多语言支持",
            traditional: "无",
            tapforge: "4种语言",
            tapforgeNote: "支持",
          },
          environmentalImpact: {
            item: "环境影响",
            traditional: "高（使用纸张）",
            tapforge: "零",
            tapforgeNote: "（无纸化）",
          },
          updateEase: {
            item: "更新便利性",
            traditional: "需要重新印刷",
            tapforge: "即时",
            tapforgeNote: "可更新",
          },
        },
      },
      target: {
        title: "适合想要增加海外项目的自由职业者",
        description: "通过多语言支持和AI功能，强力支持国际业务扩展",
        tags: {
          global: "🌍 全球支持",
          ai: "🤖 AI利用",
          noApp: "📱 无需应用",
          costReduction: "💰 成本削减",
        },
      },
    },
    // SDGs Section
    sdgs: {
      title: "SDGs贡献",
      subtitle: "环境与职业并重",
      goals: {
        goal12: {
          title: "负责任消费和生产",
          items: ["无纸化", "每年减少500张纸张", "可持续消费"],
        },
        goal10: {
          title: "减少不平等",
          items: ["4语言支持", "消除国际项目中的不平等", "消除语言障碍"],
        },
        goal17: {
          title: "促进目标实现的伙伴关系",
          items: ["通过名片交换共创", "全球连接", "分享技术创新"],
        },
      },
      environmental: {
        title: "环境考虑",
        metrics: {
          paperReduction: {
            value: "500张",
            description: "年度纸张减少",
          },
          paperless: {
            value: "100%",
            description: "无纸化实现",
          },
          updates: {
            value: "∞",
            description: "可更新的数字名片",
          },
        },
        summary: "可持续商业活动，平衡环境保护和业务增长",
      },
    },
    // Partner Program Section
    partnerProgram: {
      title: "共创合作伙伴优待制度",
      subtitle: "基于长期合作伙伴关系的特别价格",
      heading: "致使用Cor.株式会社其他服务的客户",
      description:
        "对于使用Cor.株式会社其他服务的客户，我们将基于长期合作伙伴关系提供特别价格。",
      contactNote: "详情请联系我们。",
      benefits: {
        specialPrice: {
          title: "特别价格提供",
          description: "现有客户专享优待价格",
        },
        prioritySupport: {
          title: "优先支持",
          description: "专职人员支持",
        },
        customization: {
          title: "定制化支持",
          description: "根据客户需求调整",
        },
        longTermPartnership: {
          title: "长期合作伙伴关系",
          description: "持续的关系建设",
        },
      },
      ctaButton: "联系我们",
      additionalInfo: "此制度基于官方网站（cor-jp.com）的内容",
    },
    // Testimonials Section
    testimonials: {
      title: "客户评价",
      subtitle: "来自实际使用我们服务的用户的声音",
      items: [
        {
          name: "铃木先生",
          role: "网页设计师",
          message:
            "纸质名片整理5分钟完成！英文个人资料增加了海外项目。AI名片拍摄精度高，VCard转换也很流畅。对于自由职业者来说真的是很方便的服务。",
          tags: ["效率化", "海外项目", "AI精度"],
        },
        {
          name: "田中先生",
          role: "IT顾问",
          message:
            "无需应用，简单易用。给客户留下了好印象。多语言支持使与海外客户的沟通变得顺畅。性价比也很出色。",
          tags: ["简单操作", "好印象", "性价比"],
        },
      ],
      note: "这些评价是假设的。我们计划从50名试用参与者中选择5个实际评价进行替换。",
    },
    // FAQ Section
    faq: {
      title: "常见问题",
      subtitle: "我们回答客户经常提出的问题",
      items: [
        {
          question: "任何智能手机都可以使用NFC吗？",
          answer:
            "与95%的智能手机兼容。可在iPhone 7及以后版本、Android NFC兼容机型上使用。\n关于具体兼容机型，请查看各智能手机制造商的官方网站。",
        },
        {
          question: "名片读取的精度如何？",
          answer:
            "AI名片拍摄和VCard转换精度为95%。通过持续改进，我们致力于进一步提高精度。\n如果识别失败，也可以手动修正。",
        },
        {
          question: "可以自己更改设计吗？",
          answer:
            "可以从管理画面无限制地更改设计。\n可以选择3种浅色（白色、浅蓝色、米色），文本和联系信息也可以轻松更新。",
        },
        {
          question: "请告诉我多语言支持的使用方法",
          answer:
            "可以自己切换到4种语言（日语、英语、中文、西班牙语）。\n可以在个人资料画面选择显示语言，因此无论对方的智能手机语言设置如何，都可以用自己喜欢的语言使用。",
        },
        {
          question: "离线时也可以使用吗？",
          answer:
            "目前建议在在线环境下使用。\n离线功能正在考虑中。我们优先在在线环境下提供稳定服务，发挥无需应用的优势。",
        },
      ],
      additionalHelp: {
        title: "如有其他问题请随时联系我们",
        description: "专业工作人员会仔细回答您的问题",
        button: "联系我们",
      },
    },
    // Footer Section
    footer: {
      description: "通过NFC数字名片连接世界。AI驱动的下一代名片加速您的业务。",
      tagline: "开创未来，为每个人提供智能相遇",
      quickLinks: {
        title: "快速链接",
        features: "特点",
        pricing: "价格",
        testimonials: "客户评价",
        faq: "常见问题",
      },
      contact: {
        title: "联系我们",
        company: "Cor.株式会社",
        trial: "免费试用",
      },
      copyright: "© 2025 TapForge by Cor.株式会社. 版权所有。",
      legal: {
        privacy: "隐私政策",
        terms: "服务条款",
      },
    },
  },
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      features: "Características",
      pricing: "Precios",
      testimonials: "Testimonios",
      faq: "FAQ",
      contact: "Contacto",
    },
    // Hero Section
    hero: {
      title: "Conecta con el mundo con un toque.",
      subtitle: "Tarjeta de presentación de próxima generación",
      description: "impulsada por IA para acelerar tu negocio",
      subDescription:
        "Sin aplicación requerida, mensualidad gratuita. Comparte perfiles multilingües con un toque NFC.\nApoyando a freelancers en la adquisición de proyectos en el extranjero.",
      cta: "Solicitar Prueba Gratuita",
      limited: "¡Limitado a 50!",
      features: {
        noApp: "Sin App Requerida",
        free: "Mensualidad Gratuita",
        multilingual: "4 Idiomas",
      },
    },
    // Problems & Solutions
    problems: {
      title: "Organizar tarjetas de presentación es molesto, ¿verdad?",
      subtitle: "¡TapForge lo resuelve en 5 minutos!",
      problems: {
        title: "Problemas de Freelancers",
        cost: {
          title: "Costo de tarjetas de presentación de papel",
          description: "Aproximadamente 5,000 yenes por 500 tarjetas al año",
        },
        organization: {
          title: "Molestia de organización",
          description: "30+ minutos para organizar 50 tarjetas de presentación",
        },
        language: {
          title: "Barreras de idioma con clientes extranjeros",
          description: "Consume tiempo crear perfiles en inglés",
        },
        followup: {
          title: "Baja tasa de seguimiento",
          description:
            "Solo 15% de tasa de contacto después del intercambio de tarjetas",
        },
      },
      solutions: {
        title: "Soluciones TapForge",
        cost: {
          title: "Costo Cero",
          description: "Solo 3,000 yenes iniciales, mensualidad gratuita",
        },
        time: {
          title: "Completar en 5 minutos",
          description:
            "Fotografía de tarjeta de presentación con IA a conversión VCard",
        },
        language: {
          title: "Soporte de 4 Idiomas",
          description:
            "Japonés, Inglés, Chino, Español para negocios internacionales",
        },
        followup: {
          title: "40% Tasa de Seguimiento",
          description: "Mejorado con efectos de IA y multilingües",
        },
      },
    },
    // CTA Section
    cta: {
      title: "¿Listo para comenzar?",
      description:
        "Experimenta el poder de TapForge con nuestra prueba gratuita limitada para 50 personas",
      trialButton: "Solicitar Prueba Gratuita",
      contactButton: "Contacto (Para Socios de Co-creación)",
      tapNow: "¡Toca Ahora!",
      profileDisplay: "Mostrar Perfil",
      features: {
        noApp: "Sin App Requerida",
        free: "Mensualidad Gratuita",
        multilingual: "4 Idiomas",
        aiScanning: "Escaneo de Tarjeta con IA",
      },
    },
    // Trial Form
    trialForm: {
      title: "Solicitar Prueba Gratuita",
      description: "Crearemos una tarjeta de presentación gratis para ti.",
      subDescription:
        "Cambios de diseño ilimitados, escaneo de tarjeta con IA y conversión VCard disponibles",
      contactFormTitle: "Formulario de Contacto",
      contactFormDescription:
        "Para solicitar la prueba gratuita, contáctanos a través del botón de abajo.",
      contactFormButton: "Ir al Formulario de Contacto",
      termsText: "Al solicitar, aceptas nuestros ",
      termsLink: "Términos de Servicio",
      andText: " y ",
      privacyLink: "Política de Privacidad",
      agreementText: ".",
    },
    // Cost Comparison
    costComparison: {
      title: "Comparación de Costos",
      traditional: {
        title: "Tarjetas de Presentación de Papel Tradicionales",
        period: "500 tarjetas por año",
        printingCost: "Costo de impresión: ¥5,000",
        orgTime: "Tiempo de organización: 30 minutos",
        envImpact: "Impacto ambiental: Alto",
      },
      tapforge: {
        title: "TapForge",
        period: "Solo costo inicial",
        monthlyCost: "Tarifa mensual: ¥0",
        orgTime: "Tiempo de organización: 5 minutos",
        envImpact: "Impacto ambiental: Cero",
      },
      targetAudience:
        "Perfecto para freelancers que quieren aumentar proyectos en el extranjero",
    },
    // Features Section
    features: {
      title: "Características de TapForge",
      subtitle:
        "Revolucionando el intercambio de tarjetas de presentación con tecnología de vanguardia",
      items: {
        aiScan: {
          title: "Escaneo de Tarjeta con IA y Conversión VCard",
          description:
            "Digitaliza tarjetas de presentación de papel con IA (95% precisión) y guarda como VCard en smartphones",
        },
        multilingual: {
          title: "Soporte Multilingüe",
          description:
            "Cambia automáticamente entre 4 idiomas: Japonés, Inglés, Chino (Simplificado), Español",
        },
        noApp: {
          title: "Sin App Requerida",
          description:
            "Muestra perfiles instantáneamente con toque NFC (entorno en línea)",
        },
        paperless: {
          title: "Sin Papel",
          description:
            "Contribuye al Objetivo 12 de los ODS, completamente sin papel y consciente del medio ambiente",
        },
      },
      pricing: {
        title: "Precios (Impuestos Incluidos)",
        plans: {
          initial: {
            title: "Costo Inicial",
            price: "¥3,000",
            description: "Primera tarjeta",
          },
          additional: {
            title: "Tarjetas Adicionales",
            price: "¥600",
            description: "2da tarjeta en adelante",
          },
          monthly: {
            title: "Tarifa Mensual",
            price: "¥0",
            description: "Completamente gratis",
          },
        },
        tagline:
          "Democratizando la tecnología al precio más bajo de la industria",
      },
      demo: {
        title: "Video Demo",
        description: "Video Demo de Escaneo de Tarjeta con IA",
        note: "(Enlace de YouTube próximamente)",
      },
    },
    // Benefits Section
    benefits: {
      title: "Efectos de Introducción",
      subtitle: "Efectos específicos que aceleran los negocios de freelancers",
      items: {
        costReduction: {
          title: "Reducción de Costos",
          metric: "¥2,000",
          description:
            "El costo anual de 500 tarjetas de presentación de papel se convierte en 0 yenes",
        },
        timeEfficiency: {
          title: "Eficiencia",
          metric: "5 min",
          description:
            "Organización de 50 tarjetas de presentación completada con digitalización por lotes",
        },
        businessGrowth: {
          title: "Crecimiento del Negocio",
          metric: "40%",
          description: "Tasa de seguimiento mejorada del 15%",
        },
        environmental: {
          title: "Consideración Ambiental",
          metric: "500 tarjetas",
          description: "Reducción anual de papel contribuye a los ODS",
        },
      },
      comparison: {
        title: "Comparación Detallada",
        headers: {
          item: "Elemento",
          traditional: "Tarjetas de Presentación de Papel Tradicionales",
          tapforge: "TapForge",
        },
        rows: {
          annualCost: {
            item: "Costo Anual",
            traditional: "€60",
            tapforge: "€35",
            tapforgeNote: "(Solo costo inicial)",
          },
          organizationTime: {
            item: "Tiempo de Organización",
            traditional: "30 min/50 tarjetas",
            tapforge: "5 min",
            tapforgeNote: "/50 tarjetas",
          },
          followUpRate: {
            item: "Tasa de Seguimiento",
            traditional: "15%",
            tapforge: "40%",
          },
          multilingual: {
            item: "Soporte Multilingüe",
            traditional: "Ninguno",
            tapforge: "4 Idiomas",
            tapforgeNote: "Soporte",
          },
          environmentalImpact: {
            item: "Impacto Ambiental",
            traditional: "Alto (Uso de papel)",
            tapforge: "Cero",
            tapforgeNote: "(Sin papel)",
          },
          updateEase: {
            item: "Facilidad de Actualización",
            traditional: "Reimpresión requerida",
            tapforge: "Instantáneo",
            tapforgeNote: "Actualización posible",
          },
        },
      },
      target: {
        title:
          "Perfecto para freelancers que quieren aumentar proyectos en el extranjero",
        description:
          "Apoya la expansión de negocios internacionales con soporte multilingüe y características de IA",
        tags: {
          global: "🌍 Soporte Global",
          ai: "🤖 Utilización de IA",
          noApp: "📱 Sin App Requerida",
          costReduction: "💰 Reducción de Costos",
        },
      },
    },
    // SDGs Section
    sdgs: {
      title: "Contribución a los ODS",
      subtitle: "Equilibrando medio ambiente y carrera",
      goals: {
        goal12: {
          title: "Consumo y Producción Responsables",
          items: [
            "Sin papel",
            "500 hojas de papel reducidas anualmente",
            "Consumo sostenible",
          ],
        },
        goal10: {
          title: "Reducción de las Desigualdades",
          items: [
            "Soporte de 4 idiomas",
            "Eliminación de desigualdad en proyectos internacionales",
            "Eliminación de barreras de idioma",
          ],
        },
        goal17: {
          title: "Alianzas para Lograr los Objetivos",
          items: [
            "Co-creación a través del intercambio de tarjetas",
            "Conexiones globales",
            "Compartir innovación tecnológica",
          ],
        },
      },
      environmental: {
        title: "Consideración Ambiental",
        metrics: {
          paperReduction: {
            value: "500 hojas",
            description: "Reducción anual de papel",
          },
          paperless: {
            value: "100%",
            description: "Logro sin papel",
          },
          updates: {
            value: "∞",
            description: "Tarjetas digitales actualizables",
          },
        },
        summary:
          "Actividades comerciales sostenibles que equilibran la protección ambiental y el crecimiento empresarial",
      },
    },
    // Partner Program Section
    partnerProgram: {
      title: "Programa de Socios de Co-creación",
      subtitle: "Precios especiales basados en asociación a largo plazo",
      heading: "Para clientes que utilizan otros servicios de Cor. Co., Ltd.",
      description:
        "Para clientes que utilizan otros servicios de Cor. Co., Ltd., ofrecemos precios especiales basados en asociación a largo plazo.",
      contactNote: "Por favor contáctanos para más detalles.",
      benefits: {
        specialPrice: {
          title: "Precios Especiales",
          description:
            "Precios preferenciales exclusivos para clientes existentes",
        },
        prioritySupport: {
          title: "Soporte Prioritario",
          description: "Soporte por personal dedicado",
        },
        customization: {
          title: "Soporte de Personalización",
          description: "Ajustes adaptados a las necesidades del cliente",
        },
        longTermPartnership: {
          title: "Asociación a Largo Plazo",
          description: "Construcción continua de relaciones",
        },
      },
      ctaButton: "Contáctanos",
      additionalInfo:
        "Este programa se basa en el contenido del sitio web oficial (cor-jp.com)",
    },
    // Testimonials Section
    testimonials: {
      title: "Testimonios de Clientes",
      subtitle: "Voces de quienes están usando realmente nuestro servicio",
      items: [
        {
          name: "Sr. Suzuki",
          role: "Diseñador Web",
          message:
            "¡La organización de tarjetas de presentación de papel se completó en 5 minutos! Los perfiles en inglés han aumentado los proyectos en el extranjero. La precisión del disparo de tarjetas de presentación con IA es alta y la conversión VCard es fluida. Es realmente un servicio conveniente para freelancers.",
          tags: ["Eficiencia", "Proyectos Extranjeros", "Precisión IA"],
        },
        {
          name: "Sr. Tanaka",
          role: "Consultor IT",
          message:
            "Sin aplicación requerida, simple. Da una buena impresión a los clientes. El soporte multilingüe ha hecho que la comunicación con clientes extranjeros sea fluida. La relación costo-beneficio también es excelente.",
          tags: [
            "Operación Fácil",
            "Buena Impresión",
            "Relación Costo-Beneficio",
          ],
        },
      ],
      note: "Estas voces son hipotéticas. Planeamos seleccionar 5 reseñas reales de 50 participantes de prueba y reemplazarlas.",
    },
    // FAQ Section
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Respondemos preguntas frecuentes de nuestros clientes",
      items: [
        {
          question: "¿Se puede usar NFC en cualquier smartphone?",
          answer:
            "Compatible con el 95% de los smartphones. Disponible en iPhone 7 y posteriores, y modelos Android compatibles con NFC.\nPara modelos específicos compatibles, consulte el sitio web oficial de cada fabricante de smartphones.",
        },
        {
          question:
            "¿Cuál es la precisión de la lectura de tarjetas de presentación?",
          answer:
            "La precisión del disparo de tarjetas de presentación con IA y la conversión VCard es del 95%. Buscamos una mayor precisión a través de mejoras continuas.\nSi el reconocimiento falla, también es posible la corrección manual.",
        },
        {
          question: "¿Puedo cambiar el diseño yo mismo?",
          answer:
            "Los cambios de diseño ilimitados son posibles desde la pantalla de administración.\nPuedes elegir entre 3 tipos de colores claros (blanco, azul claro, beige), y el texto y la información de contacto se pueden actualizar fácilmente.",
        },
        {
          question: "Por favor, dime cómo usar el soporte multilingüe",
          answer:
            "Puedes cambiar a 4 idiomas (japonés, inglés, chino, español) tú mismo.\nPuedes seleccionar el idioma de visualización en la pantalla de perfil, por lo que puedes usarlo en tu idioma preferido independientemente de la configuración de idioma del smartphone de la otra parte.",
        },
        {
          question: "¿Se puede usar sin conexión?",
          answer:
            "Actualmente recomendamos usarlo en un entorno en línea.\nLa funcionalidad sin conexión está bajo consideración para el futuro. Priorizamos la provisión de servicios estables en un entorno en línea, aprovechando el beneficio de no requerir aplicación.",
        },
      ],
      additionalHelp: {
        title: "Por favor, no dudes en contactarnos para otras preguntas",
        description:
          "Nuestro personal profesional te responderá cuidadosamente",
        button: "Contáctanos",
      },
    },
    // Footer Section
    footer: {
      description:
        "Conecta con el mundo a través de tarjetas de presentación digitales NFC. Acelera tu negocio con tarjetas de presentación de próxima generación impulsadas por IA.",
      tagline: "Pioneros del futuro, encuentros inteligentes para todos",
      quickLinks: {
        title: "Enlaces Rápidos",
        features: "Características",
        pricing: "Precios",
        testimonials: "Testimonios",
        faq: "Preguntas Frecuentes",
      },
      contact: {
        title: "Contacto",
        company: "Cor. Co., Ltd.",
        trial: "Prueba Gratuita",
      },
      copyright:
        "© 2025 TapForge by Cor. Co., Ltd. Todos los derechos reservados.",
      legal: {
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
      },
    },
    // Legal pages content
    legal: {
      privacy: {
        title: "プライバシーポリシー",
        lastUpdated: "最終更新日: 2025年9月20日",
        sections: [
          {
            title: "1. はじめに",
            content:
              "Cor.株式会社（以下「当社」）は、TapForgeサービス（以下「本サービス」）の提供にあたり、ユーザーの個人情報の保護を重要な責務と考え、以下のプライバシーポリシー（以下「本ポリシー」）を定めます。",
          },
          {
            title: "2. 収集する情報",
            content:
              "当社は、以下の情報を収集する場合があります：\n\n【自動的に収集される情報】\n・IPアドレス\n・ブラウザの種類とバージョン\n・デバイス情報\n・アクセス日時\n・リファラー情報\n\n【ユーザーから提供される情報】\n・氏名\n・メールアドレス\n・電話番号\n・会社名・組織名\n・職種・役職\n・プロフィール情報\n・SNSアカウント情報",
          },
          {
            title: "3. 情報の利用目的",
            content:
              "収集した情報は以下の目的で利用します：\n・本サービスの提供・運営\n・ユーザーサポート\n・サービスの改善・新機能の開発\n・利用統計の分析\n・セキュリティの維持・向上\n・マーケティング・広告配信（同意を得た場合のみ）\n・法的要求への対応",
          },
          {
            title: "4. 情報の共有と開示",
            content:
              "当社は、以下の場合を除き、個人情報を第三者に販売、貸与、または共有することはありません：\n・ユーザーの同意がある場合\n・サービス提供に必要な業務委託先への提供\n・法的要求がある場合\n・ユーザーや公衆の安全を守る必要がある場合\n・事業承継の場合",
          },
          {
            title: "5. データの保管とセキュリティ",
            content:
              "当社は、業界標準のセキュリティ対策を実施し、個人情報の不正アクセス、紛失、破壊、改ざん、漏洩を防ぐよう努めています。データは暗号化され、安全なサーバーに保管されます。",
          },
          {
            title: "6. Cookie（クッキー）の使用",
            content:
              "本サービスでは、ユーザー体験の向上のためCookieを使用しています。Cookieは以下の目的で使用されます：\n・ログイン状態の維持\n・言語設定の保存\n・利用状況の分析\n・広告の効果測定\n\nブラウザの設定でCookieを無効にすることができますが、一部のサービス機能が利用できなくなる場合があります。",
          },
          {
            title: "7. 第三者サービスとの連携",
            content:
              "本サービスは、Google Analytics等の第三者サービスを利用する場合があります。これらのサービスには、それぞれのプライバシーポリシーが適用されます。",
          },
          {
            title: "8. 子どものプライバシー",
            content:
              "本サービスは13歳未満の子どもを対象としていません。13歳未満の方は、保護者の同意なく個人情報を提供しないでください。",
          },
          {
            title: "9. ユーザーの権利",
            content:
              "ユーザーは自己の個人情報について以下の権利を有します：\n・アクセス権（開示請求）\n・訂正権\n・削除権\n・処理の制限を求める権利\n・データポータビリティの権利\n・異議申立権\n\nこれらの権利行使については、お問い合わせ窓口までご連絡ください。",
          },
          {
            title: "10. データの保存期間",
            content:
              "個人情報は、サービス提供に必要な期間または法的要求により定められた期間保存されます。不要になった情報は適切に削除または匿名化されます。",
          },
          {
            title: "11. 国際データ転送",
            content:
              "本サービスの提供にあたり、個人情報が日本国外のサーバーで処理される場合があります。その際も本ポリシーに従い適切に保護されます。",
          },
          {
            title: "12. ポリシーの変更",
            content:
              "本ポリシーは必要に応じて変更されることがあります。重要な変更がある場合は、サービス上で通知します。",
          },
          {
            title: "13. お問い合わせ",
            content:
              "本ポリシーに関するお問い合わせは、以下までご連絡ください：\n\nCor.株式会社\nプライバシー担当\nウェブサイト: https://cor-jp.com/\n\n個人情報保護管理者を設置し、適切な管理を行っています。",
          },
        ],
      },
      terms: {
        title: "利用規約",
        lastUpdated: "最終更新日: 2025年9月20日",
        sections: [
          {
            title: "1. 規約の同意",
            content:
              "TapForgeサービス（以下「本サービス」）をご利用いただくにあたり、以下の利用規約（以下「本規約」）をお読みいただき、内容にご同意いただく必要があります。本サービスを利用することで、本規約に同意したものとみなされます。",
          },
          {
            title: "2. サービスの概要",
            content:
              "TapForgeは、NFC（近距離無線通信）技術を活用したデジタル名刺サービスです。ユーザーは本サービスを通じて、デジタルプロフィールの作成、共有、管理を行うことができます。",
          },
          {
            title: "3. アカウント登録",
            content:
              "本サービスの一部機能を利用するためには、アカウント登録が必要です。登録時には正確で完全な情報を提供し、常に最新の状態に保つ責任があります。アカウントのセキュリティを維持する責任はユーザーにあります。",
          },
          {
            title: "4. 利用料金",
            content:
              "基本サービスは無料でご利用いただけます。追加機能については別途料金が発生する場合があります。料金体系の変更がある場合は、事前にお知らせいたします。",
          },
          {
            title: "5. 禁止事項",
            content:
              "以下の行為を禁止します：\n・法令に違反する行為\n・他のユーザーまたは第三者の権利を侵害する行為\n・虚偽の情報を登録する行為\n・本サービスの運営を妨げる行為\n・不正アクセスやハッキング行為\n・商業目的での無断使用",
          },
          {
            title: "6. 知的財産権",
            content:
              "本サービスに関する著作権、商標権その他の知的財産権は、Cor.株式会社または正当な権利者に帰属します。ユーザーが作成したコンテンツについては、ユーザーが著作権を保持しますが、本サービスの提供に必要な範囲で使用許諾をいただきます。",
          },
          {
            title: "7. プライバシー",
            content:
              "個人情報の取り扱いについては、別途定める「プライバシーポリシー」に従います。",
          },
          {
            title: "8. 免責事項",
            content:
              "本サービスは「現状有姿」で提供され、明示的または黙示的な保証はありません。Cor.株式会社は、本サービスの利用により生じた損害について、故意または重大な過失がある場合を除き、責任を負いません。",
          },
          {
            title: "9. サービスの変更・終了",
            content:
              "Cor.株式会社は、事前の通知をもって本サービスの内容を変更または終了することができます。",
          },
          {
            title: "10. 規約の変更",
            content:
              "本規約は必要に応じて変更されることがあります。変更後の規約は、本サービス上での公開をもって効力を生じます。",
          },
          {
            title: "11. 準拠法・管轄",
            content:
              "本規約は日本法に準拠し、本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
          },
          {
            title: "12. お問い合わせ",
            content:
              "本規約に関するお問い合わせは、以下までご連絡ください：\nCor.株式会社\nウェブサイト: https://cor-jp.com/\n",
          },
        ],
      },
    },
  },
  ko: {
    // Navigation
    nav: {
      home: "홈",
      features: "특징",
      pricing: "가격",
      testimonials: "후기",
      faq: "FAQ",
      contact: "문의",
    },
    // Hero Section
    hero: {
      title: "탭으로 세계와 연결되세요.",
      subtitle: "AI 기반 차세대 명함",
      description: "으로 비즈니스를 가속화하세요",
      subDescription:
        "앱 불필요, 월 무료. NFC 탭 하나로 다국어 프로필을 공유하세요.\n프리랜서의 해외 프로젝트 획득을 지원합니다.",
      cta: "무료 체험 신청",
      limited: "50명 한정!",
      features: {
        noApp: "앱 불필요",
        free: "월 무료",
        multilingual: "4개국어 지원",
      },
    },
    // Problems & Solutions
    problems: {
      title: "명함 정리, 번거롭죠?",
      subtitle: "TapForge로 5분 만에 해결!",
      problems: {
        title: "프리랜서의 고민",
        cost: {
          title: "종이 명함의 비용",
          description: "연간 500장으로 약 5,000엔의 인쇄비",
        },
        organization: {
          title: "정리의 번거로움",
          description: "명함 50장 정리에 30분 이상",
        },
        language: {
          title: "해외 클라이언트와의 언어 장벽",
          description: "영어 프로필 작성에 시간이 많이 걸림",
        },
        followup: {
          title: "낮은 후속 연락률",
          description: "명함 교환 후 연락률이 15% 정도",
        },
      },
      solutions: {
        title: "TapForge의 해결책",
        cost: {
          title: "비용 제로",
          description: "초기 3,000엔만, 월 무료",
        },
        time: {
          title: "5분 완료",
          description: "OCR 기능 NFC 명함으로 VCard 변환 (별도 앱 불필요)",
        },
        language: {
          title: "4개국어 지원",
          description: "일영중서로 국제 비즈니스 지원",
        },
        followup: {
          title: "40% 후속 연락률",
          description: "AI와 다국어 효과로 향상",
        },
      },
    },
    // Features Section
    features: {
      title: "TapForge 특징",
      subtitle: "최신 기술로 명함 교환 혁신",
      items: {
        aiScan: {
          title: "AI 명함 촬영·VCard 변환",
          description: "종이 명함을 AI로 데이터화 (정확도 95%), VCard로 스마트폰에 저장",
        },
        multilingual: {
          title: "다국어 지원",
          description: "일본어, 영어, 중국어(간체), 스페인어 4개국어로 자동 전환",
        },
        noApp: {
          title: "앱 불필요",
          description: "NFC 탭으로 즉시 프로필 표시 (온라인 환경)",
        },
        paperless: {
          title: "페이퍼리스",
          description: "SDGs 목표 12에 기여, 완전 페이퍼리스로 환경 고려",
        },
      },
      pricing: {
        title: "요금 체계 (세금 포함)",
        plans: {
          initial: {
            title: "초기 비용",
            price: "¥3,000",
            description: "1장",
          },
          additional: {
            title: "추가 카드",
            price: "¥600",
            description: "2장부터",
          },
          monthly: {
            title: "월 비용",
            price: "¥0",
            description: "완전 무료",
          },
        },
        tagline: "OCR 기능 NFC 명함 업계 최저가 - 일반 연간 11,000원 기능을 3,000원으로 제공",
      },
      demo: {
        title: "데모 영상",
        description: "AI 명함 촬영 데모 영상",
        note: "(YouTube 링크 예정)",
      },
    },
    // Benefits Section
    benefits: {
      title: "도입 효과",
      subtitle: "프리랜서의 비즈니스를 가속시키는 구체적인 효과",
      items: {
        cost: {
          title: "비용 절감",
          description: "기존 종이 명함 5,000원 + OCR 앱 6,000원 → TapForge 3,000원으로 실현",
          amount: "8,000원 절약",
        },
        efficiency: {
          title: "효율화",
          description: "명함 정리가 5분으로 완료(50장 일괄 디지털화)",
          time: "25분 단축",
        },
        business: {
          title: "비즈니스 확장",
          description: "팔로우율이 15%에서 40%로 향상",
          improvement: "25% 향상",
        },
        environment: {
          title: "환경 고려",
          description: "연간 300장의 종이 절약으로 SDGs에 기여",
          reduction: "300장 절약",
        },
      },
      comparison: {
        title: "상세 비교",
        headers: {
          item: "항목",
          traditional: "기존 종이 명함",
          tapforge: "TapForge"
        },
        rows: {
          annualCost: {
            item: "연간 비용",
            traditional: "¥5,000",
            tapforge: "¥0",
            tapforgeNote: "(초기 비용만)"
          },
          organizationTime: {
            item: "정리 시간",
            traditional: "30분/50장",
            tapforge: "5분",
            tapforgeNote: "/50장"
          },
          followUpRate: {
            item: "팔로우율",
            traditional: "15%",
            tapforge: "40%"
          },
          multilingual: {
            item: "다국어 지원",
            traditional: "없음",
            tapforge: "4개국어",
            tapforgeNote: "지원"
          },
          environmentalImpact: {
            item: "환경 부담",
            traditional: "높음 (종이 사용)",
            tapforge: "제로",
            tapforgeNote: "(페이퍼리스)"
          },
          updateEase: {
            item: "업데이트 용이성",
            traditional: "재인쇄 필요",
            tapforge: "즉시",
            tapforgeNote: "업데이트 가능"
          }
        }
      },
      target: {
        title: "해외 프로젝트를 늘리고 싶은 프리랜서에게 최적",
        description: "다국어 지원과 AI 기능으로 국제적인 비즈니스 확장을 강력히 지원합니다",
        tags: {
          global: "🌍 글로벌 지원",
          ai: "🤖 AI 활용",
          noApp: "📱 앱 불필요",
          costReduction: "💰 비용 절감"
        }
      }
    },
    // Testimonials Section
    testimonials: {
      title: "사용자 후기",
      subtitle: "실제 사용자들의 생생한 목소리",
      items: [
        {
          name: "김프리",
          role: "IT 프리랜서",
          content: "해외 프로젝트가 3배 증가했습니다. 다국어 지원이 정말 도움이 됩니다.",
          rating: 5,
        },
        {
          name: "이디자인",
          role: "디자이너",
          content: "명함 정리가 이렇게 쉬울 줄 몰랐어요. OCR 기능도 정말 편리합니다.",
          rating: 5,
        },
        {
          name: "박컨설팅",
          role: "컨설턴트",
          content: "고객과의 연결이 훨씬 자연스러워졌습니다. 추천합니다!",
          rating: 5,
        },
      ],
    },
    // FAQ Section
    faq: {
      title: "자주 묻는 질문",
      subtitle: "궁금한 점을 해결해드립니다",
      items: [
        {
          question: "NFC 명함은 어떻게 작동하나요?",
          answer: "NFC 칩이 내장된 명함을 스마트폰에 가져다 대면 자동으로 프로필 페이지가 열립니다. 별도 앱 설치가 필요하지 않습니다.",
        },
        {
          question: "OCR 기능의 정확도는 어느 정도인가요?",
          answer: "AI 기반 OCR로 95%의 높은 정확도를 자랑합니다. 일본어, 영어, 중국어, 스페인어를 지원합니다.",
        },
        {
          question: "월 비용이 정말 무료인가요?",
          answer: "네, 월 비용은 완전 무료입니다. 초기 제작비 3,000원만 지불하시면 됩니다.",
        },
        {
          question: "해외에서도 사용할 수 있나요?",
          answer: "네, 전 세계 어디서나 사용 가능합니다. 4개국어 자동 전환으로 글로벌 비즈니스에 최적화되어 있습니다.",
        },
        {
          question: "환경에 미치는 영향은 어떤가요?",
          answer: "연간 300장의 종이를 절약하여 SDGs 목표 12(지속가능한 소비와 생산)에 기여합니다.",
        },
      ],
    },
    // CTA Section
    cta: {
      title: "지금 바로 시작하세요",
      description: "50명 한정 무료 체험으로 TapForge의 힘을 경험해보세요",
      trialButton: "무료 체험 신청",
      contactButton: "문의하기 (공동창조 파트너용)",
      tapNow: "지금 탭하기!",
      profileDisplay: "프로필 표시",
      features: {
        noApp: "앱 불필요",
        free: "월 무료",
        multilingual: "4개국어 지원",
        aiScanning: "AI 명함 촬영",
      },
    },
    // Trial Form
    trialForm: {
      title: "무료 체험 신청",
      description: "명함 1장을 무료로 제작해드립니다.",
      subDescription:
        "무제한 디자인 변경, AI 명함 촬영 및 VCard 변환 사용 가능",
      contactFormTitle: "문의 양식",
      contactFormDescription:
        "무료 체험 신청은 아래 버튼을 통해 문의해주세요.",
      contactFormButton: "문의 양식으로 이동",
      termsText: "신청하시면 ",
      termsLink: "이용약관",
      andText: " 및 ",
      privacyLink: "개인정보처리방침",
      agreementText: "에 동의하는 것으로 간주됩니다.",
    },
    // SDGs Section
    sdgs: {
      title: "SDGs에 기여",
      subtitle: "지속가능한 미래를 위한 노력",
      description: "TapForge는 SDGs 목표 12(지속가능한 소비와 생산)에 기여합니다",
      items: {
        paperless: {
          title: "무지화",
          description: "연간 300장의 종이 절약",
        },
        efficiency: {
          title: "효율성",
          description: "명함 정리 시간 25분 단축",
        },
        global: {
          title: "글로벌",
          description: "4개국어 지원으로 국제 비즈니스 촉진",
        },
      },
    },
    // Footer Section
    footer: {
      description:
        "NFC 디지털 명함으로 세계와 연결되세요. AI 기반 차세대 명함으로 비즈니스를 가속화하세요.",
      tagline: "미래의 개척자, 모든 이를 위한 스마트한 만남",
      quickLinks: {
        title: "빠른 링크",
        features: "특징",
        pricing: "가격",
        testimonials: "후기",
        faq: "자주 묻는 질문",
      },
      contact: {
        title: "연락처",
        company: "Cor. Co., Ltd.",
        trial: "무료 체험",
      },
      copyright:
        "© 2025 TapForge by Cor. Co., Ltd. 모든 권리 보유.",
      legal: {
        privacy: "개인정보처리방침",
        terms: "서비스 약관",
      },
    },
  },
} as const;

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
