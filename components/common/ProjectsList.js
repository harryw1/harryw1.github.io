import Link from 'next/link';
import Card from '@/components/ui/Card';

const ProjectsList = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card
          key={project.slug}
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          image={project.frontmatter.image}
          imageAlt={`${project.frontmatter.title} project thumbnail`}
          link={`/projects/${project.slug}`}
          tags={project.frontmatter.tags}
          className="fade-in-up"
        />
      ))}
    </div>
  );
};

export default ProjectsList;
