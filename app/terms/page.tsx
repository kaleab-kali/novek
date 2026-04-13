import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Terms of service for NOVEK ICT Solutions.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container-narrow pt-28 pb-20">
      <h1 className="font-heading text-2xl font-semibold text-[#E8E4DC]">
        Terms of Service
      </h1>
      <p className="mt-2 text-xs text-[#6B6560]">Last updated: April 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#9A9590]">
        <p>
          These Terms of Service govern your use of the NOVEK ICT Solutions
          website and services. By accessing our website or engaging our
          services, you agree to these terms.
        </p>
        <h2 className="font-heading text-base font-medium text-[#E8E4DC]">
          Services
        </h2>
        <p>
          NOVEK ICT Solutions provides custom software development, AI
          integration, digital consulting, and related technology services. All
          project engagements are governed by separate service agreements.
        </p>
        <h2 className="font-heading text-base font-medium text-[#E8E4DC]">
          Intellectual Property
        </h2>
        <p>
          Unless otherwise agreed in writing, clients retain full ownership of
          all custom software, code, and deliverables produced during an
          engagement. NOVEK retains ownership of pre-existing tools, libraries,
          and frameworks used in delivery.
        </p>
        <h2 className="font-heading text-base font-medium text-[#E8E4DC]">
          Limitation of Liability
        </h2>
        <p>
          NOVEK ICT Solutions shall not be liable for indirect, incidental, or
          consequential damages arising from the use of our services or website.
        </p>
        <h2 className="font-heading text-base font-medium text-[#E8E4DC]">
          Contact
        </h2>
        <p>
          For questions about these terms, contact us at info@novektech.com.
        </p>
      </div>
    </div>
  );
}
