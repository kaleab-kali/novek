"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ].filter((item) => !(item.href === "/" && pathname === "/"))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "rounded-2xl shadow-lg" : "bg-transparent mt-4 md:mt-6"
      }`}
    >
      <nav className="container mx-auto flex flex-col items-center justify-center">
  <div className="w-full flex flex-col items-center justify-center py-1 md:py-2">
          {/* One-line header with split menu */}
          <div className="relative w-full flex items-center justify-start lg:justify-center">
            {/* Blur background for menu only, always visible. Add contrast when scrolled. */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
              {isScrolled ? (
                <div className="mx-auto w-3/4 h-12 rounded-full bg-slate-900"></div>
              ) : (
                <div className="mx-auto w-3/4 h-12 rounded-full bg-slate-900/70"></div>
              )}
             <div className="mx-auto w-3/4 h-12 blur-gradient absolute top-0 left-0 right-0"></div>
            </div>
            {/* Mobile blur background */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0 lg:hidden">
              {isScrolled ? (
                <div className="mx-auto w-full h-12 rounded-full bg-slate-900/80"></div>
              ) : (
                <div className="mx-auto w-full h-12 rounded-full bg-slate-900/60"></div>
              )}
             <div className="mx-auto w-full h-12 blur-gradient absolute top-0 left-0 right-0"></div>
            </div>
            {/* Left menu */}
            <div className="hidden lg:flex flex-1 justify-end gap-6 z-10">
              {navItems.slice(0, Math.floor(navItems.length / 2)).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 relative group text-base font-semibold px-3 py-1 rounded-lg ${
                    pathname === item.href ? "text-blue-400 bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
            {/* Center logo, no blur */}
            <div className="relative flex items-center justify-center z-20">
              <Link href="/" className="flex items-center justify-center z-10">
                <Image
                  src="/images/novek-logo.png"
                  alt="NOVEK Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-blue-400 shadow-lg"
                />
              </Link>
            </div>
            {/* Right menu */}
            <div className="hidden lg:flex flex-1 justify-start gap-6 z-10">
              {navItems.slice(Math.floor(navItems.length / 2)).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 relative group text-base font-semibold px-3 py-1 rounded-lg ${
                    pathname === item.href ? "text-blue-400 bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile Menu Button top right */}
          <div className="lg:hidden absolute top-1/2 -translate-y-1/2 right-4">
            <button
              className="text-white p-2 z-50 relative rounded-lg border border-white/20 bg-white/10 hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Custom Mobile Navigation Overlay Centered */}
        {isMenuOpen && typeof window !== "undefined" && createPortal(
          <div className="lg:hidden fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center animate-fade-in">
            <div className="flex justify-end w-full p-6">
              <button
                aria-label="Close menu"
                className="text-white bg-white/10 rounded-full p-2 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8 px-8 pb-12">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className={`text-2xl font-bold tracking-tight transition-colors duration-300 px-8 py-4 rounded-xl hover:bg-white/10 focus:bg-white/10 focus:outline-none ${
                    pathname === item.href ? "text-blue-400" : "text-white/90 hover:text-white"
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = item.href;
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>,
          document.body
        )}
      </nav>
    </header>
  )
}
