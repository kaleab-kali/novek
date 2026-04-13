"use client";

import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-custom">
        <h2 className="mb-8 font-heading text-xl font-semibold text-[#E8E4DC]">
          What our clients say
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6"
            >
              <span
                className="font-serif text-3xl leading-none text-[#C9A96E]/20 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 text-sm italic leading-relaxed text-[#E8E4DC]">
                {t.quote}
              </blockquote>
              <div className="mt-4 border-t border-white/[0.06] pt-4">
                <span className="text-sm font-medium text-[#E8E4DC]">
                  {t.name}
                </span>
                <p className="text-xs text-[#6B6560]">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
