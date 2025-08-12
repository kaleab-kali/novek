import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import { Cookie, Settings, BarChart3, Shield } from 'lucide-react'

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: Cookie,
      title: "Essential Cookies",
      content: "These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you."
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      content: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously."
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      content: "These cookies enable the website to provide enhanced functionality and personalization based on your interactions."
    },
    {
      icon: Shield,
      title: "Security Cookies",
      content: "These cookies help us keep our website secure by detecting malicious activity and protecting user data."
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
                Cookie Policy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Learn about how we use cookies to improve your experience on our website.
            </p>
            <p className="text-sm text-white/60 mt-4">Last updated: January 15, 2024</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 icon-gradient rounded-full flex items-center justify-center">
                    <cookie.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{cookie.title}</h2>
                </div>
                <p className="text-white/80 leading-relaxed">{cookie.content}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">
              <span className="gradient-text">
                Managing Cookies
              </span>
            </h2>
            <p className="text-white/80 mb-4">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience.
            </p>
            <div className="space-y-4 text-white/70">
              <p>• Most browsers allow you to view, manage, and delete cookies</p>
              <p>• You can set your browser to refuse all cookies or indicate when a cookie is being sent</p>
              <p>• Some features of our website may not function properly without cookies</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
