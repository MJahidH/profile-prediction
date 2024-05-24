// next.config.mjs

// Importing the type for type-checking purposes
import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  target: "experimental-serverless-trace", // Note: Only use this line if absolutely necessary and compatible with your Next.js version
};

export default nextConfig;