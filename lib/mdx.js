import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

// Directories where content is stored
const PROJECTS_DIRECTORY = path.join(process.cwd(), 'content/projects');
const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

/**
 * Get all project or blog files
 */
export function getFiles(type) {
  const directory = type === 'project' ? PROJECTS_DIRECTORY : BLOG_DIRECTORY;
  return fs.readdirSync(directory);
}

/**
 * Get all projects or blog posts with frontmatter
 */
export function getAllItems(type) {
  const files = getFiles(type);
  const items = files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const source = getFileBySlug(type, getSlugFromFilename(file), false);
      return source;
    })
    .sort((a, b) => {
      // Sort by date in descending order
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });

  return items;
}

/**
 * Extract slug from filename
 */
function getSlugFromFilename(fileName) {
  return fileName.replace(/\.mdx?$/, '');
}

/**
 * Get a single project or blog post by slug
 */
export function getFileBySlug(type, slug, withContent = true) {
  const directory = type === 'project' ? PROJECTS_DIRECTORY : BLOG_DIRECTORY;
  const filePath = path.join(directory, `${slug}.md`);
  const mdxFilePath = path.join(directory, `${slug}.mdx`);

  let fileContents;
  let filePath_;

  // Check if .md file exists
  if (fs.existsSync(filePath)) {
    fileContents = fs.readFileSync(filePath, 'utf8');
    filePath_ = filePath;
  } 
  // Check if .mdx file exists
  else if (fs.existsSync(mdxFilePath)) {
    fileContents = fs.readFileSync(mdxFilePath, 'utf8');
    filePath_ = mdxFilePath;
  } 
  // If neither exists, throw error
  else {
    throw new Error(`No file found for slug: ${slug}`);
  }
  
  // Parse frontmatter
  const { data, content } = matter(fileContents);

  // Create a slug if one isn't provided in frontmatter
  if (!data.slug) {
    data.slug = slug;
  }

  // Return with or without serialized content
  return {
    frontmatter: data,
    slug: data.slug,
    path: filePath_,
    ...(withContent && { content })
  };
}

/**
 * Serialize MDX content for rendering
 */
export async function serializeMdx(content) {
  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
      format: 'mdx',
    },
  });
}
