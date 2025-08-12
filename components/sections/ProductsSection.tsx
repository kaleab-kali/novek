"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { products } from "@/lib/data"

export default function ProductsSection() {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-section-title gradient-text mb-4 md:mb-6">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Discover our comprehensive suite of software solutions designed to transform your business operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.slice(0, 6).map((product, index) => (
            <div key={product.id} className="neuro-card p-4 md:p-6 group hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg mb-4 md:mb-6">
                <Image
                  src={product.image || "/placeholder.svg?height=200&width=300"}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{product.name}</h3>
              <p className="text-sm md:text-base text-white/70 mb-3 md:mb-4 line-clamp-2">{product.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <span key={idx} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <span className="text-orange-400 font-semibold text-sm md:text-base">{product.price}</span>
                <Link
                  href={`/products/${product.slug}`}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Using reusable btn-primary class */}
        <div className="text-center mt-8 md:mt-12">
          <Link href="/products" className="btn-primary inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
            View All Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
