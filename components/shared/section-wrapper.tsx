"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullBleed?: boolean;
  noPadding?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  fullBleed = false,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(
        !noPadding && "section-padding",
        !fullBleed && "container-custom",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}
