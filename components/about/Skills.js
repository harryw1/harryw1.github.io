import SectionTitle from '@/components/common/SectionTitle';
import { skillsCategories } from '@/lib/constants';

const Skills = () => {
  return (
    <div className="mt-16">
      <SectionTitle>My Skills</SectionTitle>
      
      <div className="space-y-10">
        {skillsCategories.map((category) => (
          <div key={category.name} className="fade-in-up">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {category.name}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, index) => (
                <span 
                  key={index} 
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
