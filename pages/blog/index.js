import { getAllItems } from '@/lib/mdx';
import Layout from '@/components/layout/Layout';
import SectionContainer from '@/components/common/SectionContainer';
import SectionTitle from '@/components/common/SectionTitle';
import PostsList from '@/components/common/PostsList';

export default function Blog({ posts }) {
  return (
    <Layout
      title="Blog"
      description="Read my latest insights on sustainability, environmental science, and corporate sustainability initiatives."
    >
      <SectionContainer>
        <SectionTitle centered subtitle="Read my thoughts and insights on sustainability and environmental topics.">
          My Blog
        </SectionTitle>
        
        <div className="max-w-3xl mx-auto">
          <PostsList posts={posts} />
        </div>
      </SectionContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllItems('blog');
  
  return {
    props: {
      posts,
    },
  };
}