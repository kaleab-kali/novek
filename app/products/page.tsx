import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { products } from "@/lib/data/products";
import {
  Calculator,
  UtensilsCrossed,
  Layers,
  Building2,
  Sparkles,
  Users,
  Hotel,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Products | Tax, ERP, CRM, Hospitality & E-Commerce Software",
  description:
    "Enterprise-grade software products by NOVEK ICT Solutions: tax compliance, ERP, restaurant management, property management, CRM, e-commerce, and AI platforms.",
  path: "/products",
});

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  UtensilsCrossed,
  Layers,
  Building2,
  Sparkles,
  Users,
  Hotel,
  ShoppingCart,
};

const ProductsPage = () => {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="overline mb-4 block">Our Products</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              Software That Works
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
              Production-ready platforms built for the realities of doing
              business in Ethiopia and across Africa. Each product is designed,
              developed, and supported by our team in Addis Ababa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => {
              const Icon = ICON_MAP[product.icon];
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="card-surface-hover group flex flex-col rounded-xl p-6 md:p-8"
                >
                  <div className="mb-4 flex items-center gap-3">
                    {Icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--gold-dim]">
                        <Icon className="h-5 w-5 text-[--gold]" />
                      </div>
                    )}
                    <h2 className="font-heading text-lg font-semibold text-white">
                      {product.name}
                    </h2>
                  </div>
                  <p className="mb-2 text-sm font-medium text-[--gold]">
                    {product.tagline}
                  </p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[--text-secondary]">
                    {product.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[--light-blue] transition-colors group-hover:text-[--light-blue-muted]">
                    View product
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
