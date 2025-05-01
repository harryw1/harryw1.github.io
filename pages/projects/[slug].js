import { getFiles, getFileBySlug, serializeMdx } from '@/lib/mdx';
import Layout from '@/components/layout/Layout';
import SectionContainer from '@/components/common/SectionContainer';
import Button from '@/components/ui/Button';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectPage({ project }) {
  const { frontmatter, contentHtml } = project;
  
  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.description}
      ogImage={frontmatter.image}
    >
      <SectionContainer>
        {/* Project Header */}
        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {frontmatter.title}
          </h1>
          
          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Description */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {frontmatter.description}
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-10">
            {frontmatter.liveUrl && (
              <Button 
                href={frontmatter.liveUrl} 
                external 
                className="flex items-center"
              >
                <FiExternalLink className="mr-2" />
                View Project
              </Button>
            )}
            
            {frontmatter.repoUrl && (
              <Button 
                href={frontmatter.repoUrl} 
                variant="outline" 
                external 
                className="flex items-center"
              >
                <FiGithub className="mr-2" />
                Source Code
              </Button>
            )}
          </div>
          
          {/* Cover Image */}
          {frontmatter.image && (
            <div className="relative w-full h-96 mb-10 rounded-lg overflow-hidden">
              <img 
                src={frontmatter.image} 
                alt={frontmatter.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </div>
        
        {/* Project Content */}
        <div 
          className="max-w-3xl mx-auto prose dark:prose-dark"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </SectionContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getFiles('project');
  
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
  const { frontmatter, content } = getFileBySlug('project', slug);
  const { contentHtml } = await serializeMdx(content);
  
  return {
    props: {
      project: {
        frontmatter,
        contentHtml,
      },
    },
  };
}