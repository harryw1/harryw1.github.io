import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { navigationLinks } from '@/lib/constants';
import { isDarkMode, toggleDarkMode } from '@/lib/utils';

const Header = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set initial dark mode state on mount
  useEffect(() => {
    setDarkMode(isDarkMode());

    // Handle scrolling for header appearance
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    toggleDarkMode(newDarkMode);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white dark:bg-gray-900 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-gray-900 dark:text-white transition-colors duration-300">
          Harrison Weiss
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${router.pathname === link.path ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Resume Download Link */}
          <a
            href="/resume.pdf"
            className="btn-outline text-sm py-2 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={handleDarkModeToggle}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={handleDarkModeToggle}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-2 text-base font-medium transition-colors duration-300 ${router.pathname === link.path ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href="/resume.pdf"
              className="btn-outline text-center py-2 px-4 mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
