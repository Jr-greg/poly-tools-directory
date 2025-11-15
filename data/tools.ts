export interface Tool {
  name: string
  description: string
  categories: string[]
  image: string
  icon: string
  href: string
  slug: string
  views: number
  website?: string
  twitter?: string
  team?: Array<{
    name: string
    twitter: string
  }>
  platforms?: Array<{
    name: string
    icon: string
  }>
  overview?: string
  features?: Array<{
    title: string
    description: string
  }>
  useCases?: Array<{
    title: string
    description: string
  }>
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export const tools: Tool[] = [
  {
    name: "Polymarket Analytics",
    slug: "polymarket-analytics",
    description: "Global analytics platform providing comprehensive data on Polymarket traders, markets, positions, and trades.",
    categories: ["Analytics Tools", "Portfolio Tracking"],
    image: "/images/screen-polymarket-analytics.jpg",
    icon: "/images/favicon-polymarket-analytics.png",
    href: "/product/polymarket-analytics",
    views: 7000,
    website: "https://polymarketanalytics.com",
    twitter: "https://x.com/poly_data",
    team: [
      { name: "@primo_data", twitter: "https://x.com/primo_data" },
      { name: "@VaingloriousETH", twitter: "https://x.com/VaingloriousETH" }
    ],
    platforms: [
      { name: "Polymarket", icon: "/images/favicon-polymarket.png" },
      { name: "Kalshi", icon: "/images/favicon-kalshi.png" }
    ],
    overview: "Polymarket Analytics delivers deep insights into prediction markets through a powerful suite of data tools supporting Polymarket and other platforms like Kalshi. It enables users to discover top traders, track portfolios, analyze market activity, and monitor deposits and withdrawals to identify insider movements. The platform is designed for advanced traders, researchers, and analysts who require a unified, data-driven market overview without direct trading capabilities.",
    features: [
      {
        title: "Top Traders Dashboard",
        description: "Browse and filter the most successful traders by categories, performance metrics, profit/loss history, and trading patterns."
      },
      {
        title: "Market Search",
        description: "Search across thousands of prediction markets on Polymarket and Kalshi with advanced filters and unified market views."
      },
      {
        title: "Real-Time Activity Feed",
        description: "Track market activity including large trades, position openings, and significant market moves with alerts for major events."
      },
      {
        title: "Portfolio Management",
        description: "Create and manage custom portfolios consolidating PnL, positions, and performance metrics across multiple trading accounts."
      }
    ],
    useCases: [
      {
        title: "Professional Traders",
        description: "Identify and follow top-performing traders and refine strategies based on detailed trading metrics and analytics."
      },
      {
        title: "Market Analysts",
        description: "Use advanced search and filtering to explore markets for arbitrage, price patterns, and event-driven opportunities."
      },
      {
        title: "Portfolio Managers",
        description: "Track multiple wallets and portfolios in one place for consolidated performance insights and trade management."
      }
    ],
    faqs: [
      {
        question: "What is Polymarket Analytics?",
        answer: "A data platform providing detailed insights into Polymarket traders, markets, and trades with multi-platform aggregation."
      },
      {
        question: "Can I trade directly on Polymarket Analytics?",
        answer: "No, it is an analytics tool only; however, it integrates with Polycule for copy trading functionality."
      },
      {
        question: "Which platforms does Polymarket Analytics support?",
        answer: "It supports Polymarket, Kalshi, and TryLimitless for comprehensive market and trading data aggregation."
      }
    ]
  },
  {
    name: "Polysights",
    slug: "polysights",
    description: "AI-powered Polymarket analytics with 30+ custom metrics, news insights, alerts, and AI-driven summaries.",
    categories: ["Analytics Tools", "Dashboards"],
    image: "/images/screen-polysights.jpg",
    icon: "/images/favicon-polysights.png",
    href: "/product/polysights",
    views: 5900,
    website: "https://polysights.com",
    overview: "AI-powered analytics platform providing comprehensive insights into Polymarket prediction markets with custom metrics and intelligent alerts.",
    features: [
      {
        title: "AI-Driven Analysis",
        description: "Leverage advanced AI models to analyze market trends and predict outcomes with high accuracy."
      },
      {
        title: "Custom Metrics",
        description: "Access 30+ proprietary metrics designed specifically for prediction market analysis."
      }
    ]
  },
  {
    name: "Hashdive",
    slug: "hashdive",
    description: "A platform designed to provide advanced Polymarket and Kalshi analytics, with a special focus on Smart Scores.",
    categories: ["Analytics Tools", "Portfolio Tracking"],
    image: "/images/screen-hashdive.jpg",
    icon: "/images/favicon-hashdive.png",
    href: "/product/hashdive",
    views: 5700,
    website: "https://hashdive.com",
    overview: "Advanced analytics platform focused on Smart Scores and intelligent market analysis."
  },
  {
    name: "Betmoar",
    slug: "betmoar",
    description: "Web-based Polymarket trading terminal offering powerful search, real-time news, and unique market insights.",
    categories: ["Analytics Tools", "Trading Bots"],
    image: "/images/screen-betmoar.jpg",
    icon: "/images/favicon-betmoar.png",
    href: "/product/betmoar",
    views: 5600,
    website: "https://betmoar.com"
  },
  {
    name: "Polycule",
    slug: "polycule",
    description: "Telegram bot for seamless Polymarket trading, enabling mobile, social, and group trades from anywhere in the world.",
    categories: ["Trading Bots"],
    image: "/images/screen-polycule.jpg",
    icon: "/images/favicon-polycule.png",
    href: "/product/polycule",
    views: 5500,
    website: "https://polycule.com"
  },
  {
    name: "Polyfactual",
    slug: "polyfactual",
    description: "AI-powered platform blending prediction markets and social narratives to track and trade on event truthfulness.",
    categories: ["AI Agents", "Trading Bots"],
    image: "/images/screen-polyfactual.jpg",
    icon: "/images/favicon-polyfactual.png",
    href: "/product/polyfactual",
    views: 5400,
    website: "https://polyfactual.com"
  },
  {
    name: "Flipr",
    slug: "flipr",
    description: "The defi layer for prediction markets. leverage, lending, and trading directly on x",
    categories: ["Trading Bots", "DeFi"],
    image: "/images/screen-flipr.jpg",
    icon: "/images/favicon-flipr.png",
    href: "/product/flipr",
    views: 5300,
    website: "https://flipr.com"
  },
  {
    name: "Parsec",
    slug: "parsec",
    description: "Parsec provides real-time data analytics and insights for Polymarkets, helping users make informed decisions.",
    categories: ["Analytics Tools", "Dashboards"],
    image: "/images/screen-parsec.jpg",
    icon: "/images/favicon-parsec.png",
    href: "/product/parsec",
    views: 5100,
    website: "https://parsec.com"
  }
]

export const categories = [
  "Home",
  "Trading Bots",
  "Analytics Tools",
  "Portfolio Tracking",
  "Dashboards",
  "DeFi",
  "Alerts",
  "AI Agents",
  "APIs",
  "News"
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug)
}

export function getRelatedTools(currentTool: Tool, limit: number = 3): Tool[] {
  return tools
    .filter(tool => 
      tool.slug !== currentTool.slug && 
      tool.categories.some(cat => currentTool.categories.includes(cat))
    )
    .slice(0, limit)
}
