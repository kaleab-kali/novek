import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 pt-20">
      <div className="relative mb-8">
        <span className="font-heading text-[120px] font-bold leading-none text-[#C9A96E] opacity-20 md:text-[200px]">
          404
        </span>
      </div>

      <h1 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-center text-[#A1A1AA]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-[#C9A96E] px-6 py-3 text-sm font-medium text-[#0A0F1E] transition-opacity hover:opacity-90"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-lg border border-white/[0.12] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.04]"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        {[
          { label: "Services", href: "/services" },
          { label: "Products", href: "/products" },
          { label: "Projects", href: "/projects" },
          { label: "Blog", href: "/blog" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-[#71717A] transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
