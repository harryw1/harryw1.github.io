import Link from 'next/link';
import Button from '@/components/ui/Button';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Harrison Weiss
          </h1>

          {/* Subtitle / role */}
          <p className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-6">
            Sustainability Professional
          </p>

          {/* Brief introduction */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Dedicated and accomplished Sustainability Expert with more than 5 years of experience in driving corporate sustainability initiatives, aligning strategies with modern standards, and spearheading the development of impactful sustainability plans.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/projects" className="flex items-center">
              View Projects
              <FiArrowRight className="ml-2" />
            </Button>
            <Button href="/about" variant="outline">
              About Me
            </Button>
            <Button href="/blog" variant="secondary">
              Read Blog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
