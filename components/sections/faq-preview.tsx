"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What types of software does NOVEK build?",
    a: "We build custom enterprise platforms, ERPs, AI-powered tools, mobile apps, SaaS products, and hospitality/tax/property management systems. If it runs a business, we can build it.",
  },
  {
    q: "How long does a typical project take?",
    a: "An MVP typically takes 3-4 months. Enterprise solutions range from 6-12 months depending on complexity. We scope everything during a free discovery session.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes. We regularly integrate with and modernize existing software. We can add AI capabilities, build new interfaces, or migrate to modern infrastructure.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing maintenance, monitoring, and iteration packages. We don't disappear after deployment — 24/7 support is part of what we do.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through our contact page or call us at +251 987 888 646. We'll schedule a discovery call to understand your needs and provide a proposal within a week.",
  },
] as const;

export function FAQPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-custom mx-auto max-w-[640px]">
        <h2 className="mb-6 font-heading text-xl font-semibold text-[#E8E4DC]">
          Common questions
        </h2>
        <Accordion type="single" collapsible>
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-white/[0.06]"
            >
              <AccordionTrigger className="py-4 text-left text-sm font-medium text-[#E8E4DC] hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-[#9A9590]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link
          href="/faq"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#C9A96E] transition hover:text-[#D4BA85]"
        >
          More questions <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
