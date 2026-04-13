import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { AboutSnapshot } from "@/components/sections/about-snapshot";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { FAQPreview } from "@/components/sections/faq-preview";
import { CTABanner } from "@/components/sections/cta-banner";

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
      <CTABanner />
    </>
  );
}
