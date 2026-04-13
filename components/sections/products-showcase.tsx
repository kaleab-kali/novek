"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data/products";

export function ProductsShowcase() {
  const displayed = products.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-custom">
        <h2 className="font-heading text-2xl text-[#E8E4DC]">
          Products in production
        </h2>
        <p className="mt-2 text-[#9A9590]">
          Software we built, ship, and maintain.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {displayed.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 transition hover:border-[#C9A96E]/20"
            >
              <h3 className="font-heading text-lg text-[#E8E4DC]">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-[#9A9590]">
                {product.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-[#C9A96E] opacity-0 transition-opacity group-hover:opacity-100">
                Details <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-[#C9A96E] transition hover:text-[#D4BA85]"
          >
            See all {products.length} products
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
