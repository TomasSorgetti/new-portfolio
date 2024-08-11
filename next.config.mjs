/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["png.pngtree.com", "localhost", "tomassorgetti.com.ar"],
  },
};

export default nextConfig;
