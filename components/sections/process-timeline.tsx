"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "Understanding your vision, users, and business goals through deep research and stakeholder conversations.",
  },
  {
    number: 2,
    title: "Strategy",
    description:
      "Defining scope, architecture, and a technical roadmap that balances ambition with pragmatism.",
  },
  {
    number: 3,
    title: "Design",
    description:
      "Crafting interfaces that delight users and drive measurable results for your business.",
  },
  {
    number: 4,
    title: "Development",
    description:
      "Building robust, scalable software with modern technologies and agile delivery cycles.",
  },
  {
    number: 5,
    title: "Testing & QA",
    description:
      "Ensuring quality across every device and scenario with automated and manual testing.",
  },
  {
    number: 6,
    title: "Launch & Support",
    description:
      "Deploying with confidence and evolving the product with your needs over time.",
  },
];

export function ProcessTimeline() {
  return (
    <SectionWrapper id="process">
      <SectionHeading
        overline="HOW WE BUILD"
        title="Our Proven Process"
        subtitle="From first conversation to ongoing partnership"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative"
      >
        {/* ── Vertical line (desktop: center, mobile: left) ───── */}
        <div
          aria-hidden
          className="absolute bottom-0 left-5 top-0 w-[2px] bg-[#C9A96E] md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative flex items-start gap-6 md:gap-0"
              >
                {/* ── Node on the line ─────────────────────────── */}
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A96E] font-heading text-sm font-semibold text-[#0A0F1E] shadow-lg shadow-[#C9A96E]/20",
                    "md:absolute md:left-1/2 md:-translate-x-1/2",
                  )}
                >
                  {step.number}
                </div>

                {/* ── Content card ─────────────────────────────── */}
                <div
                  className={cn(
                    "flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5",
                    // Desktop alternation
                    "md:w-[calc(50%-40px)]",
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8",
                  )}
                >
                  <h3 className="font-heading text-base font-semibold text-[#E8E4DC]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9A9590]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
