import { format as formatDateFn } from 'date-fns';

/**
 * Format date to readable format
 */
export function formatDate(date) {
  return formatDateFn(new Date(date), 'MMMM d, yyyy');
}

/**
 * Truncate text to a certain length with ellipsis
 */
export function truncateText(text, length = 150) {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Combine class names conditionally
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Create slug from text
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word characters
    .replace(/\-\-+/g, '-')      // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
}

/**
 * Get estimated reading time
 */
export function getReadingTime(text) {
  if (!text) return 0;
  const wordsPerMinute = 225;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

/**
 * Detect if client is in dark mode
 */
export function isDarkMode() {
  if (typeof window === 'undefined') return false;
  
  // Check localStorage
  const savedMode = localStorage.getItem('theme');
  if (savedMode) {
    return savedMode === 'dark';
  }
  
  // Check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Toggle dark mode
 */
export function toggleDarkMode(isDark) {
  if (typeof window === 'undefined') return;
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

/**
 * Initialize dark mode based on saved preference
 */
export function initializeDarkMode() {
  if (typeof window === 'undefined') return;

  // Check localStorage first
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }
}
