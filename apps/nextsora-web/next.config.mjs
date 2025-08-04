/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@nextsora/ui", "@nextsora/utils"],
  experimental: {
    typedRoutes: true,
  },
  env: {
    CUSTOM_KEY: 'nextsora-web',
  },
}

export default nextConfig;