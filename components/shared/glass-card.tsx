"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  tilt?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  tilt = false,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current || !glow) return;
    const rect = ref.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0D1527] backdrop-blur-sm",
        hover && "transition-colors duration-300 hover:border-[#C9A96E]/20 hover:bg-[#131D35]",
        className,
      )}
    >
      {glow && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(201, 169, 110, 0.06), transparent 60%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
