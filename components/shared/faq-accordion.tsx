"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn(
        "w-full rounded-xl border-white/[0.06] bg-[#0D1527] backdrop-blur-sm",
        className,
      )}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-white/[0.06] data-open:bg-[#0D1527]"
        >
          <AccordionTrigger className="px-6 py-5 text-left text-base font-medium text-white hover:no-underline hover:text-white/80 [&>svg]:text-[#6B6560]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 text-sm leading-relaxed text-[#9A9590]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
