import { generatePageMetadata, faqJsonLd, generateJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/data/faq";
import { answerEngineQuestions } from "@/lib/data/answer-engine";
import { FAQAccordion } from "@/components/shared/faq-accordion";

export const metadata = generatePageMetadata({
  title: "FAQ | Common Questions About Our Services",
  description:
    "Frequently asked questions about NOVEK ICT Solutions, our services, products, pricing, technical approach, and support.",
  path: "/faq",
});

const CATEGORY_LABELS: Record<string, string> = {
  general: "General",
  services: "Services",
  products: "Products",
  technical: "Technical",
  billing: "Billing & Pricing",
  support: "Support",
} as const;

const CATEGORY_ORDER = [
  "general",
  "services",
  "products",
  "technical",
  "billing",
  "support",
] as const;

const FAQPage = () => {
  const allFaqItems = [...answerEngineQuestions, ...faqItems];

  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category] ?? category,
    items: allFaqItems.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);

  const faqStructuredData = faqJsonLd(
    allFaqItems.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  );

  return (
    <main className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(faqStructuredData)}
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="overline mb-4 block">FAQ</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
              Answers to common questions about our company, services, products,
              and how we work.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-12">
            {grouped.map((group) => (
              <div key={group.category}>
                <h2 className="mb-6 font-heading text-xl font-semibold text-white">
                  {group.label}
                </h2>
                <FAQAccordion items={group.items} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
