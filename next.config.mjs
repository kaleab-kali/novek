/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "novektech.com" }],
        destination: "https://www.novektech.com/:path*",
        permanent: true,
      },
      {
        source: "/cookies",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "/projects/:path*",
        permanent: true,
      },
      {
        source: "/products/crm-tools",
        destination: "/products/novek-crm",
        permanent: true,
      },
      {
        source: "/products/luxury-websites",
        destination: "/services/luxury-website-design",
        permanent: true,
      },
      {
        source: "/products/restaurant-management",
        destination: "/products/restaurant-management-system",
        permanent: true,
      },
      {
        source: "/products/property-management",
        destination: "/products/property-management-system",
        permanent: true,
      },
      {
        source: "/products/hospitality-management",
        destination: "/products/hospitality-management-system",
        permanent: true,
      },
      {
        source: "/services/digital-consulting",
        destination: "/services/consulting",
        permanent: true,
      },
      {
        source: "/services/enterprise-systems",
        destination: "/services/custom-software-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig
