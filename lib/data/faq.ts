import type { FAQItem } from "@/lib/types";

export const faqItems: FAQItem[] = [
  // General (5)
  {
    question: "What is NOVEK ICT Solutions?",
    answer:
      "NOVEK ICT Solutions is an Ethiopia-based custom software development company and product studio. We build bespoke enterprise platforms, AI-powered solutions, and innovative SaaS products for businesses across Africa and beyond. Our team combines deep local market knowledge with world-class engineering practices.",
    category: "general",
  },
  {
    question: "Where is NOVEK located?",
    answer:
      "Our headquarters is in Addis Ababa, Ethiopia. We serve clients across East Africa, the broader African continent, and international markets. We also support remote collaboration for clients outside Ethiopia.",
    category: "general",
  },
  {
    question: "What industries does NOVEK serve?",
    answer:
      "We work across a wide range of industries including banking and finance, hospitality, government and public sector, retail, real estate, healthcare, manufacturing, and food service. Our solutions are tailored to the specific regulatory and operational requirements of each sector.",
    category: "general",
  },
  {
    question: "How long has NOVEK been in business?",
    answer:
      "NOVEK has been delivering software solutions for over 8 years. During this time, we have completed more than 150 projects, grown our team to over 50 professionals, and expanded our reach to serve clients in more than 12 countries.",
    category: "general",
  },
  {
    question: "Does NOVEK work with international clients?",
    answer:
      "Yes. While we are rooted in Ethiopia, we actively serve clients across Africa, the Middle East, and Europe. Our team is experienced in remote collaboration, and we use modern project management tools to ensure seamless communication regardless of time zones.",
    category: "general",
  },

  // Services (6)
  {
    question: "What custom software development services do you offer?",
    answer:
      "We offer end-to-end custom software development including enterprise web applications, mobile apps (iOS and Android), API development and integration, cloud-native architecture, database design, and legacy system modernization. Every project starts with a thorough discovery phase to understand your unique requirements.",
    category: "services",
  },
  {
    question: "How does your AI integration service work?",
    answer:
      "Our AI integration service embeds machine learning models, natural language processing, computer vision, and predictive analytics directly into your existing systems. We assess your data, identify high-impact use cases, build and train models, and deploy them with monitoring and continuous improvement pipelines.",
    category: "services",
  },
  {
    question: "What does the AI Training for Companies program include?",
    answer:
      "Our corporate AI training covers foundational AI and ML concepts, hands-on workshops with real datasets, prompt engineering, AI tool adoption strategies, and executive briefings on AI-driven business transformation. Programs are customized to your team's skill level and industry context.",
    category: "services",
  },
  {
    question: "What makes your luxury website design different?",
    answer:
      "Our luxury website design service focuses on premium aesthetics, immersive animations, storytelling-driven layouts, and performance optimization. We use modern frameworks like Next.js and Framer Motion to create high-end digital experiences that reflect the caliber of your brand. Every pixel is intentional.",
    category: "services",
  },
  {
    question: "What digital marketing services does NOVEK provide?",
    answer:
      "We offer search engine optimization (SEO), paid advertising (Google Ads, social media ads), content marketing, email marketing, social media management, and analytics-driven campaign optimization. All strategies are tailored to the Ethiopian and African digital landscape.",
    category: "services",
  },
  {
    question: "How can digital consulting help my business?",
    answer:
      "Our digital consulting service provides strategic technology roadmaps, system architecture reviews, digital transformation planning, vendor selection guidance, and technology due diligence. We help you make informed decisions that align technology investments with your business goals.",
    category: "services",
  },

  // Products (5)
  {
    question: "What is the Tax Intelligence Platform?",
    answer:
      "The Tax Intelligence Platform is a smart compliance and analytics solution designed for Ethiopian tax regulations. It automates VAT calculations, generates e-receipts compatible with the Ethiopian Revenue and Customs Authority, provides real-time tax liability dashboards, and flags potential compliance risks before they become issues.",
    category: "products",
  },
  {
    question: "Can NOVEK ERP be customized for my business?",
    answer:
      "Absolutely. NOVEK ERP is built with a modular architecture that allows you to activate only the modules you need, whether that is finance, HR, procurement, inventory, or manufacturing. Custom workflows, reports, and integrations can be configured to match your exact operational processes.",
    category: "products",
  },
  {
    question: "Does NOVEK Commerce support local payment methods?",
    answer:
      "Yes. NOVEK Commerce is built with Ethiopian and African payment ecosystems in mind. It integrates with telebirr, CBE Birr, Amole, and international gateways like Stripe and PayPal. It also supports cash on delivery and bank transfer options common in the region.",
    category: "products",
  },
  {
    question: "What is LuX AI and who is it for?",
    answer:
      "LuX AI is our AI-powered business intelligence and automation platform. It is designed for companies that want to leverage AI for customer service automation, document processing, predictive analytics, and intelligent reporting. It works out of the box and can be customized to your industry.",
    category: "products",
  },
  {
    question: "How does the Restaurant Management system handle multi-branch operations?",
    answer:
      "Our Restaurant Management platform provides centralized dashboards for multi-location oversight, unified inventory tracking across branches, consolidated financial reporting, and branch-specific menu management. Managers can monitor real-time performance of all locations from a single interface.",
    category: "products",
  },

  // Technical (5)
  {
    question: "What technologies does NOVEK use?",
    answer:
      "Our core stack includes Next.js, React, and TypeScript on the frontend; Node.js, Python, and Go on the backend; PostgreSQL and MongoDB for databases; and AWS, Google Cloud, and Docker for infrastructure. For AI workloads, we use TensorFlow, PyTorch, and LangChain. We select the best tools for each project's requirements.",
    category: "technical",
  },
  {
    question: "How do you ensure the security of applications?",
    answer:
      "We follow security best practices including OWASP guidelines, encryption at rest and in transit, role-based access control, regular penetration testing, and secure CI/CD pipelines. For sensitive projects, we conduct third-party security audits and comply with relevant data protection regulations.",
    category: "technical",
  },
  {
    question: "Can you integrate with existing systems and APIs?",
    answer:
      "Yes. Integration is one of our core strengths. We build custom APIs, connect to third-party services via REST and GraphQL, implement webhooks, and create middleware to bridge legacy systems with modern platforms. We have experience integrating with banking APIs, government systems, and international SaaS platforms.",
    category: "technical",
  },
  {
    question: "Do you provide source code and documentation?",
    answer:
      "Yes. We believe in full transparency. All custom-built projects include complete source code ownership, comprehensive technical documentation, API documentation, deployment guides, and training materials for your internal team. You have full control over your codebase.",
    category: "technical",
  },
  {
    question: "What is your approach to scalability?",
    answer:
      "We architect systems for growth from day one. This includes microservices architecture where appropriate, horizontal scaling strategies, database optimization, CDN integration, caching layers, and load balancing. Our cloud-native approach ensures your application can handle increasing traffic and data volumes.",
    category: "technical",
  },

  // Billing (4)
  {
    question: "How does NOVEK price its projects?",
    answer:
      "We offer three pricing models: fixed-price for well-defined projects with clear scope, time-and-materials for projects that may evolve, and retainer agreements for ongoing development and support. We provide detailed estimates after a discovery phase and maintain transparent billing throughout the engagement.",
    category: "billing",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers (domestic and international), telebirr, and corporate checks. For international clients, we support wire transfers in USD, EUR, and GBP. Payment schedules are typically milestone-based, with terms agreed upon before project kickoff.",
    category: "billing",
  },
  {
    question: "Is there a cost for initial consultation?",
    answer:
      "We offer a complimentary initial consultation where we discuss your project requirements, timeline, and budget. After this session, we provide a detailed proposal with scope, estimated timeline, and pricing. There is no obligation to proceed after the consultation.",
    category: "billing",
  },
  {
    question: "Do you offer ongoing maintenance packages?",
    answer:
      "Yes. We offer monthly maintenance and support packages that include bug fixes, security updates, performance monitoring, minor feature enhancements, and priority support. Packages are tiered based on the complexity and scale of your application.",
    category: "billing",
  },

  // Support (4)
  {
    question: "What kind of post-launch support does NOVEK provide?",
    answer:
      "After launch, we provide a warranty period (typically 3 months) covering bug fixes at no additional cost. Beyond that, we offer maintenance packages, dedicated support engineers, and SLA-backed response times. We also provide training for your team to manage day-to-day operations independently.",
    category: "support",
  },
  {
    question: "How can I reach NOVEK for support?",
    answer:
      "You can reach our support team via email at support@novektech.com, by phone at +251 911 000 000, or through the support portal in your project dashboard. For clients on maintenance plans, we offer priority Slack or Microsoft Teams channels with guaranteed response times.",
    category: "support",
  },
  {
    question: "What are your support response times?",
    answer:
      "Response times depend on your support tier. Critical issues (system down) are addressed within 1 hour for premium plans and 4 hours for standard plans. High-priority issues receive responses within 4 to 8 hours. Standard requests are handled within 1 business day.",
    category: "support",
  },
  {
    question: "Do you provide training for our internal team?",
    answer:
      "Yes. Every project includes a knowledge transfer phase where we train your team on using, maintaining, and administering the delivered solution. We provide video walkthroughs, written documentation, and live training sessions. Additional training workshops can be arranged on request.",
    category: "support",
  },
];
