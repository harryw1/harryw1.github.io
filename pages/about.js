import Layout from '@/components/layout/Layout';
import SectionContainer from '@/components/common/SectionContainer';
import Bio from '@/components/about/Bio';
import Skills from '@/components/about/Skills';
import Experience from '@/components/about/Experience';
import Education from '@/components/about/Education';

export default function About() {
  return (
    <Layout
      title="About Me"
      description="Learn more about Harrison Weiss, a Sustainability Professional with expertise in corporate sustainability initiatives and environmental science."
    >
      <SectionContainer>
        <Bio />
        <Skills />
        <Experience />
        <Education />
      </SectionContainer>
    </Layout>
  );
}