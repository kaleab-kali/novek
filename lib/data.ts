import type { Product, Service, TeamMember, Testimonial, BlogPost } from "@/types"

// Portfolio projects with detailed information
export interface PortfolioProject {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: string
  technologies: string[]
  features: string[]
  challenges: string[]
  results: string[]
  clientName: string
  projectDuration: string
  teamSize: number
  slug: string
  gallery: string[]
}

// STRAPI-READY: These will be replaced by Strapi API calls
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with AI-powered recommendations",
    longDescription:
      "A comprehensive e-commerce platform built for a leading retail company, featuring advanced AI-powered product recommendations, real-time inventory management, and seamless payment processing. The platform handles over 10,000 daily transactions and serves customers across multiple countries.",
    image: "/modern-ecommerce-platform.png",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS"],
    features: [
      "AI-powered product recommendations",
      "Real-time inventory management",
      "Multi-currency support",
      "Advanced analytics dashboard",
      "Mobile-responsive design",
      "SEO optimization",
    ],
    challenges: [
      "Handling high traffic loads during peak seasons",
      "Implementing complex recommendation algorithms",
      "Ensuring PCI compliance for payment processing",
      "Optimizing page load speeds for mobile users",
    ],
    results: [
      "40% increase in conversion rates",
      "60% improvement in page load speeds",
      "25% increase in average order value",
      "99.9% uptime achieved",
    ],
    clientName: "RetailCorp Inc.",
    projectDuration: "8 months",
    teamSize: 6,
    slug: "ecommerce-platform",
    gallery: ["/ecommerce-gallery-1.png", "/ecommerce-gallery-2.png", "/ecommerce-gallery-3.png"],
  },
  {
    id: "2",
    title: "Healthcare Management System",
    description: "Comprehensive healthcare management platform",
    longDescription:
      "A complete healthcare management system designed for hospitals and clinics, featuring patient management, appointment scheduling, electronic health records, and telemedicine capabilities. The system serves over 50 healthcare facilities and manages 100,000+ patient records.",
    image: "/healthcare-management-dashboard.png",
    category: "Enterprise Software",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker", "Kubernetes"],
    features: [
      "Electronic Health Records (EHR)",
      "Appointment scheduling system",
      "Telemedicine integration",
      "Billing and insurance management",
      "Real-time notifications",
      "HIPAA compliance",
    ],
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Integrating with existing hospital systems",
      "Building real-time communication features",
      "Handling sensitive patient data",
    ],
    results: [
      "50% reduction in administrative tasks",
      "30% improvement in patient satisfaction",
      "99.99% data security compliance",
      "24/7 system availability",
    ],
    clientName: "MedCenter Healthcare",
    projectDuration: "12 months",
    teamSize: 8,
    slug: "healthcare-management",
    gallery: ["/healthcare-gallery-1.png", "/healthcare-gallery-2.png", "/healthcare-gallery-3.png"],
  },
  {
    id: "3",
    title: "Luxury Brand Website",
    description: "Premium website for high-end fashion brand",
    longDescription:
      "An elegant and sophisticated website for a luxury fashion brand, featuring immersive product showcases, virtual try-on capabilities, and exclusive member experiences. The site combines cutting-edge technology with premium design aesthetics.",
    image: "/luxury-fashion-website.png",
    category: "Web Design",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "Three.js", "Contentful", "Vercel"],
    features: [
      "3D product visualization",
      "Virtual try-on technology",
      "Exclusive member portal",
      "Premium animations",
      "Multi-language support",
      "Luxury brand storytelling",
    ],
    challenges: [
      "Creating premium user experiences",
      "Implementing 3D product visualization",
      "Optimizing for luxury brand aesthetics",
      "Ensuring fast loading times with rich media",
    ],
    results: [
      "200% increase in online engagement",
      "150% boost in premium product sales",
      "45% increase in membership signups",
      "Award-winning design recognition",
    ],
    clientName: "Luxe Fashion House",
    projectDuration: "6 months",
    teamSize: 5,
    slug: "luxury-brand-website",
    gallery: ["/luxury-gallery-1.png", "/luxury-gallery-2.png", "/luxury-gallery-3.png"],
  },
]

// STRAPI-READY: These will be replaced by Strapi API calls
export const products: Product[] = [
  {
    id: "1",
    name: "NOVEK Accounting Pro",
    description: "Advanced accounting software with AI-powered insights and automated bookkeeping.",
    features: ["Automated Bookkeeping", "Tax Compliance", "Financial Reporting", "Multi-Currency Support"],
    image: "/placeholder.svg?height=250&width=400",
    category: "software",
    price: "Starting at $99/month",
    slug: "accounting-pro",
  },
  {
    id: "2",
    name: "Background Checker Elite",
    description: "Comprehensive employee background verification system with real-time updates.",
    features: ["Criminal History Check", "Employment Verification", "Education Verification", "Reference Checks"],
    image: "/background-check-dashboard.png",
    category: "software",
    price: "Starting at $49/month",
    slug: "background-checker",
  },
  {
    id: "3",
    name: "NOVEK ERP Suite",
    description: "Enterprise Resource Planning solution for streamlined business operations.",
    features: ["Inventory Management", "Supply Chain Optimization", "Financial Integration", "Analytics Dashboard"],
    image: "/erp-dashboard.png",
    category: "software",
    price: "Custom Pricing",
    slug: "erp-suite",
  },
  {
    id: "4",
    name: "HR Management System",
    description: "Complete human resources management platform with AI-driven insights.",
    features: ["Employee Onboarding", "Performance Management", "Payroll Integration", "Time Tracking"],
    image: "/hr-management-system-interface.png",
    category: "software",
    price: "Starting at $79/month",
    slug: "hr-system",
  },
  {
    id: "5",
    name: "CRM Pro Tools",
    description: "Customer relationship management with advanced automation and analytics.",
    features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Email Automation"],
    image: "/crm-dashboard-interface.png",
    category: "software",
    price: "Starting at $59/month",
    slug: "crm-tools",
  },
  {
    id: "6",
    name: "Luxury Brand Websites",
    description: "Premium website development for high-end brands and luxury companies.",
    features: ["Custom Design", "Premium Animations", "E-commerce Integration", "Brand Storytelling"],
    image: "/luxury-website-showcase.png",
    category: "website",
    price: "Starting at $5,000",
    slug: "luxury-websites",
  },
  {
    id: "7",
    name: "Gift Websites for Loved Ones",
    description: "Personalized websites as unique gifts for special occasions.",
    features: ["Personal Stories", "Photo Galleries", "Interactive Elements", "Mobile Optimized"],
    image: "/personalized-gift-website.png",
    category: "website",
    price: "Starting at $299",
    slug: "gift-websites",
  },
]

// STRAPI-READY: These will be replaced by Strapi API calls
export const services: Service[] = [
  {
    id: "1",
    name: "Web Development",
    description: "Custom web applications built with cutting-edge technologies.",
    icon: "Code",
    features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    slug: "web-development",
  },
  {
    id: "2",
    name: "App Development",
    description: "Native and cross-platform mobile applications.",
    icon: "Smartphone",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    slug: "app-development",
  },
  {
    id: "3",
    name: "Enterprise Systems",
    description: "Scalable enterprise solutions for large organizations.",
    icon: "Building",
    features: ["Microservices", "Cloud Architecture", "API Development", "System Integration"],
    slug: "enterprise-systems",
  },
  {
    id: "4",
    name: "UX/UI Design",
    description: "User-centered design that converts and engages.",
    icon: "Palette",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    slug: "ux-ui-design",
  },
  {
    id: "5",
    name: "SEO Optimization",
    description: "Search engine optimization for maximum visibility.",
    icon: "Search",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
    slug: "seo-optimization",
  },
  {
    id: "6",
    name: "AI Integration",
    description: "Artificial intelligence solutions for business automation.",
    icon: "Brain",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Chatbots"],
    slug: "ai-integration",
  },
  {
    id: "7",
    name: "Data Analytics",
    description: "Transform data into actionable business insights.",
    icon: "BarChart3",
    features: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Reporting"],
    slug: "data-analytics",
  },
  {
    id: "8",
    name: "Cloud Computing",
    description: "Scalable cloud infrastructure and deployment solutions.",
    icon: "Cloud",
    features: ["AWS/Azure/GCP", "DevOps", "Containerization", "Monitoring"],
    slug: "cloud-computing",
  },
]

// STRAPI-READY: These will be replaced by Strapi API calls
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/professional-ceo-headshot.png",
    bio: "Visionary leader with 15+ years in tech innovation.",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "CTO",
    image: "/cto-headshot.png",
    bio: "Technical expert specializing in scalable architectures.",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    role: "Head of Design",
    image: "/professional-designer-headshot.png",
    bio: "Creative director with award-winning design expertise.",
  },
]

// STRAPI-READY: These will be replaced by Strapi API calls
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Kennedy",
    company: "AfriTake Import & Export",
    content: "Novek built our company website with a modern, professional look. The team was responsive and delivered exactly what we needed.",
    rating: 5,
    // image: "/professional-client-headshot.png",
  },
  {
    id: "2",
    name: "Bereket D",
    company: "Zellion LLC",
    content: "Novek developed our HR software and streamlined our DevOps processes. Their expertise and support were outstanding.",
    rating: 5,
    // image: "/professional-client-headshot.png",
  },
  {
    id: "3",
    name: "Ezana M",
    company: "Titan Industrial PLC",
    content: "Novek delivered custom software for our operations. The solution was robust, scalable, and tailored to our needs.",
    rating: 5,
    // image: "/professional-client-headshot.png",
  },
]

// STRAPI-READY: These will be replaced by Strapi API calls
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Business",
    excerpt: "Exploring how artificial intelligence is reshaping modern business operations.",
    content: "Full blog content here...",
    image: "/ai-blog-header.png",
    author: "Alex Johnson",
    publishedAt: "2024-01-15",
    slug: "future-of-ai-in-business",
  },
  {
    id: "2",
    title: "Building Scalable Web Applications",
    excerpt: "Best practices for creating web applications that grow with your business.",
    content: "Full blog content here...",
    image: "/web-development-blog-header.png",
    author: "Sarah Chen",
    publishedAt: "2024-01-10",
    slug: "building-scalable-web-applications",
  },
]
