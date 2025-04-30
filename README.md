# Harrison Weiss Portfolio Website

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Markdown content.

## Features

- 🚀 Built with Next.js for performance and SEO
- 🎨 Styled with Tailwind CSS for responsive design
- 📝 Content managed through Markdown files
- 🌓 Dark mode support
- 📱 Fully responsive on all device sizes
- ♿ Accessible design with proper ARIA attributes
- 🔍 SEO optimized with meta tags

## Pages

- **Home**: Introduction and featured projects/posts
- **About**: Detailed biography, skills, work experience, and education
- **Projects**: Portfolio of sustainability and environmental projects
- **Blog**: Articles on sustainability and environmental topics

## Technology Stack

- **Framework**: Next.js (configured for static export)
- **Styling**: Tailwind CSS
- **Content**: Markdown (.md) with frontmatter
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Serve the production build locally
npm run serve
```

## Folder Structure

```
/
├── components/         # React components
├── content/            # Markdown content files
│   ├── blog/           # Blog posts
│   └── projects/       # Project details
├── lib/                # Utility functions
├── pages/              # Next.js pages
├── public/             # Static assets
│   ├── images/         # Image files
│   └── resume.pdf      # Resume file
└── styles/             # Global styles
```

## Content Management

Content is managed through Markdown files with YAML frontmatter:

- Blog posts are stored in `content/blog/`
- Projects are stored in `content/projects/`

### Frontmatter Format for Projects

```yaml
---
title: Project Title
date: '2023-01-15'
description: Short description of the project
image: /images/projects/image.jpg
tags: ['Tag1', 'Tag2']
liveUrl: https://example.com
repoUrl: https://github.com/example/repo
---
```

### Frontmatter Format for Blog Posts

```yaml
---
title: 'Blog Post Title'
date: '2023-05-20'
excerpt: 'Brief excerpt of the blog post content'
image: '/images/blog/image.jpg'
---
```

## Deployment

The site is configured for deployment to GitHub Pages using GitHub Actions. When changes are pushed to the main branch, the site is automatically built and deployed.

## License

This project is licensed under the MIT License.