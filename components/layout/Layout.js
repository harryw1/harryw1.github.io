import { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { initializeDarkMode } from '@/lib/utils';
import { siteMetadata } from '@/lib/constants';

const Layout = ({ children, title, description, ogImage, ogType = 'website' }) => {
  // Initialize dark mode on component mount
  useEffect(() => {
    initializeDarkMode();
  }, []);

  // Prepare metadata
  const pageTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title;
  const pageDescription = description || siteMetadata.description;
  const ogImageUrl = ogImage || siteMetadata.socialBanner;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:image" content={ogImageUrl} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        
        {/* Other Meta Tags */}
        <meta name="theme-color" content="#1a936f" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2dc58d" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>

      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
