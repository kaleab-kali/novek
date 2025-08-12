import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, CheckCircle, Target, TrendingUp, ExternalLink } from "lucide-react"
import { portfolioProjects } from "../../../lib/data"
import Header from "../../../components/layout/Header"
import Footer from "../../../components/layout/Footer"

interface PortfolioPageProps {
  params: Promise<{ slug: string }>
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />

      <article className="pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="container mx-auto">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6 md:mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
            <div>
              <div className="text-sm text-orange-400 mb-2">{project.category}</div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4 md:mb-6">{project.title}</h1>
              <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed">{project.longDescription}</p>

              {/* Website Link */}
              <div className="mb-6 md:mb-8">
                <a
                  href={`https://${project.slug}-demo.novektech.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-orange-700 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Website
                </a>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:mb-8">
                <div className="glass-card p-4 text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <div className="text-sm text-white/60">Duration</div>
                  <div className="font-semibold">{project.projectDuration}</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-orange-400" />
                  <div className="text-sm text-white/60">Team Size</div>
                  <div className="font-semibold">{project.teamSize} people</div>
                </div>
                <div className="glass-card p-4 text-center col-span-2 md:col-span-1">
                  <Target className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <div className="text-sm text-white/60">Client</div>
                  <div className="font-semibold text-sm">{project.clientName}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg?height=400&width=600"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6 md:mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6 md:mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 glass-card p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6 md:mb-8">Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="neuro-card p-4">
                    <p className="text-white/80">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6 md:mb-8">Results</h2>
              <div className="space-y-4">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3 glass-card p-4">
                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center glass-card p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/products" className="btn-secondary">
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
