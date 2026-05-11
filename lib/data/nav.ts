import type { NavItem } from "@/lib/types";

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Software Development",
        href: "/services/custom-software-development",
        description: "Bespoke solutions built for your unique challenges",
        icon: "Code2",
      },
      {
        label: "AI Integration",
        href: "/services/ai-integration",
        description: "Embed intelligent AI capabilities into your workflows",
        icon: "Brain",
      },
      {
        label: "AI Training for Companies",
        href: "/services/ai-training",
        description: "Upskill your team with hands-on AI and ML training",
        icon: "GraduationCap",
      },
      {
        label: "Luxury Website Design",
        href: "/services/luxury-website-design",
        description: "Premium, high-end web experiences that captivate",
        icon: "Palette",
      },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Data-driven campaigns that deliver measurable growth",
        icon: "Megaphone",
      },
      {
        label: "Digital Consulting",
        href: "/services/consulting",
        description: "Strategic guidance for your digital transformation journey",
        icon: "Lightbulb",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Tax Intelligence Platform",
        href: "/products/tax-intelligence-platform",
        description: "Smart tax compliance and analytics for Ethiopian businesses",
        icon: "Receipt",
      },
      {
        label: "Restaurant Management",
        href: "/products/restaurant-management-system",
        description: "End-to-end operations for restaurants and food service",
        icon: "UtensilsCrossed",
      },
      {
        label: "NOVEK ERP",
        href: "/products/novek-erp",
        description: "Unified enterprise resource planning for growing companies",
        icon: "LayoutDashboard",
      },
      {
        label: "Property Management",
        href: "/products/property-management-system",
        description: "Streamline real estate operations and tenant relations",
        icon: "Building",
      },
      {
        label: "LuX AI",
        href: "/products/lux-ai",
        description: "AI-powered business intelligence and automation",
        icon: "Sparkles",
      },
      {
        label: "NOVEK CRM",
        href: "/products/novek-crm",
        description: "Customer relationship management built for African markets",
        icon: "Users",
      },
      {
        label: "Hospitality Management",
        href: "/products/hospitality-management-system",
        description: "Complete hotel and hospitality operations platform",
        icon: "Hotel",
      },
      {
        label: "NOVEK Commerce",
        href: "/products/novek-commerce",
        description: "E-commerce platform with local payment integrations",
        icon: "ShoppingCart",
      },
    ],
  },
  {
    label: "Work",
    href: "/projects",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "About",
    href: "/about",
  },
];
