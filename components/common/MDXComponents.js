import Image from 'next/image';
import Link from 'next/link';

// Custom MDX components
const MDXComponents = {
  // Override default elements
  h1: (props) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-800" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
  ),
  p: (props) => (
    <p className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
  ),
  a: (props) => (
    <a
      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="my-4 ml-6 list-disc text-gray-700 dark:text-gray-300" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 ml-6 list-decimal text-gray-700 dark:text-gray-300" {...props} />
  ),
  li: (props) => (
    <li className="mt-2" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-primary-500 pl-4 italic my-6 text-gray-700 dark:text-gray-300" {...props} />
  ),
  hr: () => (
    <hr className="my-8 border-t border-gray-200 dark:border-gray-800" />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800" {...props} />
  ),
  td: (props) => (
    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800" {...props} />
  ),
  code: (props) => {
    // Inline code
    if (typeof props.children === 'string') {
      return (
        <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-mono">
          {props.children}
        </code>
      );
    }
    // Code blocks handled by rehype-highlight
    return <code {...props} />;
  },
  pre: (props) => (
    <pre className="rounded-lg p-4 overflow-x-auto bg-gray-900 dark:bg-black my-6" {...props} />
  ),
  img: (props) => {
    // Remove redundant props that cause console warnings
    const { src, alt, width, height, ...rest } = props;
    return (
      <div className="my-6 mx-auto max-w-full">
        <Image
          src={src}
          alt={alt || ""}
          width={width || 800}
          height={height || 600}
          className="rounded-lg mx-auto"
          {...rest}
        />
      </div>
    );
  },
  // Custom components
  CustomLink: ({ href, children, ...props }) => {
    if (href.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }

    if (href.startsWith('#')) {
      return <a href={href} {...props}>{children}</a>;
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};

export default MDXComponents;
