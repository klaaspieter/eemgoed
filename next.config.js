/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./content/**/*"],
    },
    typedRoutes: true,
  },
  output: "export",
};

module.exports = nextConfig;
