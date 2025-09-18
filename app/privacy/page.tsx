import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import { Shield, Eye, Lock, FileText } from 'lucide-react'

export default function PrivacyPage() {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support."
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you."
    },
    {
      icon: Lock,
      title: "Information Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us."
    }
  ]

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />
      
      <section className="pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">
                Privacy Policy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-white/60 mt-4">Last updated: January 15, 2024</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 icon-gradient rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-white/80 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">
              <span className="gradient-text">
                Contact Us
              </span>
            </h2>
            <p className="text-white/80 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2 text-white/70">
              <p>Email: info@novektech.com</p>
              <p>Phone: +251987888646</p>
              <p>Address: 4th floor lem hotel building, megnagna, addis ababa, ethiopia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
