import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socialLinks } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social icon mapping
  const iconMap = {
    github: <FiGithub className="w-5 h-5" />,
    linkedin: <FiLinkedin className="w-5 h-5" />,
    email: <FiMail className="w-5 h-5" />,
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-300">
              Harrison Weiss
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sustainability Professional
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
            <a
              href="mailto:harrison.weiss@icloud.com"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Harrison Weiss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
