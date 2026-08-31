/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Consolidate duplicate homepage indexing: non-www -> www (canonical per layout.js metadataBase)
      {
        source: "/:path*",
        has: [{ type: "host", value: "delhigirl.in" }],
        destination: "https://www.delhigirl.in/:path*",
        permanent: true,
      },
      // Stale pre-lowercase-migration URL still indexed by Google -> live equivalent page
      {
        source: "/Category/Foreignmodel",
        destination: "/russian-escorts-in-delhi",
        permanent: true,
      },
      {
        source: "/category/foreignmodel",
        destination: "/russian-escorts-in-delhi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
