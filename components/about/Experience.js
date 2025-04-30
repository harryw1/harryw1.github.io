import SectionTitle from '@/components/common/SectionTitle';
import { workExperience } from '@/lib/constants';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  return (
    <div className="mt-16">
      <SectionTitle>Work Experience</SectionTitle>
      
      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <div 
            key={index} 
            className="timeline-item fade-in-up"
          >
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {job.title}
              </h3>
              <div className="text-primary-600 dark:text-primary-400 font-medium">
                {job.company}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {job.period} | {job.location}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
