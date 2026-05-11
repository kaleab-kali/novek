import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/project-card";

export const metadata = generatePageMetadata({
  title: "Projects | Software Case Studies & Client Work",
  description:
    "Explore NOVEK ICT Solutions projects across tax intelligence, ERP, hospitality, e-commerce, restaurant management, and property management.",
  path: "/projects",
});

const ProjectsPage = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="overline mb-4 block">Client Work</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              Projects Built for Real Operations
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
              Case studies from production systems we designed, shipped, and
              supported for organizations across Ethiopia.
            </p>
          </div>

          <div className="mb-16 grid gap-4 rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 sm:grid-cols-3">
            <div>
              <p className="font-heading text-3xl font-semibold text-[--gold]">
                {projects.length}
              </p>
              <p className="mt-1 text-sm text-[--text-secondary]">
                Featured case studies
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-semibold text-[--gold]">
                6
              </p>
              <p className="mt-1 text-sm text-[--text-secondary]">
                Core industries
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-semibold text-[--gold]">
                2023+
              </p>
              <p className="mt-1 text-sm text-[--text-secondary]">
                Recent delivery work
              </p>
            </div>
          </div>

          <div className="mb-14">
            <div className="mb-8 flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-[--gold]" />
              <h2 className="font-heading text-2xl font-semibold text-white">
                Featured Projects
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          {otherProjects.length > 0 && (
            <div>
              <h2 className="mb-8 font-heading text-2xl font-semibold text-white">
                More Work
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 rounded-xl border border-white/[0.06] bg-[#0D1527] p-6 md:flex md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-white">
                Need a similar system?
              </h2>
              <p className="mt-2 text-sm text-[--text-secondary]">
                Tell us what your team is trying to automate, modernize, or
                scale.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[--gold] px-5 py-3 text-sm font-medium text-[#0A0F1E] transition-opacity hover:opacity-90 md:mt-0"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
