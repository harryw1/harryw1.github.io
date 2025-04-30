import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug, serializeMdx } from '@/lib/mdx';
import Layout from '@/components/layout/Layout';
import SectionContainer from '@/components/common/SectionContainer';
import MDXComponents from '@/components/common/MDXComponents';
import { formatDate, getReadingTime } from '@/lib/utils';

export default function BlogPost({ post }) {
  const { frontmatter, mdxContent, readingTime } = post;
  
  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.excerpt}
      ogImage={frontmatter.image}
      ogType="article"
    >
      <SectionContainer>
        <article className="max-w-3xl mx-auto">
          {/* Post Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {frontmatter.title}
            </h1>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
              <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
              <span className="mx-2">·</span>
              <span>{readingTime} min read</span>
            </div>
            
            {frontmatter.image && (
              <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                <img 
                  src={frontmatter.image} 
                  alt={frontmatter.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </div>
          
          {/* Post Content */}
          <div className="prose dark:prose-dark max-w-none">
            <MDXRemote {...mdxContent} components={MDXComponents} />
          </div>
        </article>
      </SectionContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getFiles('blog');
  
  return {
    paths: posts.map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx?$/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { frontmatter, content } = getFileBySlug('blog', slug);
  const mdxContent = await serializeMdx(content);
  
  // Calculate reading time
  const readingTime = getReadingTime(content);
  
  return {
    props: {
      post: {
        frontmatter,
        mdxContent,
        readingTime,
      },
    },
  };
}