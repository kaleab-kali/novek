"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { blogPosts } from "../../lib/data"

export default function BlogSection() {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in technology and business.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:bg-white/20"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg?height=250&width=400"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Technology
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs md:text-sm text-white/70 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />5 min read
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm md:text-base text-white/80 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-8 md:mt-12">
          <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
            View All Posts
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
