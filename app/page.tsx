import Header from "../components/layout/Header"
import HeroSection from "../components/sections/HeroSection"
import ProductsSection from "../components/sections/ProductsSection"
import ServicesSection from "../components/sections/ServicesSection"
import AboutSection from "../components/sections/AboutSection"
import TechnologySection from "../components/sections/TechnologySection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import ProcessSection from "../components/sections/ProcessSection"
import PortfolioSection from "../components/sections/PortfolioSection"
import BlogSection from "../components/sections/BlogSection"
import StatsSection from "../components/sections/StatsSection"
import ContactSection from "../components/sections/ContactSection"
import Footer from "../components/layout/Footer"

export default function HomePage() {
  return (
    <main className="relative bg-slate-900 text-white">
      <Header />
      <HeroSection />
      <div id="about-section">
        <AboutSection />
      </div>
      <div id="products-section">
        <ProductsSection />
      </div>
      <ServicesSection />
      <TechnologySection />
      <ProcessSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
