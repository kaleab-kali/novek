import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Layers,
  ShieldCheck,
  User,
} from "lucide-react";
import {
  breadcrumbJsonLd,
  generateJsonLd,
  generatePageMetadata,
} from "@/lib/seo";
import { blogPosts } from "@/lib/data/blog";
import { siteConfig } from "@/lib/data/site";
import { TagPill } from "@/components/shared/tag-pill";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  blogPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  });
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const structuredData = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: post.title, href: `/blog/${post.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo1.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/blog/${post.slug}`,
      },
      keywords: post.tags.join(", "),
    },
  ];

  return (
    <main className="pt-24 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(structuredData)}
      />

      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[--text-tertiary]">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[--text-primary] line-clamp-1">{post.title}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="section-padding pt-0 pb-12">
        <div className="container-custom max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-[--gold] mb-6 transition-transform hover:-translate-x-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to all insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <TagPill label={post.category} variant="accent" size="sm" />
            <div className="flex items-center gap-1.5 text-xs text-[--text-tertiary]">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[--text-tertiary]">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h1 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[--text-secondary] border-l-2 border-[--gold]/40 pl-4 italic">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/[0.06]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[--navy-800] border border-white/[0.08] text-[--gold]">
              <User className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author}</p>
              <p className="text-xs text-[--text-tertiary]">NOVEK ICT Solutions &middot; Addis Ababa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-4xl">
          {/* Executive Summary Card */}
          <div className="mb-12 rounded-xl border border-[--gold]/30 bg-[#0D1527] p-6 md:p-8">
            <div className="flex items-center gap-2 text-[--gold] mb-3">
              <ShieldCheck className="h-5 w-5" />
              <h2 className="font-heading text-lg font-semibold uppercase tracking-wider text-white">
                Executive Takeaways
              </h2>
            </div>
            <ul className="space-y-2 text-sm text-[--text-secondary]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
                <span><strong>Odoo ERP:</strong> Best for rapid modular deployment across sales, inventory, CRM, and accounting with local tax localization.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
                <span><strong>ERPNext:</strong> Ideal for manufacturers, factories, and price-conscious organizations wanting zero recurring per-user licensing fees.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
                <span><strong>Custom Built ERP:</strong> Tailored 100% to proprietary workflows, high concurrency, and specialized Ethiopian market architectures with full IP ownership.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
                <span><strong>SAP ERP:</strong> The gold standard for multi-company conglomerates, financial institutions, and multinationals requiring global auditing standards.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
                <span><strong>Ethiopian Compliance:</strong> All NOVEK deployments include seamless Ministry of Revenues (MOR / ERCA) e-invoicing API integration and Ethiopian calendar/tax support.</span>
              </li>
            </ul>
          </div>

          {/* Deep Dive Section 1: Odoo */}
          <article className="prose prose-invert max-w-none space-y-12">
            <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
                  1
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[--gold]">Modular & Intuitive</span>
                  <h2 className="font-heading text-2xl font-semibold text-white">Odoo ERP</h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[--text-secondary]">
                Odoo has captured substantial market share in East Africa because of its app-store style modularity. Businesses can begin with basic accounting and invoicing, then effortlessly activate Inventory, Manufacturing (MRP), CRM, Point of Sale (POS), or Human Resources as operations expand.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Advantages</h3>
                  <ul className="text-xs space-y-1.5 text-[--text-secondary]">
                    <li>&bull; Intuitive modern UI with minimal training curve</li>
                    <li>&bull; Over 30 core business apps and thousands of community modules</li>
                    <li>&bull; Scalable from 5 users to 500+ users</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <h3 className="text-xs font-semibold text-[--gold] uppercase tracking-wider mb-2">NOVEK Ethiopian Localization</h3>
                  <ul className="text-xs space-y-1.5 text-[--text-secondary]">
                    <li>&bull; Automated ERCA e-invoicing transmission</li>
                    <li>&bull; 15% VAT, 2% &amp; 3% withholding tax rules</li>
                    <li>&bull; Ethiopian Calendar (EC) date picker &amp; conversions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Deep Dive Section 2: ERPNext */}
            <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
                  2
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[--gold]">100% Open Source & Zero Per-User Fees</span>
                  <h2 className="font-heading text-2xl font-semibold text-white">ERPNext</h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[--text-secondary]">
                ERPNext is built on the Python/Frappe framework. Unlike platforms that charge $20 to $60 per user per month, ERPNext carries zero license fees. This makes it an unbeatable economic option for large factories, agricultural businesses, and distributors with dozens or hundreds of floor employees.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Advantages</h3>
                  <ul className="text-xs space-y-1.5 text-[--text-secondary]">
                    <li>&bull; Complete enterprise features without per-user licensing costs</li>
                    <li>&bull; Deep manufacturing: multi-level BOMs, work orders, scrap tracking</li>
                    <li>&bull; Integrated asset management, maintenance, and quality inspection</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <h3 className="text-xs font-semibold text-[--gold] uppercase tracking-wider mb-2">NOVEK Ethiopian Localization</h3>
                  <ul className="text-xs space-y-1.5 text-[--text-secondary]">
                    <li>&bull; Ethiopian labor-law compliant payroll (pension, brackets)</li>
                    <li>&bull; Direct fiscal printer &amp; digital invoice API syncing</li>
                    <li>&bull; Multi-currency ledger synced with NBE exchange rates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Deep Dive Section 3: Custom ERP */}
            <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
                  3
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[--gold]">Bespoke & 100% IP Ownership</span>
                  <h2 className="font-heading text-2xl font-semibold text-white">Custom-Built ERP by NOVEK</h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[--text-secondary]">
                When off-the-shelf software cannot model your unique business logic without clumsy workarounds, NOVEK engineers a custom ERP from scratch. Using modern web architectures (Next.js, Go/Node.js, PostgreSQL, Redis), we build software that mirrors your operations with precision.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Advantages</h3>
                  <ul className="text-xs space-y-1.5 text-[--text-secondary]">
                    <li>&bull; You own 100% of the intellectual property and code</li>
                    <li>&bull; Zero unnecessary bloat; hyper-fast response times</li>
                    <li>&bull; Native integration with internal hardware, IoT, and custom mobile apps</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <h3 className="text-xs font-semibold text-[--gold] uppercase tracking-wider mb-2">Best Suited For</h3>
                  <ul className="text-xs space-y-1.5 text-[--text-secondary]">
                    <li>&bull; Capital market participants &amp; brokerages</li>
                    <li>&bull; High-volume supply chain &amp; custom logistics firms</li>
                    <li>&bull; Financial institutions requiring on-premise data sovereignty</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Deep Dive Section 4: SAP */}
            <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
                  4
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[--gold]">Enterprise Standard for Global Scale</span>
                  <h2 className="font-heading text-2xl font-semibold text-white">SAP ERP (S/4HANA &amp; SAP Business One)</h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[--text-secondary]">
                For multinational corporations, state enterprises, and diversified business groups, SAP is the premier global standard. With SAP Business One for upper-midmarket firms and S/4HANA for massive industrial operations, SAP provides unmatched financial rigor, segregation of duties, and supply chain control.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Advantages</h3>
                  <ul className="text-xs space-y-1.5 text-[--text-secondary]">
                    <li>&bull; Global compliance and Fortune 500 audit-readiness</li>
                    <li>&bull; High-throughput enterprise transaction handling</li>
                    <li>&bull; Deep treasury, consolidation, and multi-entity governance</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <h3 className="text-xs font-semibold text-[--gold] uppercase tracking-wider mb-2">NOVEK SAP Services</h3>
                  <ul className="text-xs space-y-1.5 text-[--text-secondary]">
                    <li>&bull; Custom middleware bridges connecting SAP to Ethiopian e-invoicing</li>
                    <li>&bull; Local bank integration connectors (CBE, Awash, Telebirr)</li>
                    <li>&bull; Data migration and localized ongoing technical support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8 overflow-x-auto">
              <h2 className="font-heading text-2xl font-semibold text-white mb-6">
                Direct Comparison Matrix
              </h2>
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] text-[--gold]">
                    <th className="py-3 pr-4 font-semibold">Criteria</th>
                    <th className="py-3 px-3 font-semibold">Odoo ERP</th>
                    <th className="py-3 px-3 font-semibold">ERPNext</th>
                    <th className="py-3 px-3 font-semibold">Custom NOVEK ERP</th>
                    <th className="py-3 pl-3 font-semibold">SAP ERP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-[--text-secondary]">
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-white">Licensing</td>
                    <td className="py-3.5 px-3">Community / Enterprise</td>
                    <td className="py-3.5 px-3 text-emerald-400">100% Free (Open Source)</td>
                    <td className="py-3.5 px-3 text-[--gold]">Full IP Ownership</td>
                    <td className="py-3.5 pl-3">Commercial Enterprise</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-white">Time to Deploy</td>
                    <td className="py-3.5 px-3">4 &ndash; 12 weeks</td>
                    <td className="py-3.5 px-3">6 &ndash; 16 weeks</td>
                    <td className="py-3.5 px-3">12 &ndash; 24 weeks</td>
                    <td className="py-3.5 pl-3">6 &ndash; 18 months</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-white">Customizability</td>
                    <td className="py-3.5 px-3">High (Apps)</td>
                    <td className="py-3.5 px-3">High (Python/Frappe)</td>
                    <td className="py-3.5 px-3 text-[--gold]">Unlimited (100% Bespoke)</td>
                    <td className="py-3.5 pl-3">High (ABAP / BAPIs)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-white">Cost Profile</td>
                    <td className="py-3.5 px-3">Moderate</td>
                    <td className="py-3.5 px-3 text-emerald-400">Low to Moderate</td>
                    <td className="py-3.5 px-3">Moderate to High</td>
                    <td className="py-3.5 pl-3">High Enterprise</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-white">Ethiopian E-Invoicing</td>
                    <td className="py-3.5 px-3 text-emerald-400">&check; NOVEK Module</td>
                    <td className="py-3.5 px-3 text-emerald-400">&check; NOVEK Module</td>
                    <td className="py-3.5 px-3 text-emerald-400">&check; Native Built-in</td>
                    <td className="py-3.5 pl-3 text-emerald-400">&check; NOVEK Bridge</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-white">Best Fit</td>
                    <td className="py-3.5 px-3">Retail, Services, SMBs</td>
                    <td className="py-3.5 px-3">Factories, Agriculture</td>
                    <td className="py-3.5 px-3">Proprietary / Fintech</td>
                    <td className="py-3.5 pl-3">Conglomerates &amp; MNCs</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Why Ethiopian Localization Matters */}
            <section className="rounded-xl border border-[--gold]/20 bg-gradient-to-br from-[#0D1527] to-[#141F36] p-6 md:p-8">
              <div className="flex items-center gap-2 text-[--gold] mb-4">
                <Layers className="h-5 w-5" />
                <h2 className="font-heading text-xl font-semibold text-white">
                  Why Local Implementation Expertise in Addis Ababa Matters
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[--text-secondary] mb-4">
                International software vendors frequently underestimate Ethiopian legal and operational requirements. Off-the-shelf software often stumbles on:
              </p>
              <ul className="space-y-2 text-sm text-[--text-secondary]">
                <li className="flex items-start gap-2">
                  <span className="text-[--gold]">&bull;</span>
                  <span><strong>Ministry of Revenues (MOR / ERCA) Compliance:</strong> Real-time electronic invoicing, cryptographic signing, and fiscal receipt generation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[--gold]">&bull;</span>
                  <span><strong>Local Banking Protocols:</strong> Automated reconciliation with CBE Birr, Telebirr, Awash, Dashen, and Bank of Abyssinia APIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[--gold]">&bull;</span>
                  <span><strong>Calendar and Language Support:</strong> Dual support for the Ethiopian Calendar (Pagume / 13 months) and Amharic interface navigation for floor staff.</span>
                </li>
              </ul>
            </section>
          </article>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.06]">
            <span className="text-xs text-[--text-tertiary] font-mono mr-2">Topics:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-[--text-secondary]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-14 rounded-xl border border-[--gold]/30 bg-[#0D1527] p-8 md:flex md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider text-[--gold] font-semibold">
                ERP Assessment &amp; Advisory
              </span>
              <h3 className="font-heading text-2xl font-semibold text-white mt-1">
                Which ERP fits your company best?
              </h3>
              <p className="mt-2 text-sm text-[--text-secondary]">
                Our senior software architects will analyze your workflows, user count, and compliance requirements to provide an unbiased recommendation and cost roadmap.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[--gold] px-6 py-3.5 text-sm font-semibold text-[#0A0F1E] transition-opacity hover:opacity-90 md:mt-0 shrink-0"
            >
              Book ERP Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
