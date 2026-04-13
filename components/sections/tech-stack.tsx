"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";

const categories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Flutter"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "Go", "Java", "Rust", ".NET"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    label: "AI & Data",
    items: [
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "LangChain",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

export function TechStack() {
  return (
    <SectionWrapper id="tech-stack">
      <SectionHeading
        overline="OUR TOOLKIT"
        title="Technologies We Master"
        subtitle="We choose the right tool for every job — here are the ones we reach for most."
      />

      <div className="space-y-10">
        {categories.map((cat) => (
          <motion.div
            key={cat.label}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span
              variants={fadeUp}
              className="overline mb-4 block"
            >
              {cat.label}
            </motion.span>

            <div className="flex flex-wrap gap-3">
              {cat.items.map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-sm text-[#9A9590] transition-colors duration-200 hover:border-white/[0.12] hover:text-[#E8E4DC]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
