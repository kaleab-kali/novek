import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "NOVEK ICT Solutions",
  description:
    "NOVEK ICT Solutions is Ethiopia's leading custom software development company, based in Addis Ababa. We build enterprise platforms, ERP systems, AI-powered solutions, tax intelligence software, hospitality management systems, and SaaS products for businesses across Africa.",
  url: "https://www.novektech.com",
  ogImage: "/og/default-og.png",
  email: "info@novektech.com",
  phone: "+251987888646",
  address: "4th Floor, Lem Hotel Building, Megnagna, Addis Ababa, Ethiopia",
  social: {
    linkedin: "https://linkedin.com/company/novektech",
    twitter: "https://twitter.com/novektech",
    github: "https://github.com/kaleab-kali",
    facebook: "https://facebook.com/novektech",
    instagram: "https://instagram.com/novektech",
  },
};

export const socialExtended = {
  ...siteConfig.social,
  tiktok: "https://www.tiktok.com/@novek_tech",
  youtube: "https://www.youtube.com/@novek-tech",
};

export const companyStats = [
  { value: "500+", label: "Projects completed" },
  { value: "50+", label: "Team members" },
  { value: "10+", label: "Years experience" },
  { value: "24/7", label: "Support" },
] as const;

export const impactMetrics = companyStats;
