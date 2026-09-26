import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  ExternalLink,
  FileCheck,
  Globe2,
  HelpCircle,
  Laptop,
  Layers,
  Lock,
  MapPin,
  MessageSquare,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  generateJsonLd,
  generatePageMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";
import { TagPill } from "@/components/shared/tag-pill";

export const metadata: Metadata = generatePageMetadata({
  title: "Best Software Outsourcing Company in Ethiopia | NOVEK ICT Solutions",
  description:
    "Partner with the best software outsourcing company in Ethiopia. Scale your engineering team with senior Next.js, Rust, Go, Python, and AI developers. Proven track record delivering for clients across the USA, Germany, UK, Sweden, Canada, and Dubai.",
  path: "/outsourcing",
  keywords: [
    "best outsourcing company in ethiopia",
    "software outsourcing company in ethiopia",
    "hire developers in ethiopia",
    "offshore software development addis ababa",
    "dedicated development teams ethiopia",
    "IT staff augmentation ethiopia",
    "nearshore software development africa",
    "outsource software development ethiopia",
    "hire full stack developers ethiopia",
  ],
});

const GLOBAL_PROJECTS = [
  {
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    title: "Live Music Map & Artist Event Platform",
    clientType: "US Entertainment & Mobile Tech Startup",
    description:
      "A real-time geolocation event discovery platform where musicians and indie artists announce pop-up gigs and live events on the go, while fans discover local open venues, RSVP, and navigate interactive live maps.",
    techStack: ["Next.js", "TypeScript", "Node.js", "WebSockets", "Mapbox GL", "PostgreSQL"],
    outcomes: [
      "Sub-second geolocation query latency under peak concurrency",
      "Interactive mobile-first artist hosting portal with live notifications",
      "Seamless US East/West Coast deployment with automated CI/CD",
    ],
  },
  {
    country: "Sweden",
    flag: "🇸🇪",
    region: "Nordics / Europe",
    title: "Algorithmic Trading Signal Intelligence & Web3 Platform",
    clientType: "Stockholm Quantitative Trading & FinTech Firm",
    description:
      "An internal high-speed algorithmic trading intelligence dashboard engineered in Rust, pulling real-time market data across global exchanges, generating automated quantitative trading signals with sub-50ms latency, coupled with a specialized blockchain smart contract integration.",
    techStack: ["Rust", "Python", "Redis Pub/Sub", "Next.js", "Web3", "TimescaleDB"],
    outcomes: [
      "Real-time processing of high-frequency market order books in Rust",
      "Low-latency microservice architecture with sub-50ms signal dissemination",
      "Audited smart contract integration with institutional security standards",
    ],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "Western Europe",
    title: "Freight & Shipping Logistics Management System",
    clientType: "UK Global Freight Forwarder & Logistics Operator",
    description:
      "A bespoke mission-critical internal platform orchestrating multi-modal cargo shipments, warehouse manifests, container customs clearance, automated bill of lading generation, and vessel schedule tracking.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "REST APIs", "PDF Automation"],
    outcomes: [
      "Replaced disconnected spreadsheets with an automated shipment pipeline",
      "Integrated customs clearance workflows reducing processing time by 60%",
      "Seamless London business hours coordination and weekly sprint demos",
    ],
  },
  {
    country: "Dubai (UAE)",
    flag: "🇦🇪",
    region: "Middle East / Gulf",
    title: "Cross-Border B2B Wholesale Trading Portal",
    clientType: "Dubai Master Wholesaler to African Markets",
    description:
      "A high-volume B2B trade management system built for Dubai trading houses acting as master suppliers to African nations—handling multi-country order dispatches, export compliance, trade finance tracking, and multi-currency orders.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Telebirr/Bank APIs", "Docker"],
    outcomes: [
      "End-to-end dispatch and invoicing tracking across 12+ destination nations",
      "Synchronous 1-hour time zone collaboration with Dubai headquarters",
      "Integrated export documentation and multi-currency trade reconciliation",
    ],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    region: "Central Europe",
    title: "Enterprise Shareholder & Equity Governance System",
    clientType: "German Corporate Enterprise & Holding Group",
    description:
      "A compliant shareholder management system (Gesellschafterverwaltung) managing complex cap tables, equity vesting, digital shareholder voting registries, dividend calculations, and German corporate compliance audit trails.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "PDF Engine"],
    outcomes: [
      "Strict GDPR data privacy and cryptographic audit trail compliance",
      "Automated dividend payout calculations and shareholder statement generation",
      "Rigorous German engineering standards, code reviews, and automated tests",
    ],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    region: "North America",
    title: "Cloud SaaS & Distributed Workflow Engine",
    clientType: "Canadian Technology & Business Services Company",
    description:
      "Engineered multi-tenant cloud architecture, event-driven API integrations, and scalable business automation tools for Canadian enterprise clients requiring high reliability and clean modular code.",
    techStack: ["Next.js", "Go", "PostgreSQL", "Docker", "AWS", "REST/GraphQL"],
    outcomes: [
      "High-throughput asynchronous background job pipelines",
      "Clean TypeScript codebases adhering to strict North American standards",
      "Daily asynchronous and synchronous overlap with Canadian Eastern Time",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    number: "01",
    name: "Dedicated Engineering Pod",
    subtitle: "Your Autonomous Full-Stack Squad",
    description:
      "A complete, self-managing engineering team dedicated 100% to your product roadmap. Led by a senior tech lead and aligned directly to your sprint goals.",
    bestFor: "Scaleups and enterprises with ongoing product roadmaps and feature backlogs.",
    includes: [
      "Senior Tech Lead / Architect",
      "Senior Full-Stack Developers (Next.js, Go, Python)",
      "QA & Automated Testing Engineer",
      "Agile Scrum Master / PM coordination",
      "100% dedicated allocation to your repo",
    ],
    highlight: "Most Popular for Scaleups",
  },
  {
    number: "02",
    name: "Staff Augmentation",
    subtitle: "Embed Elite Senior Developers",
    description:
      "Instantly expand your internal engineering bandwidth by plugging senior Ethiopian developers directly into your team's Slack, Jira, and GitHub repositories.",
    bestFor: "Engineering managers facing local hiring shortages who need senior talent in 5–7 days.",
    includes: [
      "Individual vetted senior engineers",
      "Direct daily standup participation in your timezone",
      "Seamless integration into your CI/CD workflow",
      "Flexible month-to-month scalability",
      "Zero recruitment, benefits, or payroll overhead",
    ],
    highlight: "Fastest Kickoff (5–7 Days)",
  },
  {
    number: "03",
    name: "End-to-End Product Build",
    subtitle: "From Concept to Production Scale",
    description:
      "We take complete ownership of designing, architecting, building, and launching your new web application, SaaS platform, or mobile product.",
    bestFor: "Startups building an MVP or enterprises executing a discrete digital transformation project.",
    includes: [
      "Technical discovery & system architecture",
      "UI/UX wireframing & high-fidelity design",
      "Full-stack development with modern stacks",
      "Production deployment to AWS, Vercel, or GCP",
      "Milestone-based delivery with SLA support",
    ],
    highlight: "Fixed or Milestone Delivery",
  },
];

const TIMEZONE_OVERLAP = [
  {
    city: "London, UK",
    tz: "GMT / BST",
    offset: "2 hrs behind",
    overlap: "6 – 7 Hours",
    description: "Nearly full business day overlap. Ideal for synchronous standups and pairing.",
  },
  {
    city: "Berlin / Stockholm",
    tz: "CET / CEST",
    offset: "1 – 2 hrs behind",
    overlap: "6 – 7 Hours",
    description: "Complete daily alignment with Central European & Nordic working hours.",
  },
  {
    city: "Dubai, UAE",
    tz: "GST",
    offset: "1 hr ahead",
    overlap: "7 – 8 Hours",
    description: "Virtually 100% synchronous real-time workday collaboration.",
  },
  {
    city: "New York / Toronto",
    tz: "EST / EDT",
    offset: "7 hrs behind",
    overlap: "3 – 4 Hours",
    description: "Every morning aligns with your afternoon for standups, reviews, and handovers.",
  },
];

const FAQS = [
  {
    question: "Why outsource software development to Ethiopia instead of India or Eastern Europe?",
    answer:
      "Ethiopia offers a powerful trifecta: an elite, rapidly growing STEM talent pool, English-first technical education, a strategic UTC+3 time zone that perfectly overlaps with Europe and the US East Coast, and compelling cost arbitrage (65%–75% savings compared to Western tech salaries). Unlike saturated markets, Ethiopian engineers offer high loyalty, passionate dedication, and low turnover.",
  },
  {
    question: "How does NOVEK ensure the code quality of its developers?",
    answer:
      "We enforce rigorous engineering practices across all client engagements: strict TypeScript typing, comprehensive unit and integration testing, mandatory peer code reviews, continuous CI/CD pipelines, and adherence to clean architecture principles. You have full transparency and direct access to GitHub repositories from day one.",
  },
  {
    question: "How does the 14-Day Risk-Free Trial work?",
    answer:
      "When you onboard a dedicated developer or engineering pod from NOVEK, you work with them directly in your real environment for two weeks. If for any reason you are not completely satisfied with their velocity, communication, or code quality, you can cancel immediately and you will not be billed.",
  },
  {
    question: "Who owns the intellectual property (IP) and source code?",
    answer:
      "You own 100% of all intellectual property, source code, documentation, and design assets from the moment they are written. Our contracts include comprehensive international IP assignment clauses and confidentiality covenants.",
  },
  {
    question: "Can we sign a Mutual NDA before sharing our project roadmap?",
    answer:
      "Yes, absolutely. We routinely sign Mutual Non-Disclosure Agreements (MNDAs) with US, European, and global clients prior to our first technical discovery call. We are happy to review and sign your company's standard NDA or provide our standard mutual NDA.",
  },
  {
    question: "How do international payments work?",
    answer:
      "We support flexible, seamless international payment rails including direct SWIFT international bank transfers (USD, EUR, GBP), Wise for Business (low-fee ACH and SEPA transfers), and major corporate credit cards via Stripe for monthly retainers.",
  },
  {
    question: "How proficient is your team in English communication?",
    answer:
      "All NOVEK software architects, engineers, and project leads operate in professional, fluent English. We conduct daily standups, write comprehensive technical documentation, and communicate asynchronously via Slack or Jira with the same clarity and responsiveness as a domestic Western engineering team.",
  },
];

export default function OutsourcingPage() {
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Outsourcing", href: "/outsourcing" },
    ]),
    faqJsonLd(FAQS),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Software Outsourcing & Dedicated Development Teams in Ethiopia",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: "Software Outsourcing",
      description:
        "Top-rated software outsourcing company in Ethiopia. Dedicated engineering pods, staff augmentation, and custom software development for clients in the USA, Germany, UK, Sweden, Canada, and Dubai.",
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Sweden" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Ethiopia" },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(structuredData)}
      />

      <main className="pt-24 min-h-screen">
        {/* Breadcrumb */}
        <div className="container-custom mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[--text-tertiary]">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[--text-primary]">Software Outsourcing in Ethiopia</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="section-padding pt-0 pb-16">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[--gold]/30 bg-[--gold]/10 px-4 py-1.5 text-xs font-mono text-[--gold] mb-6">
                <Globe2 className="h-3.5 w-3.5" />
                <span>GLOBAL SOFTWARE OUTSOURCING · ADDIS ABABA, ETHIOPIA</span>
              </div>

              <h1 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                The Best Software Outsourcing Company in Ethiopia
              </h1>

              <p className="mt-6 text-base leading-relaxed text-[--text-secondary] sm:text-lg md:text-xl max-w-3xl mx-auto">
                Scale your engineering velocity with battle-tested senior developers. Proven client delivery across the{" "}
                <strong className="text-white">USA, Germany, UK, Sweden, Canada, and Dubai</strong> with seamless time zone alignment, fluent English communication, and zero recruitment friction.
              </p>

              {/* Dual Action CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[--gold] px-6 py-3.5 text-sm font-semibold text-[#0A0F1E] transition-transform hover:scale-[1.02] shadow-lg shadow-[--gold]/10"
                >
                  <Calendar className="h-4 w-4" />
                  Book Technical Discovery Call
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-[#0D1527] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.04]"
                >
                  <Lock className="h-4 w-4 text-[--gold]" />
                  Contact Us &amp; Request NDA
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Trust Metrics Strip */}
              <div className="mt-14 grid grid-cols-2 gap-4 border-y border-white/[0.08] py-6 sm:grid-cols-4">
                <div>
                  <p className="font-heading text-2xl font-bold text-white sm:text-3xl">6+ Countries</p>
                  <p className="text-xs text-[--text-secondary] mt-1">USA, Germany, UK, Sweden, UAE, Canada</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-[--gold] sm:text-3xl">100%</p>
                  <p className="text-xs text-[--text-secondary] mt-1">IP &amp; Source Code Ownership</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-emerald-400 sm:text-3xl">14-Day</p>
                  <p className="text-xs text-[--text-secondary] mt-1">Risk-Free Engineering Trial</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-white sm:text-3xl">UTC+3</p>
                  <p className="text-xs text-[--text-secondary] mt-1">Full Workday Overlap with Europe &amp; UK</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Track Record Section */}
        <section className="section-padding bg-[#090E1D] border-y border-white/[0.04]">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <span className="overline mb-3 block text-[--gold]">Proven Cross-Border Delivery</span>
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Real Projects Delivered for Clients Worldwide
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[--text-secondary] sm:text-base">
                We don&apos;t talk about outsourcing in theory. Our senior engineers have architected, built, and maintained mission-critical platforms for tech companies and enterprises across six major global markets.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {GLOBAL_PROJECTS.map((project) => (
                <div
                  key={project.country}
                  className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 transition-all duration-300 hover:border-[--gold]/30 hover:shadow-xl hover:shadow-[--gold]/5 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl" role="img" aria-label={project.country}>
                          {project.flag}
                        </span>
                        <div>
                          <h3 className="font-heading text-sm font-semibold text-white">
                            {project.country}
                          </h3>
                          <span className="text-[11px] text-[--gold] font-mono">{project.region}</span>
                        </div>
                      </div>
                      <TagPill label="Verified Project" variant="accent" size="sm" />
                    </div>

                    <h4 className="font-heading text-base font-semibold text-white mb-2 leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[--text-tertiary] mb-3 italic">
                      Client: {project.clientType}
                    </p>
                    <p className="text-xs leading-relaxed text-[--text-secondary] mb-4">
                      {project.description}
                    </p>

                    {/* Outcomes */}
                    <div className="mb-4 space-y-1.5 border-t border-white/[0.04] pt-3">
                      <p className="text-[11px] font-mono text-white uppercase tracking-wider font-semibold">
                        Key Outcomes:
                      </p>
                      {project.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-[--text-secondary]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-[--text-secondary] border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Engagement Models */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <span className="overline mb-3 block text-[--gold]">Flexible Collaboration</span>
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Choose the Engagement Model That Fits Your Stage
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[--text-secondary] sm:text-base">
                Whether you need an entire autonomous engineering squad or individual senior developers to augment your team, we offer transparent, flexible engagement without long-term recruitment lock-in.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {ENGAGEMENT_MODELS.map((model) => (
                <div
                  key={model.number}
                  className="relative rounded-xl border border-white/[0.08] bg-[#0D1527] p-6 md:p-8 flex flex-col justify-between transition-all hover:border-[--gold]/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[--gold] font-bold">
                        MODEL {model.number}
                      </span>
                      <span className="rounded-full bg-[--gold]/10 px-3 py-1 text-[11px] font-mono text-[--gold] border border-[--gold]/20">
                        {model.highlight}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-semibold text-white">
                      {model.name}
                    </h3>
                    <p className="text-xs text-[--gold] font-mono mt-1 mb-3">
                      {model.subtitle}
                    </p>
                    <p className="text-xs leading-relaxed text-[--text-secondary] mb-4">
                      {model.description}
                    </p>

                    <div className="rounded-lg bg-black/20 p-3 border border-white/[0.04] mb-6">
                      <span className="text-[11px] text-[--text-tertiary] block font-mono">Best suited for:</span>
                      <span className="text-xs text-white font-medium">{model.bestFor}</span>
                    </div>

                    <p className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
                      What is Included:
                    </p>
                    <ul className="space-y-2 mb-6">
                      {model.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[--text-secondary]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[--gold] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[--gold]/30 bg-[--gold]/10 py-3 text-xs font-semibold text-[--gold] transition-colors hover:bg-[--gold] hover:text-[#0A0F1E]"
                  >
                    Discuss This Model
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Time Zone Overlap Matrix */}
        <section className="section-padding bg-[#090E1D] border-y border-white/[0.04]">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="overline mb-3 block text-[--gold]">Timezone Synergy (UTC+3)</span>
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Real-Time Overlap with Western &amp; Gulf Tech Hubs
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[--text-secondary] sm:text-base">
                Addis Ababa sits in the ideal global sweet spot. No waiting 24 hours for email replies. Experience synchronous standups, instant Slack messaging, and rapid code review turnaround.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {TIMEZONE_OVERLAP.map((item) => (
                <div key={item.city} className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-base font-semibold text-white">{item.city}</span>
                    <span className="text-[10px] font-mono text-[--gold] bg-[--gold]/10 px-2 py-0.5 rounded">
                      {item.tz}
                    </span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-emerald-400 mt-2">
                    {item.overlap}
                  </p>
                  <p className="text-xs text-[--text-tertiary] mt-0.5">Daily Working Overlap</p>
                  <p className="text-xs text-[--text-secondary] mt-3 leading-relaxed border-t border-white/[0.04] pt-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Remote Collaboration Toolkit */}
            <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:p-8">
              <h3 className="font-heading text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Laptop className="h-5 w-5 text-[--gold]" />
                How We Integrate into Your Daily Engineering Workflow
              </h3>
              <div className="grid gap-4 sm:grid-cols-3 text-xs text-[--text-secondary]">
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <p className="font-semibold text-white mb-1">Live Communication</p>
                  <p className="leading-relaxed">
                    We join your Slack or Discord, attend daily video standups via Google Meet or Zoom, and provide responsive synchronous updates.
                  </p>
                </div>
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <p className="font-semibold text-white mb-1">Agile Sprint Tracking</p>
                  <p className="leading-relaxed">
                    We work inside your Jira, Linear, or GitHub Projects boards, estimating tickets in story points and delivering clean pull requests.
                  </p>
                </div>
                <div className="rounded-lg bg-black/20 p-4 border border-white/[0.04]">
                  <p className="font-semibold text-white mb-1">Automated CI/CD &amp; Testing</p>
                  <p className="leading-relaxed">
                    Every commit is tested through automated pipelines, accompanied by peer code reviews, Docker containers, and clear documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk-Reversal Guarantees */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <span className="overline mb-3 block text-[--gold]">Risk-Free Outsourcing</span>
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Built to Protect International Tech Leaders
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[--text-secondary] sm:text-base">
                We remove every friction point that makes foreign tech leaders hesitant about offshore software development.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-2">
                  14-Day Risk-Free Trial
                </h3>
                <p className="text-xs leading-relaxed text-[--text-secondary]">
                  Test our engineers in your real environment for two weeks. If you are not 100% satisfied with their velocity and code quality, you owe nothing.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--gold]/10 text-[--gold] mb-4">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-2">
                  100% IP &amp; Code Ownership
                </h3>
                <p className="text-xs leading-relaxed text-[--text-secondary]">
                  You own all intellectual property, source code, and repositories from day one. Backed by enforceable international contracts and standard NDA.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 mb-4">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-2">
                  65% – 75% Cost Arbitrage
                </h3>
                <p className="text-xs leading-relaxed text-[--text-secondary]">
                  Access senior architectural talent at $35–$55/hour instead of paying $150–$220/hour for domestic US or European developers, without compromising quality.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 mb-4">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-2">
                  Global Payment Rails
                </h3>
                <p className="text-xs leading-relaxed text-[--text-secondary]">
                  Simple invoicing via SWIFT wire transfers (USD, EUR, GBP), Wise for Business ACH/SEPA, or credit card retainers via Stripe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="section-padding bg-[#090E1D] border-y border-white/[0.04]">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="overline mb-3 block text-[--gold]">Technical Expertise</span>
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Engineered with Modern, High-Performance Stacks
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[--text-secondary] sm:text-base">
                Our architects and developers specialize in the technologies trusted by leading tech companies worldwide.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs">
              <div className="rounded-lg bg-[#0D1527] p-5 border border-white/[0.06]">
                <h4 className="font-heading text-sm font-semibold text-[--gold] mb-2">Frontend &amp; Mobile</h4>
                <p className="text-[--text-secondary] leading-relaxed">
                  Next.js 15, React 19, TypeScript, Tailwind CSS, React Native, Framer Motion, Redux / Zustand.
                </p>
              </div>
              <div className="rounded-lg bg-[#0D1527] p-5 border border-white/[0.06]">
                <h4 className="font-heading text-sm font-semibold text-[--gold] mb-2">Backend &amp; Microservices</h4>
                <p className="text-[--text-secondary] leading-relaxed">
                  Rust, Go (Golang), Python (FastAPI, Django), Node.js, NestJS, GraphQL, REST APIs, gRPC.
                </p>
              </div>
              <div className="rounded-lg bg-[#0D1527] p-5 border border-white/[0.06]">
                <h4 className="font-heading text-sm font-semibold text-[--gold] mb-2">Data &amp; Cloud</h4>
                <p className="text-[--text-secondary] leading-relaxed">
                  PostgreSQL, Redis, TimescaleDB, MongoDB, Docker, Kubernetes, AWS, Google Cloud, Vercel.
                </p>
              </div>
              <div className="rounded-lg bg-[#0D1527] p-5 border border-white/[0.06]">
                <h4 className="font-heading text-sm font-semibold text-[--gold] mb-2">AI &amp; Automation</h4>
                <p className="text-[--text-secondary] leading-relaxed">
                  OpenAI &amp; Anthropic APIs, RAG Architecture, LangChain, Vector Embeddings, Custom AI Pipelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <span className="overline mb-3 block text-[--gold]">Frequently Asked Questions</span>
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Everything You Need to Know About Outsourcing to NOVEK
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 transition-colors hover:border-white/[0.12]"
                >
                  <h3 className="font-heading text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-[--gold] shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-xs leading-relaxed text-[--text-secondary] pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Conversion CTA Banner */}
        <section className="section-padding pt-0 pb-20">
          <div className="container-custom">
            <div className="rounded-2xl border border-[--gold]/30 bg-gradient-to-br from-[#0D1527] to-[#14213d] p-8 md:p-12 lg:flex lg:items-center lg:justify-between shadow-2xl shadow-[--gold]/5">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-wider text-[--gold] font-semibold font-mono">
                  Scale Your Engineering Velocity
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl mt-2 leading-tight">
                  Ready to Build with the Best Software Outsourcing Team in Ethiopia?
                </h3>
                <p className="mt-3 text-sm text-[--text-secondary] leading-relaxed">
                  Schedule a 30-minute discovery call directly with our technical leadership, or send us your project requirements under a mutual NDA. Start in as little as 5 business days with our 14-day risk-free trial.
                </p>
              </div>

              <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[--gold] px-6 py-3.5 text-sm font-semibold text-[#0A0F1E] transition-opacity hover:opacity-90"
                >
                  <Calendar className="h-4 w-4" />
                  Book on Calendly (30 Min)
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  <Lock className="h-4 w-4 text-[--gold]" />
                  Contact Us &amp; Request NDA
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
