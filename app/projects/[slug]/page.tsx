import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

import {
  breadcrumbJsonLd,
  generateJsonLd,
  generatePageMetadata,
} from "@/lib/seo";
import { projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return generatePageMetadata({
    title: `${project.name} Project`,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
  });
};

const ProjectDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const relatedProjects = projects.filter((item) =>
    project.relatedProjects.includes(item.slug),
  );
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: project.name, href: `/projects/${project.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.name,
      headline: `${project.name} case study`,
      description: project.shortDescription,
      url: `${siteConfig.url}/projects/${project.slug}`,
      creator: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      about: project.tags,
      audience: {
        "@type": "BusinessAudience",
        audienceType: project.industry,
      },
    },
  ];

  return (
    <main className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd(structuredData)}
      />

      <div className="container-custom mb-8">
        <nav className="flex items-center gap-2 text-sm text-[--text-tertiary]">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/projects" className="transition-colors hover:text-white">
            Projects
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[--text-primary]">{project.name}</span>
        </nav>
      </div>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="overline mb-4 block">{project.industry}</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
              {project.shortDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-4 rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-[--text-tertiary]">
                Client
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-white">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[--text-tertiary]">
                Industry
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-white">
                {project.industry}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[--text-tertiary]">
                Year
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-white">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { title: "Challenge", body: project.challenge },
              { title: "Approach", body: project.approach },
              { title: "Solution", body: project.solution },
            ].map((section) => (
              <article key={section.title} className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6">
                <h2 className="font-heading text-xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[--text-secondary]">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-8 font-heading text-2xl font-semibold text-white">
            Measurable Results
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((result) => (
              <div key={result.label} className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6">
                <p className="font-heading text-3xl font-semibold text-[--gold]">
                  {result.value}
                </p>
                <p className="mt-2 text-sm text-[--text-secondary]">
                  {result.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="mb-5 font-heading text-2xl font-semibold text-white">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-[--text-secondary]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.testimonial && (
              <blockquote className="rounded-xl border border-white/[0.06] bg-[#0D1527] p-6">
                <p className="text-sm leading-relaxed text-[--text-secondary]">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-5">
                  <p className="font-heading text-sm font-semibold text-white">
                    {project.testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-[--text-tertiary]">
                    {project.testimonial.role}, {project.testimonial.company}
                  </p>
                </footer>
              </blockquote>
            )}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-padding bg-[--navy-900]">
          <div className="container-custom">
            <h2 className="mb-8 font-heading text-2xl font-semibold text-white">
              Related Projects
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 transition hover:border-[--gold]/30"
                >
                  <div className="mb-3 flex items-center gap-2 text-[--gold]">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider">
                      {item.industry}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[--text-secondary]">
                    {item.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-[--gold]">
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProjectDetailPage;
