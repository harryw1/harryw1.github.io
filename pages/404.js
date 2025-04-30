import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="flex items-center justify-center min-h-[70vh] text-center px-4">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button href="/" className="inline-flex items-center">
            <FiArrowLeft className="mr-2" />
            Go Back Home
          </Button>
        </div>
      </div>
    </Layout>
  );
}