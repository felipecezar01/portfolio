import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { CertificateItem, PageHeading } from '@atoms';
import { SectionLayout } from '@layouts';

const staticEducationData = [
  {
    id: '1',
    attributes: {
      degree: 'Bacharelado em Sistemas de Informação',
      school: 'Unifametro - Em paralelo com o Tecnólogo',
      from: new Date('2021-01-20'),
      to: new Date('2025-12-20'),
      certificates: [
        { id: '1', title: 'Certificado em Sistemas de Informação', imageUrl: '/images/inprogress.png' }
      ]
    }
  },
  {
    id: '2',
    attributes: {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      school: 'Unifametro - Em paralelo com o Bacharel',
      from: new Date('2021-01-20'),
      to: new Date('2024-12-20'),
      certificates: [
        {
          id: '2',
          title: 'Certificado em Análise e Desenvolvimento de Sistemas',
          imageUrl: '/images/inprogress.png'
        }       
      ]
    }
  }
];

const EducationPage = () => {
  return (
    <SectionLayout className="p-5">
      <PageHeading title="Educação" icon={<AcademicCapIcon />} />

      <ul className="mt-6 space-y-4">
        {staticEducationData.map(
          ({ id, attributes: { degree, school, from, to, certificates } }) => (
            <li key={id} className="relative border-l-4 border-primary-500 pl-6">
              <span className="absolute -left-[10px] top-0 h-4 w-4 rounded-full bg-primary-500" />
              <div>
                <p className="font-display text-xs font-bold uppercase text-darken-700">
                  {from.toLocaleDateString('pt-BR', { year: 'numeric' })} -{' '}
                  {to ? to.toLocaleDateString('pt-BR', { year: 'numeric' }) : 'Atualmente'}
                </p>
                <h2 className="font-display text-2xl font-bold text-white">{degree}</h2>
                <p className="font-body text-base font-light text-greyish-800">{school}</p>
                <ul className="mt-4 space-y-2">
                  {certificates.map(cert => (
                    <CertificateItem key={cert.id} title={cert.title} imageUrl={cert.imageUrl} />
                  ))}
                </ul>
              </div>
            </li>
          )
        )}
      </ul>
    </SectionLayout>
  );
};

export default EducationPage;
