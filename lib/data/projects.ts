import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "tax-intelligence-platform",
    name: "Tax Intelligence Platform",
    client: "Ethiopian Revenue Authority",
    industry: "Government & Public Sector",
    year: "2024",
    thumbnail: "/projects/tax-intelligence-thumb.jpg",
    heroImage: "/projects/tax-intelligence-hero.jpg",
    tags: ["AI", "Fintech", "Government", "Compliance"],
    services: ["custom-software-development", "ai-integration"],
    shortDescription:
      "A smart tax compliance and analytics platform that automates VAT processing, e-receipt generation, and risk assessment for the Ethiopian Revenue Authority.",
    challenge:
      "The Ethiopian Revenue Authority needed to modernize its tax collection and compliance monitoring system. The existing process relied heavily on manual data entry, paper-based receipts, and fragmented databases. This led to significant revenue leakage, slow processing times, and difficulty identifying non-compliant businesses. The system needed to handle millions of transactions across diverse business types while complying with evolving Ethiopian tax regulations.",
    approach:
      "We conducted an extensive discovery phase with tax officials, accountants, and business owners to map every workflow. We designed a modular, cloud-native architecture that could scale horizontally to handle peak filing periods. Machine learning models were trained on historical tax data to identify anomalies and predict non-compliance risks. We implemented a phased rollout strategy, starting with large enterprises before expanding to SMEs.",
    solution:
      "The Tax Intelligence Platform features automated VAT calculation and e-receipt generation fully compliant with Ethiopian regulations, a real-time dashboard for tax liability monitoring, an AI-powered risk scoring engine that flags suspicious filings, multi-language support in Amharic and English, secure API integrations with major Ethiopian banks, and a mobile app for taxpayers to file returns on the go.",
    results: [
      { value: "40%", label: "Reduction in processing time" },
      { value: "25%", label: "Increase in tax compliance rates" },
      { value: "2M+", label: "Transactions processed monthly" },
      { value: "60%", label: "Decrease in manual data entry" },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Python",
      "TensorFlow",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Redis",
    ],
    testimonial: {
      quote:
        "The platform has fundamentally improved how we monitor and enforce tax compliance. The AI risk scoring alone has helped us recover significant unreported revenue.",
      name: "Girma Wolde",
      role: "Director of Digital Services",
      company: "Ethiopian Revenue Authority",
    },
    relatedProjects: ["novek-erp-manufacturing", "ecommerce-platform"],
    featured: true,
  },
  {
    slug: "hospitality-management-kuriftu",
    name: "Hospitality Management System",
    client: "Kuriftu Resort & Spa",
    industry: "Hospitality",
    year: "2024",
    thumbnail: "/projects/kuriftu-hospitality-thumb.jpg",
    heroImage: "/projects/kuriftu-hospitality-hero.jpg",
    tags: ["Hospitality", "SaaS", "Multi-property", "Analytics"],
    services: ["custom-software-development", "digital-consulting"],
    shortDescription:
      "A comprehensive hotel management platform handling reservations, guest services, housekeeping, and revenue analytics across multiple resort properties.",
    challenge:
      "Kuriftu Resort & Spa operates multiple luxury properties across Ethiopia, each with unique service offerings. Their existing systems were fragmented, with different properties using different tools for bookings, housekeeping, and guest management. This led to double bookings, inconsistent guest experiences, and difficulty generating consolidated financial reports across all locations.",
    approach:
      "We embedded a team on-site at two Kuriftu properties to observe daily operations firsthand. We mapped every guest touchpoint from booking to checkout and identified integration points with existing third-party platforms like OTAs. We adopted an agile methodology with bi-weekly demos to property managers, ensuring the solution matched real operational needs.",
    solution:
      "The system provides a centralized booking engine with real-time availability across all properties, automated housekeeping task management, guest preference tracking for personalized experiences, integrated point-of-sale for restaurants and spa services, revenue management with dynamic pricing recommendations, and a mobile app for staff to manage tasks on the floor.",
    results: [
      { value: "35%", label: "Increase in occupancy rate" },
      { value: "50%", label: "Reduction in double bookings" },
      { value: "20%", label: "Improvement in guest satisfaction scores" },
      { value: "3x", label: "Faster check-in and checkout process" },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "React Native",
    ],
    testimonial: {
      quote:
        "The system gave us a single view of all our properties for the first time. Our staff spend less time on administration and more time creating memorable guest experiences.",
      name: "Sara Mengistu",
      role: "Director of Operations",
      company: "Kuriftu Resort & Spa",
    },
    relatedProjects: ["restaurant-chain-management", "property-management"],
    featured: true,
  },
  {
    slug: "novek-erp-manufacturing",
    name: "Enterprise Resource Planning System",
    client: "Habesha Breweries",
    industry: "Manufacturing",
    year: "2023",
    thumbnail: "/projects/erp-manufacturing-thumb.jpg",
    heroImage: "/projects/erp-manufacturing-hero.jpg",
    tags: ["ERP", "Manufacturing", "Supply Chain", "Finance"],
    services: ["custom-software-development", "digital-consulting"],
    shortDescription:
      "A full-suite ERP system unifying procurement, production planning, inventory management, HR, and financial reporting for a major Ethiopian manufacturer.",
    challenge:
      "Habesha Breweries was scaling rapidly but their operations were managed through disconnected spreadsheets and legacy software. Procurement, production, and finance teams operated in silos, leading to inventory shortages, production delays, and inaccurate financial forecasting. They needed a unified system that could handle the complexity of manufacturing workflows while being accessible to non-technical staff.",
    approach:
      "We began with a comprehensive audit of all business processes across departments. We designed the ERP with a modular architecture so each department could adopt the system incrementally without disrupting operations. Key stakeholders from each department were included in the design process, and we ran parallel testing with live data before full cutover.",
    solution:
      "NOVEK ERP for Habesha Breweries includes automated procurement with vendor management and purchase order workflows, production planning and scheduling with real-time capacity tracking, warehouse and inventory management with barcode scanning, HR and payroll integrated with Ethiopian labor regulations, financial accounting with multi-currency support and automated reporting, and executive dashboards with KPIs across all departments.",
    results: [
      { value: "45%", label: "Reduction in inventory carrying costs" },
      { value: "30%", label: "Improvement in on-time delivery" },
      { value: "60%", label: "Faster month-end financial close" },
      { value: "8hrs", label: "Saved weekly per department on reporting" },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Redis",
      "AWS",
    ],
    relatedProjects: ["tax-intelligence-platform", "ecommerce-platform"],
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    client: "Sheger Mart",
    industry: "Retail",
    year: "2023",
    thumbnail: "/projects/ecommerce-sheger-thumb.jpg",
    heroImage: "/projects/ecommerce-sheger-hero.jpg",
    tags: ["E-Commerce", "Payments", "Retail", "Mobile"],
    services: ["custom-software-development", "digital-marketing"],
    shortDescription:
      "A modern e-commerce platform with local payment integration, real-time inventory sync, and a mobile-first shopping experience for an Ethiopian retail brand.",
    challenge:
      "Sheger Mart wanted to expand beyond their physical stores and reach customers across Ethiopia online. Existing e-commerce platforms did not support Ethiopian payment methods like telebirr and CBE Birr, had limited Amharic language support, and were not optimized for the local logistics landscape. They needed a platform that felt native to Ethiopian shoppers while maintaining international e-commerce standards.",
    approach:
      "We researched the Ethiopian e-commerce landscape extensively, studying consumer behavior, payment preferences, and logistics challenges. We designed the platform mobile-first, recognizing that the majority of Ethiopian internet users access the web via smartphones. Payment gateway integrations were prioritized early in development, with direct partnerships with telebirr and CBE Birr.",
    solution:
      "The platform features a mobile-first responsive storefront with Amharic and English language support, integrated payments via telebirr, CBE Birr, Amole, and card payments, real-time inventory sync across physical stores and the online catalog, an order management system with delivery tracking and driver assignment, a loyalty program with points and referral rewards, and an admin dashboard with sales analytics and customer insights.",
    results: [
      { value: "300%", label: "Growth in online sales within 6 months" },
      { value: "15K+", label: "Active monthly users" },
      { value: "98.5%", label: "Payment success rate" },
      { value: "4.7/5", label: "App store rating" },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "React Native",
      "AWS",
      "Stripe",
    ],
    testimonial: {
      quote:
        "NOVEK understood our market. The platform feels Ethiopian while matching the quality of international e-commerce sites. Our customers love paying with telebirr directly in the app.",
      name: "Hiwot Tesfaye",
      role: "Head of E-Commerce",
      company: "Sheger Mart",
    },
    relatedProjects: ["restaurant-chain-management", "novek-erp-manufacturing"],
    featured: true,
  },
  {
    slug: "restaurant-chain-management",
    name: "Restaurant Chain Management System",
    client: "Yod Abyssinia Cultural Restaurant",
    industry: "Food & Beverage",
    year: "2024",
    thumbnail: "/projects/restaurant-yod-thumb.jpg",
    heroImage: "/projects/restaurant-yod-hero.jpg",
    tags: ["Restaurant", "POS", "Multi-branch", "Inventory"],
    services: ["custom-software-development"],
    shortDescription:
      "An integrated restaurant management platform with POS, kitchen display, multi-branch inventory, and financial reporting for a renowned Ethiopian restaurant chain.",
    challenge:
      "Yod Abyssinia operates multiple branches across Addis Ababa and needed a unified system to manage orders, kitchen operations, inventory, and finances. Each branch used different POS systems, making it impossible to get a consolidated view of the business. Food waste was high due to poor inventory forecasting, and manual processes led to order errors during peak hours.",
    approach:
      "We spent two weeks embedded in their busiest branches, observing operations from morning prep to closing. We mapped the complete workflow from customer seating to kitchen preparation to billing. We designed the system to work reliably on low-bandwidth connections and built offline-first capabilities for the POS terminals to ensure uninterrupted service during internet outages.",
    solution:
      "The system includes a tablet-based POS with table management and split billing, kitchen display systems with automated order routing by station, centralized inventory management with automated reorder alerts, recipe-based ingredient tracking to minimize waste, multi-branch financial consolidation with real-time dashboards, and staff scheduling and performance tracking.",
    results: [
      { value: "30%", label: "Reduction in food waste" },
      { value: "50%", label: "Decrease in customer wait times" },
      { value: "25%", label: "Increase in table turnover rate" },
      { value: "99.8%", label: "POS uptime including offline mode" },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Electron",
      "React Native",
      "Docker",
    ],
    relatedProjects: [
      "hospitality-management-kuriftu",
      "ecommerce-platform",
    ],
    featured: true,
  },
  {
    slug: "property-management",
    name: "Property Management Platform",
    client: "Flintstone Homes Real Estate",
    industry: "Real Estate",
    year: "2023",
    thumbnail: "/projects/property-flintstone-thumb.jpg",
    heroImage: "/projects/property-flintstone-hero.jpg",
    tags: ["Real Estate", "Property Management", "Tenant Portal", "Finance"],
    services: ["custom-software-development", "luxury-website-design"],
    shortDescription:
      "A comprehensive property management platform handling tenant lifecycle, maintenance requests, rent collection, and portfolio analytics for a growing real estate developer.",
    challenge:
      "Flintstone Homes manages a diverse portfolio of residential and commercial properties across Addis Ababa. Their property management was handled through spreadsheets and manual processes, leading to missed maintenance requests, late rent follow-ups, and difficulty tracking property performance. As their portfolio grew, they needed a scalable digital solution that tenants and property managers could both use easily.",
    approach:
      "We interviewed property managers, maintenance staff, and tenants to understand pain points from all perspectives. We designed separate but connected interfaces for tenants (self-service portal) and managers (operations dashboard). We integrated with local mobile payment platforms for rent collection and built an automated notification system to reduce manual follow-up.",
    solution:
      "The platform provides a tenant self-service portal for rent payments, maintenance requests, and document access, an owner dashboard with portfolio performance analytics and vacancy tracking, automated rent reminders and payment reconciliation via telebirr and bank transfer, a maintenance workflow management system with photo documentation and contractor assignment, lease management with automated renewal reminders, and financial reporting with income statements per property.",
    results: [
      { value: "3x", label: "More units managed with the same team" },
      { value: "70%", label: "Reduction in late rent payments" },
      { value: "48hrs", label: "Average maintenance resolution time" },
      { value: "90%", label: "Tenant adoption of self-service portal" },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "React Native",
      "Tailwind CSS",
    ],
    testimonial: {
      quote:
        "Managing our growing portfolio used to be chaotic. NOVEK gave us a system where everything is tracked, tenants are happy, and we have clear visibility into every property's performance.",
      name: "Amina Osman",
      role: "Managing Director",
      company: "Flintstone Homes Real Estate",
    },
    relatedProjects: [
      "hospitality-management-kuriftu",
      "novek-erp-manufacturing",
    ],
    featured: false,
  },
];
