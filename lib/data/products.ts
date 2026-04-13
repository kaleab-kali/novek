import type {
  Product,
  ProductFeature,
  ProcessStep,
  Integration,
  UseCase,
  FAQItem,
} from "@/lib/types";

export const products: Product[] = [
  // ── Tax Intelligence Platform ──────────────────────────────────────
  {
    slug: "tax-intelligence-platform",
    name: "Tax Intelligence Platform",
    tagline: "Simplify tax compliance. Maximize fiscal clarity.",
    description:
      "The NOVEK Tax Intelligence Platform is a comprehensive tax compliance and analytics solution built for Ethiopian businesses navigating complex and evolving fiscal regulations. From automated VAT and withholding-tax calculations to real-time reporting aligned with the Ethiopian Revenue and Customs Authority (ERCA) requirements, the platform eliminates manual errors and keeps your organization audit-ready year-round. Advanced analytics dashboards surface actionable insights so finance teams can forecast liabilities, identify savings opportunities, and make data-driven decisions with confidence.",
    shortDescription:
      "End-to-end tax compliance and intelligence software that automates calculations, filing, and reporting for Ethiopian businesses.",
    icon: "Calculator",
    heroImage: "/images/products/tax-intelligence-platform.png",
    features: [
      {
        title: "Automated Tax Calculations",
        description:
          "Automatically compute VAT, TOT, withholding tax, and excise duties based on the latest Ethiopian tax schedules. Rules update in real time as legislation changes.",
        icon: "CalculatorIcon",
        subFeatures: [
          "VAT and TOT auto-classification",
          "Withholding tax rate lookup",
          "Excise duty computation",
          "Multi-currency support",
        ],
      },
      {
        title: "ERCA-Aligned Reporting",
        description:
          "Generate filing-ready reports that comply with ERCA formats. Export declarations, summaries, and reconciliation statements with a single click.",
        icon: "FileText",
        subFeatures: [
          "One-click declaration export",
          "Period-over-period reconciliation",
          "Audit trail generation",
        ],
      },
      {
        title: "Tax Analytics Dashboard",
        description:
          "Interactive dashboards visualize tax liabilities, effective rates, and payment timelines across business units, giving leadership a clear fiscal picture.",
        icon: "BarChart3",
      },
      {
        title: "Document Management",
        description:
          "Store and index invoices, receipts, and tax certificates in a centralized vault with full-text search and automated categorization.",
        icon: "FolderOpen",
      },
      {
        title: "Multi-Entity Support",
        description:
          "Manage tax obligations for multiple branches, subsidiaries, or TIN registrations from a single consolidated interface.",
        icon: "Building2",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Connect Your Data",
        description:
          "Integrate with your existing accounting software or ERP to import transaction data automatically.",
        icon: "Link",
      },
      {
        number: 2,
        title: "Configure Tax Rules",
        description:
          "Set up your tax profiles, entity structures, and applicable schedules. The system pre-loads current Ethiopian tax rates.",
        icon: "Settings",
      },
      {
        number: 3,
        title: "Automate & Monitor",
        description:
          "Let the platform calculate taxes in real time. Review dashboards, receive deadline alerts, and approve filings before submission.",
        icon: "Zap",
      },
      {
        number: 4,
        title: "File & Archive",
        description:
          "Export ERCA-compliant reports and declarations. All filings are archived with a tamper-proof audit trail.",
        icon: "Archive",
      },
    ] as ProcessStep[],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "Docker",
      "Apache Kafka",
    ],
    integrations: [
      {
        name: "Peachtree / Sage",
        icon: "Database",
        description:
          "Bi-directional sync with Peachtree and Sage accounting entries for seamless tax data ingestion.",
      },
      {
        name: "NOVEK ERP",
        icon: "Layers",
        description:
          "Native integration with NOVEK ERP modules for a unified finance and tax workflow.",
      },
      {
        name: "Banking APIs",
        icon: "Landmark",
        description:
          "Connect to major Ethiopian banks for automatic payment reconciliation and withholding certificate matching.",
      },
      {
        name: "Excel / CSV Import",
        icon: "Sheet",
        description:
          "Bulk import historical data or third-party transactions via structured spreadsheet templates.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Mid-Size Manufacturers",
        description:
          "Automate VAT on raw-material purchases and finished-goods sales across multiple warehouses and regional branches.",
        icon: "Factory",
      },
      {
        title: "Import / Export Traders",
        description:
          "Calculate customs duties, excise taxes, and surtaxes on cross-border transactions with up-to-date tariff schedules.",
        icon: "Ship",
      },
      {
        title: "Professional Service Firms",
        description:
          "Manage withholding tax obligations on service invoices and ensure timely certificate issuance to clients.",
        icon: "Briefcase",
      },
      {
        title: "Non-Profit Organizations",
        description:
          "Track tax-exempt status documentation, generate donor receipts, and maintain compliance with charity regulations.",
        icon: "Heart",
      },
    ] as UseCase[],
    faq: [
      {
        question: "Does the platform stay current with Ethiopian tax law changes?",
        answer:
          "Yes. Our compliance team monitors ERCA proclamations and directives continuously. Tax rule updates are pushed to your instance automatically, so calculations always reflect the latest legislation.",
        category: "products",
      },
      {
        question: "Can I use the platform if I already have accounting software?",
        answer:
          "Absolutely. The Tax Intelligence Platform integrates with popular accounting tools like Peachtree, Sage, and QuickBooks, as well as the NOVEK ERP. You can also import data via Excel or CSV.",
        category: "technical",
      },
      {
        question: "Is my financial data secure?",
        answer:
          "All data is encrypted at rest and in transit. The platform runs on ISO 27001-aligned infrastructure with role-based access controls, multi-factor authentication, and a complete audit log.",
        category: "support",
      },
      {
        question: "How long does implementation take?",
        answer:
          "A typical deployment takes two to four weeks, including data migration, rule configuration, and user training. We provide dedicated onboarding support throughout the process.",
        category: "general",
      },
      {
        question: "Does the platform support multiple TINs?",
        answer:
          "Yes. You can manage multiple Taxpayer Identification Numbers under a single organizational account with consolidated or per-entity reporting views.",
        category: "products",
      },
    ] as FAQItem[],
  },

  // ── Restaurant Management System ───────────────────────────────────
  {
    slug: "restaurant-management-system",
    name: "Restaurant Management System",
    tagline: "Run every table, ticket, and till from one platform.",
    description:
      "The NOVEK Restaurant Management System is an all-in-one platform designed to streamline front-of-house and back-of-house operations for restaurants, cafes, and food-service chains across Ethiopia. From intuitive point-of-sale terminals and real-time kitchen display systems to inventory tracking, staff scheduling, and customer loyalty programs, the system gives operators complete visibility and control over daily operations. Built-in analytics turn raw sales data into insights that help you reduce waste, optimize menus, and grow revenue.",
    shortDescription:
      "Full-service restaurant operations platform covering POS, kitchen management, inventory, staff scheduling, and analytics.",
    icon: "UtensilsCrossed",
    heroImage: "/images/products/restaurant-management-system.png",
    features: [
      {
        title: "Smart Point of Sale",
        description:
          "Fast, intuitive POS terminals with table mapping, split-bill support, and offline mode so service never stops even when connectivity is unreliable.",
        icon: "Monitor",
        subFeatures: [
          "Table and seat mapping",
          "Split and merge bills",
          "Offline resilience",
          "Multi-payment methods",
        ],
      },
      {
        title: "Kitchen Display System",
        description:
          "Digital order routing sends tickets to the right kitchen station instantly, with priority indicators and estimated completion times.",
        icon: "ChefHat",
      },
      {
        title: "Inventory & Procurement",
        description:
          "Track ingredient stock levels in real time, set reorder thresholds, and generate purchase orders to suppliers automatically when supplies run low.",
        icon: "Package",
        subFeatures: [
          "Real-time stock tracking",
          "Auto reorder alerts",
          "Supplier management",
          "Waste logging",
        ],
      },
      {
        title: "Staff Scheduling & Payroll",
        description:
          "Build shift schedules, track clock-in/clock-out, and calculate payroll including tips and overtime in one place.",
        icon: "Users",
      },
      {
        title: "Customer Loyalty & CRM",
        description:
          "Launch loyalty programs, issue digital coupons, and capture customer preferences to personalize the dining experience and drive repeat visits.",
        icon: "Star",
      },
      {
        title: "Sales & Menu Analytics",
        description:
          "Analyze best sellers, peak hours, average ticket size, and food-cost ratios to make data-driven menu and staffing decisions.",
        icon: "TrendingUp",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Set Up Your Venue",
        description:
          "Configure floor plans, menu items, pricing tiers, and kitchen stations in the management console.",
        icon: "MapPin",
      },
      {
        number: 2,
        title: "Equip Your Team",
        description:
          "Deploy POS terminals and kitchen displays. Staff are onboarded with role-based access in under an hour.",
        icon: "Tablet",
      },
      {
        number: 3,
        title: "Serve & Track",
        description:
          "Orders flow from table to kitchen to checkout. Every transaction, ingredient movement, and staff action is recorded automatically.",
        icon: "Activity",
      },
      {
        number: 4,
        title: "Analyze & Optimize",
        description:
          "Use built-in dashboards to review daily performance, adjust menus, and plan promotions based on real data.",
        icon: "PieChart",
      },
    ] as ProcessStep[],
    techStack: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Electron",
      "Docker",
      "MQTT",
    ],
    integrations: [
      {
        name: "Payment Gateways",
        icon: "CreditCard",
        description:
          "Accept payments via telebirr, CBE Birr, major card networks, and cash with unified reconciliation.",
      },
      {
        name: "Delivery Platforms",
        icon: "Truck",
        description:
          "Receive orders from delivery apps directly into the POS without manual re-entry.",
      },
      {
        name: "Accounting Software",
        icon: "BookOpen",
        description:
          "Sync daily sales summaries and expense records to your accounting platform automatically.",
      },
      {
        name: "NOVEK Tax Platform",
        icon: "Calculator",
        description:
          "Push transaction data to the Tax Intelligence Platform for automated VAT and TOT compliance.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Fine-Dining Restaurants",
        description:
          "Manage multi-course menus, wine pairings, and table reservations with a polished guest-facing experience.",
        icon: "Wine",
      },
      {
        title: "Quick-Service Chains",
        description:
          "Standardize operations across multiple outlets with centralized menu management, pricing, and reporting.",
        icon: "Store",
      },
      {
        title: "Cafes & Coffee Shops",
        description:
          "Speed up counter service, manage loyalty stamp cards, and track daily bean and pastry inventory.",
        icon: "Coffee",
      },
    ] as UseCase[],
    faq: [
      {
        question: "Does the POS work without internet?",
        answer:
          "Yes. The POS terminal operates fully offline and synchronizes transactions when connectivity is restored, ensuring uninterrupted service.",
        category: "technical",
      },
      {
        question: "Can I manage multiple restaurant branches?",
        answer:
          "Yes. The system supports multi-location management with centralized menus, pricing, and consolidated reporting across all branches.",
        category: "products",
      },
      {
        question: "What hardware do I need?",
        answer:
          "The system runs on standard Android tablets, Windows POS terminals, or iPads. We also supply optional receipt printers, kitchen display screens, and barcode scanners.",
        category: "technical",
      },
      {
        question: "How does the loyalty program work?",
        answer:
          "Customers earn points on each purchase that can be redeemed for discounts or free items. You define the earn and burn rules, and the system tracks everything automatically.",
        category: "products",
      },
      {
        question: "Is training provided?",
        answer:
          "Every deployment includes hands-on training for managers and floor staff, plus a library of video tutorials and a dedicated support line during the first 90 days.",
        category: "support",
      },
    ] as FAQItem[],
  },

  // ── NOVEK ERP ──────────────────────────────────────────────────────
  {
    slug: "novek-erp",
    name: "NOVEK ERP",
    tagline: "One platform to run your entire business.",
    description:
      "NOVEK ERP is a modular enterprise resource planning system engineered for the operational realities of Ethiopian businesses. It unifies finance, procurement, human resources, inventory, manufacturing, and project management into a single platform, eliminating data silos and giving leadership a real-time, 360-degree view of the organization. With configurable workflows, role-based access, and localization for Ethiopian accounting standards and Amharic-language interfaces, NOVEK ERP helps businesses scale with confidence while staying compliant.",
    shortDescription:
      "Modular ERP platform unifying finance, HR, procurement, inventory, and operations for Ethiopian enterprises.",
    icon: "Layers",
    heroImage: "/images/products/novek-erp.png",
    features: [
      {
        title: "Financial Management",
        description:
          "General ledger, accounts payable and receivable, budgeting, and bank reconciliation with full support for Ethiopian birr and multi-currency transactions.",
        icon: "Wallet",
        subFeatures: [
          "General ledger & chart of accounts",
          "AP / AR automation",
          "Budgeting & forecasting",
          "Bank reconciliation",
        ],
      },
      {
        title: "Human Resource Management",
        description:
          "End-to-end HR from recruitment and onboarding through attendance tracking, leave management, and payroll processing compliant with Ethiopian labor law.",
        icon: "UserCheck",
        subFeatures: [
          "Employee lifecycle management",
          "Attendance & leave tracking",
          "Payroll with pension & tax",
          "Performance reviews",
        ],
      },
      {
        title: "Procurement & Supply Chain",
        description:
          "Automate purchase requisitions, vendor evaluations, purchase orders, and goods receipt with approval workflows that match your organization's hierarchy.",
        icon: "ShoppingCart",
      },
      {
        title: "Inventory & Warehouse",
        description:
          "Manage stock across multiple warehouses with lot tracking, serial numbers, cycle counts, and automated replenishment rules.",
        icon: "Warehouse",
      },
      {
        title: "Project & Task Management",
        description:
          "Plan projects, allocate resources, track milestones, and monitor budgets to deliver on time and within scope.",
        icon: "ClipboardList",
      },
      {
        title: "Business Intelligence",
        description:
          "Drag-and-drop report builder and pre-built KPI dashboards for finance, HR, inventory, and sales give decision-makers instant insight.",
        icon: "BarChart2",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Discovery & Planning",
        description:
          "Our consultants map your existing processes, identify automation opportunities, and design a phased rollout plan tailored to your organization.",
        icon: "Search",
      },
      {
        number: 2,
        title: "Configuration & Migration",
        description:
          "We configure modules, import master data, and set up approval workflows, chart of accounts, and user roles.",
        icon: "Database",
      },
      {
        number: 3,
        title: "Training & Go-Live",
        description:
          "Department-specific training ensures every user is confident before the system goes live. Parallel running is supported for a smooth transition.",
        icon: "GraduationCap",
      },
      {
        number: 4,
        title: "Continuous Improvement",
        description:
          "Post-launch support includes regular health checks, feature updates, and optimization recommendations as your business evolves.",
        icon: "RefreshCw",
      },
    ] as ProcessStep[],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
    ],
    integrations: [
      {
        name: "Tax Intelligence Platform",
        icon: "Calculator",
        description:
          "Seamless data flow from financial transactions to tax calculations and ERCA reporting.",
      },
      {
        name: "Banking & Payment",
        icon: "Landmark",
        description:
          "Direct integration with Ethiopian banks for payment processing, salary disbursement, and reconciliation.",
      },
      {
        name: "Third-Party APIs",
        icon: "Plug",
        description:
          "Open REST API enables integration with any external system, from e-commerce platforms to government portals.",
      },
      {
        name: "NOVEK CRM",
        icon: "Users",
        description:
          "Sync customer data, sales orders, and service records between ERP and CRM for a unified customer view.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Manufacturing Companies",
        description:
          "Plan production schedules, manage bills of materials, and track work orders from raw materials to finished goods.",
        icon: "Factory",
      },
      {
        title: "Trading & Distribution",
        description:
          "Optimize procurement cycles, manage multi-warehouse inventory, and streamline order fulfillment for distributors.",
        icon: "Truck",
      },
      {
        title: "Service Organizations",
        description:
          "Track project profitability, manage consultant utilization, and automate time-and-expense billing.",
        icon: "Briefcase",
      },
      {
        title: "NGOs & Development Agencies",
        description:
          "Manage donor-funded projects with grant accounting, restricted fund tracking, and donor reporting templates.",
        icon: "Globe",
      },
    ] as UseCase[],
    faq: [
      {
        question: "Can I start with one module and add more later?",
        answer:
          "Yes. NOVEK ERP is fully modular. Most clients begin with Finance and HR, then add Procurement, Inventory, or other modules as their needs grow.",
        category: "products",
      },
      {
        question: "Does it support Amharic?",
        answer:
          "The system supports Amharic and English interfaces, including Amharic date formatting (Ethiopian calendar) and number localization.",
        category: "technical",
      },
      {
        question: "How is data migrated from our legacy system?",
        answer:
          "Our implementation team provides structured migration templates and automated import tools. We validate all data before go-live to ensure accuracy.",
        category: "technical",
      },
      {
        question: "Is the ERP available as a cloud solution?",
        answer:
          "Yes. NOVEK ERP is offered as a cloud-hosted SaaS solution or as an on-premise deployment, depending on your organization's requirements and policies.",
        category: "general",
      },
      {
        question: "What kind of support is included?",
        answer:
          "All subscriptions include email and phone support during business hours, a knowledge base, and quarterly system health checks. Priority and 24/7 support tiers are also available.",
        category: "support",
      },
    ] as FAQItem[],
  },

  // ── Property Management System ─────────────────────────────────────
  {
    slug: "property-management-system",
    name: "Property Management System",
    tagline: "Manage every property, lease, and payment in one place.",
    description:
      "The NOVEK Property Management System is purpose-built for Ethiopian real-estate owners, property managers, and developers who need a centralized platform to oversee residential, commercial, and mixed-use portfolios. The system covers the entire property lifecycle, from listing and tenant screening through lease management, rent collection, maintenance tracking, and financial reporting. Automated rent reminders, digital lease agreements, and an owner portal ensure transparency and reduce administrative overhead, so you can focus on growing your portfolio.",
    shortDescription:
      "Centralized property and lease management platform for landlords, property managers, and real-estate developers.",
    icon: "Building",
    heroImage: "/images/products/property-management-system.png",
    features: [
      {
        title: "Lease & Tenant Management",
        description:
          "Create, store, and manage digital lease agreements. Track tenant information, lease terms, renewal dates, and security deposits in one organized view.",
        icon: "FileSignature",
        subFeatures: [
          "Digital lease creation",
          "Automated renewal reminders",
          "Tenant screening records",
          "Security deposit tracking",
        ],
      },
      {
        title: "Rent Collection & Invoicing",
        description:
          "Automate rent invoicing, send payment reminders via SMS and email, and track payment status across all units in real time.",
        icon: "Receipt",
        subFeatures: [
          "Auto-generated invoices",
          "SMS & email reminders",
          "Partial payment tracking",
          "Late fee automation",
        ],
      },
      {
        title: "Maintenance Request Tracking",
        description:
          "Tenants submit maintenance requests through a self-service portal. Property managers assign, prioritize, and track work orders through completion.",
        icon: "Wrench",
      },
      {
        title: "Owner & Investor Portal",
        description:
          "Give property owners real-time visibility into occupancy, income, expenses, and net operating income through a dedicated dashboard.",
        icon: "LayoutDashboard",
      },
      {
        title: "Financial Reporting",
        description:
          "Generate income statements, expense reports, and cash-flow analyses per property, portfolio, or owner with exportable, audit-ready formats.",
        icon: "FileSpreadsheet",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Register Your Portfolio",
        description:
          "Add properties, units, and associated details such as floor plans, amenities, and photos to the platform.",
        icon: "PlusCircle",
      },
      {
        number: 2,
        title: "Onboard Tenants",
        description:
          "Record tenant profiles, execute digital leases, and configure rent schedules and payment methods.",
        icon: "UserPlus",
      },
      {
        number: 3,
        title: "Automate Operations",
        description:
          "Rent invoices, reminders, and maintenance workflows run on autopilot, freeing your team to focus on tenant relations and growth.",
        icon: "Repeat",
      },
    ] as ProcessStep[],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Node.js",
      "Redis",
      "Twilio",
      "AWS S3",
    ],
    integrations: [
      {
        name: "Mobile Money",
        icon: "Smartphone",
        description:
          "Accept rent payments via telebirr, CBE Birr, and other mobile money platforms popular in Ethiopia.",
      },
      {
        name: "NOVEK ERP",
        icon: "Layers",
        description:
          "Sync financial data with NOVEK ERP for consolidated accounting across your real-estate and other business operations.",
      },
      {
        name: "SMS Gateways",
        icon: "MessageSquare",
        description:
          "Automated SMS notifications for rent reminders, maintenance updates, and lease renewal alerts.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Residential Landlords",
        description:
          "Manage apartment complexes and rental houses with automated invoicing, tenant communication, and maintenance tracking.",
        icon: "Home",
      },
      {
        title: "Commercial Property Managers",
        description:
          "Oversee office buildings, retail spaces, and warehouses with lease-specific billing terms and CAM charge allocation.",
        icon: "Building2",
      },
      {
        title: "Real-Estate Developers",
        description:
          "Track unit sales, manage handover schedules, and transition sold units into long-term property management.",
        icon: "Hammer",
      },
      {
        title: "Property Management Companies",
        description:
          "Manage portfolios across multiple owners with segregated reporting, owner portals, and commission tracking.",
        icon: "FolderKanban",
      },
    ] as UseCase[],
    faq: [
      {
        question: "Can tenants pay rent through the platform?",
        answer:
          "Yes. Tenants can pay via mobile money (telebirr, CBE Birr), bank transfer, or card. The system records payments automatically and updates balances in real time.",
        category: "products",
      },
      {
        question: "How are maintenance requests handled?",
        answer:
          "Tenants submit requests through a web or mobile portal. Managers receive notifications, assign technicians, and track the request through to resolution with timestamped updates.",
        category: "products",
      },
      {
        question: "Can I manage properties in different cities?",
        answer:
          "Absolutely. The platform supports multi-location portfolios with location-based filtering, region-specific reporting, and remote team access.",
        category: "general",
      },
      {
        question: "Is the Ethiopian calendar supported?",
        answer:
          "Yes. Lease dates, invoicing schedules, and reports can be viewed in either the Ethiopian or Gregorian calendar.",
        category: "technical",
      },
    ] as FAQItem[],
  },

  // ── LuX AI ─────────────────────────────────────────────────────────
  {
    slug: "lux-ai",
    name: "LuX AI",
    tagline: "Turn every guest interaction into revenue.",
    description:
      "LuX AI is a hospitality-focused artificial intelligence engine that identifies and delivers personalized upsell and cross-sell opportunities throughout the guest journey. From pre-arrival room upgrades and spa packages to in-stay dining recommendations and late-checkout offers, LuX AI analyzes guest profiles, booking data, and real-time behavioral signals to present the right offer at the right moment through the right channel. The result is measurably higher ancillary revenue per guest and elevated satisfaction scores, all without adding pressure on front-desk staff.",
    shortDescription:
      "AI-powered hospitality upsell engine that delivers personalized offers to hotel guests at every touchpoint.",
    icon: "Sparkles",
    heroImage: "/images/products/lux-ai.png",
    features: [
      {
        title: "Guest Intelligence Engine",
        description:
          "Aggregates booking history, loyalty tier, preferences, and real-time behavior to build a dynamic guest profile that powers personalization.",
        icon: "Brain",
        subFeatures: [
          "360-degree guest profiles",
          "Behavioral signal tracking",
          "Preference learning",
          "Loyalty tier integration",
        ],
      },
      {
        title: "Smart Offer Engine",
        description:
          "Machine-learning models determine the optimal offer, price point, and delivery timing to maximize conversion while respecting guest experience.",
        icon: "Target",
      },
      {
        title: "Omnichannel Delivery",
        description:
          "Presents offers via email, SMS, in-app messaging, web check-in portals, and front-desk prompts, meeting guests wherever they are.",
        icon: "Send",
        subFeatures: [
          "Pre-arrival email campaigns",
          "In-stay mobile notifications",
          "Front-desk guided selling",
          "Post-stay re-engagement",
        ],
      },
      {
        title: "Revenue Analytics",
        description:
          "Track upsell revenue, conversion rates, and average revenue per guest across properties. Identify top-performing offers and underperforming segments.",
        icon: "DollarSign",
      },
      {
        title: "A/B Testing Framework",
        description:
          "Test offer copy, pricing, imagery, and delivery timing to continuously improve conversion rates with statistical rigor.",
        icon: "FlaskConical",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Connect Your PMS",
        description:
          "Integrate LuX AI with your property management system to ingest reservation, guest, and inventory data.",
        icon: "Plug",
      },
      {
        number: 2,
        title: "Define Your Catalog",
        description:
          "Configure upsell and cross-sell offers: room upgrades, F&B packages, spa treatments, experiences, and more.",
        icon: "ListPlus",
      },
      {
        number: 3,
        title: "AI Takes Over",
        description:
          "The engine matches guests to offers, optimizes pricing and timing, and delivers personalized recommendations automatically.",
        icon: "Bot",
      },
      {
        number: 4,
        title: "Measure & Refine",
        description:
          "Review revenue dashboards, analyze conversion funnels, and run A/B tests to continually improve performance.",
        icon: "LineChart",
      },
    ] as ProcessStep[],
    techStack: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "Docker",
      "AWS",
    ],
    integrations: [
      {
        name: "Property Management Systems",
        icon: "Building",
        description:
          "Pre-built connectors for Opera, Mews, NOVEK HMS, and other leading hotel PMS platforms.",
      },
      {
        name: "Channel Managers",
        icon: "Globe",
        description:
          "Sync real-time availability and rate data from channel managers to power dynamic upgrade pricing.",
      },
      {
        name: "CRM & Loyalty",
        icon: "Heart",
        description:
          "Enrich guest profiles with loyalty data and push earned points or tier credits back to your CRM.",
      },
      {
        name: "Payment Processors",
        icon: "CreditCard",
        description:
          "Secure in-flow payment capture for upsell purchases with PCI-compliant tokenized transactions.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Luxury & Boutique Hotels",
        description:
          "Offer curated room upgrades, welcome amenities, and bespoke experiences that align with high-end guest expectations.",
        icon: "Crown",
      },
      {
        title: "Resort Properties",
        description:
          "Bundle spa, dining, and activity packages tailored to family, couple, or group travel segments.",
        icon: "Palmtree",
      },
      {
        title: "Business Hotels",
        description:
          "Promote early check-in, late checkout, airport transfers, and meeting-room add-ons to corporate travelers.",
        icon: "Briefcase",
      },
    ] as UseCase[],
    faq: [
      {
        question: "How does LuX AI know which offer to show each guest?",
        answer:
          "The engine combines booking attributes (room type, length of stay, rate code), historical behavior, loyalty status, and real-time signals to score and rank available offers for each guest using machine learning.",
        category: "products",
      },
      {
        question: "Will guests feel like they are being spammed?",
        answer:
          "No. LuX AI enforces frequency caps, respects opt-out preferences, and only presents offers with a high predicted relevance score. The goal is a helpful, concierge-like experience, not aggressive selling.",
        category: "products",
      },
      {
        question: "How quickly can we see results?",
        answer:
          "Most properties see measurable uplift in ancillary revenue within the first 30 days. The AI model improves continuously as it collects more guest interaction data.",
        category: "general",
      },
      {
        question: "Does LuX AI work with our existing PMS?",
        answer:
          "LuX AI ships with pre-built connectors for Opera, Mews, Cloudbeds, and NOVEK HMS. Custom integrations with other systems are supported via our API.",
        category: "technical",
      },
      {
        question: "What data does LuX AI use, and is it GDPR compliant?",
        answer:
          "LuX AI uses reservation, transactional, and behavioral data. All processing complies with GDPR and local data-protection regulations, with full consent management and data-retention controls.",
        category: "support",
      },
    ] as FAQItem[],
  },

  // ── NOVEK CRM ──────────────────────────────────────────────────────
  {
    slug: "novek-crm",
    name: "NOVEK CRM",
    tagline: "Build stronger relationships. Close more deals.",
    description:
      "NOVEK CRM is a customer relationship management platform built for the way Ethiopian businesses sell, serve, and grow. It centralizes contacts, tracks every interaction across phone, email, and in-person meetings, and automates the sales pipeline from lead capture to deal closure. Marketing automation tools let you nurture prospects with targeted campaigns, while a built-in service desk ensures post-sale support is tracked and resolved efficiently. With Amharic-language support, local payment integrations, and mobile-first design, NOVEK CRM empowers sales and service teams to work smarter wherever they are.",
    shortDescription:
      "Customer relationship management platform with sales pipeline, marketing automation, and service desk built for Ethiopian businesses.",
    icon: "Users",
    heroImage: "/images/products/novek-crm.png",
    features: [
      {
        title: "Contact & Account Management",
        description:
          "Maintain a single source of truth for every customer and prospect with rich profiles, interaction history, and relationship mapping.",
        icon: "ContactRound",
        subFeatures: [
          "Unified contact database",
          "Interaction timeline",
          "Company hierarchy mapping",
          "Custom fields & tags",
        ],
      },
      {
        title: "Sales Pipeline & Forecasting",
        description:
          "Visualize your pipeline with drag-and-drop deal stages, weighted forecasts, and activity-based selling metrics that keep reps accountable.",
        icon: "TrendingUp",
        subFeatures: [
          "Kanban deal board",
          "Weighted revenue forecast",
          "Activity tracking",
          "Win/loss analysis",
        ],
      },
      {
        title: "Marketing Automation",
        description:
          "Design email drip campaigns, score leads based on engagement, and hand off sales-ready leads to reps automatically.",
        icon: "Mail",
      },
      {
        title: "Service Desk & Ticketing",
        description:
          "Track customer support requests from submission to resolution with SLA timers, escalation rules, and satisfaction surveys.",
        icon: "Headset",
      },
      {
        title: "Mobile CRM",
        description:
          "A fully featured mobile app lets field sales teams log calls, update deals, and access customer data on the go, even offline.",
        icon: "Smartphone",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Import Your Contacts",
        description:
          "Migrate existing customer data from spreadsheets, email, or legacy systems using guided import wizards.",
        icon: "Upload",
      },
      {
        number: 2,
        title: "Configure Your Pipeline",
        description:
          "Define deal stages, probability weights, and required activities that match your sales process.",
        icon: "GitBranch",
      },
      {
        number: 3,
        title: "Engage & Convert",
        description:
          "Capture leads from web forms, nurture with automated campaigns, and manage deals through to close with full visibility.",
        icon: "Handshake",
      },
    ] as ProcessStep[],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "Elasticsearch",
      "Docker",
    ],
    integrations: [
      {
        name: "Email & Calendar",
        icon: "CalendarDays",
        description:
          "Two-way sync with Google Workspace and Microsoft 365 to log emails and schedule meetings without leaving the CRM.",
      },
      {
        name: "NOVEK ERP",
        icon: "Layers",
        description:
          "Connect sales orders and invoices between CRM and ERP for a seamless quote-to-cash process.",
      },
      {
        name: "Telephony",
        icon: "Phone",
        description:
          "Click-to-call and automatic call logging with popular VoIP providers used in Ethiopia.",
      },
      {
        name: "Social Media",
        icon: "Share2",
        description:
          "Monitor and engage with leads on Facebook, Telegram, and LinkedIn directly from the CRM interface.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "B2B Sales Teams",
        description:
          "Manage complex, multi-stakeholder sales cycles with account planning, deal rooms, and collaborative selling tools.",
        icon: "Handshake",
      },
      {
        title: "Retail & Distribution",
        description:
          "Track trade relationships, manage route-to-market coverage, and automate reorder reminders for distributors.",
        icon: "Store",
      },
      {
        title: "Professional Services",
        description:
          "Convert proposals into projects, track billable engagement, and maintain long-term client relationships with renewal workflows.",
        icon: "GraduationCap",
      },
    ] as UseCase[],
    faq: [
      {
        question: "Can I customize the sales pipeline stages?",
        answer:
          "Yes. You can define unlimited pipeline stages, set probability weights, add required fields or activities per stage, and create multiple pipelines for different products or teams.",
        category: "products",
      },
      {
        question: "Does NOVEK CRM support Amharic?",
        answer:
          "Yes. The interface, email templates, and reports are fully available in Amharic and English, with support for the Ethiopian calendar.",
        category: "technical",
      },
      {
        question: "How does lead scoring work?",
        answer:
          "You define scoring criteria based on demographics (industry, company size) and behavior (email opens, page visits, form submissions). Leads that reach your threshold are automatically routed to sales.",
        category: "products",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Yes. Native Android and iOS apps provide full CRM functionality including offline access, call logging, and GPS check-in for field sales reps.",
        category: "technical",
      },
      {
        question: "Can I migrate from another CRM?",
        answer:
          "We provide migration support for Salesforce, HubSpot, Zoho, and spreadsheet-based systems. Our team maps fields, imports data, and validates records before go-live.",
        category: "general",
      },
    ] as FAQItem[],
  },

  // ── Hospitality Management System ──────────────────────────────────
  {
    slug: "hospitality-management-system",
    name: "Hospitality Management System",
    tagline: "Deliver exceptional stays, effortlessly.",
    description:
      "The NOVEK Hospitality Management System (HMS) is a cloud-native hotel operations platform designed for Ethiopian hotels, resorts, lodges, and serviced apartments. It covers front-office operations, housekeeping, reservations, channel management, guest communication, and revenue management in a single, integrated solution. A modern, intuitive interface means front-desk staff can check guests in within seconds, while managers access real-time occupancy, ADR, and RevPAR dashboards from any device. Seamless integration with global OTAs, local booking channels, and payment providers ensures your property is always connected and competitive.",
    shortDescription:
      "Cloud-native hotel operations platform covering reservations, front desk, housekeeping, channel management, and revenue analytics.",
    icon: "Hotel",
    heroImage: "/images/products/hospitality-management-system.png",
    features: [
      {
        title: "Reservation & Front Desk",
        description:
          "Manage individual, group, and corporate reservations with a visual room rack, fast check-in/check-out, and guest folio management.",
        icon: "CalendarCheck",
        subFeatures: [
          "Visual room rack",
          "Group booking management",
          "Express check-in / check-out",
          "Guest folio & billing",
        ],
      },
      {
        title: "Channel Manager",
        description:
          "Distribute rates and availability to Booking.com, Expedia, Airbnb, and local OTAs from a single dashboard with real-time synchronization.",
        icon: "Globe",
      },
      {
        title: "Housekeeping Management",
        description:
          "Assign rooms to housekeeping staff, track cleaning status in real time, and trigger room readiness notifications to the front desk automatically.",
        icon: "SprayCan",
      },
      {
        title: "Revenue Management",
        description:
          "Dynamic pricing recommendations based on demand patterns, competitor rates, and historical data help maximize RevPAR across seasons.",
        icon: "TrendingUp",
        subFeatures: [
          "Demand forecasting",
          "Dynamic rate suggestions",
          "Competitor rate monitoring",
          "Segmented pricing rules",
        ],
      },
      {
        title: "Guest Communication",
        description:
          "Automated pre-arrival, in-stay, and post-stay messaging via email and SMS keeps guests informed and engaged throughout their journey.",
        icon: "MessageCircle",
      },
      {
        title: "Reporting & Analytics",
        description:
          "Pre-built hospitality KPI dashboards for occupancy, ADR, RevPAR, source-of-business, and guest satisfaction with drill-down capability.",
        icon: "PieChart",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Property Setup",
        description:
          "Configure room types, rate plans, tax rules, and policies. Import existing reservations and guest history.",
        icon: "Settings",
      },
      {
        number: 2,
        title: "Channel Connection",
        description:
          "Connect to OTAs, your booking engine, and payment gateways. Rates and availability sync in real time.",
        icon: "Link",
      },
      {
        number: 3,
        title: "Operate & Optimize",
        description:
          "Staff use the system for daily operations while management monitors KPIs and adjusts pricing strategies.",
        icon: "Activity",
      },
    ] as ProcessStep[],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "GraphQL",
      "Docker",
      "AWS",
    ],
    integrations: [
      {
        name: "OTA Channels",
        icon: "Globe",
        description:
          "Two-way integration with Booking.com, Expedia, Airbnb, and regional platforms for rate and availability distribution.",
      },
      {
        name: "Payment Gateways",
        icon: "CreditCard",
        description:
          "Process card payments, mobile money, and bank transfers with unified reconciliation and automated settlement.",
      },
      {
        name: "LuX AI",
        icon: "Sparkles",
        description:
          "Connect with LuX AI to enable intelligent guest upselling powered by reservation and profile data from the HMS.",
      },
      {
        name: "Accounting Systems",
        icon: "BookOpen",
        description:
          "Push revenue, tax, and expense data to NOVEK ERP or third-party accounting software for consolidated financial management.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "City Hotels",
        description:
          "Manage high-volume check-ins, corporate accounts, and event bookings with speed and accuracy.",
        icon: "Building2",
      },
      {
        title: "Resorts & Lodges",
        description:
          "Coordinate room assignments, activity bookings, and all-inclusive packages for leisure guests.",
        icon: "Mountain",
      },
      {
        title: "Serviced Apartments",
        description:
          "Handle long-stay billing, recurring housekeeping schedules, and tenant-style lease management within a hospitality workflow.",
        icon: "Home",
      },
      {
        title: "Hotel Groups",
        description:
          "Centralized management of multiple properties with consolidated reporting, shared guest profiles, and group-level rate strategies.",
        icon: "Network",
      },
    ] as UseCase[],
    faq: [
      {
        question: "Can I manage multiple properties from one account?",
        answer:
          "Yes. The HMS supports multi-property management with centralized dashboards, shared guest databases, and property-level or group-level reporting.",
        category: "products",
      },
      {
        question: "Which online travel agencies are supported?",
        answer:
          "We integrate with Booking.com, Expedia, Airbnb, Agoda, and several regional Ethiopian travel platforms. New channels are added regularly.",
        category: "technical",
      },
      {
        question: "Does it include a booking engine for my website?",
        answer:
          "Yes. A customizable, commission-free booking engine can be embedded on your hotel website to capture direct reservations.",
        category: "products",
      },
      {
        question: "How does dynamic pricing work?",
        answer:
          "The revenue management module analyzes historical occupancy, booking pace, day-of-week patterns, and competitor rates to recommend optimal pricing. You can approve suggestions manually or enable auto-update.",
        category: "products",
      },
      {
        question: "Is training provided for hotel staff?",
        answer:
          "Yes. On-site training is included for front-office, housekeeping, and management teams. We also provide video tutorials and a 24/7 support line during the onboarding period.",
        category: "support",
      },
    ] as FAQItem[],
  },

  // ── NOVEK Commerce ─────────────────────────────────────────────────
  {
    slug: "novek-commerce",
    name: "NOVEK Commerce",
    tagline: "Your store, online, in minutes.",
    description:
      "NOVEK Commerce is an e-commerce platform built specifically for Ethiopian individual store owners and small-to-medium enterprises ready to sell online. It provides everything needed to launch and grow a digital storefront: a drag-and-drop store builder, product catalog management, local payment integrations (telebirr, CBE Birr, bank transfers), shipping and delivery coordination, and marketing tools to drive traffic. Whether you sell handcrafted goods, electronics, fashion, or groceries, NOVEK Commerce removes the technical barriers to going digital and gives you the tools to compete in the growing Ethiopian online marketplace.",
    shortDescription:
      "E-commerce platform for Ethiopian stores and SMEs with local payments, delivery integration, and a no-code store builder.",
    icon: "ShoppingBag",
    heroImage: "/images/products/novek-commerce.png",
    features: [
      {
        title: "No-Code Store Builder",
        description:
          "Launch a professional online store without writing a single line of code. Choose from mobile-optimized templates and customize branding, layout, and navigation with drag-and-drop tools.",
        icon: "Palette",
        subFeatures: [
          "Drag-and-drop page builder",
          "Mobile-first templates",
          "Custom domain support",
          "SEO optimization tools",
        ],
      },
      {
        title: "Product & Catalog Management",
        description:
          "Manage unlimited products with variants, categories, images, and inventory tracking. Support for both physical and digital goods.",
        icon: "PackageSearch",
        subFeatures: [
          "Variant management (size, color)",
          "Bulk product import",
          "Digital product delivery",
          "Inventory alerts",
        ],
      },
      {
        title: "Local Payment Integration",
        description:
          "Accept payments through telebirr, CBE Birr, Amole, bank transfers, and cash on delivery, covering the payment methods Ethiopian shoppers actually use.",
        icon: "Wallet",
      },
      {
        title: "Shipping & Delivery",
        description:
          "Configure delivery zones, set flat or weight-based shipping rates, and integrate with local courier services for order fulfillment.",
        icon: "Truck",
      },
      {
        title: "Marketing & Promotions",
        description:
          "Create discount codes, flash sales, and loyalty rewards. Built-in SEO tools and social sharing features help drive organic and referral traffic.",
        icon: "Megaphone",
      },
      {
        title: "Order & Customer Dashboard",
        description:
          "Track orders from placement through fulfillment, manage returns, and view customer purchase history and lifetime value.",
        icon: "LayoutDashboard",
      },
    ] as ProductFeature[],
    howItWorks: [
      {
        number: 1,
        title: "Create Your Store",
        description:
          "Sign up, pick a template, and customize your storefront. Add your logo, brand colors, and pages in minutes.",
        icon: "Paintbrush",
      },
      {
        number: 2,
        title: "Add Products",
        description:
          "Upload product photos, set prices and variants, and organize items into categories. Bulk import is available for large catalogs.",
        icon: "Package",
      },
      {
        number: 3,
        title: "Connect Payments & Delivery",
        description:
          "Activate local payment methods and configure delivery zones and rates. Your store is ready to accept orders.",
        icon: "ToggleRight",
      },
      {
        number: 4,
        title: "Launch & Grow",
        description:
          "Publish your store, share on social media, and use built-in marketing tools to attract customers and drive repeat purchases.",
        icon: "Rocket",
      },
    ] as ProcessStep[],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "Cloudflare",
      "Docker",
      "Stripe Connect",
    ],
    integrations: [
      {
        name: "Mobile Money",
        icon: "Smartphone",
        description:
          "Native integration with telebirr, CBE Birr, and Amole for frictionless mobile payments.",
      },
      {
        name: "Courier Services",
        icon: "Truck",
        description:
          "Connect with local delivery providers for automated shipping label generation and tracking updates.",
      },
      {
        name: "Social Media",
        icon: "Share2",
        description:
          "Sell directly on Facebook and Telegram with product sync and order capture back into your dashboard.",
      },
      {
        name: "NOVEK CRM",
        icon: "Users",
        description:
          "Sync customer data and purchase history to NOVEK CRM for targeted marketing and retention campaigns.",
      },
    ] as Integration[],
    useCases: [
      {
        title: "Retail Shops Going Online",
        description:
          "Brick-and-mortar stores can launch a digital storefront to reach customers beyond their physical location.",
        icon: "Store",
      },
      {
        title: "Artisan & Handmade Sellers",
        description:
          "Ethiopian artisans and makers can showcase handcrafted products with rich imagery and tell their brand story.",
        icon: "Gem",
      },
      {
        title: "Grocery & Fresh Produce",
        description:
          "Local grocers can accept online orders with delivery-zone management and same-day fulfillment workflows.",
        icon: "Apple",
      },
      {
        title: "Fashion & Apparel Brands",
        description:
          "Manage size and color variants, lookbook galleries, and seasonal collections with built-in promotional tools.",
        icon: "Shirt",
      },
    ] as UseCase[],
    faq: [
      {
        question: "Do I need technical skills to set up a store?",
        answer:
          "Not at all. NOVEK Commerce is designed for non-technical users. The drag-and-drop builder, guided setup wizard, and pre-built templates mean you can launch a professional store in under an hour.",
        category: "general",
      },
      {
        question: "What payment methods can my customers use?",
        answer:
          "Your store can accept telebirr, CBE Birr, Amole, bank transfers, Visa/Mastercard, and cash on delivery. You choose which methods to enable.",
        category: "products",
      },
      {
        question: "How much does it cost?",
        answer:
          "NOVEK Commerce offers affordable monthly plans designed for Ethiopian SMEs, starting with a free tier for new sellers. Transaction fees are transparent with no hidden charges.",
        category: "billing",
      },
      {
        question: "Can I sell on social media too?",
        answer:
          "Yes. You can sync your product catalog to Facebook and Telegram shops. Orders placed through social channels are captured in your central dashboard.",
        category: "products",
      },
      {
        question: "How do I handle deliveries?",
        answer:
          "You can manage deliveries yourself, integrate with local courier partners, or offer in-store pickup. The platform supports delivery zone configuration with custom rates per zone.",
        category: "products",
      },
    ] as FAQItem[],
  },
];

// ── Helper functions ───────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

export function getProductNames(): { slug: string; name: string }[] {
  return products.map(({ slug, name }) => ({ slug, name }));
}
