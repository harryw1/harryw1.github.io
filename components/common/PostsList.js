import Link from 'next/link';
import { formatDate } from '@/lib/utils';

const PostsList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article 
          key={post.slug} 
          className="fade-in-up border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0"
        >
          <Link 
            href={`/blog/${post.slug}`} 
            className="block group"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {post.frontmatter.title}
            </h3>
            <div className="mb-3 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={post.frontmatter.date}>
                {formatDate(post.frontmatter.date)}
              </time>
              {post.frontmatter.readingTime && (
                <span> · {post.frontmatter.readingTime} min read</span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {post.frontmatter.excerpt}
            </p>
            <div className="mt-4">
              <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                Read more
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default PostsList;
