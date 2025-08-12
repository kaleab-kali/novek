"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { portfolioProjects } from "../../lib/data"

export default function PortfolioSection() {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-section-title bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Explore some of our recent work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className="neuro-card overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg?height=250&width=400"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="text-sm text-orange-400 mb-2">{project.category}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{project.title}</h3>
                <p className="text-sm md:text-base text-white/70 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  View Case Study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
