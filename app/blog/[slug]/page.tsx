import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { blogPosts } from "../../../lib/data"
import Header from "../../../components/layout/Header"
import Footer from "../../../components/layout/Footer"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="relative bg-slate-900 text-white min-h-screen">
      <Header />

      <article className="pt-20 md:pt-24 pb-12 md:pb-20">
        <div className="container mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6 md:mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl mb-6 md:mb-8">
              <Image
                src={post.image || "/placeholder.svg?height=400&width=800"}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-48 md:h-96 object-cover"
              />
            </div>

            <div className="flex items-center gap-4 md:gap-6 text-sm text-white/60 mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />5 min read
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">{post.title}</h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 md:mb-8">{post.excerpt}</p>

              <div className="text-white/90 leading-relaxed space-y-4 md:space-y-6">
                <p>
                  In today's rapidly evolving technological landscape, businesses must adapt and innovate to stay
                  competitive. This comprehensive guide explores the latest trends and strategies that are shaping the
                  future of technology and business operations.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Key Technological Trends</h2>

                <p>
                  The integration of artificial intelligence, machine learning, and automation is revolutionizing how
                  businesses operate. From streamlined processes to enhanced customer experiences, these technologies
                  are creating unprecedented opportunities for growth and efficiency.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Implementation Strategies</h2>

                <p>
                  Successful technology adoption requires careful planning, strategic implementation, and ongoing
                  optimization. Organizations that embrace a systematic approach to digital transformation are more
                  likely to achieve sustainable success and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
