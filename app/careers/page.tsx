import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { jobPostings } from "@/lib/data/careers";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Careers | Join NOVEK ICT Solutions",
  description:
    "Join the NOVEK ICT Solutions team in Addis Ababa. We are hiring engineers, designers, and marketers to build software for Africa.",
  path: "/careers",
});

const CareersPage = () => {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="overline mb-4 block">Careers</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              Work With Us
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
              We are building software that matters for businesses across Africa.
              If you want challenging work, a collaborative team, and real
              impact, we want to hear from you.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {jobPostings.map((job) => (
              <div
                key={job.slug}
                className="card-surface-hover rounded-xl p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="mb-1 font-heading text-lg font-semibold text-white">
                      {job.title}
                    </h2>
                    <p className="mb-3 text-sm text-[--text-secondary]">
                      {job.department}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[--text-tertiary]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`mailto:careers@novektech.com?subject=Application: ${job.title}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[--gold] px-4 py-2 text-sm font-medium text-[--gold] transition-colors hover:bg-[--gold] hover:text-[--navy-950]"
                  >
                    Apply
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="divider my-4" />

                <p className="text-sm leading-relaxed text-[--text-secondary]">
                  {job.description}
                </p>

                <div className="mt-4">
                  <h3 className="mb-2 text-sm font-medium text-white">
                    Requirements
                  </h3>
                  <ul className="grid gap-1.5 sm:grid-cols-2">
                    {job.requirements.slice(0, 4).map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-sm text-[--text-secondary]"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[--gold]" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* General application */}
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <div className="divider mb-12" />
            <h2 className="mb-3 font-heading text-xl font-semibold text-white">
              Don&apos;t see your role?
            </h2>
            <p className="mb-6 text-sm text-[--text-secondary]">
              We are always looking for talented people. Send us your resume and
              tell us what you are passionate about.
            </p>
            <a
              href="mailto:careers@novektech.com?subject=General Application"
              className="inline-flex items-center gap-2 text-sm font-medium text-[--gold] transition-colors hover:text-[--gold-light]"
            >
              Send a general application
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
