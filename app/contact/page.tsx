import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";
import { ContactForm } from "@/components/shared/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with NOVEK ICT Solutions. Reach our team in Addis Ababa, Ethiopia for custom software development, AI integration, and digital consulting.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="px-5 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
      <div className="container-custom">
        <h1 className="mb-1 font-heading text-xl font-semibold text-[#E8E4DC] sm:text-2xl">
          Get in touch
        </h1>
        <p className="mb-6 text-[13px] text-[#9A9590] sm:mb-8 sm:text-sm">
          Have a project in mind? We respond within 24 hours.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <ContactForm />

          <div>
            <h2 className="mb-4 text-sm font-medium text-[#E8E4DC]">
              Reach us directly
            </h2>
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-[13px] text-[#9A9590] transition-colors hover:text-[#E8E4DC]"
              >
                <Mail className="h-4 w-4 text-[#C9A96E]" />
                {siteConfig.email}
              </a>
              <a
                href="tel:+251987888646"
                className="flex items-center gap-3 text-[13px] text-[#9A9590] transition-colors hover:text-[#E8E4DC]"
              >
                <Phone className="h-4 w-4 text-[#C9A96E]" />
                +251 987 888 646
              </a>
              <div className="flex items-center gap-3 text-[13px] text-[#9A9590]">
                <MapPin className="h-4 w-4 text-[#C9A96E]" />
                4th Floor, Lem Hotel Building, Megnagna, Addis Ababa
              </div>
            </div>

            <div className="mt-6 h-px bg-white/[0.06]" />

            <div className="mt-4">
              <h3 className="text-xs font-medium text-[#6B6560]">Working hours</h3>
              <p className="mt-1 text-[12px] text-[#6B6560]">Mon - Fri: 9:00 AM - 6:00 PM (EAT)</p>
              <p className="text-[12px] text-[#6B6560]">Sat: 9:00 AM - 1:00 PM (EAT)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
