import { getAllItems } from '@/lib/mdx';
import Layout from '@/components/layout/Layout';
import SectionContainer from '@/components/common/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectsList from '@/components/common/ProjectsList';

export default function Projects({ projects }) {
  return (
    <Layout
      title="Projects"
      description="Explore my sustainability and environmental projects focusing on corporate initiatives, clean energy, and greenhouse gas emissions reporting."
    >
      <SectionContainer>
        <SectionTitle centered subtitle="Explore my work in sustainability and environmental initiatives.">
          My Projects
        </SectionTitle>
        
        <ProjectsList projects={projects} />
      </SectionContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getAllItems('project');
  
  return {
    props: {
      projects,
    },
  };
}