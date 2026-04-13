import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { services } from "@/lib/data/services";
import {
  Code2,
  Brain,
  GraduationCap,
  Palette,
  Megaphone,
  Compass,
  ArrowRight,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Services | Custom Software Development, AI & Digital Solutions",
  description:
    "Custom software development, AI integration, luxury web design, digital marketing, and consulting services from NOVEK ICT Solutions in Addis Ababa, Ethiopia.",
  path: "/services",
});

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Brain,
  GraduationCap,
  Palette,
  Megaphone,
  Compass,
};

const ServicesPage = () => {
  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="overline mb-4 block">What We Do</span>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[--text-secondary] md:text-lg">
              End-to-end technology services for businesses across Africa and
              beyond. From custom software to AI integration, we build what
              matters.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-surface-hover group flex flex-col rounded-xl p-6 md:p-8"
                >
                  {Icon && (
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[--gold-dim]">
                      <Icon className="h-5 w-5 text-[--gold]" />
                    </div>
                  )}
                  <h2 className="mb-2 font-heading text-lg font-semibold text-white">
                    {service.name}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[--text-secondary]">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[--gold] transition-colors group-hover:text-[--gold-light]">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
