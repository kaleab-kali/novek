import { DM_Sans, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig, socialExtended } from "@/lib/data/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { NoiseOverlay } from "@/components/layout/noise-overlay";
import { SkipToContent } from "@/components/layout/skip-to-content";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Ethiopian Software & AI Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "software development ethiopia",
    "tech company addis ababa",
    "custom software ethiopia",
    "ERP software ethiopia",
    "e-invoicing software ethiopia",
    "e-invoicing SaaS ethiopia",
    "capital market software ethiopia",
    "broker back office software ethiopia",
    "order management system ethiopia",
    "shareholder management system ethiopia",
    "AI solutions africa",
    "NOVEK ICT Solutions",
    "NOVEK Ethiopia",
    "best tech company Ethiopia",
    "AI company Ethiopia",
    "digital transformation ethiopia",
    "business software products ethiopia",
    "hospitality software ethiopia",
    "tax software ethiopia",
    "web development addis ababa",
    "mobile app development ethiopia",
    "enterprise software ethiopia",
    "IT company ethiopia",
  ],
  authors: [{ name: "NOVEK ICT Solutions" }],
  creator: "NOVEK ICT Solutions",
  publisher: "NOVEK ICT Solutions",
  formatDetection: { telephone: true, email: true },
  category: "technology",
  alternates: { canonical: siteConfig.url },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/favicon-32x32.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${siteConfig.name} - Ethiopian Software & AI Solutions`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/og/default-og.png", width: 1200, height: 630, alt: siteConfig.name }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Ethiopian Software & AI Solutions`,
    description: siteConfig.description,
    images: ["/og/default-og.png"],
    site: "@novektech",
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
    google: siteConfig.googleVerification || undefined,
  },
  other: {
    "msapplication-TileImage": "/icons/mstile-150x150.png",
    "msapplication-TileColor": "#0A0F1E",
    "theme-color": "#0A0F1E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allSocials = [
    ...Object.values(siteConfig.social),
    socialExtended.tiktok,
    socialExtended.youtube,
  ];

  const navigationItems = [
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Products", url: `${siteConfig.url}/products` },
    { name: "Projects", url: `${siteConfig.url}/projects` },
    { name: "Why NOVEK", url: `${siteConfig.url}/why-novek` },
    { name: "Industries", url: `${siteConfig.url}/industries` },
    { name: "About", url: `${siteConfig.url}/about` },
    { name: "Contact", url: `${siteConfig.url}/contact` },
    { name: "FAQ", url: `${siteConfig.url}/faq` },
    { name: "Careers", url: `${siteConfig.url}/careers` },
  ];

  return (
    <html
      lang="en"
      className={cn("dark antialiased", dmSans.variable, jetbrainsMono.variable)}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo1.png`,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: "4th Floor, Lem Hotel Building, Megnagna",
                addressLocality: "Addis Ababa",
                postalCode: "1000",
                addressCountry: "ET",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: siteConfig.email,
                telephone: siteConfig.phone,
                contactType: "customer service",
                availableLanguage: ["English", "Amharic"],
              },
              areaServed: [
                { "@type": "Country", name: "Ethiopia" },
                { "@type": "Place", name: "East Africa" },
                { "@type": "Place", name: "Africa" },
              ],
              knowsAbout: [
                "custom software development in Ethiopia",
                "AI integration for businesses",
                "e-invoicing software in Ethiopia",
                "ERP software",
                "CRM software",
                "capital market software",
                "broker back office systems",
                "order management systems",
                "shareholder management systems",
                "hospitality management software",
                "tax intelligence software",
                "restaurant management software",
                "property management software",
                "business software product development",
                "digital transformation",
              ],
              sameAs: allSocials,
            }),
          }}
        />
        {/* WebSite Schema: enables sitelinks search box in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              alternateName: "NOVEK",
              url: siteConfig.url,
              description: siteConfig.description,
              publisher: {
                "@type": "Organization",
                name: siteConfig.name,
                logo: {
                  "@type": "ImageObject",
                  url: `${siteConfig.url}/logo1.png`,
                },
              },
            }),
          }}
        />
        {/* SiteNavigationElement: standard Schema.org ItemList for sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: navigationItems.map((item, index) => ({
                "@type": "SiteNavigationElement",
                position: index + 1,
                name: item.name,
                url: item.url,
              })),
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#070B16] font-sans text-[#E8E4DC] relative antialiased selection:bg-[#C9A96E]/25 selection:text-[#F5F0E8]">
        {/* Consistent Global Precision Matrix Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(rgba(201, 169, 110, 0.7) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Subtle Ambient Depth Lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.14)_0%,rgba(91,141,239,0.04)_50%,transparent_75%)] blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-1/2 -right-40 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.06)_0%,transparent_70%)] blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-10 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(91,141,239,0.05)_0%,transparent_70%)] blur-[90px]"
        />
        <SkipToContent />
        <ScrollProgress />
        <NoiseOverlay />
        <Navbar />
        <main id="main-content" className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
