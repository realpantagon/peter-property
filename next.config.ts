import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  
  // Configure for Cloudflare Pages static export
  output: 'export',
  
  // Enable trailing slashes for better URL structure
  trailingSlash: true,
  
  // Disable image optimization for static export (Cloudflare handles this)
  images: {
    unoptimized: true,
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  }
};

export default nextConfig;
