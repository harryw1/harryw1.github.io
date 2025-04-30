import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { formatDate } from '@/lib/utils';
import { FiArrowRight } from 'react-icons/fi';

const RecentPosts = ({ posts }) => {
  // If no posts are provided, return null
  if (!posts || posts.length === 0) {
    return null;
  }

  // Get the 3 most recent posts
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle centered>
          Recent Blog Posts
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {recentPosts.map((post) => (
            <div key={post.slug} className="card overflow-hidden fade-in-up">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <time dateTime={post.frontmatter.date}>
                    {formatDate(post.frontmatter.date)}
                  </time>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.frontmatter.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
                >
                  Read more <FiArrowRight className="ml-1" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/blog" variant="outline" className="inline-flex items-center">
            View All Posts
            <FiArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
