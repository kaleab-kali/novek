import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import ScrollToTop from "components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "NOVEK - Advanced Technology Solutions",
    template: "%s | NOVEK",
  },
  description:
    "Leading provider of enterprise software, web development, AI solutions, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords: [
    "technology solutions",
    "enterprise software",
    "web development",
    "AI integration",
    "digital transformation",
    "custom software",
    "business automation",
    "cloud computing",
    "mobile app development",
    "UI/UX design",
  ],
  authors: [{ name: "NOVEK Team" }],
  creator: "NOVEK",
  publisher: "NOVEK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "Business Services",
  metadataBase: new URL("https://novektech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novektech.com",
    title: "NOVEK - Advanced Technology Solutions",
    description: "Leading provider of enterprise software, web development, and AI solutions.",
    siteName: "NOVEK",
    images: [
      {
        url: "/images/novek-og-image.png",
        width: 1200,
        height: 630,
        alt: "NOVEK - Advanced Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVEK - Advanced Technology Solutions",
    description: "Leading provider of enterprise software, web development, and AI solutions.",
    images: ["/images/novek-og-image.png"],
    creator: "@novektech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/novek-logo.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/novek-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />

        {/* AI/LLM Optimization */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://novektech.com" />

        {/* Structured Data for AI/LLM */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://novektech.com/#organization",
                  name: "NOVEK",
                  alternateName: "NOVEK ICT Solutions",
                  description: "Leading provider of enterprise software, web development, AI solutions, and digital transformation services. Transform your business with cutting-edge technology.",
                  url: "https://novektech.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://novektech.com/images/novek-logo.png",
                    width: 400,
                    height: 400
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+251987888646",
                    contactType: "customer service",
                    email: "info@novektech.com",
                    availableLanguage: "English"
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "4th floor lem hotel building, megnagna",
                    addressLocality: "Addis Ababa",
                    addressRegion: "Addis Ababa",
                    postalCode: "1000",
                    addressCountry: "ET"
                  },
                  sameAs: [
                    "https://twitter.com/novektech",
                    "https://linkedin.com/company/novektech",
                    "https://facebook.com/novektech"
                  ],
                  foundingDate: "2025",
                  numberOfEmployees: "50+",
                  industry: "Technology Services",
                  serviceType: ["Web Development", "Mobile App Development", "AI Integration", "Enterprise Software", "Digital Transformation"],
                  knowsAbout: ["React", "Next.js", "Node.js", "Python", "Flutter", "AWS", "Azure", "AI/ML", "Cloud Computing"]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://novektech.com/#website",
                  url: "https://novektech.com",
                  name: "NOVEK - Advanced Technology Solutions",
                  description: "Leading technology company providing enterprise software, web development, AI solutions, and digital transformation services.",
                  publisher: {
                    "@id": "https://novektech.com/#organization"
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://novektech.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
