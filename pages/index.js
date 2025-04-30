import { getAllItems } from '@/lib/mdx';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import RecentPosts from '@/components/home/RecentPosts';

export default function Home({ projects, posts }) {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects projects={projects} />
      <RecentPosts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  // Get projects and posts for the homepage
  const projects = getAllItems('project');
  const posts = getAllItems('blog');

  return {
    props: {
      projects,
      posts,
    },
  };
}