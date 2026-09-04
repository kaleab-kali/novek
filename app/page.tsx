import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { FAQPreview } from "@/components/sections/faq-preview";
import { ScheduleConsultation } from "@/components/sections/schedule-consultation";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = generatePageMetadata({
  title: `${siteConfig.name} - Ethiopian Software & AI Solutions`,
  description: siteConfig.description,
  path: "",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
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
