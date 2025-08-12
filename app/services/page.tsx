
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import { services } from 'lib/data'
import { Code, Smartphone, Building, Palette, Search, Brain, BarChart3, Cloud, ArrowRight, CheckCircle } from 'lucide-react'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'


const iconMap = {
  Code,
  Smartphone,
  Building,
  Palette,
  Search,
  Brain,
  BarChart3,
  Cloud,
}

export default function ServicesPage() {
  const featuredService = services[0]
  const otherServices = services.slice(1)

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-blue-900/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Expert Technology Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide comprehensive technology services that drive innovation and
              accelerate your digital transformation journey.
            </p>
          </div>

          {/* Featured Service */}
          <div className="glass-card p-6 md:p-8 mb-12 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-blue-400 mb-2">Most Popular Service</div>
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                  {featuredService.name}
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">{featuredService.description}</p>

                <div className="space-y-3 mb-8">
                  {featuredService.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 icon-gradient rounded-full flex items-center justify-center">
                  <Code className="w-24 h-24 md:w-32 md:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-12 md:pb-20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text text-center mb-8 md:mb-12">
            All Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherServices.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]

              return (
                <div
                  key={service.id}
                  className="neuro-card p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 icon-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-white">{service.name}</h3>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>

                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 2).map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                      <div key={idx} className="text-xs text-blue-300">
                        • {feature}
                      </div>
                    ))}
                  </div>

                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
