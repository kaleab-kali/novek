"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CLIENTS = [
  "Ethiopian Airlines",
  "Dashen Bank",
  "Kuriftu Resort",
  "Ethio Telecom",
  "Awash Bank",
  "Sheraton Addis",
  "Yod Abyssinia",
  "Zemen Bank",
] as const;

const CAPABILITIES = [
  "Custom Software",
  "AI Integration",
  "ERP Systems",
  "Tax Intelligence",
  "Hospitality Tech",
  "Digital Marketing",
] as const;

export function Hero() {
  return (
    <section className="relative flex h-svh flex-col overflow-hidden bg-[#0A0F1E]">
      {/* Grid bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── Top section: main content ─── */}
      <div className="relative z-10 flex flex-1 px-5 pt-20 sm:px-6 sm:pt-24 lg:items-center lg:pt-0">
        <div className="container-custom grid w-full grid-cols-1 items-center lg:grid-cols-2 lg:gap-12">
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-3 flex items-center gap-2"
            >
              <span className="h-px w-5 bg-[#C9A96E]" />
              <span className="text-[10px] font-medium tracking-[0.14em] text-[#C9A96E]">
                NOVEK ICT SOLUTIONS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="font-heading text-[26px] font-semibold leading-[1.12] tracking-tight text-[#E8E4DC] sm:text-[34px] md:text-[42px] lg:text-[50px] xl:text-[56px]"
            >
              Software that runs{" "}
              <span className="text-[#C9A96E]">real businesses.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-3 max-w-[400px] text-[13px] leading-[1.6] text-[#9A9590] sm:text-[14px] lg:text-[15px]"
            >
              Custom platforms, ERPs, AI systems, and SaaS products
              for companies across Ethiopia and beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-5 flex items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-lg bg-[#C9A96E] px-4 py-2 text-[13px] font-medium text-[#0A0F1E] transition-colors hover:bg-[#D4BA85]"
              >
                Start a project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#services"
                className="text-[13px] text-[#6B6560] transition-colors hover:text-[#E8E4DC]"
              >
                What we do
              </Link>
            </motion.div>

            {/* Capability pills - mobile fills space, desktop hidden */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-2 lg:hidden"
            >
              {CAPABILITIES.map((cap) => (
                <span
                  key={cap}
                  className="rounded-md border border-white/[0.06] bg-[#0D1527] px-2.5 py-1 text-[11px] text-[#6B6560]"
                >
                  {cap}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Desktop logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-[1.6] rounded-full bg-[#C9A96E]/[0.03] blur-[80px]"
              />
              <Image
                src="/logo.png"
                alt="NOVEK ICT Solutions"
                width={400}
                height={400}
                priority
                className="relative z-10 h-auto w-[280px] drop-shadow-2xl xl:w-[340px]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom: marquee trust bar (fills remaining space) ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="relative z-10 border-t border-white/[0.06] bg-[#0A0F1E]"
      >
        {/* Info row */}
        <div className="flex items-center justify-between px-5 py-2.5 sm:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="" width={16} height={16} className="h-4 w-4 opacity-30 lg:hidden" />
            <span className="text-[10px] text-[#6B6560]">Addis Ababa, Ethiopia</span>
          </div>
          <span className="text-[10px] text-[#6B6560]">8 products &middot; 6 services</span>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-t border-white/[0.04] py-2.5">
          <div className="flex animate-marquee" style={{ "--marquee-duration": "25s" } as React.CSSProperties}>
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="mx-5 shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.12em] text-[#6B6560]/60 sm:mx-8 sm:text-[11px]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
