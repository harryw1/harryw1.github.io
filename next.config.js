/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  // Uncomment and modify if deploying to a subdirectory
  // basePath: '/your-repo-name',
  
  // Configure webpack to handle MDX files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
