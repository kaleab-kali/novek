"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, Activity, Cpu } from "lucide-react";

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

export const Hero = React.memo(() => {
  const handleScheduleClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const el = document.getElementById("schedule");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = "/#schedule";
      }
    },
    [],
  );

  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-[#070B16] text-[#E8E4DC]">
      {/* Overhead Luminous Spotlight (Attention-Capturing Light Design) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[340px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.22)_0%,rgba(91,141,239,0.06)_45%,transparent_75%)] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-0 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.08)_0%,transparent_70%)] blur-[70px]"
      />

      {/* Modern Precision Grid Matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Center Stage - Safe from fixed navbar with pt-20 sm:pt-24 */}
      <div className="relative z-10 flex flex-1 items-center px-5 pt-20 pb-8 sm:px-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-8">
        <div className="mx-auto w-full max-w-[1280px] grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: International Agency Copywriting (7 cols) */}
          <div className="lg:col-span-7">
            {/* Commanding, Outcome-First Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="font-heading text-[28px] font-bold leading-[1.14] tracking-tight text-[#FAF8F5] sm:text-[36px] md:text-[42px] lg:text-[44px] xl:text-[50px]"
            >
              The software backbone for{" "}
              <span className="relative inline-block text-[#C9A96E]">
                Ethiopia&apos;s leading
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#C9A96E] via-[#D4BA85] to-transparent opacity-80"
                />
              </span>{" "}
              enterprises.
            </motion.h1>

            {/* Clear, High-Trust Problem/Solution Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-3.5 max-w-[510px] text-[13px] leading-[1.65] text-[#A39D92] sm:text-[14px] lg:text-[15px]"
            >
              From ERCA-certified e-invoicing and capital market infrastructure to automated ERPs, NOVEK powers the mission-critical digital operations of Ethiopia&apos;s largest organizations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#C9A96E] px-5 py-2.5 text-[13px] font-semibold text-[#070B16] shadow-md shadow-[#C9A96E]/20 transition-all duration-200 hover:bg-[#D4BA85] hover:shadow-lg hover:shadow-[#C9A96E]/30"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/#schedule"
                onClick={handleScheduleClick}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.14] bg-[#0E1528]/80 px-4 py-2.5 text-[13px] font-medium text-[#E8E4DC] backdrop-blur-sm transition-all duration-200 hover:border-[#C9A96E]/50 hover:bg-[#141E38] hover:text-[#C9A96E]"
              >
                <Calendar className="h-3.5 w-3.5 text-[#C9A96E]" />
                <span>Schedule Consultation</span>
              </Link>

              <Link
                href="#services"
                className="text-[12px] font-medium text-[#6B6560] transition-colors hover:text-[#E8E4DC]"
              >
                Explore Solutions
              </Link>
            </motion.div>

            {/* Proof Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-6 flex items-center gap-4 text-[11px] font-medium text-[#7A746C]"
            >
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A96E]" />
                <span className="text-[#C9A96E]">500+</span> Deployments
              </div>
              <span className="text-white/[0.1]">&bull;</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-400">ERCA</span> Certified
              </div>
              <span className="text-white/[0.1]">&bull;</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5B8DEF]" />
                <span className="text-[#5B8DEF]">99.99%</span> Uptime
              </div>
            </motion.div>
          </div>

          {/* Right Column: Attention-Capturing Live Architecture Pedestal (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="hidden lg:col-span-5 lg:flex lg:items-center lg:justify-center"
          >
            <div className="relative w-full max-w-[350px]">
              {/* Radial Aura Behind Card */}
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-[1.25] rounded-3xl bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.16)_0%,rgba(91,141,239,0.06)_50%,transparent_70%)] blur-[45px]"
              />

              {/* Glassmorphic Architecture Slab */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-b from-[#111A30]/90 to-[#090F1E]/95 p-5.5 shadow-2xl backdrop-blur-2xl">
                {/* Header: Identity & Status */}
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A96E]/30 bg-[#070B16] p-1.5 shadow-inner">
                      <Image
                        src="/logo.png"
                        alt="NOVEK ICT Solutions"
                        width={34}
                        height={34}
                        priority
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-heading text-xs font-bold tracking-wide text-[#FAF8F5]">
                        NOVEK ARCHITECTURE
                      </div>
                      <div className="text-[10px] text-[#C9A96E]">Addis Ababa, Ethiopia</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE ENGINE
                  </div>
                </div>

                {/* 3 Real-World Enterprise Pillars */}
                <div className="mt-3.5 space-y-2">
                  <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-[#070B16]/70 p-2.5 transition-colors hover:border-[#C9A96E]/30">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C9A96E]/15 text-[#C9A96E]">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#E8E4DC]">ERCA Fiscal Core</div>
                        <div className="text-[10px] text-[#8C867C]">Real-time QR &amp; Tax Signing</div>
                      </div>
                    </div>
                    <span className="rounded bg-[#C9A96E]/15 px-1.5 py-0.5 text-[9px] font-bold text-[#C9A96E]">
                      VERIFIED
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-[#070B16]/70 p-2.5 transition-colors hover:border-[#5B8DEF]/30">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5B8DEF]/15 text-[#5B8DEF]">
                        <Activity className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#E8E4DC]">Capital Market OMS</div>
                        <div className="text-[10px] text-[#8C867C]">Low-latency Order Engine</div>
                      </div>
                    </div>
                    <span className="rounded bg-[#5B8DEF]/15 px-1.5 py-0.5 text-[9px] font-bold text-[#5B8DEF]">
                      ACTIVE
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-[#070B16]/70 p-2.5 transition-colors hover:border-[#C9A96E]/30">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C9A96E]/15 text-[#C9A96E]">
                        <Cpu className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#E8E4DC]">Core Enterprise ERP</div>
                        <div className="text-[10px] text-[#8C867C]">Banking &amp; Telebirr Sync</div>
                      </div>
                    </div>
                    <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
                      SYNCED
                    </span>
                  </div>
                </div>

                {/* Direct Briefing Link */}
                <div className="mt-3.5 pt-2.5 border-t border-white/[0.06] text-center">
                  <Link
                    href="/#schedule"
                    onClick={handleScheduleClick}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#C9A96E] transition-colors hover:text-[#D4BA85]"
                  >
                    <span>Request technical architecture briefing</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Marquee Trust Bar - Flush to Viewport Bottom */}
      <div className="relative z-10 border-t border-white/[0.06] bg-[#070B16]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-2 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A96E]" />
            <span className="text-[10px] font-medium text-[#6B6560]">
              Addis Ababa, Ethiopia
            </span>
          </div>
          <span className="text-[10px] font-medium text-[#6B6560]">
            18 Enterprise Products &middot; 6 Core Practices
          </span>
        </div>

        <div className="overflow-hidden border-t border-white/[0.03] py-2">
          <div
            className="flex animate-marquee"
            style={{ "--marquee-duration": "26s" } as React.CSSProperties}
          >
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="mx-6 shrink-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B6560]/70 transition-colors hover:text-[#C9A96E] sm:mx-8 sm:text-[11px]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
