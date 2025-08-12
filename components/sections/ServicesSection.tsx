"use client"

import { Code, Smartphone, Building, Palette, Search, Brain, BarChart3, Cloud } from 'lucide-react'
import { services } from "@/lib/data"

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

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-section-title gradient-text mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology services that drive innovation and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <div
                key={service.id}
                className="glass-card p-4 md:p-6 text-center group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                {/* Using reusable icon-gradient class */}
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 icon-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-white">{service.name}</h3>
                <p className="text-sm md:text-base text-white/70 mb-3 md:mb-4">{service.description}</p>

                <div className="space-y-1">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="text-xs md:text-sm text-blue-300">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
