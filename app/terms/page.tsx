import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import { FileText, Users, Shield, AlertTriangle } from 'lucide-react'

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "Terms of Service",
      content: "By accessing and using our services, you agree to be bound by these terms and conditions. Please read them carefully before using our platform."
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account."
    },
    {
      icon: Shield,
      title: "Service Availability",
      content: "We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. Scheduled maintenance may occur with prior notice."
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: "Our liability is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages."
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
                Terms of Service
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              These terms govern your use of our services. By using NOVEK services, you agree to these terms.
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
                Contact Information
              </span>
            </h2>
            <p className="text-white/80 mb-4">
              For questions about these terms, please contact our legal team:
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
