import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import { Shield, FileText, Users, Download } from 'lucide-react'

export default function GDPRPage() {
  const rights = [
    {
      icon: FileText,
      title: "Right to Information",
      content: "You have the right to know what personal data we collect, how we use it, and who we share it with."
    },
    {
      icon: Users,
      title: "Right to Access",
      content: "You can request a copy of all personal data we hold about you at any time."
    },
    {
      icon: Shield,
      title: "Right to Rectification",
      content: "You have the right to correct any inaccurate or incomplete personal data we hold about you."
    },
    {
      icon: Download,
      title: "Right to Portability",
      content: "You can request your personal data in a structured, commonly used format for transfer to another service."
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
                GDPR Compliance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              We are committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR).
            </p>
            <p className="text-sm text-white/60 mt-4">Effective from May 25, 2018</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {rights.map((right, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 icon-gradient rounded-full flex items-center justify-center">
                    <right.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{right.title}</h2>
                </div>
                <p className="text-white/80 leading-relaxed">{right.content}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">
              <span className="gradient-text">
                Exercise Your Rights
              </span>
            </h2>
            <p className="text-white/80 mb-6">
              To exercise any of your GDPR rights, please contact our Data Protection Officer:
            </p>
            <div className="space-y-2 text-white/70 mb-6">
              <p>Email: info@novektech.com</p>
              <p>Phone: +251987888646</p>
              <p>Address: 4th floor lem hotel building, megnagna, addis ababa, ethiopia</p>
            </div>
            <button className="btn-primary">
              Request Data Export
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
