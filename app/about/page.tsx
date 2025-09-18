import Link from "next/link"

import Image from "next/image"
import { Target, Eye, Award, Users, ArrowRight, Rocket, Lightbulb, Trophy } from 'lucide-react'
import Header from "components/layout/Header"
// import { teamMembers } from "lib/data"
import Footer from "components/layout/Footer"


export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with innovative technology solutions that drive growth and efficiency.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading provider of transformative technology solutions globally.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional quality in every project, exceeding client expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming their trusted technology partner.",
    },
  ]

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-orange-900/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              About NOVEK
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              NOVEK is a technology company dedicated to empowering businesses through innovative software solutions, 
              cutting-edge development, and strategic digital transformation services.
            </p>
          </div>

          {/* Stats - Updated for new company */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-20">
            {[
              { number: "500+", label: "Projects Delivered", suffix: "" },
              { number: "50+", label: "Expert Team Members", suffix: "" },
              { number: "10+", label: "Years Experience", suffix: "" },
              { number: "99%", label: "Client Satisfaction", suffix: "" },
            ].map((stat, index) => (
              <div key={index} className="text-center neuro-card p-6">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">
              Our Values
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to technology and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 icon-gradient rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-20 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-6">Innovation-Driven Development</h3>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                We leverage the latest technologies and methodologies to create solutions that are not just current, 
                but future-ready. Our team stays ahead of industry trends to ensure your business maintains its competitive edge.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-orange-400" />
                  <span className="text-white/80">Strategic technology planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-400" />
                  <span className="text-white/80">Quality-first development process</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-orange-400" />
                  <span className="text-white/80">Collaborative partnership approach</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💡</div>
                  <p className="text-white/80 text-lg font-semibold">Innovation at Core</p>
                  <p className="text-white/60 text-sm mt-2">Technology that transforms businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-12 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Our experienced leadership team brings together expertise from various domains to guide 
              NOVEK's mission of delivering exceptional technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="neuro-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={member.image || "/placeholder.svg?height=200&width=200"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-orange-400 font-semibold mb-3">{member.role}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              We may be new, but we're already making waves. Let's discuss how our fresh approach and 
              experienced team can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              <Link href="/products" className="btn-secondary">
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
