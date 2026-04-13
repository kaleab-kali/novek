import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { companyStats } from "@/lib/data/site";
import { ArrowRight } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "About NOVEK ICT Solutions | Software Company in Ethiopia",
  description:
    "NOVEK ICT Solutions is an Ethiopian technology company building custom software, AI-powered platforms, and enterprise products for businesses across Africa.",
  path: "/about",
});

const AboutPage = () => {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <span className="overline mb-4 block">About Us</span>
          <h1 className="mb-8 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
            About NOVEK ICT Solutions
          </h1>

          <div className="space-y-6 text-base leading-relaxed text-[--text-secondary] md:text-lg">
            <p>
              NOVEK ICT Solutions was founded in Addis Ababa with a
              straightforward goal: build software that actually works for
              businesses operating in Ethiopia and across Africa. We saw
              companies struggling with off-the-shelf tools that were never
              designed for local regulations, payment systems, or operating
              realities. So we set out to change that.
            </p>
            <p>
              Over the past eight years, we have grown from a small team of
              developers into a full-service technology company with more than 50
              professionals spanning engineering, design, AI research, and
              digital strategy. We have delivered over 150 projects across 12
              countries, working with everyone from early-stage startups to
              government ministries and multinational enterprises.
            </p>
            <p>
              Our approach is rooted in listening first and building second. We
              do not push generic solutions. Every platform we design, every line
              of code we write, and every strategy we develop starts with a deep
              understanding of the specific problem our client is trying to
              solve. That discipline is why our clients stay with us.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[--navy-900] py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-heading text-3xl font-bold text-[--gold] md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-[--text-secondary]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="mb-6 font-heading text-2xl font-semibold text-white md:text-3xl">
            Our Mission
          </h2>
          <p className="text-base leading-relaxed text-[--text-secondary] md:text-lg">
            To accelerate digital transformation across Africa by delivering
            software and AI solutions that are built for local realities,
            powered by world-class engineering, and designed to create lasting
            value for the businesses and communities we serve.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-[--navy-900]">
        <div className="container-narrow">
          <h2 className="mb-6 font-heading text-2xl font-semibold text-white md:text-3xl">
            What We Do
          </h2>
          <ul className="space-y-4 text-base leading-relaxed text-[--text-secondary]">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--gold]" />
              <span>
                <strong className="text-white">Custom Software Development</strong>{" "}
                -- Enterprise web apps, mobile platforms, and APIs tailored to
                your exact requirements.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--gold]" />
              <span>
                <strong className="text-white">AI Integration & Training</strong>{" "}
                -- Embed intelligence into your existing systems and upskill your
                team to leverage AI effectively.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--gold]" />
              <span>
                <strong className="text-white">Enterprise Products</strong> -- Tax
                compliance, ERP, restaurant management, CRM, e-commerce, and
                more -- ready to deploy and customize.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[--gold]" />
              <span>
                <strong className="text-white">Digital Marketing & Consulting</strong>{" "}
                -- Data-driven strategies and expert guidance for digital
                transformation.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-[--text-secondary]">
            Whether you have a clear project in mind or just want to explore what
            is possible, we are ready to talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[--gold] px-6 py-3 text-sm font-medium text-[--navy-950] transition-opacity hover:opacity-90"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
