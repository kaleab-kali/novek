"use client"

import { ArrowRight } from 'lucide-react'
import dynamic from "next/dynamic"

const SplashCursor = dynamic(() => import("@/components/ui/splash-cursor"), { ssr: false })

export default function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (

  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 md:pt-12">
      {/* SplashCursor background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Use the SplashCursor component as the background */}
        <SplashCursor />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-full max-w-2xl text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-4 md:mb-6 leading-tight">
              Welcome to the Future of Technology
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto">
              NOVEK delivers cutting-edge software solutions, enterprise systems, and innovative web experiences that propel your business forward into the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
              >
                Explore Solutions
                <ArrowRight size={20} className="flex-shrink-0" />
              </button>
              <button
                onClick={scrollToAbout}
                className="bg-white/10 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-white/20 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
