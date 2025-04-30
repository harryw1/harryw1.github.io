import SectionTitle from '@/components/common/SectionTitle';
import { education } from '@/lib/constants';
import { FiBook } from 'react-icons/fi';

const Education = () => {
  return (
    <div className="mt-16">
      <SectionTitle>Education</SectionTitle>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="timeline-item fade-in-up"
          >
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>
              <div className="text-primary-600 dark:text-primary-400 font-medium">
                {edu.institution}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {edu.period}
              </div>
            </div>
            
            {edu.details && edu.details.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
