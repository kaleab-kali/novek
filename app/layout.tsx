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
    default: `${siteConfig.name} — Custom Software & AI Solutions | Ethiopia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "software development ethiopia",
    "tech company addis ababa",
    "custom software ethiopia",
    "ERP software ethiopia",
    "AI solutions africa",
    "NOVEK ICT Solutions",
    "digital transformation ethiopia",
    "SaaS products ethiopia",
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
    title: `${siteConfig.name} — Custom Software & AI Solutions | Ethiopia`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/og/default-og.png", width: 1200, height: 630, alt: siteConfig.name }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Custom Software & AI Solutions`,
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

  return (
    <html
      lang="en"
      className={cn("dark antialiased", dmSans.variable, jetbrainsMono.variable)}
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
              sameAs: allSocials,
            }),
          }}
        />
        {/* WebSite Schema — enables sitelinks search box in Google */}
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
        {/* SiteNavigationElement — helps Google show sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: [
                "Services",
                "Products",
                "About",
                "Contact",
                "FAQ",
                "Careers",
              ],
              url: [
                `${siteConfig.url}/services`,
                `${siteConfig.url}/products`,
                `${siteConfig.url}/about`,
                `${siteConfig.url}/contact`,
                `${siteConfig.url}/faq`,
                `${siteConfig.url}/careers`,
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0F1E] font-sans text-white">
        <SkipToContent />
        <ScrollProgress />
        <NoiseOverlay />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
