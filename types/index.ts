export interface Product {
  id: string
  name: string
  description: string
  features: string[]
  image: string
  category: "software" | "service" | "website"
  price?: string
  slug: string
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
  features: string[]
  slug: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  content: string
  rating: number
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  publishedAt: string
  slug: string
}

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
