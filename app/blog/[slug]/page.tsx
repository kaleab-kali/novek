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
  QrCode,
  AlertTriangle,
  CreditCard,
  Server,
  TrendingUp,
  Sparkles,
  Building2,
  FileCheck,
  Zap,
  Globe2,
  ExternalLink,
  Lock,
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

function ErpComparisonContent() {
  return (
    <>
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

      <article className="prose prose-invert max-w-none space-y-12">
        {/* Deep Dive Section 1: Odoo */}
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
    </>
  );
}

function EInvoicingContent() {
  return (
    <>
      {/* Executive Summary Card */}
      <div className="mb-12 rounded-xl border border-[--gold]/30 bg-[#0D1527] p-6 md:p-8">
        <div className="flex items-center gap-2 text-[--gold] mb-3">
          <ShieldCheck className="h-5 w-5" />
          <h2 className="font-heading text-lg font-semibold uppercase tracking-wider text-white">
            Executive Summary: Why Ethiopian Businesses Are Retiring Physical SRMs
          </h2>
        </div>
        <ul className="space-y-2.5 text-sm text-[--text-secondary]">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>Replace Physical Cash Registers:</strong> Complete cloud SaaS replacement for fragile, high-CapEx Sales Register Machines (SRMs) and thermal fiscal printers.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>Full Ethiopian Tax Proclamation Compliance:</strong> Built strictly in accordance with Ministry of Revenues (MOR) electronic tax register directives and Proclamation No. 979/2016.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>Instant MOR API &amp; Scannable QR Codes:</strong> Automated real-time fiscal transaction transmission, cryptographic signing, and QR-code receipt generation.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>Hassle-Free Multi-Branch Management:</strong> Centralized cloud oversight of all branches, automated digital Z-reports, role-based cashier controls, and zero paper chaos.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>Flexible Subscription / Lease Model:</strong> Eliminate 30k–100k+ ETB upfront hardware purchases per counter. Pay an affordable operational monthly lease with updates, backups, and 24/7 SLA included.</span>
          </li>
        </ul>
      </div>

      <article className="prose prose-invert max-w-none space-y-12">
        {/* Section 1: The Proclamation Mandate */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
              1
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[--gold]">Regulatory Mandate</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                The Ethiopian E-Invoicing Proclamation &amp; MOR Shift
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[--text-secondary] mb-4">
            For over a decade, Ethiopian businesses had no alternative to certified hardware cash register machines. Under the **Federal Tax Administration Proclamation (Proclamation No. 979/2016)**, Council of Ministers Regulations, and updated **Ministry of Revenues (MOR)** administrative directives, Ethiopia is leading an accelerated transition to software-based electronic fiscalization.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider mb-2">
                <FileCheck className="h-4 w-4 text-[--gold]" />
                Proclamation Requirements
              </div>
              <ul className="text-xs space-y-2 text-[--text-secondary]">
                <li>&bull; Mandatory electronic registration of all commercial sales transactions.</li>
                <li>&bull; Real-time encrypted API transmission to Ministry of Revenues central servers.</li>
                <li>&bull; Cryptographically signed fiscal receipts featuring unique verification QR codes.</li>
                <li>&bull; Audit-ready immutable logging of credit notes, refunds, and adjustments.</li>
              </ul>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <div className="flex items-center gap-2 text-[--gold] font-semibold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="h-4 w-4 text-[--gold]" />
                The Authorization of Cloud SaaS
              </div>
              <p className="text-xs leading-relaxed text-[--text-secondary]">
                Crucially, the Ministry now legally validates **certified software and cloud SaaS systems** as authentic electronic sales register solutions. Taxpayers are no longer restricted to legacy physical hardware boxes and can leverage modern, cloud-connected digital platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Headaches of Physical Cash Registers */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-400 font-heading font-bold">
              2
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-red-400">The Problem with Hardware</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                Why Physical Cash Registers Are Failing Ethiopian Businesses
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[--text-secondary] mb-6">
            Traditional Sales Register Machines (SRMs) impose severe financial and operational penalties on growing businesses. From astronomical upfront purchase costs to mechanical fragility, physical registers create ongoing headaches:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-red-950/20 p-4 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-300 font-semibold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                Exorbitant Upfront CapEx
              </div>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Physical fiscal printers cost between <strong>30,000 ETB and 100,000+ ETB per counter</strong>. For a retailer with 5 checkout counters or 3 branches, buying hardware drains hundreds of thousands of Birr before opening doors.
              </p>
            </div>
            <div className="rounded-lg bg-red-950/20 p-4 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-300 font-semibold text-xs uppercase tracking-wider mb-2">
                <Server className="h-4 w-4 text-red-400" />
                Fiscal Memory Saturation
              </div>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Physical ROM chips fill up after a fixed number of transactions. When full, the device completely freezes. Replacing the memory requires waiting for certified technicians and formal re-inspection by tax officials.
              </p>
            </div>
            <div className="rounded-lg bg-red-950/20 p-4 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-300 font-semibold text-xs uppercase tracking-wider mb-2">
                <Zap className="h-4 w-4 text-red-400" />
                Frequent Breakdowns &amp; Paper Jams
              </div>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Thermal printheads burn out, gears strip, and frequent power cuts in Addis Ababa damage internal power supplies. A broken cash register during peak weekend sales means customers walk away.
              </p>
            </div>
            <div className="rounded-lg bg-red-950/20 p-4 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-300 font-semibold text-xs uppercase tracking-wider mb-2">
                <Building2 className="h-4 w-4 text-red-400" />
                No Centralized Multi-Branch View
              </div>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Managers must physically print daily paper &ldquo;Z-Reports&rdquo; at each branch, photograph or courier them, and manually re-enter data into spreadsheets. There is zero real-time consolidated visibility.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: NOVEK E-Invoicing SaaS Architecture */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
              3
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[--gold]">The Modern Alternative</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                NOVEK E-Invoicing: Pure Cloud SaaS, Zero Hardware Traps
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[--text-secondary]">
            NOVEK E-Invoicing completely eliminates the need for proprietary fiscal hardware. It transforms any standard browser, laptop, tablet, smartphone, or retail POS terminal into a certified, secure electronic sales register.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider mb-2">
                <QrCode className="h-4 w-4 text-[--gold]" />
                Direct MOR API &amp; QR Receipts
              </div>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Every transaction is cryptographically signed and submitted directly to the Ministry of Revenues. Invoices feature verifiable QR codes that customers and tax inspectors can instantly scan with a smartphone camera.
              </p>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider mb-2">
                <Zap className="h-4 w-4 text-[--gold]" />
                Offline-First Reliability
              </div>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Internet drops will never stop your sales. NOVEK includes a built-in offline queue that securely issues verified invoices offline and automatically synchronizes with MOR servers the instant connectivity is restored.
              </p>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider mb-2">
                <CreditCard className="h-4 w-4 text-[--gold]" />
                Digital &amp; Slip Delivery
              </div>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Print to any standard, affordable thermal receipt printer (USB, Bluetooth, or Network) or send official digital PDF invoices directly to clients via SMS, WhatsApp, or email with zero paper waste.
              </p>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="h-4 w-4 text-[--gold]" />
                Built-in Ethiopian Tax Logic
              </div>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Automated calculation of standard 15% VAT, 0% zero-rated exemptions, 2% and 3% Withholding Tax, and excise duties with instant generation of monthly tax filing summaries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Hassle-Free Multi-Branch Control */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
              4
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[--gold]">Multi-Branch &amp; Operations</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                Hassle-Free Management: From Cashier to CFO
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[--text-secondary] mb-4">
            NOVEK E-Invoicing was designed for real-world enterprise operations. Business owners and finance teams get unprecedented control and effortless visibility across every cash register and branch:
          </p>
          <ul className="space-y-3 text-sm text-[--text-secondary]">
            <li className="flex items-start gap-2">
              <span className="text-[--gold]">&bull;</span>
              <span><strong>Role-Based Cashier Controls:</strong> Cashiers can create bills and collect payments, but cannot issue voids, cancellations, or special discounts without supervisor override, cutting internal shrinkage.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[--gold]">&bull;</span>
              <span><strong>Automated Digital Z-Reports &amp; X-Reports:</strong> Daily closures are compiled and archived digitally in the cloud. Review daily sales totals, cash balances, Telebirr collections, and VAT accrued without saving boxes of paper slips.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[--gold]">&bull;</span>
              <span><strong>Live Multi-Location Sales Analytics:</strong> Monitor performance across branches in Addis Ababa, Hawassa, Adama, and Dire Dawa simultaneously from your phone dashboard.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[--gold]">&bull;</span>
              <span><strong>Audit-Ready Document Attachments:</strong> Attach customer POs, delivery receipts, and bank deposit slips directly to invoice files for seamless year-end tax audits.</span>
            </li>
          </ul>
        </section>

        {/* Section 5: The Lease & Subscription Model */}
        <section className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-[#0D1527] to-[#0A1A2F] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-heading font-bold">
              5
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400">Smart Economics</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                The Lease &amp; Subscription Model: CapEx to Predictable OpEx
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[--text-secondary] mb-6">
            Instead of tying up working capital in depreciating, breakable cash register boxes, NOVEK provides an all-inclusive <strong>SaaS subscription and software lease model</strong>. You only pay for what you use, turning heavy capital expenditure into small, predictable operating costs.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-black/30 p-4 border border-white/[0.04]">
              <span className="text-xs uppercase font-mono text-emerald-400">Zero Hardware Lock-in</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">Use Existing Devices</h4>
              <p className="text-xs text-[--text-secondary]">
                Run on your existing PCs, tablets, or smartphones. No need to purchase overpriced certified proprietary boxes.
              </p>
            </div>
            <div className="rounded-lg bg-black/30 p-4 border border-white/[0.04]">
              <span className="text-xs uppercase font-mono text-emerald-400">Always Compliant</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">Automated Upgrades</h4>
              <p className="text-xs text-[--text-secondary]">
                When MOR updates tax regulations or API schemas, your software updates automatically over-the-air at no extra fee.
              </p>
            </div>
            <div className="rounded-lg bg-black/30 p-4 border border-white/[0.04]">
              <span className="text-xs uppercase font-mono text-emerald-400">Full Peace of Mind</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">24/7 Local Support</h4>
              <p className="text-xs text-[--text-secondary]">
                Direct access to NOVEK&rsquo;s Addis Ababa technical team, automated cloud backups, and rapid SLA assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table: Physical SRM vs NOVEK SaaS */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8 overflow-x-auto">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-[--gold]" />
            <h2 className="font-heading text-2xl font-semibold text-white">
              Direct Comparison: Physical Cash Register vs. NOVEK E-Invoicing SaaS
            </h2>
          </div>
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-[--gold]">
                <th className="py-3 pr-4 font-semibold">Evaluation Criteria</th>
                <th className="py-3 px-3 font-semibold text-red-300">Legacy Physical Cash Register (SRM)</th>
                <th className="py-3 pl-3 font-semibold text-emerald-400">NOVEK E-Invoicing SaaS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04] text-[--text-secondary]">
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">Upfront Capital Cost</td>
                <td className="py-3.5 px-3 text-red-400">30,000 &ndash; 100,000+ ETB per unit</td>
                <td className="py-3.5 pl-3 text-emerald-400 font-semibold">Zero hardware CapEx; affordable SaaS</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">Hardware Requirements</td>
                <td className="py-3.5 px-3">Proprietary, fragile, single-purpose box</td>
                <td className="py-3.5 pl-3 text-emerald-400">Any PC, laptop, tablet, or smartphone</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">MOR Legal Compliance</td>
                <td className="py-3.5 px-3">Manual technician visits, firmware burns</td>
                <td className="py-3.5 pl-3 text-emerald-400">Automated over-the-air API updates</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">Fiscal Memory Capacity</td>
                <td className="py-3.5 px-3 text-red-400">Finite ROM (locks device when full)</td>
                <td className="py-3.5 pl-3 text-emerald-400">Unlimited encrypted cloud transaction storage</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">Multi-Branch Oversight</td>
                <td className="py-3.5 px-3">Paper Z-reports couriered manually</td>
                <td className="py-3.5 pl-3 text-emerald-400">Centralized live cloud dashboard across all stores</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">Offline Functionality</td>
                <td className="py-3.5 px-3">SIM card errors trigger audit freezes</td>
                <td className="py-3.5 pl-3 text-emerald-400">Offline queue with automatic sync on reconnect</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">ERP &amp; POS Integration</td>
                <td className="py-3.5 px-3">Unreliable RS232 serial cables or none</td>
                <td className="py-3.5 pl-3 text-emerald-400">Native APIs for NOVEK ERP, Odoo, SAP, Custom</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">Receipt Delivery Options</td>
                <td className="py-3.5 px-3">Paper thermal slip only</td>
                <td className="py-3.5 pl-3 text-emerald-400">Thermal slip, PDF, WhatsApp, SMS &amp; Email</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-semibold text-white">Support &amp; Maintenance</td>
                <td className="py-3.5 px-3">Costly third-party maintenance contracts</td>
                <td className="py-3.5 pl-3 text-emerald-400">Included 24/7 SLA from Addis Ababa team</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 4-Step Migration Section */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
          <h2 className="font-heading text-2xl font-semibold text-white mb-6">
            Migrating from Physical Cash Registers in 4 Simple Steps
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <span className="font-mono text-xs text-[--gold] font-bold">STEP 01</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">MOR Setup</h4>
              <p className="text-xs text-[--text-secondary]">
                We help your finance team register your TIN, VAT certificate, and secure official MOR API credentials.
              </p>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <span className="font-mono text-xs text-[--gold] font-bold">STEP 02</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">Cloud Configuration</h4>
              <p className="text-xs text-[--text-secondary]">
                Map out your branches, cashier users, product catalogues, and branded invoice layouts.
              </p>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <span className="font-mono text-xs text-[--gold] font-bold">STEP 03</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">Device Pairing</h4>
              <p className="text-xs text-[--text-secondary]">
                Log in on your existing laptops, tablets, or smartphones and connect standard receipt printers.
              </p>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <span className="font-mono text-xs text-[--gold] font-bold">STEP 04</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">Go-Live &amp; Training</h4>
              <p className="text-xs text-[--text-secondary]">
                Hands-on cashier training in Amharic and English, parallel test transactions, and full go-live support.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Demo CTA Banner */}
      <div className="mt-14 rounded-xl border border-[--gold]/30 bg-[#0D1527] p-8 md:flex md:items-center md:justify-between">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-wider text-[--gold] font-semibold">
            Ready to Upgrade Your Sales Counters?
          </span>
          <h3 className="font-heading text-2xl font-semibold text-white mt-1">
            Ditch Physical Cash Registers for NOVEK E-Invoicing
          </h3>
          <p className="mt-2 text-sm text-[--text-secondary]">
            Schedule a 20-minute live demonstration with our Addis Ababa tax software architects and discover how much your enterprise will save on hardware, repairs, and administrative time.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[--gold] px-6 py-3.5 text-sm font-semibold text-[#0A0F1E] transition-opacity hover:opacity-90 md:mt-0 shrink-0"
        >
          Book Live E-Invoicing Demo
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}

function OutsourcingGuideContent() {
  const caseStudies = [
    {
      flag: "🇺🇸",
      country: "United States",
      title: "Live Music Map & Artist Event Platform",
      client: "US Mobile & Entertainment Tech Startup",
      desc: "Real-time geolocation event discovery platform where artists announce gigs and live events on the go, while fans discover local open venues, RSVP, and navigate interactive live maps.",
      stack: ["Next.js", "TypeScript", "Node.js", "WebSockets", "Mapbox GL", "PostgreSQL"],
    },
    {
      flag: "🇸🇪",
      country: "Sweden",
      title: "Algorithmic Trading Signal Intelligence & Web3",
      client: "Stockholm Quantitative Trading & FinTech Firm",
      desc: "High-speed internal intelligence portal engineered in Rust, ingesting real-time market feeds across global exchanges with sub-50ms signal dissemination, paired with audited blockchain smart contract integration.",
      stack: ["Rust", "Python", "Redis Pub/Sub", "Next.js", "Web3", "TimescaleDB"],
    },
    {
      flag: "🇬🇧",
      country: "United Kingdom",
      title: "Freight Shipping & Logistics Management System",
      client: "UK Global Freight Forwarder & Logistics Operator",
      desc: "Custom operational enterprise system managing multi-modal cargo shipments, warehouse manifests, container customs clearance, automated bill of lading generation, and vessel schedule tracking.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "REST APIs", "PDF Engine"],
    },
    {
      flag: "🇦🇪",
      country: "Dubai (UAE)",
      title: "Cross-Border B2B Wholesale Trading Portal",
      client: "Dubai Master Wholesaler to African Markets",
      desc: "High-volume B2B trade management system handling multi-country order dispatches, export customs compliance, trade finance settlement, and currency conversion across 12+ destination African nations.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Telebirr/Bank APIs", "Docker"],
    },
    {
      flag: "🇩🇪",
      country: "Germany",
      title: "Enterprise Shareholder & Equity Governance",
      client: "German Corporate Enterprise & Holding Group",
      desc: "Compliant shareholder management system (Gesellschafterverwaltung) managing complex cap tables, equity vesting, digital voting registries, dividend calculations, and German GDPR compliance.",
      stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "PDF Engine"],
    },
    {
      flag: "🇨🇦",
      country: "Canada",
      title: "Cloud SaaS & Distributed Workflow Engine",
      client: "Canadian Technology & Business Services Company",
      desc: "Scalable multi-tenant SaaS backend microservices and event-driven API integrations, providing daily collaboration overlapping Canadian Eastern Time.",
      stack: ["Next.js", "Go", "PostgreSQL", "Docker", "AWS", "REST/GraphQL"],
    },
  ];

  return (
    <>
      {/* Executive Summary Card */}
      <div className="mb-12 rounded-xl border border-[--gold]/30 bg-[#0D1527] p-6 md:p-8">
        <div className="flex items-center gap-2 text-[--gold] mb-3">
          <ShieldCheck className="h-5 w-5" />
          <h2 className="font-heading text-lg font-semibold uppercase tracking-wider text-white">
            Executive Summary: Why Global Tech Teams Outsource to NOVEK in Ethiopia
          </h2>
        </div>
        <ul className="space-y-2.5 text-sm text-[--text-secondary]">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>Verified Global Track Record:</strong> Delivered mission-critical software for tech companies in the <strong>USA, Germany, UK, Sweden, Canada, and Dubai (UAE)</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>UTC+3 Time Zone Synergy:</strong> Full 6–7 hours of daily working overlap with London, Berlin, and Stockholm; 3–4 hours morning overlap with US East Coast.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>Flexible Engagement Models:</strong> Dedicated Engineering Pods (Full Squads), Staff Augmentation (Embedded Developers in 5–7 days), or Fixed Product Builds.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>Complete Risk Reversal:</strong> 14-Day Risk-Free Trial, 100% IP and source code ownership under enforceable international contracts, and pre-signed Mutual NDA.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[--gold] shrink-0 mt-0.5" />
            <span><strong>65%–75% Cost Arbitrage:</strong> Access senior architects and full-stack developers at $35–$55/hour vs. $150–$220/hour domestic rates without quality compromise.</span>
          </li>
        </ul>
      </div>

      <article className="prose prose-invert max-w-none space-y-12">
        {/* Section 1: Real Case Studies */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
              1
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[--gold]">Proven Cross-Border Delivery</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                Case Studies Across 6 Global Markets
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[--text-secondary] mb-6">
            Unlike agencies that talk about outsourcing theoretically, NOVEK has battle-tested delivery experience across North America, Europe, and the Middle East:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {caseStudies.map((cs) => (
              <div key={cs.country} className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl" role="img" aria-label={cs.country}>{cs.flag}</span>
                    <span className="font-heading text-sm font-semibold text-white">{cs.country}</span>
                  </div>
                  <TagPill label="Delivered" variant="accent" size="sm" />
                </div>
                <h4 className="text-xs font-semibold text-[--gold] mb-1">{cs.title}</h4>
                <p className="text-[11px] text-[--text-tertiary] mb-2 italic">Client: {cs.client}</p>
                <p className="text-xs text-[--text-secondary] leading-relaxed mb-3">{cs.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {cs.stack.map((t) => (
                    <span key={t} className="rounded bg-white/[0.03] px-1.5 py-0.5 text-[9px] font-mono text-[--text-secondary] border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Timezone Synergy */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
              2
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[--gold]">Timezone Synergy (UTC+3)</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                Real-Time Overlap: London, Berlin, Stockholm &amp; New York
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[--text-secondary] mb-4">
            Located in **UTC+3 (East Africa Time)**, Addis Ababa offers one of the most advantageous time zones for Western companies. Real-time daily working overlap eliminates asynchronous delays:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 mt-6">
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04] text-center">
              <span className="text-xs font-semibold text-white block">London, UK</span>
              <span className="text-xl font-heading font-bold text-emerald-400 block mt-1">6 – 7 Hours</span>
              <span className="text-[10px] text-[--text-tertiary]">Daily Overlap</span>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04] text-center">
              <span className="text-xs font-semibold text-white block">Berlin &amp; Stockholm</span>
              <span className="text-xl font-heading font-bold text-emerald-400 block mt-1">6 – 7 Hours</span>
              <span className="text-[10px] text-[--text-tertiary]">Daily Overlap</span>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04] text-center">
              <span className="text-xs font-semibold text-white block">Dubai, UAE</span>
              <span className="text-xl font-heading font-bold text-emerald-400 block mt-1">7 – 8 Hours</span>
              <span className="text-[10px] text-[--text-tertiary]">Synchronous Real-Time</span>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04] text-center">
              <span className="text-xs font-semibold text-white block">New York / Toronto</span>
              <span className="text-xl font-heading font-bold text-emerald-400 block mt-1">3 – 4 Hours</span>
              <span className="text-[10px] text-[--text-tertiary]">Morning Standups Overlap</span>
            </div>
          </div>
        </section>

        {/* Section 3: Engagement Models */}
        <section className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] font-heading font-bold">
              3
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[--gold]">Flexible Collaboration</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                Three Ways to Work with NOVEK
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 mt-6">
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <span className="text-xs font-mono text-[--gold] font-bold">MODEL 01</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">Dedicated Pod</h4>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Autonomous full-stack squad (Tech Lead, Senior Engineers, QA, Scrum Master) dedicated 100% to your roadmap.
              </p>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <span className="text-xs font-mono text-[--gold] font-bold">MODEL 02</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">Staff Augmentation</h4>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Plug vetted senior Next.js, Go, or Python developers directly into your Jira, Slack, and GitHub in 5–7 days.
              </p>
            </div>
            <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
              <span className="text-xs font-mono text-[--gold] font-bold">MODEL 03</span>
              <h4 className="text-sm font-semibold text-white mt-1 mb-2">Full Product Build</h4>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Turnkey product engineering from discovery, UI/UX design, to full-stack build and cloud production launch.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Western Contractual Safeguards */}
        <section className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-[#0D1527] to-[#0A1A2F] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-heading font-bold">
              4
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400">Risk Reversal</span>
              <h2 className="font-heading text-2xl font-semibold text-white">
                Contractual Safeguards That Protect Your Investment
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            <div className="rounded-lg bg-black/30 p-4 border border-white/[0.04]">
              <h4 className="text-xs font-semibold text-white mb-1">14-Day Risk-Free Trial</h4>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Work with our developers in your real sprint for two weeks. If not 100% satisfied with speed and code quality, you owe zero dollars.
              </p>
            </div>
            <div className="rounded-lg bg-black/30 p-4 border border-white/[0.04]">
              <h4 className="text-xs font-semibold text-white mb-1">100% IP Ownership</h4>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                All source code, schemas, documentation, and IP belong strictly to you under standard international contracts.
              </p>
            </div>
            <div className="rounded-lg bg-black/30 p-4 border border-white/[0.04]">
              <h4 className="text-xs font-semibold text-white mb-1">Mutual NDA Upfront</h4>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                We sign a standard Mutual Non-Disclosure Agreement prior to your discovery call to safeguard your intellectual property.
              </p>
            </div>
            <div className="rounded-lg bg-black/30 p-4 border border-white/[0.04]">
              <h4 className="text-xs font-semibold text-white mb-1">Global Payment Rails</h4>
              <p className="text-xs text-[--text-secondary] leading-relaxed">
                Simple payments via SWIFT international wire (USD, EUR, GBP), Wise for Business ACH/SEPA, or Stripe monthly retainers.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Outsourcing CTA Banner */}
      <div className="mt-14 rounded-xl border border-[--gold]/30 bg-[#0D1527] p-8 md:flex md:items-center md:justify-between">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-wider text-[--gold] font-semibold font-mono">
            Dedicated Engineering Teams in Ethiopia
          </span>
          <h3 className="font-heading text-2xl font-semibold text-white mt-1">
            Ready to Scale Your Engineering Velocity?
          </h3>
          <p className="mt-2 text-sm text-[--text-secondary]">
            Visit our dedicated outsourcing portal to explore all models and calculate your team savings, or book a 30-minute discovery call directly on Calendly.
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 md:mt-0 shrink-0">
          <Link
            href="/outsourcing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--gold] px-5 py-3 text-xs font-semibold text-[#0A0F1E] transition-opacity hover:opacity-90"
          >
            Explore Outsourcing Portal
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/[0.08]"
          >
            <Calendar className="h-4 w-4" />
            Book Calendly (30 Min)
          </a>
        </div>
      </div>
    </>
  );
}

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

  const isErpPost = slug === "erp-systems-ethiopia-odoo-erpnext-custom-sap";
  const isEInvoicingPost = slug === "ethiopia-einvoicing-saas-replace-cash-registers-mor-compliance";
  const isOutsourcingPost = slug === "why-global-companies-outsource-software-development-to-ethiopia";

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
          {isErpPost && <ErpComparisonContent />}
          {isEInvoicingPost && <EInvoicingContent />}
          {isOutsourcingPost && <OutsourcingGuideContent />}
          {!isErpPost && !isEInvoicingPost && !isOutsourcingPost && (
            <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-8 whitespace-pre-line text-sm leading-relaxed text-[--text-secondary]">
              {post.content}
            </div>
          )}

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
        </div>
      </section>
    </main>
  );
}
