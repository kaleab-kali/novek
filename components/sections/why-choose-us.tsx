"use client";

import { Shield, Zap, Users, HeartHandshake } from "lucide-react";

const REASONS = [
  {
    icon: Users,
    title: "Dedicated teams",
    description:
      "Senior engineers assigned exclusively to your project, not juggling five clients at once.",
  },
  {
    icon: Shield,
    title: "Full code ownership",
    description:
      "Everything we build is yours. No vendor lock-in, no licensing fees, no hidden strings.",
  },
  {
    icon: Zap,
    title: "Weekly visibility",
    description:
      "Live demos every Friday. You see exactly where your money goes.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term partnership",
    description:
      "We stay involved after launch with maintenance, support, and continuous improvement.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-custom">
        <h2 className="mb-8 font-heading text-xl font-semibold text-[#E8E4DC]">
          Why work with us
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {REASONS.map((r) => (
            <div key={r.title} className="flex gap-4">
              <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A96E]" />
              <div>
                <h3 className="text-sm font-medium text-[#E8E4DC]">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#9A9590]">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
