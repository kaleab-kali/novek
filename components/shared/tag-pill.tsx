"use client";

import { cn } from "@/lib/utils";

interface TagPillProps {
  label: string;
  variant?: "default" | "accent" | "outlined";
  size?: "sm" | "md";
  className?: string;
}

export function TagPill({
  label,
  variant = "default",
  size = "sm",
  className,
}: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        // Sizes
        size === "sm" && "px-2.5 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        // Variants
        variant === "default" &&
          "bg-white/[0.06] text-[#9A9590]",
        variant === "accent" &&
          "bg-[#C9A96E]/10 text-[#C9A96E] border border-[#C9A96E]/20",
        variant === "outlined" &&
          "border border-white/[0.1] text-[#9A9590]",
        className,
      )}
    >
      {label}
    </span>
  );
}
