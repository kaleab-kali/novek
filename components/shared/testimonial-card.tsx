"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const { quote, name, role, company } = testimonial;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 backdrop-blur-sm md:p-8",
        className,
      )}
    >
      {/* Decorative quote mark */}
      <span
        aria-hidden
        className="mb-4 block font-heading text-5xl font-bold leading-none text-[#C9A96E]"
      >
        &ldquo;
      </span>

      <blockquote className="mb-6 text-lg leading-relaxed text-white/90">
        {quote}
      </blockquote>

      <div className="h-px w-full bg-white/[0.06]" />

      <div className="mt-4 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A96E] text-sm font-bold text-white">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-[#6B6560]">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
