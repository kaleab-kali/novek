"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users } from 'lucide-react'

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with innovative technology solutions that drive growth and efficiency.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading provider of transformative technology solutions globally.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional quality in every project, exceeding client expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming their trusted technology partner.",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About NOVEK
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Founded with a vision to revolutionize the technology landscape, NOVEK has been at the forefront of
              innovation for over a decade. We specialize in creating cutting-edge software solutions, enterprise
              systems, and digital experiences that transform businesses.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively to deliver solutions that
              not only meet current needs but anticipate future challenges.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-white/70">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-white/70">Team Members</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center"
              >
                {/* Using reusable icon-gradient class */}
                <div className="w-12 h-12 mx-auto mb-4 icon-gradient rounded-full flex items-center justify-center shadow-lg">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
