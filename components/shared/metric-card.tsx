"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("text-center", className)}
    >
      <span className="block font-heading text-5xl font-bold tracking-tight text-[#C9A96E] md:text-6xl lg:text-7xl">
        {value}
      </span>
      <span className="mt-3 block text-sm text-[#6B6560]">{label}</span>
    </motion.div>
  );
}
