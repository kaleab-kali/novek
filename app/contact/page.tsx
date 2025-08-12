import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import ContactSection from "../../components/sections/ContactSection"

export default function ContactPage() {
  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />
      <div className="pt-20 md:pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
