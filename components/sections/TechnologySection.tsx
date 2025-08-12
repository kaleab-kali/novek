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
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Technologies We Master
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center group hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                <Image
                  src={tech.logo || "/placeholder.svg?height=32&width=32"}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <p className="text-sm text-white font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
