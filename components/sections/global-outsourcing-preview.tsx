"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Zap } from "lucide-react";

const GLOBAL_HIGHLIGHTS = [
  {
    flag: "🇺🇸",
    country: "United States",
    title: "Live Music Map Platform",
    detail: "Real-time geolocation event discovery for artists & fans",
  },
  {
    flag: "🇸🇪",
    country: "Sweden",
    title: "Quant Trading & Web3",
    detail: "Global trading signal intelligence in Rust & smart contracts",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    title: "Freight Shipping ERP",
    detail: "End-to-end multi-modal logistics & customs tracking",
  },
  {
    flag: "🇦🇪",
    country: "Dubai (UAE)",
    title: "Cross-Border Trade Portal",
    detail: "Master wholesale order platform supplying African nations",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    title: "Shareholder Governance",
    detail: "Enterprise cap table, voting registries & GDPR compliance",
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    title: "Cloud SaaS Architecture",
    detail: "High-throughput microservices & workflow automation",
  },
];

export function GlobalOutsourcingPreview() {
  return (
    <section className="py-14 sm:py-20 border-t border-white/[0.06] bg-[#080D1A]/50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 px-3 py-1 text-xs font-mono text-[#C9A96E] mb-3">
              <Globe2 className="h-3.5 w-3.5" />
              <span>GLOBAL DELIVERY CAPABILITY</span>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Trusted by Tech Companies Across 6 Global Markets
            </h2>
            <p className="mt-3 text-sm text-[#9A9590] max-w-2xl leading-relaxed">
              We engineer custom software and provide dedicated engineering teams for international companies in North America, Europe, and the Middle East with seamless time zone alignment (UTC+3).
            </p>
          </div>

          <Link
            href="/outsourcing"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C9A96E] px-5 py-3 text-xs font-semibold text-[#0A0F1E] transition-transform hover:scale-[1.02] shrink-0"
          >
            Explore Software Outsourcing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Global Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GLOBAL_HIGHLIGHTS.map((item) => (
            <div
              key={item.country}
              className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-5 transition-colors hover:border-[#C9A96E]/30"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-2xl" role="img" aria-label={item.country}>
                  {item.flag}
                </span>
                <span className="font-heading text-sm font-semibold text-white">{item.country}</span>
              </div>
              <p className="text-xs font-medium text-[#C9A96E] mb-1">{item.title}</p>
              <p className="text-xs text-[#9A9590] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-[#0D1527]/50 p-4 text-xs text-[#9A9590]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span><strong>14-Day Risk-Free Trial</strong> for dedicated engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#C9A96E]" />
            <span><strong>100% IP &amp; Code Ownership</strong> with international contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-400" />
            <span><strong>Full Workday Overlap</strong> with Europe &amp; UK (UTC+3)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
