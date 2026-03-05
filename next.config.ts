/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Isse 'out' folder banega
  images: {
    unoptimized: true, // Static export ke liye ye zaroori hai
  },
};

export default nextConfig;
