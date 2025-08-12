"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    Products: [
      { name: "Accounting Software", href: "/products/accounting-pro" },
      { name: "Background Checker", href: "/products/background-checker" },
      { name: "ERP Suite", href: "/products/erp-suite" },
      { name: "HR Management", href: "/products/hr-system" },
    ],
    Services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "Enterprise Systems", href: "/services/enterprise-systems" },
      { name: "UX/UI Design", href: "/services/ux-ui-design" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="relative bg-slate-900 border-t border-white/10">
      <div className="container mx-auto py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8 md:mb-12">
          {/* Company Info - Full width on mobile, 2 columns on large screens */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-6">
              <Image src="/images/novek-logo.png" alt="NOVEK Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl md:text-2xl font-bold gradient-text">
                NOVEK
              </span>
            </Link>

            <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Transforming businesses with cutting-edge technology solutions. We build the future, one innovation at a
              time.
            </p>

            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-3 text-white/70 text-sm md:text-base">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span>info@novektech.com, kaleab@novektech.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span>+251946625060</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span>4th floor lem hotel building, megnagna, addis ababa, ethiopia</span>
              </div>
            </div>
          </div>

          {/* Footer Links - 2 columns on mobile, 4 columns on large screens */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:col-span-2 lg:col-span-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">{category}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-white/70 text-sm md:text-base">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors text-sm md:text-base"
              />
              {/* Using reusable btn-primary class */}
              <button className="btn-primary text-sm md:text-base whitespace-nowrap shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-white/60 text-center md:text-left text-sm md:text-base">
              <p>&copy; 2025 NOVEK. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              {/* Social Links */}
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600/20 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>

              {/* Using reusable bg-gradient-novek class */}
              <button
                onClick={scrollToTop}
                className="w-8 h-8 md:w-10 md:h-10 bg-gradient-novek rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
