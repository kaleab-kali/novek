/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cookies",
        destination: "https://www.novek.et/cookie-policy",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://www.novek.et/projects",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "https://www.novek.et/projects",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "https://www.novek.et/projects/:path*",
        permanent: true,
      },
      {
        source: "/products/crm-tools",
        destination: "https://www.novek.et/products/novek-crm",
        permanent: true,
      },
      {
        source: "/products/luxury-websites",
        destination: "https://www.novek.et/services/luxury-website-design",
        permanent: true,
      },
      {
        source: "/products/restaurant-management",
        destination: "https://www.novek.et/products/restaurant-management-system",
        permanent: true,
      },
      {
        source: "/products/property-management",
        destination: "https://www.novek.et/products/property-management-system",
        permanent: true,
      },
      {
        source: "/products/hospitality-management",
        destination: "https://www.novek.et/products/hospitality-management-system",
        permanent: true,
      },
      {
        source: "/services/digital-consulting",
        destination: "https://www.novek.et/services/consulting",
        permanent: true,
      },
      {
        source: "/services/enterprise-systems",
        destination: "https://www.novek.et/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "novek.et" }],
        destination: "https://www.novek.et/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "novektech.com" }],
        destination: "https://www.novek.et/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.novektech.com" }],
        destination: "https://www.novek.et/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig
