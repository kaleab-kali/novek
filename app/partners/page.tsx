import { generatePageMetadata } from "@/lib/seo";
import { partners } from "@/lib/data/partners";
import { ExternalLink } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Partners & Integrations",
  description:
    "NOVEK ICT Solutions partners with leading technology, cloud, payment, and design platforms to deliver world-class solutions.",
  path: "/partners",
});

const CATEGORY_ORDER = ["Technology", "Cloud", "Payment", "Design"] as const;

const PartnersPage = () => {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: partners.filter((p) => p.category === category),
  })).filter((g) => g.items.length > 0);

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="overline mb-4 block">Partners</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              Our Technology Partners
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
              We partner with industry-leading platforms to ensure our clients
              get the best infrastructure, tooling, and integrations available.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-12">
            {grouped.map((group) => (
              <div key={group.category}>
                <h2 className="mb-6 font-heading text-lg font-semibold text-white">
                  {group.category}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.items.map((partner) => (
                    <div
                      key={partner.name}
                      className="card-surface flex flex-col rounded-xl p-6"
                    >
                      <h3 className="mb-2 font-heading text-base font-semibold text-white">
                        {partner.name}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-[--text-secondary]">
                        {partner.description}
                      </p>
                      {partner.url && (
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[--light-blue] transition-colors hover:text-[--light-blue-muted]"
                        >
                          Visit website
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartnersPage;
