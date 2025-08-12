"use client"

import { useState, useEffect } from "react"
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
        isScrolled ? "glass-card m-2 md:m-4 rounded-2xl" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <Image
              src="/images/novek-logo.png"
              alt="NOVEK Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <span className="text-xl md:text-2xl font-bold gradient-text">NOVEK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 relative group text-sm xl:text-base ${
                  pathname === item.href ? "text-blue-400" : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm xl:text-base px-4 xl:px-6">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 bg-slate-900/95 backdrop-blur-md z-40">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-2xl font-semibold transition-colors duration-300 ${
                    pathname === item.href ? "text-blue-400" : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 mt-8" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
