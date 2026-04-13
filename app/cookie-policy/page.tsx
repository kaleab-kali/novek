import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Cookie Policy",
  description: "Cookie policy for NOVEK ICT Solutions.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="container-narrow pt-28 pb-20">
      <h1 className="font-heading text-2xl font-semibold text-[#E8E4DC]">
        Cookie Policy
      </h1>
      <p className="mt-2 text-xs text-[#6B6560]">Last updated: April 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#9A9590]">
        <p>
          This Cookie Policy explains how NOVEK ICT Solutions uses cookies and
          similar tracking technologies on our website.
        </p>
        <h2 className="font-heading text-base font-medium text-[#E8E4DC]">
          What Are Cookies
        </h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help the site remember your preferences and improve your
          browsing experience.
        </p>
        <h2 className="font-heading text-base font-medium text-[#E8E4DC]">
          How We Use Cookies
        </h2>
        <p>
          We use essential cookies to ensure the website functions correctly, and
          analytics cookies to understand how visitors interact with our site.
          We do not use cookies for advertising purposes.
        </p>
        <h2 className="font-heading text-base font-medium text-[#E8E4DC]">
          Managing Cookies
        </h2>
        <p>
          You can control and delete cookies through your browser settings. Note
          that disabling cookies may affect your experience on our website.
        </p>
        <h2 className="font-heading text-base font-medium text-[#E8E4DC]">
          Contact
        </h2>
        <p>
          For questions about our cookie policy, contact us at info@novektech.com.
        </p>
      </div>
    </div>
  );
}
