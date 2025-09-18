"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TechnologySection() {
  const technologies = [
    { name: "React", logo: "/react-logo.png", color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", logo: "/nextjs-logo.png", color: "from-gray-800 to-gray-600" },
    { name: "TypeScript", logo: "/typescript-logo.png", color: "from-blue-600 to-blue-400" },
    { name: "Node.js", logo: "/nodejs-logo.png", color: "from-green-600 to-green-400" },
    { name: "Python", logo: "/python-logo.png", color: "from-yellow-500 to-blue-500" },
    { name: "AWS", logo: "/aws-logo.png", color: "from-orange-500 to-yellow-400" },
    { name: "Docker", logo: "/docker-logo.png", color: "from-blue-500 to-cyan-400" },
    { name: "Flutter", logo: "/flutter-logo.png", color: "from-blue-400 to-cyan-300" },
  ]

  return (
    <section className="py-12 md:py-20 relative bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
            <span className="gradient-text">
              Technologies We Master
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/15 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                <Image
                  src={tech.logo || "/placeholder.svg?height=48&width=48"}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-10 h-10 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{
                  background: `linear-gradient(135deg, ${tech.color.includes('blue-400') ? '#60a5fa' : tech.color.includes('gray-800') ? '#1f2937' : tech.color.includes('green-600') ? '#16a34a' : tech.color.includes('yellow-500') ? '#eab308' : tech.color.includes('orange-500') ? '#f97316' : '#60a5fa'}, ${tech.color.includes('cyan-400') ? '#22d3ee' : tech.color.includes('gray-600') ? '#4b5563' : tech.color.includes('green-400') ? '#4ade80' : tech.color.includes('blue-500') ? '#3b82f6' : tech.color.includes('yellow-400') ? '#facc15' : tech.color.includes('cyan-300') ? '#67e8f9' : '#22d3ee'})`
                }} />
              </div>
              <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
