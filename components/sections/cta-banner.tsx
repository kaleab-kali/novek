"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="border-t border-white/[0.06] py-12 sm:py-16 md:py-20">
      <div className="container-custom">
        <h2 className="font-heading text-2xl font-semibold text-[#E8E4DC]">
          Let&apos;s build something.
        </h2>
        <p className="mt-2 text-sm text-[#9A9590]">
          Tell us what you need. We&apos;ll tell you how we can help.
        </p>
        <Link
          href="/contact"
          className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C9A96E] px-6 py-3 text-sm font-medium text-[#0A0F1E] transition-colors hover:bg-[#D4BA85]"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
