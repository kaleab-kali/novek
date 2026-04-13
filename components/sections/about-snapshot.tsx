"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSnapshot() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-custom max-w-[640px] lg:mx-0">
        <div className="mb-6 h-px w-10 bg-[#C9A96E]" />

        <h2 className="font-heading text-xl text-[#E8E4DC]">
          About NOVEK
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-[#9A9590]">
          Based in Addis Ababa at Lem Hotel Building, Megnagna, we build
          the software that Ethiopian businesses and government agencies
          depend on daily. Enterprise systems, AI solutions, hotel
          platforms, ERP tools — if it needs to work at scale, we build it.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[#9A9590]">
          We are a product and engineering company with dedicated teams,
          in-house expertise across six service lines, and eight products
          in active production.
        </p>

        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#C9A96E] transition hover:text-[#D4BA85]"
        >
          About us <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
