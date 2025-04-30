import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/common/SectionTitle';
import { featuredProjects } from '@/lib/constants';
import { FiArrowRight } from 'react-icons/fi';

const FeaturedProjects = ({ projects }) => {
  // If no projects are provided, return null
  if (!projects || projects.length === 0) {
    return null;
  }

  // Filter for featured projects only
  const featured = featuredProjects
    ? projects.filter(project => featuredProjects.includes(project.slug))
    : projects.slice(0, 3);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle centered>
          Featured Projects
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((project) => (
            <Card
              key={project.slug}
              title={project.frontmatter.title}
              description={project.frontmatter.description}
              image={project.frontmatter.image || '/images/project-placeholder.jpg'}
              imageAlt={`${project.frontmatter.title} project thumbnail`}
              link={`/projects/${project.slug}`}
              tags={project.frontmatter.tags}
              className="fade-in-up"
            />
          ))}
        </div>

        <div className="text-center">
          <Button href="/projects" variant="outline" className="inline-flex items-center">
            View All Projects
            <FiArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
