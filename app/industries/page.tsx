import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  breadcrumbJsonLd,
  generateJsonLd,
  generatePageMetadata,
} from "@/lib/seo";
import { industrySolutions } from "@/lib/data/answer-engine";
import { services } from "@/lib/data/services";

export const metadata = generatePageMetadata({
  title: "Industries | Software and AI Solutions in Ethiopia",
  description:
    "Industry software and AI solutions by NOVEK ICT Solutions for hospitality, real estate, retail, manufacturing, finance, tax, compliance, and business automation in Ethiopia.",
  path: "/industries",
});

const IndustriesPage = () => {
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Industries", href: "/industries" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "NOVEK industry software solutions",
      itemListElement: industrySolutions.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry.title,
        description: industry.answer,
      })),
    },
  ];

  return (
    <main className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(structuredData)}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="overline mb-4 block">Industries</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              Software and AI Solutions for Ethiopian Business Sectors
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
              NOVEK builds practical systems for organizations that need
              reliable operations, automation, reporting, and digital customer
              experiences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {industrySolutions.map((industry) => (
              <article
                key={industry.slug}
                className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6"
              >
                <p className="mb-2 text-sm font-medium text-[--gold]">
                  {industry.question}
                </p>
                <h2 className="font-heading text-xl font-semibold text-white">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
                  {industry.answer}
                </p>
                <ul className="mt-5 grid gap-2">
                  {industry.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2 text-sm text-[--text-secondary]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[--gold]" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom">
          <div className="mb-10 max-w-3xl">
            <span className="overline mb-4 block">Capabilities</span>
            <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">
              Services That Support These Industries
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 transition hover:border-[--gold]/30"
              >
                <h3 className="font-heading text-lg font-semibold text-white">
                  {service.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[--text-secondary]">
                  {service.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-[--gold]">
                  Explore service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustriesPage;
