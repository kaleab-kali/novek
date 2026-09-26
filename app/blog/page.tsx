import Link from "next/link";
import { ArrowRight, BookOpen, Globe2, Sparkles } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/data/blog";
import { BlogCard } from "@/components/shared/blog-card";
import { siteConfig } from "@/lib/data/site";

export const metadata = generatePageMetadata({
  title: "Blog & Insights | ERP, E-Invoicing & Software Outsourcing in Ethiopia",
  description:
    "Explore in-depth articles on ERP systems (Odoo, ERPNext, Custom, SAP), Ethiopian MOR e-invoicing SaaS compliance, and why global tech companies outsource software to Ethiopia.",
  path: "/blog",
});

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "NOVEK Insights & Technology Blog",
    description:
      "Enterprise tech insights, ERP comparison guides, e-invoicing compliance, and software outsourcing articles for Ethiopian and global businesses.",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo1.png`,
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-24 min-h-screen">
        <section className="section-padding">
          <div className="container-custom">
            {/* Header */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="overline mb-4 block">Insights & Analysis</span>
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
                Engineering & Enterprise Insights
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
                Practical guides, architecture comparisons, and regulatory breakdowns on ERP systems, MOR e-invoicing compliance, and global software outsourcing from Ethiopia.
              </p>
            </div>

            {/* Quick Metrics / Topics */}
            <div className="mb-14 grid gap-4 rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-white">ERP Systems</p>
                  <p className="text-xs text-[--text-secondary]">Odoo, ERPNext, Custom, SAP</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-white">E-Invoicing SaaS</p>
                  <p className="text-xs text-[--text-secondary]">MOR Tax Compliance & SRM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold]">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-white">Global Outsourcing</p>
                  <p className="text-xs text-[--text-secondary]">USA, Europe, UAE Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold]">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-white">Architecture</p>
                  <p className="text-xs text-[--text-secondary]">Rust, Next.js, Go, Python</p>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="mb-16">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-heading text-2xl font-semibold text-white">
                  Latest Articles
                </h2>
                <span className="text-xs text-[--text-secondary] font-mono">
                  {blogPosts.length} {blogPosts.length === 1 ? "article" : "articles"}
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    date={post.date}
                    category={post.category}
                    excerpt={post.excerpt}
                    readingTime={post.readingTime}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Consultation CTA */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-8 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="font-heading text-xl font-semibold text-white">
                  Need expert guidance on ERP or custom software?
                </h2>
                <p className="mt-2 text-sm text-[--text-secondary]">
                  Speak directly with our enterprise software architects in Addis Ababa.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[--gold] px-6 py-3 text-sm font-semibold text-[#0A0F1E] transition-opacity hover:opacity-90 md:mt-0"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
