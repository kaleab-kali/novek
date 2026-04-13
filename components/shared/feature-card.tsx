"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#C9A96E]/20 hover:bg-[#131D35]",
        className,
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[#C9A96E]/10 p-2.5 text-[#C9A96E]">
        {icon}
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[#9A9590]">{description}</p>
    </motion.div>
  );
}
