"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function StatsSection() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats = [
    { label: "Projects Completed", value: 500, suffix: "+", key: "projects" },
    { label: "Happy Clients", value: 200, suffix: "+", key: "clients" },
    { label: "Years Experience", value: 10, suffix: "+", key: "years" },
    { label: "Client Satisfaction", value: 99, suffix: "%", key: "satisfaction" },
  ]

  useEffect(() => {
    const animateCounters = () => {
      if (hasAnimated) return

      stats.forEach((stat) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => ({ ...prev, [stat.key]: end }))
            clearInterval(timer)
          } else {
            setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }))
          }
        }, 16)
      })

      setHasAnimated(true)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters()
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="stats-section" className="py-12 md:py-20 relative bg-slate-800/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  {counts[stat.key as keyof typeof counts]}
                  {stat.suffix}
                </span>
              </div>
              <p className="text-white/90 text-base md:text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
