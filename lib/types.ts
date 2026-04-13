export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  icon: string;
  capabilities: Capability[];
  technologies: string[];
  relatedProjects: string[];
  relatedServices: string[];
  faq: FAQItem[];
  benefits: Benefit[];
  process: ProcessStep[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
  features: ProductFeature[];
  howItWorks: ProcessStep[];
  techStack: string[];
  integrations: Integration[];
  useCases: UseCase[];
  caseStudy?: string;
  faq: FAQItem[];
  changelog?: ChangelogEntry[];
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  industry: string;
  year: string;
  thumbnail: string;
  heroImage: string;
  tags: string[];
  services: string[];
  shortDescription: string;
  challenge: string;
  approach: string;
  solution: string;
  results: Metric[];
  techStack: string[];
  testimonial?: Testimonial;
  relatedProjects: string[];
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  image: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category:
    | "general"
    | "services"
    | "products"
    | "technical"
    | "billing"
    | "support";
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface JobPosting {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHaves: string[];
  benefits: string[];
  postedDate: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
  image?: string;
  subFeatures?: string[];
}

export interface Integration {
  name: string;
  icon: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

export interface ChangelogEntry {
  date: string;
  version: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  url?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  email: string;
  phone: string;
  address: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
    facebook: string;
    instagram: string;
  };
}
