"use client";

import Link from "next/link";
import {
  Code2,
  Brain,
  GraduationCap,
  Palette,
  Megaphone,
  Compass,
} from "lucide-react";
import { services } from "@/lib/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Brain, GraduationCap, Palette, Megaphone, Compass,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20">
      <div className="container-custom">
        <h2 className="font-heading text-2xl text-[#E8E4DC]">
          What we do
        </h2>
        <p className="mt-2 text-[#9A9590]">
          Six service lines. One team. Everything from first commit to
          post-launch support.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 transition hover:border-[#C9A96E]/20"
              >
                {Icon && (
                  <Icon className="mb-3 h-5 w-5 text-[#C9A96E]" />
                )}
                <h3 className="font-heading text-base font-medium text-[#E8E4DC]">
                  {service.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-[#9A9590]">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-block text-xs text-[#6B6560] transition group-hover:text-[#C9A96E]">
                  Learn more
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
