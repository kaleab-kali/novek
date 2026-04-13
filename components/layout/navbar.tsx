"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  const pathname = usePathname();

  const isScrolled = scrollY > 20;
  const isHidden = scrollDirection === "down" && scrollY > 200;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#0A0F1E]/90 backdrop-blur-lg border-b border-white/[0.04]"
            : "bg-transparent",
          isHidden && !mobileOpen && "-translate-y-full",
        )}
      >
        {/* Single centered row */}
        <nav
          className="container-custom flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="NOVEK"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-heading text-sm font-semibold tracking-wide text-[#E8E4DC]">
              NOVEK
            </span>
          </Link>

          {/* Center nav links - pill style */}
          <div className="hidden items-center rounded-full border border-white/[0.06] bg-[#0D1527]/60 px-1.5 py-1 backdrop-blur-sm lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-1.5 text-[13px] transition-all",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-white/[0.06] text-[#E8E4DC]"
                    : "text-[#6B6560] hover:text-[#9A9590]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 text-[13px] font-medium text-[#C9A96E] transition-colors hover:text-[#D4BA85] lg:inline-flex"
            >
              Get in touch
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <button
              className="relative z-10 flex h-9 w-9 items-center justify-center text-[#9A9590] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-[#0A0F1E] lg:hidden"
          >
            <nav
              className="flex h-full flex-col px-6 pt-20 pb-8"
              aria-label="Mobile navigation"
            >
              <div className="space-y-1">
                {[
                  ...NAV_LINKS,
                  { label: "FAQ", href: "/faq" },
                  { label: "Careers", href: "/careers" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block py-3 text-lg",
                      pathname === link.href ? "text-[#E8E4DC]" : "text-[#6B6560]",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C9A96E] px-6 py-3 text-sm font-medium text-[#0A0F1E]"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
