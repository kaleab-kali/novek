/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cookies",
        destination: "https://novek.et/cookie-policy",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://novek.et/projects",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "https://novek.et/projects",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "https://novek.et/projects/:path*",
        permanent: true,
      },
      {
        source: "/products/crm-tools",
        destination: "https://novek.et/products/novek-crm",
        permanent: true,
      },
      {
        source: "/products/luxury-websites",
        destination: "https://novek.et/services/luxury-website-design",
        permanent: true,
      },
      {
        source: "/products/restaurant-management",
        destination: "https://novek.et/products/restaurant-management-system",
        permanent: true,
      },
      {
        source: "/products/property-management",
        destination: "https://novek.et/products/property-management-system",
        permanent: true,
      },
      {
        source: "/products/hospitality-management",
        destination: "https://novek.et/products/hospitality-management-system",
        permanent: true,
      },
      {
        source: "/services/digital-consulting",
        destination: "https://novek.et/services/consulting",
        permanent: true,
      },
      {
        source: "/services/enterprise-systems",
        destination: "https://novek.et/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "novektech.com" }],
        destination: "https://novek.et/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.novektech.com" }],
        destination: "https://novek.et/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.novek.et" }],
        destination: "https://novek.et/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig
