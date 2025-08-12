// Strapi v5 Integration Setup
interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiItem {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale?: string
}

// Strapi v5 API Configuration
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

// Generic Strapi fetch function
async function fetchStrapi<T>(
  endpoint: string,
  options: {
    populate?: string | string[]
    filters?: Record<string, any>
    sort?: string | string[]
    pagination?: {
      page?: number
      pageSize?: number
    }
    locale?: string
  } = {}
): Promise<StrapiResponse<T>> {
  const { populate, filters, sort, pagination, locale } = options
  
  const params = new URLSearchParams()
  
  // Handle populate (Strapi v5 syntax)
  if (populate) {
    if (Array.isArray(populate)) {
      populate.forEach(field => params.append('populate[]', field))
    } else {
      params.append('populate', populate)
    }
  }
  
  // Handle filters (Strapi v5 syntax)
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, value)
    })
  }
  
  // Handle sorting
  if (sort) {
    if (Array.isArray(sort)) {
      sort.forEach(field => params.append('sort[]', field))
    } else {
      params.append('sort', sort)
    }
  }
  
  // Handle pagination
  if (pagination) {
    if (pagination.page) params.append('pagination[page]', pagination.page.toString())
    if (pagination.pageSize) params.append('pagination[pageSize]', pagination.pageSize.toString())
  }
  
  // Handle locale
  if (locale) {
    params.append('locale', locale)
  }
  
  const url = `${STRAPI_URL}/api/${endpoint}?${params.toString()}`
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${STRAPI_TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 }, // ISR with 60 seconds revalidation
  })
  
  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status}`)
  }
  
  return response.json()
}

// Strapi Content Types (ready for v5)
export interface StrapiProduct extends StrapiItem {
  name: string
  description: string
  longDescription?: string
  features: string[]
  price: string
  category: 'software' | 'service' | 'website'
  slug: string
  image?: {
    data?: {
      id: number
      attributes: {
        url: string
        alternativeText?: string
        width: number
        height: number
      }
    }
  }
  gallery?: {
    data?: Array<{
      id: number
      attributes: {
        url: string
        alternativeText?: string
        width: number
        height: number
      }
    }>
  }
}

export interface StrapiService extends StrapiItem {
  name: string
  description: string
  icon: string
  features: string[]
  slug: string
}

export interface StrapiTeamMember extends StrapiItem {
  name: string
  role: string
  bio: string
  image?: {
    data?: {
      id: number
      attributes: {
        url: string
        alternativeText?: string
        width: number
        height: number
      }
    }
  }
  socialLinks?: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface StrapiTestimonial extends StrapiItem {
  name: string
  company: string
  content: string
  rating: number
  image?: {
    data?: {
      id: number
      attributes: {
        url: string
        alternativeText?: string
        width: number
        height: number
      }
    }
  }
}

export interface StrapiBlogPost extends StrapiItem {
  title: string
  excerpt: string
  content: string
  slug: string
  author: string
  publishedAt: string
  image?: {
    data?: {
      id: number
      attributes: {
        url: string
        alternativeText?: string
        width: number
        height: number
      }
    }
  }
  categories?: {
    data?: Array<{
      id: number
      attributes: {
        name: string
        slug: string
      }
    }>
  }
}

export interface StrapiPortfolioProject extends StrapiItem {
  title: string
  description: string
  longDescription: string
  category: string
  technologies: string[]
  features: string[]
  challenges: string[]
  results: string[]
  clientName: string
  projectDuration: string
  teamSize: number
  slug: string
  image?: {
    data?: {
      id: number
      attributes: {
        url: string
        alternativeText?: string
        width: number
        height: number
      }
    }
  }
  gallery?: {
    data?: Array<{
      id: number
      attributes: {
        url: string
        alternativeText?: string
        width: number
        height: number
      }
    }>
  }
}

export interface StrapiCompanyInfo extends StrapiItem {
  companyName: string
  tagline: string
  description: string
  foundedDate: string
  email: string
  phone: string
  address: string
  socialLinks: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
  stats: {
    projectsCompleted: number
    happyClients: number
    yearsExperience: number
    clientSatisfaction: number
  }
}

// API Functions for Strapi v5
export async function getProducts(options: { limit?: number; featured?: boolean } = {}) {
  const filters: Record<string, any> = {}
  if (options.featured) {
    filters.featured = true
  }
  
  return fetchStrapi<StrapiProduct[]>('products', {
    populate: ['image', 'gallery'],
    filters,
    pagination: options.limit ? { pageSize: options.limit } : undefined,
    sort: ['createdAt:desc']
  })
}

export async function getProductBySlug(slug: string) {
  const response = await fetchStrapi<StrapiProduct[]>('products', {
    populate: ['image', 'gallery'],
    filters: { slug }
  })
  
  return response.data[0] || null
}

export async function getServices(options: { limit?: number } = {}) {
  return fetchStrapi<StrapiService[]>('services', {
    pagination: options.limit ? { pageSize: options.limit } : undefined,
    sort: ['createdAt:desc']
  })
}

export async function getTeamMembers() {
  return fetchStrapi<StrapiTeamMember[]>('team-members', {
    populate: ['image'],
    sort: ['order:asc']
  })
}

export async function getTestimonials(options: { limit?: number } = {}) {
  return fetchStrapi<StrapiTestimonial[]>('testimonials', {
    populate: ['image'],
    filters: { published: true },
    pagination: options.limit ? { pageSize: options.limit } : undefined,
    sort: ['createdAt:desc']
  })
}

export async function getBlogPosts(options: { limit?: number; featured?: boolean } = {}) {
  const filters: Record<string, any> = { published: true }
  if (options.featured) {
    filters.featured = true
  }
  
  return fetchStrapi<StrapiBlogPost[]>('blog-posts', {
    populate: ['image', 'categories'],
    filters,
    pagination: options.limit ? { pageSize: options.limit } : undefined,
    sort: ['publishedAt:desc']
  })
}

export async function getBlogPostBySlug(slug: string) {
  const response = await fetchStrapi<StrapiBlogPost[]>('blog-posts', {
    populate: ['image', 'categories'],
    filters: { slug, published: true }
  })
  
  return response.data[0] || null
}

export async function getPortfolioProjects(options: { limit?: number; featured?: boolean } = {}) {
  const filters: Record<string, any> = { published: true }
  if (options.featured) {
    filters.featured = true
  }
  
  return fetchStrapi<StrapiPortfolioProject[]>('portfolio-projects', {
    populate: ['image', 'gallery'],
    filters,
    pagination: options.limit ? { pageSize: options.limit } : undefined,
    sort: ['createdAt:desc']
  })
}

export async function getPortfolioProjectBySlug(slug: string) {
  const response = await fetchStrapi<StrapiPortfolioProject[]>('portfolio-projects', {
    populate: ['image', 'gallery'],
    filters: { slug, published: true }
  })
  
  return response.data[0] || null
}

export async function getCompanyInfo() {
  const response = await fetchStrapi<StrapiCompanyInfo>('company-info', {
    populate: '*'
  })
  
  return response.data
}

// Helper function to get full image URL from Strapi
export function getStrapiImageUrl(imageData: any): string {
  if (!imageData?.data?.attributes?.url) return '/placeholder.svg'
  
  const url = imageData.data.attributes.url
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`
}

// Helper function to format Strapi date
export function formatStrapiDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
