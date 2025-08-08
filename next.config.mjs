/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  experimental: {
    // App Router by default in Next 13+; ensure optimized bundling
  }
};

export default nextConfig;

