import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FiDownload } from 'react-icons/fi';

const Bio = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* Image column */}
      <div className="lg:col-span-4 mx-auto lg:mx-0">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
          <Image 
            src="/images/profile.jpeg" 
            alt="Harrison Weiss" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content column */}
      <div className="lg:col-span-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h1>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            Dedicated and accomplished Sustainability Expert with more than 5 years of experience in driving corporate sustainability initiatives, aligning strategies with modern standards, and spearheading the development of impactful sustainability plans.
          </p>
          
          <p>
            Proven expertise in drafting sustainability and greenhouse gas emissions reports, capturing substantial clean energy funds, and integrating sustainable practices into projects. My passion lies in creating environmentally responsible solutions that deliver both ecological and economic benefits.
          </p>
          
          <p>
            With a Master's degree in Sustainability Science from Montclair State University and a background in Environmental Science, I bring both academic knowledge and practical experience to sustainability challenges across various sectors.
          </p>
          
          <p>
            I'm particularly interested in helping organizations transition to more sustainable operations through strategic planning, stakeholder engagement, and innovative environmental practices.
          </p>
        </div>

        <div className="mt-6">
          <Button 
            href="/resume.pdf" 
            variant="primary"
            external
            className="inline-flex items-center"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bio;
