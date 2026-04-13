import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { products } from "@/lib/data/products";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  products.map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return generatePageMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
  });
};

const ProductDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main className="pt-24">
      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <nav className="flex items-center gap-2 text-sm text-[--text-tertiary]">
          <Link
            href="/"
            className="transition-colors hover:text-[--text-secondary]"
          >
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href="/products"
            className="transition-colors hover:text-[--text-secondary]"
          >
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[--text-primary]">{product.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              {product.name}
            </h1>
            <p className="mb-6 font-heading text-lg text-[--gold]">
              {product.tagline}
            </p>
            <p className="text-base leading-relaxed text-[--text-secondary] md:text-lg">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom">
          <h2 className="mb-12 font-heading text-2xl font-semibold text-white md:text-3xl">
            Key Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <div key={feature.title} className="card-surface rounded-xl p-6">
                <h3 className="mb-2 font-heading text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[--text-secondary]">
                  {feature.description}
                </p>
                {feature.subFeatures && feature.subFeatures.length > 0 && (
                  <ul className="space-y-1.5">
                    {feature.subFeatures.map((sub) => (
                      <li
                        key={sub}
                        className="flex items-center gap-2 text-sm text-[--text-secondary]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[--gold]" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      {product.howItWorks.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="mb-12 font-heading text-2xl font-semibold text-white md:text-3xl">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {product.howItWorks.map((step) => (
                <div key={step.number}>
                  <span className="mb-3 block font-heading text-3xl font-bold text-[--gold] opacity-30">
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-heading text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[--text-secondary]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      {product.useCases.length > 0 && (
        <section className="section-padding bg-[--navy-900]">
          <div className="container-custom">
            <h2 className="mb-12 font-heading text-2xl font-semibold text-white md:text-3xl">
              Who It's For
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {product.useCases.map((uc) => (
                <div key={uc.title} className="card-surface rounded-xl p-6">
                  <h3 className="mb-2 font-heading text-base font-semibold text-white">
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[--text-secondary]">
                    {uc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="mb-12 font-heading text-2xl font-semibold text-white md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl">
              <FAQAccordion items={product.faq} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Interested in {product.name}?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-[--text-secondary]">
            Schedule a demo or talk to our team about how {product.name} can work
            for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[--gold] px-6 py-3 text-sm font-medium text-[--navy-950] transition-opacity hover:opacity-90"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
