"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { TagPill } from "@/components/shared/tag-pill";

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readingTime: string;
  slug: string;
  image?: string;
  className?: string;
}

export function BlogCard({
  title,
  date,
  category,
  excerpt,
  readingTime,
  slug,
  className,
}: BlogCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0D1527] backdrop-blur-sm transition-colors duration-300 hover:border-[#C9A96E]/20 hover:bg-[#131D35]",
        className,
      )}
    >
      <Link href={`/blog/${slug}`} className="block">
        {/* Header bar / tag */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[#0D1527] to-[#131D35] p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <TagPill label={category} variant="accent" size="sm" />
            <span className="text-xs font-mono text-[#C9A96E]/80">{readingTime}</span>
          </div>
          <div className="h-0.5 w-12 bg-[#C9A96E]/40 group-hover:w-20 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 flex items-center gap-2 font-heading text-lg font-semibold text-white group-hover:text-white/90">
            {title}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#6B6560] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </h3>

          <div className="mb-3 flex items-center gap-2 text-xs text-[#6B6560]">
            <time dateTime={date}>{date}</time>
            <span>&middot;</span>
            <span>{readingTime}</span>
          </div>

          <p className="line-clamp-2 text-sm leading-relaxed text-[#9A9590]">
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
