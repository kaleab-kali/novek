
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Check } from 'lucide-react'
import { products } from "lib/data"
import Header from "components/layout/Header"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"
import Footer from "components/layout/Footer"


export default function ProductsPage() {
  const featuredProduct = products[0]
  const otherProducts = products.slice(1)

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />

      {/* Hero Section - Added proper spacing */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-orange-900/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Powerful Software Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of enterprise-grade software solutions designed to transform your
              business operations and accelerate growth.
            </p>
          </div>

          {/* Featured Product */}
          <div className="neuro-card p-6 md:p-8 mb-12 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-orange-400 mb-2">Featured Product</div>
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">{featuredProduct.name}</h2>
                <p className="text-white/80 mb-6 leading-relaxed">{featuredProduct.description}</p>

                <div className="space-y-3 mb-6">
                  {featuredProduct.features.slice(0, 3).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-orange-400">{featuredProduct.price}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>

                <Link href={`/products/${featuredProduct.slug}`} className="btn-primary inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight size={20} />
                </Link>
              </div>

              <div className="relative">
                <Image
                  src={featuredProduct.image || "/placeholder.svg?height=300&width=500"}
                  alt={featuredProduct.name}
                  width={500}
                  height={300}
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-12 md:pb-20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text text-center mb-8 md:mb-12">All Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherProducts.map((product) => (
              <div key={product.id} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={product.image || "/placeholder.svg?height=200&width=300"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{product.name}</h3>
                <p className="text-white/70 mb-4 line-clamp-2">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                    <span key={idx} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-semibold">{product.price}</span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
