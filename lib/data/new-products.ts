import type {
  FAQItem,
  Integration,
  ProcessStep,
  Product,
  ProductFeature,
  UseCase,
} from "@/lib/types";

export const newProducts: Product[] = [
  {
    slug: "e-invoicing-saas",
    name: "NOVEK E-Invoicing",
    tagline:
      "Create, send, approve, and track invoices from one secure cloud workspace.",
    description:
      "NOVEK E-Invoicing is a SaaS platform for Ethiopian businesses that need cleaner billing, faster collections, and better invoice control. It helps finance teams create professional invoices, route them for approval, attach supporting documents, track payment status, and keep searchable records for audit and reporting. The platform is designed for real business workflows: multiple branches, role-based approvals, customer statements, recurring invoices, tax-ready invoice data, and integration with ERP, accounting, payment, and document systems.",
    shortDescription:
      "E-invoicing SaaS for Ethiopian businesses covering invoice creation, approvals, payment tracking, customer statements, and audit-ready records.",
    icon: "FileText",
    heroImage: "/images/products/e-invoicing-saas.png",
    features: [
      {
        title: "Digital Invoice Creation",
        description:
          "Generate branded invoices, credit notes, pro forma invoices, and customer statements with consistent numbering, customer records, tax fields, and branch controls.",
        icon: "FileText",
        subFeatures: [
          "Branded invoice templates",
          "Recurring invoices",
          "Credit notes and adjustments",
          "Branch and department numbering",
        ],
      },
      {
        title: "Approval Workflows",
        description:
          "Route invoices through finance, sales, operations, and management approvals before they are sent to customers or posted to accounting.",
        icon: "CheckCircle2",
        subFeatures: [
          "Role-based approvals",
          "Approval limits",
          "Comment history",
          "Exception handling",
        ],
      },
      {
        title: "Payment Tracking",
        description:
          "Track paid, unpaid, overdue, and partially paid invoices with reminders, customer balance views, and reconciliation support.",
        icon: "WalletCards",
        subFeatures: [
          "Overdue invoice alerts",
          "Partial payment handling",
          "Customer aging reports",
          "Bank and payment references",
        ],
      },
      {
        title: "Audit-Ready Records",
        description:
          "Keep invoices, supporting documents, approvals, edits, exports, and delivery history in a searchable audit trail.",
        icon: "ShieldCheck",
      },
      {
        title: "Customer Delivery",
        description:
          "Send invoices by email, secure link, or customer portal so clients can view invoices, download documents, and confirm receipt.",
        icon: "Send",
      },
      {
        title: "Business Reporting",
        description:
          "Give managers visibility into revenue, collections, aging, customer balances, and invoice performance across branches or business units.",
        icon: "BarChart3",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Set Up Invoice Rules",
        description:
          "Configure templates, tax fields, approval paths, numbering rules, users, branches, and customer records.",
        icon: "Settings",
      },
      {
        number: 2,
        title: "Create and Approve",
        description:
          "Teams create invoices, attach documents, and route them to the right approvers before sending.",
        icon: "ClipboardCheck",
      },
      {
        number: 3,
        title: "Send and Collect",
        description:
          "Customers receive invoices through email or portal links while your team tracks payment status and reminders.",
        icon: "Send",
      },
      {
        number: 4,
        title: "Report and Reconcile",
        description:
          "Finance reviews aging, collection status, customer statements, audit logs, and exports for accounting or ERP.",
        icon: "LineChart",
      },
    ] as ProcessStep[],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "PDF generation",
      "Email delivery",
      "Docker",
    ],
    integrations: [
      {
        name: "NOVEK ERP",
        icon: "Layers",
        description:
          "Post approved invoices to finance, revenue, receivables, inventory, and reporting modules.",
      },
      {
        name: "Accounting Systems",
        icon: "BookOpen",
        description:
          "Export invoice and payment data to accounting tools through API, CSV, or approved import templates.",
      },
      {
        name: "Payment Providers",
        icon: "CreditCard",
        description:
          "Connect invoice references to payment channels for cleaner reconciliation and collection follow-up.",
      },
      {
        name: "Document Storage",
        icon: "FolderOpen",
        description:
          "Attach contracts, delivery notes, purchase orders, receipts, and supporting evidence to each invoice.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Service Companies",
        description:
          "Create recurring invoices, attach delivery evidence, and track customer balances without spreadsheet follow-up.",
        icon: "Briefcase",
      },
      {
        title: "Distributors and Traders",
        description:
          "Issue invoices from branches, link invoices to orders, and monitor receivables across many customers.",
        icon: "Truck",
      },
      {
        title: "Hotels and Restaurants",
        description:
          "Generate customer, corporate, and event invoices with approval, statement, and collection workflows.",
        icon: "Hotel",
      },
      {
        title: "Finance Teams",
        description:
          "Maintain searchable invoice history, approval records, aging reports, and export-ready data.",
        icon: "Calculator",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What is e-invoicing software?",
        answer:
          "E-invoicing software helps a business create, approve, send, store, and track invoices digitally. NOVEK E-Invoicing also supports customer statements, payment follow-up, audit logs, and integration with accounting or ERP systems.",
        category: "products",
      },
      {
        question: "How does NOVEK E-Invoicing help Ethiopian businesses?",
        answer:
          "It reduces manual invoice work, improves approval control, keeps invoice records searchable, helps teams track unpaid invoices, and gives managers better visibility into revenue and collections.",
        category: "products",
      },
      {
        question: "Can it work with our current accounting or ERP system?",
        answer:
          "Yes. The platform can integrate with NOVEK ERP, accounting software, payment systems, and document storage through APIs, exports, or structured import files.",
        category: "technical",
      },
      {
        question: "Does it support approval before invoices are sent?",
        answer:
          "Yes. You can define approval rules by branch, amount, department, customer, or role so invoices are reviewed before they are delivered or posted.",
        category: "products",
      },
      {
        question: "Is NOVEK E-Invoicing a SaaS product?",
        answer:
          "Yes. It is available as a cloud SaaS product, with private deployment options for organizations that need dedicated hosting or stricter data control.",
        category: "technical",
      },
    ] as FAQItem[],
  },
  {
    slug: "digital-family-legacy",
    name: "Digital Family Legacy",
    tagline:
      "Preserve family stories, documents, photos, and memories in a private digital vault.",
    description:
      "Digital Family Legacy is a private family archive app for preserving the people, stories, documents, photos, audio, and video that matter across generations. Families can build profiles, organize timelines, record memories, store important documents, and invite trusted relatives with controlled access. The product is built for privacy, continuity, and simple family collaboration.",
    shortDescription:
      "Private family legacy app for preserving memories, documents, stories, photos, timelines, and trusted access across generations.",
    icon: "Heart",
    heroImage: "/images/products/digital-family-legacy.png",
    features: [
      {
        title: "Family Timeline",
        description:
          "Build a living timeline of major family moments, milestones, places, photos, and stories.",
        icon: "History",
      },
      {
        title: "Private Memory Vault",
        description:
          "Store photos, videos, voice notes, letters, certificates, and important documents in one secure space.",
        icon: "Lock",
      },
      {
        title: "Controlled Family Access",
        description:
          "Invite relatives with role-based access so sensitive documents stay protected while memories can be shared.",
        icon: "Users",
      },
      {
        title: "Story Capture",
        description:
          "Use guided prompts to record life stories, cultural memories, family recipes, values, and personal lessons.",
        icon: "BookOpen",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Create Family Spaces",
        description:
          "Set up a private family archive and invite trusted members.",
        icon: "Home",
      },
      {
        number: 2,
        title: "Add Memories",
        description:
          "Upload media, documents, voice notes, and written stories into organized collections.",
        icon: "Upload",
      },
      {
        number: 3,
        title: "Preserve and Share",
        description:
          "Keep important records safe while sharing selected memories with the right people.",
        icon: "Share2",
      },
    ] as ProcessStep[],
    techStack: ["Next.js", "React Native", "PostgreSQL", "Object storage", "Encryption", "Node.js"],
    integrations: [
      {
        name: "Cloud Storage",
        icon: "Cloud",
        description:
          "Securely store photos, videos, documents, and voice recordings.",
      },
      {
        name: "Email Invitations",
        icon: "Mail",
        description:
          "Invite relatives and manage access to shared family spaces.",
      },
      {
        name: "Mobile Capture",
        icon: "Smartphone",
        description:
          "Capture voice notes, photos, and memories directly from mobile devices.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Families Preserving Memories",
        description:
          "Keep stories, photos, and voice notes organized instead of scattered across phones and chats.",
        icon: "Heart",
      },
      {
        title: "Diaspora Families",
        description:
          "Give family members in different countries a shared place for heritage, milestones, and memories.",
        icon: "Globe",
      },
      {
        title: "Document Organization",
        description:
          "Store important certificates, letters, and family records with controlled access.",
        icon: "FolderOpen",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What is Digital Family Legacy?",
        answer:
          "It is a private app for preserving family memories, stories, photos, videos, and important documents in one organized digital archive.",
        category: "products",
      },
      {
        question: "Can family members have different access levels?",
        answer:
          "Yes. You can control who can view, upload, edit, or manage specific family spaces and records.",
        category: "technical",
      },
      {
        question: "Is the app only for photos?",
        answer:
          "No. It supports stories, voice notes, videos, documents, timelines, and structured family profiles.",
        category: "products",
      },
    ] as FAQItem[],
  },
  {
    slug: "pay-per-minute-connect",
    name: "Pay Per Minute Connect",
    tagline: "Let customers pay for expert calls by the minute.",
    description:
      "Pay Per Minute Connect is a customer connection platform for experts, consultants, creators, advisors, tutors, and service providers who want to charge for live conversations by time. Customers can discover providers, book or start calls, see per-minute pricing, pay securely, and receive call history. Providers get scheduling, wallet, payout, rating, and availability tools in one dashboard.",
    shortDescription:
      "Pay-per-minute calling and consultation platform with booking, payments, availability, provider profiles, ratings, and wallet workflows.",
    icon: "Phone",
    heroImage: "/images/products/pay-per-minute-connect.png",
    features: [
      {
        title: "Per-Minute Billing",
        description:
          "Charge customers based on call duration with clear pricing, balance tracking, and call records.",
        icon: "Timer",
      },
      {
        title: "Provider Marketplace",
        description:
          "Create expert profiles with categories, availability, pricing, ratings, and service descriptions.",
        icon: "Store",
      },
      {
        title: "Booking and Live Calls",
        description:
          "Support scheduled consultations, instant calls, customer queues, and follow-up requests.",
        icon: "PhoneCall",
      },
      {
        title: "Wallet and Payouts",
        description:
          "Track customer payments, provider earnings, platform fees, refunds, and payout requests.",
        icon: "Wallet",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "List Providers",
        description:
          "Experts create profiles, choose categories, set rates, and define available times.",
        icon: "UserPlus",
      },
      {
        number: 2,
        title: "Customers Connect",
        description:
          "Customers find a provider, add balance or pay, and start a scheduled or instant session.",
        icon: "Phone",
      },
      {
        number: 3,
        title: "Billing Runs Automatically",
        description:
          "The platform calculates time, fees, earnings, and session records automatically.",
        icon: "Calculator",
      },
    ] as ProcessStep[],
    techStack: ["React Native", "Next.js", "WebRTC", "Node.js", "PostgreSQL", "Redis"],
    integrations: [
      {
        name: "Payment Gateways",
        icon: "CreditCard",
        description:
          "Accept wallet top-ups, direct payments, and provider payout workflows.",
      },
      {
        name: "Voice and Video",
        icon: "Video",
        description:
          "Connect customers and providers through voice or video sessions.",
      },
      {
        name: "Notifications",
        icon: "Bell",
        description:
          "Send booking reminders, call alerts, balance notifications, and payout updates.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Consultants and Advisors",
        description:
          "Monetize short expert calls without manual invoicing or scheduling back-and-forth.",
        icon: "Briefcase",
      },
      {
        title: "Tutors and Coaches",
        description:
          "Offer paid learning or coaching sessions with flexible session length.",
        icon: "GraduationCap",
      },
      {
        title: "Creator Communities",
        description:
          "Let followers pay for direct calls, advice sessions, or private Q&A time.",
        icon: "MessageCircle",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What is a pay-per-minute connection app?",
        answer:
          "It is a platform where customers pay based on the time they spend speaking with a provider, expert, consultant, tutor, or creator.",
        category: "products",
      },
      {
        question: "Can providers set their own price?",
        answer:
          "Yes. Providers can define per-minute rates, availability, service categories, and profile details.",
        category: "products",
      },
      {
        question: "Does it support scheduled and instant calls?",
        answer:
          "Yes. The platform can support both appointment-based calls and instant availability workflows.",
        category: "technical",
      },
    ] as FAQItem[],
  },
  {
    slug: "ai-dating-companion",
    name: "AI Dating Companion",
    tagline:
      "Conversation coaching that helps people show up with more confidence and respect.",
    description:
      "AI Dating Companion is a personal communication coach for people who want help preparing for dates, starting respectful conversations, reducing awkward moments, and understanding tone. The product focuses on self-awareness, confidence, consent, and healthy communication rather than manipulation. Users can practice messages, prepare date ideas, reflect after conversations, and get practical suggestions for clearer communication.",
    shortDescription:
      "AI-powered dating communication coach for conversation practice, date preparation, tone guidance, and self-awareness.",
    icon: "MessageCircle",
    heroImage: "/images/products/ai-dating-companion.png",
    features: [
      {
        title: "Conversation Practice",
        description:
          "Practice opening messages, follow-ups, and difficult conversations with respectful feedback.",
        icon: "MessagesSquare",
      },
      {
        title: "Awkwardness Support",
        description:
          "Get practical suggestions for handling silence, nervousness, unclear signals, and first-date pressure.",
        icon: "Sparkles",
      },
      {
        title: "Tone and Intent Checks",
        description:
          "Review messages for clarity, kindness, confidence, and boundaries before sending.",
        icon: "CheckCircle2",
      },
      {
        title: "Date Planning",
        description:
          "Generate simple date plans, conversation topics, and follow-up ideas based on personal preferences.",
        icon: "CalendarHeart",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Share Context",
        description:
          "The user explains the situation, goal, comfort level, and boundaries.",
        icon: "MessageCircle",
      },
      {
        number: 2,
        title: "Practice Safely",
        description:
          "The companion suggests respectful options and helps the user practice before real conversations.",
        icon: "ShieldCheck",
      },
      {
        number: 3,
        title: "Reflect and Improve",
        description:
          "After a conversation or date, the user can reflect and learn what to improve next time.",
        icon: "RefreshCw",
      },
    ] as ProcessStep[],
    techStack: ["React Native", "Next.js", "TypeScript", "LLM APIs", "PostgreSQL", "Moderation"],
    integrations: [
      {
        name: "Safety Moderation",
        icon: "Shield",
        description:
          "Detect and block harmful, coercive, or abusive guidance patterns.",
      },
      {
        name: "User Journal",
        icon: "BookOpen",
        description:
          "Store reflections, goals, and preferences privately for better coaching.",
      },
      {
        name: "Mobile Notifications",
        icon: "Bell",
        description:
          "Send gentle reminders for planned dates, reflections, and personal goals.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "First-Date Preparation",
        description:
          "Help users prepare topics, boundaries, and simple plans before meeting someone.",
        icon: "Calendar",
      },
      {
        title: "Message Review",
        description:
          "Review messages for tone, clarity, and respect before sending.",
        icon: "MailCheck",
      },
      {
        title: "Confidence Building",
        description:
          "Support users who feel nervous or awkward with practical communication practice.",
        icon: "Heart",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What does AI Dating Companion do?",
        answer:
          "It helps users practice respectful dating conversations, review message tone, plan dates, and build communication confidence.",
        category: "products",
      },
      {
        question: "Is it designed to manipulate people?",
        answer:
          "No. The product is designed around consent, respect, boundaries, and self-awareness. It should help people communicate better, not pressure or deceive others.",
        category: "support",
      },
      {
        question: "Can the app help with awkward conversations?",
        answer:
          "Yes. It can suggest calm, respectful ways to handle silence, nervousness, unclear expectations, and follow-up conversations.",
        category: "products",
      },
    ] as FAQItem[],
  },
  {
    slug: "send-capital-market-data",
    name: "SEND Capital Market Data",
    tagline: "Market data and finance information for Ethiopia at send.com.et.",
    description:
      "SEND Capital Market Data is a finance information platform for Ethiopia. It is designed to help investors, professionals, analysts, students, and institutions find cleaner information about capital markets, companies, securities, financial news, disclosures, market education, and data sources. SEND focuses on making Ethiopian financial information easier to discover, compare, and understand.",
    shortDescription:
      "Finance and capital market information platform for Ethiopia, available through send.com.et.",
    icon: "LineChart",
    heroImage: "/images/products/send-capital-market-data.png",
    features: [
      {
        title: "Market Data Pages",
        description:
          "Organize securities, companies, market categories, disclosures, and finance information in searchable pages.",
        icon: "LineChart",
      },
      {
        title: "Financial News and Education",
        description:
          "Publish market explainers, finance updates, guides, and educational content for Ethiopian users.",
        icon: "Newspaper",
      },
      {
        title: "Company Profiles",
        description:
          "Create structured company pages with key facts, documents, disclosures, and related market information.",
        icon: "Building2",
      },
      {
        title: "Research-Friendly Search",
        description:
          "Make finance and market data easier to find through clean indexing, filters, and structured content.",
        icon: "Search",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Collect Sources",
        description:
          "Bring market, company, education, news, and disclosure information into organized workflows.",
        icon: "Database",
      },
      {
        number: 2,
        title: "Structure Content",
        description:
          "Turn raw information into company profiles, market pages, guides, and searchable finance content.",
        icon: "LayoutList",
      },
      {
        number: 3,
        title: "Publish and Update",
        description:
          "Keep users informed with updated pages, explainers, and data references.",
        icon: "UploadCloud",
      },
    ] as ProcessStep[],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Search indexing", "Analytics", "CMS"],
    integrations: [
      {
        name: "Content Management",
        icon: "FileEdit",
        description:
          "Manage finance articles, market education, disclosures, and company profiles.",
      },
      {
        name: "Search",
        icon: "Search",
        description:
          "Index market and finance information so users can find what they need faster.",
      },
      {
        name: "Analytics",
        icon: "BarChart3",
        description:
          "Track topic demand, content performance, and user interest across finance categories.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Investors and Analysts",
        description:
          "Find company, market, and financial information from one focused Ethiopian finance portal.",
        icon: "LineChart",
      },
      {
        title: "Students and Professionals",
        description:
          "Learn market concepts and follow Ethiopian finance updates through educational content.",
        icon: "GraduationCap",
      },
      {
        title: "Financial Institutions",
        description:
          "Publish structured information, disclosures, updates, and educational material for market users.",
        icon: "Landmark",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What is SEND?",
        answer:
          "SEND is a finance information and capital market data platform for Ethiopia, available through send.com.et.",
        category: "products",
      },
      {
        question: "Is SEND investment advice?",
        answer:
          "No. SEND is designed for information and education. Users should verify data and seek licensed advice before making financial decisions.",
        category: "support",
      },
      {
        question: "Who is SEND built for?",
        answer:
          "It is built for investors, students, analysts, professionals, institutions, and anyone researching Ethiopia's finance and capital market landscape.",
        category: "products",
      },
    ] as FAQItem[],
  },
  {
    slug: "broker-back-office-system",
    name: "Broker Back Office System",
    tagline:
      "Operations, reconciliation, settlement, accounting, and compliance workflows for brokerages.",
    description:
      "The Broker Back Office System helps securities brokers and capital market firms manage the operational work that happens after orders are placed. It supports client records, trade capture, allocation, settlement tracking, fees, commissions, reconciliation, statements, accounting exports, and operational controls. The goal is to reduce manual spreadsheets and give brokerage teams a reliable system of record.",
    shortDescription:
      "Brokerage operations platform for trade capture, settlement tracking, reconciliation, statements, fees, commissions, and accounting exports.",
    icon: "Briefcase",
    heroImage: "/images/products/broker-back-office-system.png",
    features: [
      {
        title: "Trade and Settlement Records",
        description:
          "Track executed trades, settlement dates, client allocations, fees, taxes, commissions, and status changes.",
        icon: "ReceiptText",
      },
      {
        title: "Client and Account Management",
        description:
          "Maintain client profiles, account documents, risk classifications, contacts, and operational status.",
        icon: "Users",
      },
      {
        title: "Reconciliation Workflows",
        description:
          "Compare trades, cash, fees, and settlement records against internal and external files.",
        icon: "GitCompare",
      },
      {
        title: "Statements and Reports",
        description:
          "Generate client statements, management reports, operational dashboards, and export files.",
        icon: "FileBarChart",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Import or Capture Trades",
        description:
          "Bring execution and allocation data into a controlled back-office workflow.",
        icon: "Upload",
      },
      {
        number: 2,
        title: "Process Operations",
        description:
          "Calculate fees, track settlement, reconcile records, and manage client account updates.",
        icon: "Settings",
      },
      {
        number: 3,
        title: "Report and Export",
        description:
          "Produce statements, operational reports, compliance files, and accounting exports.",
        icon: "Download",
      },
    ] as ProcessStep[],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Workflow engine", "Audit logs", "API"],
    integrations: [
      {
        name: "Order Management System",
        icon: "ClipboardList",
        description:
          "Receive orders, executions, allocations, and trade status from front-office workflows.",
      },
      {
        name: "Accounting",
        icon: "BookOpen",
        description:
          "Export journal entries, fees, commissions, and settlement records for finance teams.",
      },
      {
        name: "Document Management",
        icon: "FolderOpen",
        description:
          "Link client files, onboarding documents, statements, and operational evidence.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Brokerage Operations",
        description:
          "Replace spreadsheet-based trade operations with a controlled workflow and system of record.",
        icon: "Briefcase",
      },
      {
        title: "Finance and Reconciliation",
        description:
          "Track fees, receivables, payables, cash movements, and accounting exports.",
        icon: "Calculator",
      },
      {
        title: "Compliance Support",
        description:
          "Maintain audit trails, client records, reports, and operational evidence.",
        icon: "ShieldCheck",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What is a broker back office system?",
        answer:
          "It is software that manages brokerage operations after orders are placed, including trade records, settlement, reconciliation, statements, fees, commissions, and reporting.",
        category: "products",
      },
      {
        question: "Can it integrate with an order management system?",
        answer:
          "Yes. It can connect to an OMS to receive order, execution, allocation, and trade status data.",
        category: "technical",
      },
      {
        question: "Does it support audit trails?",
        answer:
          "Yes. Important actions, approvals, edits, imports, exports, and records can be logged for operational review.",
        category: "support",
      },
    ] as FAQItem[],
  },
  {
    slug: "order-management-system",
    name: "Order Management System",
    tagline:
      "Manage client orders, approvals, execution status, and trade workflows in one system.",
    description:
      "The Order Management System is built for capital market participants that need controlled order capture, validation, routing, approval, execution tracking, and order history. It helps front-office and operations teams manage orders from entry to execution and post-trade handoff with cleaner visibility, fewer manual steps, and stronger audit records.",
    shortDescription:
      "Capital market order management system for order capture, validation, approvals, routing, execution tracking, and audit history.",
    icon: "ClipboardList",
    heroImage: "/images/products/order-management-system.png",
    features: [
      {
        title: "Order Capture",
        description:
          "Enter, validate, amend, cancel, and track client orders with structured order fields and required checks.",
        icon: "ClipboardList",
      },
      {
        title: "Approval Controls",
        description:
          "Apply configurable approvals by client, instrument, order value, risk level, or internal policy.",
        icon: "CheckCircle2",
      },
      {
        title: "Execution Tracking",
        description:
          "Track submitted, partially filled, filled, cancelled, rejected, and expired orders through the full lifecycle.",
        icon: "Activity",
      },
      {
        title: "Audit History",
        description:
          "Keep a complete record of order edits, approvals, status changes, comments, and handoff events.",
        icon: "History",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Capture the Order",
        description:
          "Front-office users enter client order details and supporting information.",
        icon: "PenLine",
      },
      {
        number: 2,
        title: "Validate and Approve",
        description:
          "The system checks required fields, limits, controls, and approval rules.",
        icon: "ShieldCheck",
      },
      {
        number: 3,
        title: "Track Execution",
        description:
          "Users monitor status until execution details are handed to back office.",
        icon: "Activity",
      },
    ] as ProcessStep[],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Real-time events", "API", "Audit logs"],
    integrations: [
      {
        name: "Broker Back Office",
        icon: "Briefcase",
        description:
          "Send executed order and allocation data to back-office settlement and reconciliation workflows.",
      },
      {
        name: "Client Portals",
        icon: "Users",
        description:
          "Receive client order requests or expose order status through secure portals.",
      },
      {
        name: "Reporting",
        icon: "BarChart3",
        description:
          "Generate order flow, status, client activity, and operational control reports.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Brokerage Front Office",
        description:
          "Capture and manage customer orders with consistent validation and traceability.",
        icon: "Monitor",
      },
      {
        title: "Operations Teams",
        description:
          "Receive clean order and execution data for back-office processing.",
        icon: "Settings",
      },
      {
        title: "Management Oversight",
        description:
          "Track order volume, status, exceptions, and staff activity in dashboards.",
        icon: "LineChart",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What does an order management system do?",
        answer:
          "It manages the order lifecycle from capture and validation to approval, execution tracking, audit history, and back-office handoff.",
        category: "products",
      },
      {
        question: "Can order approval rules be customized?",
        answer:
          "Yes. Approval rules can be configured around order value, client profile, instrument type, user role, or internal policy.",
        category: "technical",
      },
      {
        question: "Does the system keep order history?",
        answer:
          "Yes. It records changes, comments, approvals, status updates, cancellations, and execution details.",
        category: "support",
      },
    ] as FAQItem[],
  },
  {
    slug: "middle-office-management-system",
    name: "Middle Office Management System",
    tagline:
      "Risk, controls, exceptions, reconciliation, and operational oversight between front and back office.",
    description:
      "The Middle Office Management System helps financial institutions and capital market firms manage the control layer between client-facing teams and back-office operations. It supports exception handling, risk checks, exposure monitoring, reconciliations, approvals, operational dashboards, and control reports so teams can catch issues before they become settlement, compliance, or client service problems.",
    shortDescription:
      "Middle-office platform for risk checks, exceptions, reconciliation, approvals, exposure monitoring, and operational dashboards.",
    icon: "Shield",
    heroImage: "/images/products/middle-office-management-system.png",
    features: [
      {
        title: "Exception Management",
        description:
          "Track failed validations, mismatches, missing documents, late actions, and unresolved operational issues.",
        icon: "AlertTriangle",
      },
      {
        title: "Risk and Exposure Views",
        description:
          "Monitor client, instrument, order, and operational exposure before and after execution.",
        icon: "Gauge",
      },
      {
        title: "Control Dashboards",
        description:
          "Give managers daily visibility into exceptions, approvals, reconciliations, and process bottlenecks.",
        icon: "LayoutDashboard",
      },
      {
        title: "Reconciliation Support",
        description:
          "Compare data between front office, back office, accounting, custody, and external files.",
        icon: "GitCompare",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Collect Control Data",
        description:
          "Pull key records from order, client, back-office, and reporting systems.",
        icon: "Database",
      },
      {
        number: 2,
        title: "Detect Issues",
        description:
          "Flag exceptions, control breaks, missing data, and risk thresholds.",
        icon: "AlertCircle",
      },
      {
        number: 3,
        title: "Resolve and Report",
        description:
          "Assign issues, approve resolutions, and report status to management.",
        icon: "ClipboardCheck",
      },
    ] as ProcessStep[],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Rules engine", "Dashboards", "Audit logs"],
    integrations: [
      {
        name: "Order Management",
        icon: "ClipboardList",
        description:
          "Review order data, status changes, approvals, and exceptions from the OMS.",
      },
      {
        name: "Back Office",
        icon: "Briefcase",
        description:
          "Compare settlement, allocation, fee, and reconciliation records.",
      },
      {
        name: "Risk Reports",
        icon: "Shield",
        description:
          "Export control, exposure, and exception reports for management review.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Operational Control Teams",
        description:
          "Centralize exception handling and daily process oversight.",
        icon: "Shield",
      },
      {
        title: "Risk Managers",
        description:
          "Monitor exposure, unresolved exceptions, and process control gaps.",
        icon: "Gauge",
      },
      {
        title: "Management Reporting",
        description:
          "Give leaders a clear view of daily risk, exceptions, and operational health.",
        icon: "BarChart3",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What is middle office management software?",
        answer:
          "It is software for the control layer between front office and back office, covering risk checks, exceptions, reconciliations, approvals, and operational oversight.",
        category: "products",
      },
      {
        question: "Can it connect to order and back-office systems?",
        answer:
          "Yes. It can integrate with order management, broker back office, accounting, reporting, and document systems.",
        category: "technical",
      },
      {
        question: "Who uses the middle-office system?",
        answer:
          "Risk teams, operations control teams, compliance support teams, supervisors, and management users.",
        category: "products",
      },
    ] as FAQItem[],
  },
  {
    slug: "front-office-management-system",
    name: "Front Office Management System",
    tagline:
      "Client-facing workflows for leads, onboarding, orders, service, and relationship management.",
    description:
      "The Front Office Management System gives brokerages, financial service firms, and client-facing teams one workspace for prospects, onboarding, client communication, service requests, orders, relationship notes, and activity tracking. It helps teams respond faster, keep client context organized, and connect client-facing work to order, middle-office, and back-office systems.",
    shortDescription:
      "Front-office platform for client onboarding, communication, service requests, order intake, relationship notes, and activity tracking.",
    icon: "Monitor",
    heroImage: "/images/products/front-office-management-system.png",
    features: [
      {
        title: "Client Onboarding",
        description:
          "Collect client details, documents, approvals, risk profiles, and onboarding status in one workflow.",
        icon: "UserCheck",
      },
      {
        title: "Relationship Management",
        description:
          "Track calls, meetings, notes, tasks, preferences, and follow-ups for every client relationship.",
        icon: "Handshake",
      },
      {
        title: "Service Requests",
        description:
          "Manage client questions, document requests, complaints, and service tickets with accountability.",
        icon: "Inbox",
      },
      {
        title: "Order Intake",
        description:
          "Capture client order requests and hand them to the order management workflow with clear history.",
        icon: "ClipboardList",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Onboard Clients",
        description:
          "Create client profiles, collect documents, and track required approvals.",
        icon: "UserPlus",
      },
      {
        number: 2,
        title: "Manage Relationships",
        description:
          "Record interactions, follow-ups, tasks, service requests, and relationship history.",
        icon: "MessageSquare",
      },
      {
        number: 3,
        title: "Connect Operations",
        description:
          "Send validated client orders and service actions to the right downstream systems.",
        icon: "Link",
      },
    ] as ProcessStep[],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "CRM workflows", "Document storage", "API"],
    integrations: [
      {
        name: "Order Management",
        icon: "ClipboardList",
        description:
          "Send client order requests to order validation, approval, and execution workflows.",
      },
      {
        name: "Document Management",
        icon: "FolderOpen",
        description:
          "Store client onboarding documents, forms, contracts, and communication records.",
      },
      {
        name: "CRM and Notifications",
        icon: "Bell",
        description:
          "Trigger follow-ups, reminders, assignments, and service notifications.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Brokerage Relationship Managers",
        description:
          "Keep client context, tasks, orders, and service history in one place.",
        icon: "Users",
      },
      {
        title: "Client Onboarding Teams",
        description:
          "Track documents, approvals, and missing requirements for new clients.",
        icon: "UserCheck",
      },
      {
        title: "Customer Service Teams",
        description:
          "Manage requests, complaints, follow-ups, and response accountability.",
        icon: "Headphones",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What is a front office management system?",
        answer:
          "It is software for client-facing teams to manage onboarding, communication, service requests, relationship notes, and order intake.",
        category: "products",
      },
      {
        question: "Can it connect to an order management system?",
        answer:
          "Yes. Client order requests can flow from front office into order validation, approval, and execution workflows.",
        category: "technical",
      },
      {
        question: "Does it replace CRM?",
        answer:
          "It can work as a specialized CRM for financial services or integrate with an existing CRM depending on the organization.",
        category: "products",
      },
    ] as FAQItem[],
  },
  {
    slug: "shareholder-management-system",
    name: "Shareholder Management System",
    tagline:
      "Manage shareholder records, ownership changes, communications, dividends, and reports.",
    description:
      "The Shareholder Management System helps companies, issuers, registrars, and financial institutions maintain accurate shareholder records. It supports shareholder profiles, ownership balances, transfers, corporate actions, dividend workflows, communication lists, document records, and reporting. The system is designed to reduce manual registry work and improve transparency for shareholder administration.",
    shortDescription:
      "Shareholder registry software for ownership records, transfers, dividends, communications, corporate actions, and reports.",
    icon: "Users",
    heroImage: "/images/products/shareholder-management-system.png",
    features: [
      {
        title: "Shareholder Registry",
        description:
          "Maintain shareholder profiles, contact details, identification records, holdings, and account status.",
        icon: "Users",
      },
      {
        title: "Ownership and Transfers",
        description:
          "Track share balances, ownership changes, transfer requests, approvals, and historical records.",
        icon: "Repeat",
      },
      {
        title: "Dividend Workflows",
        description:
          "Prepare dividend lists, payment status, withholding records, and shareholder notices.",
        icon: "Banknote",
      },
      {
        title: "Corporate Actions",
        description:
          "Manage events such as rights issues, splits, consolidations, and shareholder communications.",
        icon: "Megaphone",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Build the Registry",
        description:
          "Import or create shareholder records, holdings, documents, and contact details.",
        icon: "Database",
      },
      {
        number: 2,
        title: "Manage Changes",
        description:
          "Process transfers, updates, corporate actions, dividend workflows, and approvals.",
        icon: "RefreshCw",
      },
      {
        number: 3,
        title: "Communicate and Report",
        description:
          "Generate shareholder lists, notices, dividend files, and management reports.",
        icon: "FileText",
      },
    ] as ProcessStep[],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Audit logs", "Reporting", "Document storage"],
    integrations: [
      {
        name: "Payment Systems",
        icon: "CreditCard",
        description:
          "Support dividend payment status tracking and reconciliation workflows.",
      },
      {
        name: "Document Storage",
        icon: "FolderOpen",
        description:
          "Attach shareholder forms, identification files, transfer documents, and communications.",
      },
      {
        name: "Reporting Exports",
        icon: "Download",
        description:
          "Export shareholder lists, ownership reports, dividend files, and communication lists.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Issuers and Companies",
        description:
          "Maintain clean shareholder records and manage ownership administration.",
        icon: "Building2",
      },
      {
        title: "Registrars",
        description:
          "Process shareholder changes, transfers, dividend records, and communications.",
        icon: "ClipboardList",
      },
      {
        title: "Investor Relations",
        description:
          "Keep accurate contact lists, notices, and shareholder communication history.",
        icon: "MessageSquare",
      },
    ] as UseCase[],
    faq: [
      {
        question: "What is shareholder management software?",
        answer:
          "It is software for maintaining shareholder records, ownership balances, transfers, dividend workflows, corporate actions, and communications.",
        category: "products",
      },
      {
        question: "Can it track ownership history?",
        answer:
          "Yes. The system can keep a history of balances, transfers, approvals, documents, and changes over time.",
        category: "technical",
      },
      {
        question: "Does it support dividend workflows?",
        answer:
          "Yes. It can help prepare dividend lists, track payment status, manage withholding records, and generate shareholder notices.",
        category: "products",
      },
    ] as FAQItem[],
  },
];
