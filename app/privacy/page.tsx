import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for NOVEK ICT Solutions. Learn how we collect, use, and protect your personal information.",
  path: "/privacy",
});

const LAST_UPDATED = "April 1, 2026";

const PrivacyPage = () => {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="mb-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-12 text-sm text-[--text-tertiary]">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="prose-custom space-y-8 text-sm leading-relaxed text-[--text-secondary]">
            <section>
              <h2 className="mb-3 font-heading text-lg font-semibold text-white">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly when you fill out
                contact forms, request a demo, apply for a job, or otherwise
                communicate with us. This may include your name, email address,
                phone number, company name, and the content of your message.
              </p>
              <p className="mt-3">
                We also collect certain technical information automatically when
                you visit our website, including your IP address, browser type,
                device type, pages visited, and referral source. This data is
                collected through cookies and similar technologies.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-semibold text-white">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="mt-2 space-y-1 pl-5 list-disc">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Process job applications</li>
                <li>Send relevant updates about our services and products</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-semibold text-white">
                3. Data Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share data with
                trusted third-party service providers who assist us in operating
                our website, conducting our business, or serving our clients,
                provided those parties agree to keep this information
                confidential. We may also disclose information when required by
                law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-semibold text-white">
                4. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-semibold text-white">
                5. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. You may also opt out of marketing communications at
                any time. To exercise these rights, contact us at
                privacy@novek.et.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-semibold text-white">
                6. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-lg font-semibold text-white">
                7. Contact
              </h2>
              <p>
                If you have questions about this privacy policy, contact us at:
              </p>
              <p className="mt-2 text-white">
                NOVEK ICT Solutions
                <br />
                Addis Ababa, Ethiopia
                <br />
                privacy@novek.et
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
