"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { TagPill } from "@/components/shared/tag-pill";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Pick<
    Project,
    "name" | "client" | "shortDescription" | "tags" | "thumbnail" | "slug" | "results"
  >;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { name, client, shortDescription, tags, slug, results } = project;
  const primaryMetric = results?.[0];

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
      <Link href={`/projects/${slug}`} className="block">
        {/* Image placeholder */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#131D35]">
          <div className="absolute inset-0 bg-[#0A0F1E]/80" />
          {primaryMetric && (
            <div className="absolute bottom-3 left-3">
              <span className="font-heading text-2xl font-bold text-[#C9A96E]">
                {primaryMetric.value}
              </span>
              <span className="ml-1.5 text-xs text-[#9A9590]">
                {primaryMetric.label}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#6B6560]">
            {client}
          </p>
          <h3 className="mb-2 flex items-center gap-2 font-heading text-lg font-semibold text-white">
            {name}
            <ArrowUpRight className="h-4 w-4 text-[#6B6560] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-[#9A9590]">
            {shortDescription}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag) => (
                <TagPill key={tag} label={tag} variant="default" size="sm" />
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
