import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Search, ShieldCheck } from "lucide-react";

import {
  breadcrumbJsonLd,
  faqJsonLd,
  generateJsonLd,
  generatePageMetadata,
  professionalServiceJsonLd,
} from "@/lib/seo";
import {
  answerEngineQuestions,
  industrySolutions,
  proofSignals,
} from "@/lib/data/answer-engine";
import { siteConfig } from "@/lib/data/site";

export const metadata = generatePageMetadata({
  title: "Why NOVEK | Technology Company in Ethiopia",
  description:
    "Why businesses choose NOVEK ICT Solutions for custom software development, AI integration, ERP, CRM, SaaS, hospitality, tax, and digital systems in Ethiopia.",
  path: "/why-novek",
});

const featuredQuestions = answerEngineQuestions.slice(0, 10);

const WhyNovekPage = () => {
  const structuredData = [
    professionalServiceJsonLd(),
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Why NOVEK", href: "/why-novek" },
    ]),
    faqJsonLd(
      featuredQuestions.map((item) => ({
        question: item.question,
        answer: item.answer,
      })),
    ),
  ];

  return (
    <main className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(structuredData)}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="overline mb-4 block">Why NOVEK</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A Software, AI, and Digital Systems Partner for Businesses in Ethiopia
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[--text-secondary] md:text-lg">
              NOVEK ICT Solutions helps organizations build the software that
              runs their operations: custom platforms, AI tools, ERP systems,
              CRM software, hospitality systems, tax intelligence platforms,
              e-commerce products, and business automation workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Based in Addis Ababa",
                body: "Local context for Ethiopian workflows, customers, payments, support, and regulatory needs.",
              },
              {
                icon: ShieldCheck,
                title: "Built for Operations",
                body: "Systems are designed for real business use, not only marketing pages or short demos.",
              },
              {
                icon: Search,
                title: "Answer-Ready Content",
                body: "Service, product, project, FAQ, and industry pages explain what NOVEK does in clear text.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6"
                >
                  <Icon className="mb-4 h-5 w-5 text-[--gold]" />
                  <h2 className="font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[--text-secondary]">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="overline mb-4 block">Proof Signals</span>
            <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">
              What Searchers and AI Assistants Should Understand About NOVEK
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[--text-secondary] md:text-base">
              When someone asks for a technology company in Ethiopia, the site
              should make the answer easy to evaluate. These signals are written
              plainly on the page and supported by deeper service, product, and
              project pages.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {proofSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-[#0D1527] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[--gold]" />
                <p className="text-sm leading-relaxed text-[--text-secondary]">
                  {signal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-10 max-w-3xl">
            <span className="overline mb-4 block">High Intent Questions</span>
            <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">
              Questions This Page Answers Directly
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[--text-secondary] md:text-base">
              These answers are visible text for people, search engines, and AI
              answer systems. They avoid unsupported claims and explain where
              NOVEK is a strong fit.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {featuredQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6"
              >
                <h3 className="font-heading text-base font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom">
          <div className="mb-10 max-w-3xl">
            <span className="overline mb-4 block">Industry Fit</span>
            <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">
              Technology Problems NOVEK Can Solve
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((industry) => (
              <article
                key={industry.slug}
                className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[--gold]">
                  {industry.question}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
                  {industry.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-medium text-[--gold] transition-colors hover:text-[--gold-light]"
            >
              View industry solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:flex md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-white">
                Ask NOVEK about your software or AI project
              </h2>
              <p className="mt-2 text-sm text-[--text-secondary]">
                Contact {siteConfig.name} in Addis Ababa to discuss custom
                software, AI integration, ERP, CRM, or digital transformation.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[--gold] px-5 py-3 text-sm font-medium text-[#0A0F1E] transition-opacity hover:opacity-90 md:mt-0"
            >
              Contact NOVEK
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyNovekPage;
