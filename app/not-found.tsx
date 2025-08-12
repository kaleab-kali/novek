"use client"

import Link from "next/link"

import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react'
import Header from "components/layout/Header"
import Footer from "components/layout/Footer"

export default function NotFound() {
  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />
      
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 flex items-center justify-center min-h-[70vh]">
        <div className="container mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold mb-4">
              <span className="gradient-text">
                404
              </span>
            </div>
            <div className="w-32 h-1 bg-gradient-novek mx-auto rounded-full mb-8"></div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Oops! Page Not Found
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best developers sometimes lose their way!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 icon-gradient rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Explore Our Products</h3>
              <p className="text-white/70 text-sm mb-4">Discover our innovative software solutions</p>
              <Link href="/products" className="text-blue-400 hover:text-blue-300 transition-colors">
                View Products →
              </Link>
            </div>

            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 icon-gradient rounded-full flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Get Support</h3>
              <p className="text-white/70 text-sm mb-4">Need help? Our team is here for you</p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact Us →
              </Link>
            </div>

            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 icon-gradient rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Learn About Us</h3>
              <p className="text-white/70 text-sm mb-4">Discover our story and mission</p>
              <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
                About NOVEK →
              </Link>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/60 text-sm">
              💡 <strong>Pro Tip:</strong> While you're here, why not check out our latest blog posts or explore our innovative products? 
              We promise they're much easier to find than this page was!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
