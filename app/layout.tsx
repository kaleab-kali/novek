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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />

        {/* Structured Data for AI/LLM */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NOVEK",
              description: "Leading provider of enterprise software, web development, and AI solutions.",
              url: "https://novektech.com",
              logo: "https://novektech.com/images/novek-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+251946625060",
                contactType: "customer service",
                email: ["info@novektech.com", "kaleab@novektech.com"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "4th floor lem hotel building, megnagna",
                addressLocality: "Addis Ababa",
                addressRegion: "",
                postalCode: "12345",
                addressCountry: "Ethiopia",
              },
              sameAs: [
                "https://twitter.com/novektech",
                "https://linkedin.com/company/novektech",
                "https://facebook.com/novektech",
              ],
              foundingDate: "2025",
              numberOfEmployees: "50+",
              industry: "Technology Services",
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
