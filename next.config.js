/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  // Uncomment and modify if deploying to a subdirectory
  // basePath: '/your-repo-name',
  
  // Configure Next.js page extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

module.exports = nextConfig;
