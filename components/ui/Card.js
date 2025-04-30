import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Card = ({
  title,
  description,
  image,
  imageAlt = '',
  link,
  tags = [],
  className = '',
  ...props
}) => {
  return (
    <div
      className={cn(
        'card group transition duration-300 h-full flex flex-col',
        className
      )}
      {...props}
    >
      {/* Card content wrapper */}
      <div className="flex flex-col h-full">
        {/* Image container */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {link ? (
              <Link href={link} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-auto pt-4">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
