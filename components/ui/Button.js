import Link from 'next/link';
import { cn } from '@/lib/utils';

const Button = ({
  children,
  className = '',
  href,
  variant = 'primary',
  size = 'default',
  external = false,
  ...props
}) => {
  // Define size and variant classes
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    default: 'py-3 px-6',
    lg: 'py-4 px-8 text-lg',
  };

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  // Combine classes
  const buttonClasses = cn(
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  // Determine if we need a button or a link
  if (href) {
    const linkProps = external
      ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {};

    // Check if it's an external link or Next.js route
    if (external || href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={buttonClasses} {...linkProps} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
