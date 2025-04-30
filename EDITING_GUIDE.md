# Portfolio Website Editing Guide

This document serves as a quick reference for making changes to your Next.js/Tailwind portfolio website.

## Table of Contents

1. [Basic Workflow](#basic-workflow)
2. [Content Editing](#content-editing)
   - [Personal Information](#personal-information)
   - [Blog Posts](#blog-posts)
   - [Projects](#projects)
3. [Page-Specific Editing](#page-specific-editing)
   - [Home Page](#home-page)
   - [About Page](#about-page)
   - [Projects Page](#projects-page)
   - [Blog Page](#blog-page)
4. [Adding Images](#adding-images)
5. [Styling with Tailwind](#styling-with-tailwind)
6. [Common Tasks](#common-tasks)

## Basic Workflow

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **View your site:**
   Open your browser to [http://localhost:3000](http://localhost:3000)

3. **Make edits** to files as described below

4. **See changes** in real-time in your browser

5. **Build for production when done:**
   ```bash
   npm run build
   ```

## Content Editing

### Personal Information

Most of your personal information is stored in `/lib/constants.js`. This includes:

- Site metadata (title, description)
- Navigation links
- Skills list
- Work experience history
- Education history
- Featured projects

Edit this file to update information that appears across multiple pages.

### Blog Posts

Blog posts are stored as Markdown files in `/content/blog/`.

**Format:**
```markdown
---
title: 'Blog Post Title'
date: '2023-05-20'
excerpt: 'Brief excerpt of the blog post content'
image: '/images/blog/image.jpg'
---

# Main Content Title

Your blog post content here, using Markdown formatting.

## Subheading

More content...
```

**To create a new blog post:**
1. Create a new .md file in `/content/blog/`
2. Name it with a URL-friendly name, e.g., `my-new-post.md`
3. Include the frontmatter section at the top (between `---` lines)
4. Write your content in Markdown format

### Projects

Projects are stored as Markdown files in `/content/projects/`.

**Format:**
```markdown
---
title: Project Title
date: '2023-01-15'
description: Short description of the project
image: /images/projects/image.jpg
tags: ['Tag1', 'Tag2', 'Tag3']
liveUrl: https://example.com
repoUrl: https://github.com/example/repo
---

# Project Title

## Project Overview

Project content here...
```

**To create a new project:**
1. Create a new .md file in `/content/projects/`
2. Name it with a URL-friendly name, e.g., `my-new-project.md`
3. Include the frontmatter section at the top
4. Write your project details in Markdown format

To feature a project on the homepage, add its filename (without the .md extension) to the `featuredProjects` array in `/lib/constants.js`.

## Page-Specific Editing

### Home Page

The home page is composed of three main components:

1. **Hero Section** (`/components/home/Hero.js`):
   - Edit this file to change your name, tagline, and brief introduction
   - Modify call-to-action buttons

2. **Featured Projects** (`/components/home/FeaturedProjects.js`):
   - Projects are pulled from the `featuredProjects` array in `/lib/constants.js`
   - The actual project data comes from files in `/content/projects/`

3. **Recent Posts** (`/components/home/RecentPosts.js`):
   - Automatically displays the 3 most recent blog posts
   - Posts are pulled from files in `/content/blog/`

### About Page

The about page has four main sections, each in its own component:

1. **Bio** (`/components/about/Bio.js`):
   - Your profile photo and detailed biography
   - Resume download button

2. **Skills** (`/components/about/Skills.js`):
   - Skills are pulled from `skillsCategories` in `/lib/constants.js`

3. **Experience** (`/components/about/Experience.js`):
   - Work experience is pulled from `workExperience` in `/lib/constants.js`

4. **Education** (`/components/about/Education.js`):
   - Education history is pulled from `education` in `/lib/constants.js`

### Projects Page

The projects page (`/pages/projects/index.js`) displays a grid of all your projects.

The individual project pages (`/pages/projects/[slug].js`) are generated dynamically from the Markdown files in `/content/projects/`.

### Blog Page

The blog page (`/pages/blog/index.js`) displays a list of all your blog posts.

The individual blog post pages (`/pages/blog/[slug].js`) are generated dynamically from the Markdown files in `/content/blog/`.

## Adding Images

1. **Place images in the correct directory:**
   - Project images: `/public/images/projects/`
   - Blog post images: `/public/images/blog/`
   - Profile photo: `/public/images/profile.jpg`

2. **Reference images in your content:**
   
   In Markdown:
   ```markdown
   ![Alt text](/images/blog/my-image.jpg)
   ```
   
   In components:
   ```jsx
   <Image 
     src="/images/profile.jpg" 
     alt="Description" 
     width={800} 
     height={600} 
   />
   ```

3. **Update image paths:**
   - In blog posts: Update the `image` field in the frontmatter
   - In projects: Update the `image` field in the frontmatter

## Styling with Tailwind

Tailwind CSS uses utility classes directly in the HTML/JSX instead of separate CSS files.

**Common Tailwind classes:**

- **Typography:**
  - Font size: `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.
  - Font weight: `font-normal`, `font-medium`, `font-bold`
  - Text color: `text-gray-800`, `text-primary-600`, `text-white`

- **Spacing (margin/padding):**
  - Margin: `m-4`, `mt-2` (top), `mb-4` (bottom), `mx-auto` (horizontal center)
  - Padding: `p-4`, `pt-2` (top), `pb-4` (bottom), `px-4` (horizontal)

- **Layout:**
  - Display: `flex`, `grid`, `hidden`
  - Flex properties: `flex-col`, `justify-center`, `items-center`
  - Width/Height: `w-full`, `h-screen`, `max-w-md`

- **Backgrounds & Borders:**
  - Background: `bg-white`, `bg-primary-600`, `bg-gray-100`
  - Border: `border`, `border-gray-200`, `rounded-md`

For more comprehensive Tailwind documentation, visit: [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Common Tasks

### Adding a New Social Link

Edit `/lib/constants.js` and add to the `socialLinks` array:

```js
export const socialLinks = [
  // Existing links...
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
];
```

### Updating Your Resume

1. Replace the file at `/public/resume.pdf` with your new resume
2. The download link in the Bio component will automatically use the new file

### Changing the Color Scheme

The color scheme is defined in `/tailwind.config.js` under the `colors` section:

```js
colors: {
  primary: {
    600: '#1a936f', // Main primary color
    // Other shades...
  },
  secondary: {
    DEFAULT: '#114b5f', // Secondary color
  },
  // Other colors...
}
```

Modify these color values to change your site's color scheme.

### Adding a New Page

1. Create a new file in the `/pages` directory, e.g., `/pages/contact.js`
2. Use the Layout component and other components as needed
3. Add the page to the navigation links in `/lib/constants.js`

### Updating Navigation Links

Edit the `navigationLinks` array in `/lib/constants.js`:

```js
export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  // Add new links here
];
```