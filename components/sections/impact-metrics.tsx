"use client";

const METRICS = [
  { value: "500+", label: "Projects completed" },
  { value: "50+", label: "Team members" },
  { value: "10+", label: "Years experience" },
  { value: "24/7", label: "Support" },
] as const;

export function ImpactMetrics() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0D1527] py-10 sm:py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label}>
              <p className="font-heading text-2xl font-semibold text-[#E8E4DC] sm:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-xs text-[#6B6560]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
