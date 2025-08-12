"use client"

import { ArrowRight } from 'lucide-react'
import TechSpaceScene from "../3d/TechSpaceScene"

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-orange-900/20"></div>

      {/* 3D Scene Background for Mobile */}
      <div className="absolute inset-0 lg:hidden opacity-20">
        <TechSpaceScene className="w-full h-full" isDesktop={false} />
      </div>

      {/* 3D Scene Background for Desktop - Blended */}
      <div className="hidden lg:block absolute inset-0 opacity-30">
        <TechSpaceScene className="w-full h-full" isDesktop={true} />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-4 md:mb-6 leading-tight">
              Welcome to the Future of Technology
            </h1>

            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              NOVEK delivers cutting-edge software solutions, enterprise systems, and innovative web experiences that
              propel your business forward into the digital age.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center max-w-md mx-auto lg:mx-0">
              <button
                onClick={scrollToProducts}
                className="btn-primary w-full sm:w-auto text-sm md:text-base min-w-0 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Solutions
                <ArrowRight size={16} className="md:w-5 md:h-5 flex-shrink-0" />
              </button>

              <button
                onClick={scrollToAbout}
                className="btn-secondary w-full sm:w-auto text-sm md:text-base min-w-0"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Desktop 3D Scene Placeholder - Hidden since we're using background */}
          <div className="hidden lg:block h-96 xl:h-[500px] relative">
            {/* This space is intentionally left for the background 3D scene */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center opacity-20">
                <div className="w-32 h-32 border-2 border-dashed border-white/30 rounded-full flex items-center justify-center">
                  {/* <span className="text-white/50 text-sm">3D Scene Area</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
