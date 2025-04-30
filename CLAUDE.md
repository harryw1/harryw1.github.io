# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
- Modern portfolio website built with Next.js and Tailwind CSS
- Content managed through Markdown files
- Responsive design with dark mode support
- Static site deployed to GitHub Pages

## Build/Serve Commands
- Development server: `npm run dev`
- Build for production: `npm run build`
- Serve production build locally: `npm run serve`
- Lint code: `npm run lint`

## Tech Stack
- **Framework**: Next.js 15.3.1 (configured for static export)
- **Styling**: Tailwind CSS 3.3.3
- **Content**: Markdown (.md) with frontmatter
- **Icons**: React Icons
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure
- `/components/` - React components organized by section
- `/content/` - Markdown content (blog posts and projects)
- `/lib/` - Utility functions and constants
- `/pages/` - Next.js pages
- `/public/` - Static assets
- `/styles/` - Global styles and CSS

## Content Management
- Blog posts: `/content/blog/*.md`
- Projects: `/content/projects/*.md`
- Edit content directly in Markdown files
- Update site-wide data in `/lib/constants.js`

## Code Style Guidelines

### React/Next.js
- Functional components with hooks
- Proper component organization by feature/page
- Props validation where necessary
- Responsive design with Tailwind's responsive modifiers

### Styling
- Use Tailwind utility classes for styling
- Follow mobile-first responsive design approach
- Custom components defined in `/styles/globals.css`
- Dark mode support via Tailwind's dark mode class

### JavaScript
- ES6+ features
- React hooks for state management
- Async/await for asynchronous operations
- Use utility functions from `/lib/utils.js`

### General
- Follow minimalist design principles
- Prioritize accessibility features
- Maintain dark mode compatibility
- Use smooth transitions/animations sparingly

## Important Notes
- Refer to EDITING_GUIDE.md for detailed instructions on making changes
- Images should be placed in `/public/images/` directory
- The site is automatically deployed to GitHub Pages when changes are pushed to the main branch