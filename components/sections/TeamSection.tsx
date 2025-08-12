"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"
import { teamMembers } from "@/lib/data"

export default function TeamSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, design, and business
            strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="neuro-card p-6 text-center group"
            >
              <div className="relative mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-orange-400 font-semibold mb-3">{member.role}</p>
              <p className="text-white/70 mb-6">{member.bio}</p>

              <div className="flex justify-center gap-4">
                <button className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </button>
                <button className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors">
                  <Twitter className="w-5 h-5 text-blue-400" />
                </button>
                <button className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors">
                  <Github className="w-5 h-5 text-blue-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
