export type Language = "en" | "uk"

export interface Translations {
  // Common
  businessPlan: string
  contactUs: string
  viewDetails: string

  // Navigation
  about: string
  services: string
  marketing: string
  financial: string
  privacy: string

  // Hero Section
  heroTitle: string
  heroSubtitle: string
  exploreBusinessPlan: string
  viewFinancialProjections: string

  // Project Summary
  projectSummary: string
  projectCost: string
  paybackPeriod: string
  roi: string
  monthlyRevenue: string
  launchDate: string
  legalForm: string

  // Business Plan Overview
  businessPlanOverview: string
  businessPlanDescription: string

  // Financial Highlights
  initialInvestment: string
  totalProjectBudget: string
  quickReturn: string
  annualReturn: string
  netIncome: string
  firstYearValue: string

  // Section Cards
  aboutXoperr: string
  aboutXoperrDesc: string
  servicesTitle: string
  servicesDesc: string
  marketingPlan: string
  marketingPlanDesc: string
  organizationManagement: string
  organizationManagementDesc: string
  investmentPlan: string
  investmentPlanDesc: string
  productionPlan: string
  productionPlanDesc: string
  financialPlan: string
  financialPlanDesc: string
  projectEfficiency: string
  projectEfficiencyDesc: string
  developmentOpportunities: string
  developmentOpportunitiesDesc: string

  // Footer
  copyright: string
}

export const translations: Record<Language, Translations> = {
  en: {
    // Common
    businessPlan: "Business Plan 2025",
    contactUs: "Contact Us",
    viewDetails: "View Details",

    // Navigation
    about: "About",
    services: "Services",
    marketing: "Marketing",
    financial: "Financial",
    privacy: "Privacy",

    // Hero Section
    heroTitle: "Xoperr - AI Agents for Business",
    heroSubtitle:
      "A platform offering AI agents as ideal business assistants for management, accounting, marketing, and business planning.",
    exploreBusinessPlan: "Explore Business Plan",
    viewFinancialProjections: "View Financial Projections",

    // Project Summary
    projectSummary: "Project Summary",
    projectCost: "Project Cost",
    paybackPeriod: "Payback Period",
    roi: "ROI (Annual)",
    monthlyRevenue: "Monthly Revenue",
    launchDate: "Launch Date",
    legalForm: "Legal Form",

    // Business Plan Overview
    businessPlanOverview: "Business Plan Overview",
    businessPlanDescription:
      "A comprehensive plan for an AI-powered platform offering specialized agents for business automation",

    // Financial Highlights
    initialInvestment: "Initial Investment",
    totalProjectBudget: "Total project budget",
    quickReturn: "Quick return on investment",
    annualReturn: "Annual return on investment",
    netIncome: "Net Income",
    firstYearValue: "First year net present value",

    // Section Cards
    aboutXoperr: "About Xoperr",
    aboutXoperrDesc:
      "Platform offering AI agents as ideal business assistants for management, accounting, marketing, and business planning.",
    servicesTitle: "Services",
    servicesDesc:
      "AI solutions for marketing, accounting, management, and business planning to optimize key business operations.",
    marketingPlan: "Marketing Plan",
    marketingPlanDesc:
      "Comprehensive marketing strategy focused on social media, partnerships, and targeted advertising.",
    organizationManagement: "Organization & Management",
    organizationManagementDesc:
      "Effective organizational structure with clear roles and responsibilities for seamless operation.",
    investmentPlan: "Investment Plan",
    investmentPlanDesc: "Detailed breakdown of expenses and funding sources for the first three months of operation.",
    productionPlan: "Production Plan",
    productionPlanDesc: "Technical infrastructure and processes for developing and launching the Xoperr platform.",
    financialPlan: "Financial Plan",
    financialPlanDesc:
      "Comprehensive financial projections including expenses, revenue streams, and profitability analysis.",
    projectEfficiency: "Project Efficiency",
    projectEfficiencyDesc: "Analysis of economic efficiency including payback period, ROI, and net present value.",
    developmentOpportunities: "Development Opportunities",
    developmentOpportunitiesDesc:
      "Future growth strategies including functionality expansion, international scaling, and new market segments.",

    // Footer
    copyright: "© 2025 Xoperr. All rights reserved.",
  },
  uk: {
    // Common
    businessPlan: "Бізнес-план 2025",
    contactUs: "Зв'язатися з нами",
    viewDetails: "Детальніше",

    // Navigation
    about: "Про нас",
    services: "Послуги",
    marketing: "Маркетинг",
    financial: "Фінанси",
    privacy: "Конфіденційність",

    // Hero Section
    heroTitle: "Xoperr - ШІ-агенти для бізнесу",
    heroSubtitle:
      "Платформа, що пропонує ШІ-агентів як ідеальних помічників для бізнесу (менеджмент, бухгалтерія, маркетинг, бізнес-планування).",
    exploreBusinessPlan: "Вивчити бізнес-план",
    viewFinancialProjections: "Переглянути фінансові прогнози",

    // Project Summary
    projectSummary: "Резюме проекту",
    projectCost: "Вартість проекту",
    paybackPeriod: "Термін окупності",
    roi: "ROI (річний)",
    monthlyRevenue: "Місячний дохід",
    launchDate: "Дата запуску",
    legalForm: "Юридична форма",

    // Business Plan Overview
    businessPlanOverview: "Огляд бізнес-плану",
    businessPlanDescription:
      "Комплексний план для платформи на базі ШІ, що пропонує спеціалізованих агентів для автоматизації бізнесу",

    // Financial Highlights
    initialInvestment: "Початкові інвестиції",
    totalProjectBudget: "Загальний бюджет проекту",
    quickReturn: "Швидке повернення інвестицій",
    annualReturn: "Річна рентабельність інвестицій",
    netIncome: "Чистий прибуток",
    firstYearValue: "Чиста приведена вартість за перший рік",

    // Section Cards
    aboutXoperr: "Про Xoperr",
    aboutXoperrDesc:
      "Платформа, що пропонує ШІ-агентів як ідеальних помічників для бізнесу (менеджмент, бухгалтерія, маркетинг, бізнес-планування).",
    servicesTitle: "Послуги",
    servicesDesc:
      "ШІ-рішення для маркетингу, бухгалтерії, менеджменту та бізнес-планування для оптимізації ключових бізнес-операцій.",
    marketingPlan: "Маркетинговий план",
    marketingPlanDesc:
      "Комплексна маркетингова стратегія, зосереджена на соціальних мережах, партнерствах та таргетованій рекламі.",
    organizationManagement: "Організація та управління",
    organizationManagementDesc:
      "Ефективна організаційна структура з чітким розподілом ролей та обов'язків для безперебійної роботи.",
    investmentPlan: "Інвестиційний план",
    investmentPlanDesc: "Детальний розподіл витрат та джерел фінансування на перші три місяці роботи.",
    productionPlan: "Виробничий план",
    productionPlanDesc: "Технічна інфраструктура та процеси для розробки та запуску платформи Xoperr.",
    financialPlan: "Фінансовий план",
    financialPlanDesc: "Комплексні фінансові прогнози, включаючи витрати, джерела доходу та аналіз прибутковості.",
    projectEfficiency: "Ефективність проекту",
    projectEfficiencyDesc:
      "Аналіз економічної ефективності, включаючи термін окупності, ROI та чисту приведену вартість.",
    developmentOpportunities: "Можливості розвитку",
    developmentOpportunitiesDesc:
      "Стратегії майбутнього зростання, включаючи розширення функціоналу, міжнародне масштабування та нові сегменти ринку.",

    // Footer
    copyright: "© 2025 Xoperr. Усі права захищені.",
  },
}
