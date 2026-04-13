"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function PageWrapper({ children }: { children: ReactNode }) {
  useSmoothScroll();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
