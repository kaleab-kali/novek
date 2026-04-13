"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {overline && (
        <motion.span variants={fadeUp} className="overline mb-4 block">
          {overline}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-heading text-[27px] font-semibold leading-tight tracking-tight text-white md:text-[32px] xl:text-[38px]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-relaxed text-[#9A9590] md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
