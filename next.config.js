/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./content/**/*"],
    },
    typedRoutes: true
  },
};

module.exports = nextConfig;
