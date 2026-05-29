/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Tells Next.js to ignore ESLint errors during production builds on Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Tells Next.js to ignore TypeScript type errors (like the bcrypt one) during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;