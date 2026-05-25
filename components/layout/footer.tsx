"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Send } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaGithub, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { siteConfig, socialExtended } from "@/lib/data/site";

const links = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Why NOVEK", href: "/why-novek" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: siteConfig.social.twitter, label: "X" },
  { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
  { icon: FaFacebookF, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: FaTiktok, href: socialExtended.tiktok, label: "TikTok" },
  { icon: FaYoutube, href: socialExtended.youtube, label: "YouTube" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0F1E]" role="contentinfo">
      <div className="container-custom px-5 py-8 sm:px-6 sm:py-10 md:py-12">
        {/* Top row: logo + newsletter */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="NOVEK" width={24} height={24} className="h-6 w-6" />
            <span className="font-heading text-sm font-semibold text-[#E8E4DC]">NOVEK</span>
          </Link>
          <form
            className="flex max-w-[260px] gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="h-8 flex-1 rounded-md border border-white/[0.06] bg-[#0D1527] px-2.5 text-xs text-[#E8E4DC] placeholder:text-[#6B6560] focus:border-[#C9A96E]/40 focus:outline-none"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#C9A96E] text-[#0A0F1E]"
              aria-label="Subscribe"
            >
              <Send className="h-3 w-3" />
            </button>
          </form>
        </div>

        {/* Links — simple grid, 3 columns on all sizes */}
        <div className="mt-6 grid grid-cols-3 gap-y-2 sm:mt-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#6B6560] transition-colors hover:text-[#E8E4DC]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5 sm:mt-8">
          <div className="flex items-center gap-2 text-[11px] text-[#6B6560]">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
            <span className="hidden sm:inline">&middot; Addis Ababa, Ethiopia</span>
          </div>

          <div className="flex items-center gap-1.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-7 w-7 items-center justify-center rounded text-[#6B6560] transition-colors hover:text-[#E8E4DC]"
              >
                <social.icon className="h-3 w-3" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="ml-1 flex h-7 w-7 items-center justify-center rounded border border-white/[0.06] text-[#6B6560] transition-colors hover:text-[#E8E4DC]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
