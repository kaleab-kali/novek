"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { testimonials } from "../../lib/data"

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 relative bg-slate-800/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with NOVEK.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 relative hover:bg-white/20 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-400/30" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-white/90 mb-6 text-base md:text-lg leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-blue-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
