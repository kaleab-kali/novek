"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Code, Rocket } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your needs, goals, and challenges to create a comprehensive project roadmap.",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Our team develops a tailored strategy and technical architecture for your solution.",
    },
    {
      icon: Code,
      title: "Development",
      description: "We build your solution using cutting-edge technologies and best practices.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "We deploy, test, and optimize your solution for peak performance and reliability.",
    },
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
              Our Process
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We follow a proven methodology to ensure every project delivers exceptional results on time and within
            budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center h-full hover:bg-white/20 transition-all duration-300">
                {/* Using reusable icon-gradient class */}
                <div className="w-16 h-16 mx-auto mb-4 icon-gradient rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Using reusable bg-gradient-novek class */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-novek rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{step.description}</p>
              </div>

              {/* Using reusable line-gradient class */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 line-gradient transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
