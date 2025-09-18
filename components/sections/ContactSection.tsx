"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@novektech.com",
      link: "mailto:info@novektech.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+251987888646",
      link: "tel:+251987888646",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "4th floor lem hotel building, megnagna, addis ababa, ethiopia",
      link: "#",
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
              Get In Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and bring your
            vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 group hover:bg-white/20 transition-all duration-300"
                >
                  {/* Using reusable icon-gradient class */}
                  <div className="w-12 h-12 icon-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-white/80">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Why Choose NOVEK?</h4>
              <ul className="space-y-2 text-white/90">
                <li>• 10+ years of industry experience</li>
                <li>• 500+ successful projects delivered</li>
                <li>• 24/7 support and maintenance</li>
                <li>• Cutting-edge technology stack</li>
                <li>• Agile development methodology</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Send us a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/90 mb-2 font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white/90 mb-2 font-medium">Project Type</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors">
                  <option value="" className="bg-slate-800">
                    Select a service
                  </option>
                  <option value="web-development" className="bg-slate-800">
                    Web Development
                  </option>
                  <option value="app-development" className="bg-slate-800">
                    App Development
                  </option>
                  <option value="enterprise-software" className="bg-slate-800">
                    Enterprise Software
                  </option>
                  <option value="ai-integration" className="bg-slate-800">
                    AI Integration
                  </option>
                  <option value="other" className="bg-slate-800">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-white/90 mb-2 font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Using reusable btn-primary class */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full py-4 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
