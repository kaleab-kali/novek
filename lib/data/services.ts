import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    tagline: "Bespoke solutions built for your unique challenges",
    description:
      "We design and develop custom software solutions tailored to your exact business requirements. From enterprise platforms to consumer-facing applications, our team delivers scalable, maintainable software that grows with your business. Every line of code is written with your goals in mind — no templates, no shortcuts.",
    shortDescription:
      "Tailored software solutions built from the ground up for your business.",
    icon: "Code2",
    capabilities: [
      {
        title: "Enterprise Applications",
        description:
          "Large-scale systems that handle complex business logic and high traffic",
        icon: "Building2",
      },
      {
        title: "Web Applications",
        description:
          "Modern, responsive web apps with cutting-edge frameworks",
        icon: "Globe",
      },
      {
        title: "Mobile Development",
        description:
          "Native and cross-platform mobile apps for iOS and Android",
        icon: "Smartphone",
      },
      {
        title: "API Development",
        description: "RESTful and GraphQL APIs that power your ecosystem",
        icon: "Plug",
      },
      {
        title: "Cloud Architecture",
        description:
          "Scalable cloud infrastructure designed for performance and cost-efficiency",
        icon: "Cloud",
      },
      {
        title: "Legacy Modernization",
        description:
          "Transform outdated systems into modern, maintainable platforms",
        icon: "RefreshCw",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    relatedProjects: ["tax-intelligence-platform", "erp-enterprise"],
    relatedServices: ["ai-integration", "digital-marketing"],
    faq: [
      {
        question: "How long does a custom software project typically take?",
        answer:
          "Project timelines vary based on complexity. A typical MVP takes 3-4 months, while enterprise solutions can take 6-12 months. We provide detailed timelines during the discovery phase.",
        category: "services",
      },
      {
        question: "Do you work with existing codebases?",
        answer:
          "Yes. We regularly work with existing systems — whether it's adding features, fixing issues, or modernizing legacy code to current standards.",
        category: "services",
      },
      {
        question: "What technologies do you specialize in?",
        answer:
          "We work across the modern stack including React, Next.js, Node.js, Python, Go, and cloud platforms like AWS and GCP. We choose the best technology for each project's needs.",
        category: "technical",
      },
      {
        question: "How does pricing work for custom development?",
        answer:
          "Every project is unique. We provide custom quotes based on scope, complexity, and timeline after a thorough discovery phase. We offer both fixed-price and time-and-materials models.",
        category: "billing",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Absolutely. We offer maintenance packages that include bug fixes, performance monitoring, security updates, and feature enhancements.",
        category: "support",
      },
    ],
    benefits: [
      {
        title: "100% Code Ownership",
        description:
          "You own everything we build. No vendor lock-in, no licensing fees.",
        icon: "Shield",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built to handle growth from day one with modern cloud-native patterns.",
        icon: "TrendingUp",
      },
      {
        title: "Dedicated Team",
        description:
          "A focused team of senior engineers assigned exclusively to your project.",
        icon: "Users",
      },
      {
        title: "Transparent Process",
        description:
          "Weekly demos, open communication, and real-time project visibility.",
        icon: "Eye",
      },
    ],
    process: [
      {
        number: 1,
        title: "Discovery",
        description:
          "Deep dive into your requirements, users, and business goals",
        icon: "Search",
      },
      {
        number: 2,
        title: "Architecture",
        description: "Design the technical foundation and system blueprint",
        icon: "Layout",
      },
      {
        number: 3,
        title: "Development",
        description: "Agile sprints with continuous delivery and feedback",
        icon: "Code2",
      },
      {
        number: 4,
        title: "Launch & Support",
        description: "Deploy with confidence and evolve with your needs",
        icon: "Rocket",
      },
    ],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    tagline: "Embed intelligence into your existing systems",
    description:
      "We help companies integrate artificial intelligence into their existing workflows and systems. From natural language processing to computer vision, predictive analytics to generative AI — we make AI practical, not theoretical. Our solutions are designed to enhance human capabilities, not replace them.",
    shortDescription:
      "Integrate AI capabilities into your existing business systems and workflows.",
    icon: "Brain",
    capabilities: [
      {
        title: "LLM Integration",
        description:
          "Connect large language models to your business processes and data",
        icon: "MessageSquare",
      },
      {
        title: "Predictive Analytics",
        description:
          "Machine learning models that forecast trends and optimize decisions",
        icon: "LineChart",
      },
      {
        title: "Computer Vision",
        description:
          "Image and video analysis for quality control, security, and automation",
        icon: "Eye",
      },
      {
        title: "Process Automation",
        description:
          "AI-powered workflows that eliminate repetitive manual tasks",
        icon: "Cog",
      },
      {
        title: "Custom AI Models",
        description:
          "Purpose-built models trained on your data for domain-specific tasks",
        icon: "Cpu",
      },
      {
        title: "AI Strategy Consulting",
        description:
          "Roadmap for AI adoption that aligns with your business objectives",
        icon: "Map",
      },
    ],
    technologies: [
      "OpenAI",
      "LangChain",
      "Python",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "AWS SageMaker",
      "Vector DBs",
    ],
    relatedProjects: ["lux-ai-hospitality"],
    relatedServices: [
      "ai-training",
      "custom-software-development",
      "consulting",
    ],
    faq: [
      {
        question: "Can you integrate AI into our existing software?",
        answer:
          "Yes, that's our specialty. We work with your current systems to add AI capabilities through APIs, microservices, or embedded models without disrupting your operations.",
        category: "services",
      },
      {
        question: "What kind of AI solutions do you build?",
        answer:
          "We build everything from chatbots and document processing to predictive analytics, recommendation engines, and custom LLM applications tailored to your domain.",
        category: "services",
      },
      {
        question: "How do you handle data privacy with AI?",
        answer:
          "Data privacy is paramount. We can deploy models on-premises or in your private cloud. All data handling follows strict security protocols and compliance requirements.",
        category: "technical",
      },
      {
        question: "How long does an AI integration project take?",
        answer:
          "A proof-of-concept typically takes 4-6 weeks. Full production integration ranges from 2-6 months depending on complexity and data readiness.",
        category: "services",
      },
      {
        question: "Do we need a lot of data to start with AI?",
        answer:
          "Not necessarily. We can leverage pre-trained models and transfer learning to deliver value even with limited data. We'll assess your data readiness during discovery.",
        category: "technical",
      },
    ],
    benefits: [
      {
        title: "Practical AI",
        description:
          "Solutions that solve real problems, not theoretical experiments.",
        icon: "Target",
      },
      {
        title: "Seamless Integration",
        description:
          "AI that works within your existing systems and workflows.",
        icon: "Plug",
      },
      {
        title: "Data Privacy",
        description:
          "Your data stays yours. On-premises and private cloud options available.",
        icon: "Lock",
      },
      {
        title: "Measurable ROI",
        description:
          "Clear metrics to prove the value of AI investment from day one.",
        icon: "BarChart3",
      },
    ],
    process: [
      {
        number: 1,
        title: "AI Audit",
        description:
          "Assess your systems, data, and opportunities for AI enhancement",
        icon: "Search",
      },
      {
        number: 2,
        title: "Prototype",
        description: "Build a proof-of-concept to validate the approach",
        icon: "Lightbulb",
      },
      {
        number: 3,
        title: "Integrate",
        description:
          "Deploy AI capabilities into your production environment",
        icon: "Plug",
      },
      {
        number: 4,
        title: "Optimize",
        description:
          "Monitor performance and continuously improve the models",
        icon: "TrendingUp",
      },
    ],
  },
  {
    slug: "ai-training",
    name: "AI Training for Companies",
    tagline: "Empower your team to harness AI effectively",
    description:
      "We provide comprehensive AI training programs designed for businesses at every level of AI maturity. From executive workshops to hands-on developer training, we ensure your team understands not just how to use AI tools, but how to think strategically about AI adoption. Our training is practical, role-specific, and immediately applicable.",
    shortDescription:
      "Train your employees to effectively leverage AI in their daily work.",
    icon: "GraduationCap",
    capabilities: [
      {
        title: "Executive AI Workshops",
        description:
          "Strategic AI literacy for leadership and decision-makers",
        icon: "Presentation",
      },
      {
        title: "Developer AI Training",
        description:
          "Hands-on training for engineering teams on AI/ML implementation",
        icon: "Code2",
      },
      {
        title: "AI Prompt Engineering",
        description:
          "Master the art of working with large language models effectively",
        icon: "MessageSquare",
      },
      {
        title: "Department-Specific Programs",
        description:
          "Tailored training for marketing, sales, HR, finance, and operations",
        icon: "Users",
      },
      {
        title: "AI Ethics & Governance",
        description:
          "Responsible AI usage policies and governance frameworks",
        icon: "Shield",
      },
      {
        title: "Ongoing Mentorship",
        description:
          "Continued support as your team applies AI in real scenarios",
        icon: "HeartHandshake",
      },
    ],
    technologies: [
      "ChatGPT",
      "Claude",
      "Midjourney",
      "GitHub Copilot",
      "Python",
      "Jupyter",
      "LangChain",
      "Custom LLMs",
    ],
    relatedProjects: [],
    relatedServices: ["ai-integration", "consulting"],
    faq: [
      {
        question: "Who is the AI training designed for?",
        answer:
          "Everyone — from C-suite executives to junior developers. We customize the content based on roles, experience levels, and your company's specific use cases.",
        category: "services",
      },
      {
        question: "How is the training delivered?",
        answer:
          "We offer on-site workshops, virtual training sessions, and self-paced learning modules. Most programs combine all three for maximum impact.",
        category: "services",
      },
      {
        question: "How long are the training programs?",
        answer:
          "Programs range from 1-day executive workshops to 8-week comprehensive programs. We design the duration based on your team's needs and goals.",
        category: "services",
      },
      {
        question: "Do you provide materials and resources after training?",
        answer:
          "Yes. All participants receive comprehensive documentation, cheat sheets, and ongoing access to our resource library. We also offer follow-up sessions.",
        category: "support",
      },
      {
        question: "Can training be customized to our industry?",
        answer:
          "Absolutely. We tailor all examples, case studies, and exercises to your specific industry and business context for maximum relevance.",
        category: "services",
      },
    ],
    benefits: [
      {
        title: "Role-Specific Training",
        description:
          "Customized content for every department and seniority level.",
        icon: "Users",
      },
      {
        title: "Hands-On Learning",
        description:
          "Practical exercises with real tools your team will use daily.",
        icon: "Wrench",
      },
      {
        title: "Measurable Skills",
        description:
          "Pre and post assessments to track learning progress and ROI.",
        icon: "BarChart3",
      },
      {
        title: "Ongoing Support",
        description:
          "Continued mentorship and resources beyond the training period.",
        icon: "HeartHandshake",
      },
    ],
    process: [
      {
        number: 1,
        title: "Assessment",
        description: "Evaluate your team's current AI knowledge and needs",
        icon: "ClipboardCheck",
      },
      {
        number: 2,
        title: "Curriculum Design",
        description: "Build a custom training program for your organization",
        icon: "BookOpen",
      },
      {
        number: 3,
        title: "Training Delivery",
        description:
          "Interactive workshops and hands-on sessions with real tools",
        icon: "GraduationCap",
      },
      {
        number: 4,
        title: "Follow-Up",
        description: "Ongoing mentorship, resources, and progress tracking",
        icon: "RefreshCw",
      },
    ],
  },
  {
    slug: "luxury-website-design",
    name: "Luxury Website Design",
    tagline: "Premium digital experiences that elevate your brand",
    description:
      "We craft bespoke, high-end websites that reflect the prestige and quality of luxury brands. Every pixel is intentional — from cinematic scroll animations to glassmorphic interfaces. Our luxury websites are not templates with a dark theme; they are custom-built digital experiences designed to captivate, convert, and leave lasting impressions.",
    shortDescription:
      "Bespoke, high-end websites that reflect your brand's prestige and quality.",
    icon: "Palette",
    capabilities: [
      {
        title: "Custom Design Systems",
        description:
          "Unique visual languages built specifically for your brand",
        icon: "Palette",
      },
      {
        title: "Micro-Interactions",
        description:
          "Subtle animations that make every interaction feel premium",
        icon: "MousePointer",
      },
      {
        title: "Performance Optimized",
        description:
          "Beautiful and fast — because luxury shouldn't mean slow",
        icon: "Zap",
      },
      {
        title: "SEO Built-In",
        description:
          "Found by the right audience with technical SEO from day one",
        icon: "Search",
      },
      {
        title: "CMS Integration",
        description: "Easy content management without touching code",
        icon: "FileText",
      },
      {
        title: "Analytics & Conversion",
        description:
          "Data-driven design that turns visitors into clients",
        icon: "LineChart",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "Sanity",
      "Vercel",
    ],
    relatedProjects: [],
    relatedServices: ["digital-marketing", "custom-software-development"],
    faq: [
      {
        question: "What makes a luxury website different from a regular one?",
        answer:
          "Every detail is intentional — from custom animations and micro-interactions to bespoke typography and cinematic scroll experiences. It's not a template; it's a crafted digital experience.",
        category: "services",
      },
      {
        question: "How long does a luxury website project take?",
        answer:
          "Typically 6-10 weeks from discovery to launch. Complex projects with custom 3D elements or extensive animations may take longer.",
        category: "services",
      },
      {
        question: "Can I update the content myself after launch?",
        answer:
          "Yes. We integrate a headless CMS (like Sanity or Contentful) so you can update text, images, and blog posts without any coding knowledge.",
        category: "services",
      },
      {
        question: "Will the website be fast despite all the animations?",
        answer:
          "Absolutely. Performance is non-negotiable. We optimize every animation, lazy-load assets, and use modern frameworks to ensure sub-2-second load times.",
        category: "technical",
      },
      {
        question: "Do you handle hosting and maintenance?",
        answer:
          "Yes. We recommend and set up hosting on Vercel or similar platforms, and offer ongoing maintenance packages for updates and improvements.",
        category: "support",
      },
    ],
    benefits: [
      {
        title: "Unforgettable First Impression",
        description:
          "A website that makes visitors stop, look, and remember your brand.",
        icon: "Sparkles",
      },
      {
        title: "Conversion Focused",
        description:
          "Beautiful design that guides visitors toward taking action.",
        icon: "Target",
      },
      {
        title: "Future-Proof Tech",
        description:
          "Built with modern frameworks that stay fast and relevant for years.",
        icon: "Rocket",
      },
      {
        title: "Brand Consistency",
        description:
          "Design system that extends across all your digital touchpoints.",
        icon: "Layers",
      },
    ],
    process: [
      {
        number: 1,
        title: "Brand Discovery",
        description: "Understand your brand, audience, and design vision",
        icon: "Search",
      },
      {
        number: 2,
        title: "Design",
        description:
          "Craft wireframes and high-fidelity designs for your approval",
        icon: "Palette",
      },
      {
        number: 3,
        title: "Development",
        description: "Build with precision using modern web technologies",
        icon: "Code2",
      },
      {
        number: 4,
        title: "Launch",
        description:
          "Deploy, optimize, and hand over with full documentation",
        icon: "Rocket",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Data-driven strategies that drive real growth",
    description:
      "We craft and execute digital marketing strategies that deliver measurable results. From SEO and content marketing to paid advertising and social media management, our approach is rooted in data and driven by creativity. We help businesses in Ethiopia and beyond reach their target audiences and convert them into loyal customers.",
    shortDescription:
      "Data-driven digital marketing strategies that deliver measurable growth.",
    icon: "Megaphone",
    capabilities: [
      {
        title: "SEO & Content Marketing",
        description:
          "Rank higher and attract organic traffic with quality content",
        icon: "Search",
      },
      {
        title: "Social Media Management",
        description:
          "Build and engage your audience across all social platforms",
        icon: "Share2",
      },
      {
        title: "Paid Advertising",
        description:
          "Google Ads, Meta Ads, and LinkedIn campaigns that convert",
        icon: "Target",
      },
      {
        title: "Email Marketing",
        description:
          "Nurture leads and drive retention with targeted campaigns",
        icon: "Mail",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Transparent reporting with actionable insights every month",
        icon: "BarChart3",
      },
      {
        title: "Brand Strategy",
        description:
          "Define your brand voice, positioning, and messaging",
        icon: "Sparkles",
      },
    ],
    technologies: [
      "Google Analytics",
      "Google Ads",
      "Meta Business Suite",
      "HubSpot",
      "Mailchimp",
      "SEMrush",
      "Ahrefs",
      "Canva",
    ],
    relatedProjects: [],
    relatedServices: ["luxury-website-design", "consulting"],
    faq: [
      {
        question: "What digital marketing services do you offer?",
        answer:
          "We offer SEO, content marketing, social media management, paid advertising (Google/Meta/LinkedIn), email marketing, and comprehensive brand strategy.",
        category: "services",
      },
      {
        question: "How do you measure marketing success?",
        answer:
          "We set clear KPIs at the start — traffic, conversions, ROI, engagement — and provide monthly reports with transparent metrics and actionable recommendations.",
        category: "services",
      },
      {
        question: "How quickly can we see results?",
        answer:
          "Paid campaigns show results within days. SEO and content marketing typically show significant impact within 3-6 months. We set realistic expectations upfront.",
        category: "services",
      },
      {
        question: "Do you work with businesses outside of Ethiopia?",
        answer:
          "Yes. While we're based in Addis Ababa, we serve clients across Africa and internationally. Digital marketing knows no borders.",
        category: "general",
      },
      {
        question: "Can you manage our social media accounts?",
        answer:
          "Yes. We handle content creation, scheduling, community management, and performance analytics across all major social platforms.",
        category: "services",
      },
    ],
    benefits: [
      {
        title: "Data-Driven Decisions",
        description: "Every strategy is backed by analytics, not guesswork.",
        icon: "BarChart3",
      },
      {
        title: "Multi-Channel Approach",
        description: "Reach your audience wherever they are online.",
        icon: "Globe",
      },
      {
        title: "Local & Global Reach",
        description:
          "Expertise in both Ethiopian market and international audiences.",
        icon: "Map",
      },
      {
        title: "Transparent Reporting",
        description: "Monthly reports you can actually understand and act on.",
        icon: "FileText",
      },
    ],
    process: [
      {
        number: 1,
        title: "Audit",
        description:
          "Analyze your current digital presence and competitive landscape",
        icon: "Search",
      },
      {
        number: 2,
        title: "Strategy",
        description:
          "Develop a tailored marketing plan with clear goals and KPIs",
        icon: "Map",
      },
      {
        number: 3,
        title: "Execute",
        description: "Launch campaigns across chosen channels",
        icon: "Rocket",
      },
      {
        number: 4,
        title: "Optimize",
        description: "Continuously improve based on performance data",
        icon: "TrendingUp",
      },
    ],
  },
  {
    slug: "consulting",
    name: "Digital Consulting",
    tagline:
      "Strategic guidance for government and private sector digital transformation",
    description:
      "We provide expert consulting services to help organizations navigate digital transformation. Whether you're a government ministry looking to digitize services or a private enterprise modernizing operations, our consultants bring deep technical expertise and strategic thinking to every engagement. We bridge the gap between business goals and technology solutions.",
    shortDescription:
      "Strategic digital transformation consulting for government and private sectors.",
    icon: "Compass",
    capabilities: [
      {
        title: "Digital Strategy",
        description:
          "Roadmaps for digital transformation aligned with organizational goals",
        icon: "Map",
      },
      {
        title: "Technology Assessment",
        description:
          "Evaluate current systems and recommend modernization paths",
        icon: "ClipboardCheck",
      },
      {
        title: "Government Digitization",
        description:
          "Help public sector agencies deliver better digital services to citizens",
        icon: "Building",
      },
      {
        title: "Process Optimization",
        description:
          "Identify and eliminate inefficiencies through technology",
        icon: "Cog",
      },
      {
        title: "Vendor Selection",
        description:
          "Unbiased guidance on choosing the right technology partners",
        icon: "Search",
      },
      {
        title: "Change Management",
        description:
          "Ensure successful adoption of new systems and processes",
        icon: "Users",
      },
    ],
    technologies: [
      "Enterprise Architecture",
      "TOGAF",
      "Agile",
      "DevOps",
      "Cloud Migration",
      "Data Strategy",
      "Cybersecurity",
      "Compliance",
    ],
    relatedProjects: [],
    relatedServices: ["custom-software-development", "ai-integration"],
    faq: [
      {
        question: "Do you work with government organizations?",
        answer:
          "Yes. We have extensive experience consulting with government ministries and public sector agencies on digital transformation, e-government, and citizen service delivery.",
        category: "services",
      },
      {
        question: "What does a consulting engagement look like?",
        answer:
          "It typically starts with a discovery phase to understand your challenges, followed by analysis, strategy development, and an actionable roadmap with clear milestones.",
        category: "services",
      },
      {
        question: "Can you also implement the recommendations?",
        answer:
          "Absolutely. We can take projects from strategy through to implementation with our development team, or work alongside your existing vendors.",
        category: "services",
      },
      {
        question: "How is consulting priced?",
        answer:
          "Consulting is priced based on engagement scope and duration. We offer both project-based and retainer models. Contact us for a custom proposal.",
        category: "billing",
      },
      {
        question: "Do you offer ongoing advisory services?",
        answer:
          "Yes. Many clients retain us as ongoing technology advisors to ensure they stay ahead of industry trends and continue optimizing their digital operations.",
        category: "support",
      },
    ],
    benefits: [
      {
        title: "Sector Expertise",
        description:
          "Deep experience with both government and private sector challenges.",
        icon: "Building",
      },
      {
        title: "Actionable Roadmaps",
        description:
          "Clear, practical plans — not theoretical frameworks collecting dust.",
        icon: "Map",
      },
      {
        title: "Vendor-Neutral Advice",
        description:
          "Unbiased recommendations focused on what's best for your organization.",
        icon: "Shield",
      },
      {
        title: "End-to-End Support",
        description:
          "From strategy to implementation to ongoing advisory.",
        icon: "ArrowRight",
      },
    ],
    process: [
      {
        number: 1,
        title: "Discovery",
        description:
          "Understand your organization, challenges, and objectives",
        icon: "Search",
      },
      {
        number: 2,
        title: "Analysis",
        description: "Assess current state and identify opportunities",
        icon: "BarChart3",
      },
      {
        number: 3,
        title: "Strategy",
        description:
          "Develop a comprehensive digital transformation roadmap",
        icon: "Map",
      },
      {
        number: 4,
        title: "Execute & Advise",
        description:
          "Support implementation and provide ongoing guidance",
        icon: "HeartHandshake",
      },
    ],
  },
];
