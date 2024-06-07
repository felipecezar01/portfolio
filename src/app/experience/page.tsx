import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { ExperienceItem, PageHeading } from '@atoms';
import { SectionLayout } from '@layouts';

// Ajustando os dados estáticos para atender a definição de IExperience
const staticExperienceData = [
  {
    id: '1',
    attributes: {
      title: "Student Mentor",
      description: "Taught and supported students as a course mentor, facilitating their academic success.",
      company: "Unifametro",
      from: new Date("2024-01-20"),
      to: new Date("2024-12-20")
    }
  }
];


const ExperiencePage = () => {
  return (
    <SectionLayout className="p-5">
      <PageHeading title="Experience" icon={<BriefcaseIcon />} />
      <ul className="mt-6">
        {staticExperienceData.reverse().map(experience => (
          <ExperienceItem key={experience.id} data={experience} />
        ))}
      </ul>
    </SectionLayout>
  );
};

export default ExperiencePage;
