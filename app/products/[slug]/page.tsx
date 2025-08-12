import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star, Shield, Zap, Users, Globe } from 'lucide-react'
import { products } from "../../../lib/data"
import Header from "../../../components/layout/Header"
import Footer from "../../../components/layout/Footer"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const benefits = [
    { icon: Shield, title: "Enterprise Security", desc: "Bank-level security & compliance" },
    { icon: Zap, title: "Lightning Performance", desc: "Optimized for speed & reliability" },
    { icon: Users, title: "24/7 Support", desc: "Expert support when you need it" },
  ]

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />

      <section className="pt-20 md:pt-24 pb-12 md:pb-20">
        <div className="container mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6 md:mb-8"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Product Image */}
            <div className="relative mb-8 md:mb-12">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={product.image || "/placeholder.svg?height=400&width=800"}
                  alt={product.name}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4 md:mb-6">{product.name}</h1>
              <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">{product.description}</p>
              
              {/* Pricing Card - Centered */}
              <div className="inline-block neuro-card p-6 mb-6 md:mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl md:text-3xl font-bold gradient-text">{product.price}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <button className="btn-primary mb-4 px-8">Get Started Today</button>
                <p className="text-white/60 text-sm">30-day free trial • No credit card required</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center gradient-text mb-8 md:mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                <div key={index} className="flex items-center gap-3 glass-card p-4">
                  <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center gradient-text mb-8 md:mb-12">
              Why Choose {product.name}?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 icon-gradient rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that trust NOVEK for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Start Free Trial</button>
              <Link href="/contact" className="btn-secondary">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
