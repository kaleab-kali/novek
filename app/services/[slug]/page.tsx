import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { services } from "@/lib/data/services";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import {
  ArrowRight,
  ChevronRight,
  Code2,
  Brain,
  GraduationCap,
  Palette,
  Megaphone,
  Compass,
  Building2,
  Globe,
  Smartphone,
  Plug,
  Cloud,
  RefreshCw,
  MessageSquare,
  LineChart,
  Eye,
  Cog,
  Cpu,
  Map,
  Presentation,
  Users,
  Shield,
  HeartHandshake,
  Search,
  MousePointer,
  Zap,
  FileText,
  Share2,
  Target,
  Mail,
  BarChart3,
  Sparkles,
  Building,
  ClipboardCheck,
  BookOpen,
  Layout,
  Rocket,
  Lightbulb,
  TrendingUp,
  Lock,
  Layers,
  Wrench,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Brain,
  GraduationCap,
  Palette,
  Megaphone,
  Compass,
  Building2,
  Globe,
  Smartphone,
  Plug,
  Cloud,
  RefreshCw,
  MessageSquare,
  LineChart,
  Eye,
  Cog,
  Cpu,
  Map,
  Presentation,
  Users,
  Shield,
  HeartHandshake,
  Search,
  MousePointer,
  Zap,
  FileText,
  Share2,
  Target,
  Mail,
  BarChart3,
  Sparkles,
  Building,
  ClipboardCheck,
  BookOpen,
  Layout,
  Rocket,
  Lightbulb,
  TrendingUp,
  Lock,
  Layers,
  Wrench,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  services.map((s) => ({ slug: s.slug }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return generatePageMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
};

const ServiceDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const ServiceIcon = ICON_MAP[service.icon];

  return (
    <main className="pt-24">
      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <nav className="flex items-center gap-2 text-sm text-[--text-tertiary]">
          <Link href="/" className="transition-colors hover:text-[--text-secondary]">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href="/services"
            className="transition-colors hover:text-[--text-secondary]"
          >
            Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[--text-primary]">{service.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="max-w-3xl">
            {ServiceIcon && (
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[--gold-dim]">
                <ServiceIcon className="h-6 w-6 text-[--gold]" />
              </div>
            )}
            <h1 className="mb-4 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
              {service.name}
            </h1>
            <p className="mb-6 font-heading text-lg text-[--gold]">
              {service.tagline}
            </p>
            <p className="text-base leading-relaxed text-[--text-secondary] md:text-lg">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom">
          <h2 className="mb-12 font-heading text-2xl font-semibold text-white md:text-3xl">
            Capabilities
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((cap) => {
              const CapIcon = ICON_MAP[cap.icon];
              return (
                <div
                  key={cap.title}
                  className="card-surface rounded-xl p-6"
                >
                  {CapIcon && (
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[--light-blue-dim]">
                      <CapIcon className="h-4.5 w-4.5 text-[--light-blue]" />
                    </div>
                  )}
                  <h3 className="mb-2 font-heading text-base font-semibold text-white">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[--text-secondary]">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-12 font-heading text-2xl font-semibold text-white md:text-3xl">
            Why Choose Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => {
              const BenIcon = ICON_MAP[benefit.icon];
              return (
                <div key={benefit.title} className="flex flex-col gap-3">
                  {BenIcon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[--gold-dim]">
                      <BenIcon className="h-5 w-5 text-[--gold]" />
                    </div>
                  )}
                  <h3 className="font-heading text-base font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[--text-secondary]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom">
          <h2 className="mb-12 font-heading text-2xl font-semibold text-white md:text-3xl">
            Our Process
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => {
              const StepIcon = ICON_MAP[step.icon];
              return (
                <div key={step.number} className="relative">
                  <span className="mb-3 block font-heading text-3xl font-bold text-[--gold] opacity-30">
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-heading text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[--text-secondary]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="mb-12 font-heading text-2xl font-semibold text-white md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl">
              <FAQAccordion items={service.faq} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-[--navy-900]">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-[--text-secondary]">
            Tell us about your project and we will get back to you within 24
            hours with a plan tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[--gold] px-6 py-3 text-sm font-medium text-[--navy-950] transition-opacity hover:opacity-90"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
