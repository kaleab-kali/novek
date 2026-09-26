import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { GlobalOutsourcingPreview } from "@/components/sections/global-outsourcing-preview";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { FAQPreview } from "@/components/sections/faq-preview";
import { ScheduleConsultation } from "@/components/sections/schedule-consultation";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = generatePageMetadata({
  title: "NOVEK ICT Solutions | Premier Software & AI Company in Ethiopia",
  description:
    "NOVEK ICT Solutions is a premier technology firm in Addis Ababa, Ethiopia. We engineer custom software, ERP systems, e-invoicing SaaS, CRM, capital market platforms, and AI solutions.",
  path: "",
  keywords: [
    "software company Addis Ababa",
    "software development Ethiopia",
    "custom software Ethiopia",
    "best outsourcing company in ethiopia",
    "software outsourcing company ethiopia",
    "hire developers in ethiopia",
    "ERP systems Ethiopia",
    "e-invoicing software Ethiopia",
    "AI integration Ethiopia",
    "NOVEK ICT Solutions",
    "best tech company Ethiopia",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <GlobalOutsourcingPreview />
      <ProductsShowcase />
      <ImpactMetrics />
      <AboutSnapshot />
      <WhyChooseUs />
      <Testimonials />
      <FAQPreview />
      <ScheduleConsultation id="schedule" />
      <CTABanner />
    </>
  );
}
