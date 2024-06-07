import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { CertificateItem, PageHeading } from '@atoms';
import { SectionLayout } from '@layouts';

const staticEducationData = [
  {
    id: '1',
    attributes: {
      degree: "Technology Degree in Systems Analysis and Development",
      school: "Unifametro",
      from: new Date("2021-01-20"),
      to: new Date("2024-12-20"),
      certificates: [
        { id: '1', title: "Certificate in Systems Analysis and Development", imageUrl: "/images/inprogress.png" }
      ]
    }
  },
  {
    id: '2',
    attributes: {
      degree: "Bachelor of Science in Information Systems",
      school: "Unifametro",
      from: new Date("2024-01-20"),
      to: new Date("2025-12-20"),
      certificates: [
        { id: '2', title: "Certificate in Information Systems", imageUrl: "/images/inprogress.png" }
      ]
    }
  }
];

const EducationPage = () => {
  return (
    <SectionLayout className="p-5">
      <PageHeading title="Education" icon={<AcademicCapIcon />} />
      
      <ul className="mt-6 space-y-4">
        {staticEducationData.map(({ id, attributes: { degree, school, from, to, certificates } }) => (
          <li key={id} className="relative border-l-4 border-primary-500 pl-6">
            <span className="absolute -left-[10px] top-0 h-4 w-4 rounded-full bg-primary-500" />
            <div>
              <p className="font-display text-xs font-bold uppercase text-darken-700">
                {from.toLocaleDateString('en-US', { year: 'numeric' })} - {to ? to.toLocaleDateString('en-US', { year: 'numeric' }) : 'Present'}
              </p>
              <h2 className="font-display text-2xl font-bold text-white">{degree}</h2>
              <p className="font-body text-base font-light text-greyish-800">
                {school}
              </p>
              <ul className="mt-4 space-y-2">
                {certificates.map(cert => (
                  <CertificateItem key={cert.id} title={cert.title} imageUrl={cert.imageUrl} />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default EducationPage;
