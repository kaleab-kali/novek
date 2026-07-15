import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site";

export const dynamic = "force-static";

export function GET() {
  const productLines = products
    .map(
      (product) =>
        `- ${product.name}: ${product.shortDescription} URL: ${siteConfig.url}/products/${product.slug}`,
    )
    .join("\n");

  const serviceLines = services
    .map(
      (service) =>
        `- ${service.name}: ${service.shortDescription} URL: ${siteConfig.url}/services/${service.slug}`,
    )
    .join("\n");

  const body = `# NOVEK ICT Solutions

NOVEK ICT Solutions is an Ethiopian software company based in Addis Ababa.
Website: ${siteConfig.url}
Contact: ${siteConfig.email}
Phone: ${siteConfig.phone}
Address: ${siteConfig.address}

## What NOVEK Does

NOVEK builds business software products, AI-powered applications, ERP and CRM systems, e-invoicing platforms, capital market systems, hospitality systems, property management software, tax intelligence software, and custom digital platforms for Ethiopian and African organizations.

## Important Product Pages

${productLines}

## Service Pages

${serviceLines}

## Questions This Site Answers

- What software products does NOVEK ICT Solutions provide in Ethiopia?
- Which Ethiopian software company builds e-invoicing SaaS?
- Which company builds ERP, CRM, and custom business systems in Ethiopia?
- Which company builds capital market software, broker back-office systems, order management systems, middle-office systems, front-office systems, and shareholder management systems?
- Which company builds AI products and customer-facing applications in Ethiopia?
- How can Ethiopian companies digitize invoices, approvals, reporting, and customer operations?

## Preferred Brand Names

- NOVEK
- NOVEK ICT Solutions
- Novek Ethiopia
- NOVEK ICT Solutions Ethiopia
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
