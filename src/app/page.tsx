import { FolderOpenIcon } from '@heroicons/react/24/solid';
import { PageHeading, PostItem } from '@atoms';
import { SectionLayout } from '@layouts';
import { getImagePath } from '@utils/image.util';

// Dados estáticos do projeto
const staticProjectData = [
  {
    id: '1',
    attributes: {
      name: "Zombie Game",
      description: "A thrilling zombie survival game built with Unity. Click to play!",
      picture: {
        data: {
          id: 1,
          attributes: {
            name: 'Zombie Game',
            url: '/images/gameimage.jpg'
          }
        }
      },
      url: "https://simmer.io/@felipecezar/apocalipse-zumbi"
    }
  }
];

const ProjectsPage = () => {
  return (
    <SectionLayout className="p-5">
      <PageHeading title="Projects" icon={<FolderOpenIcon />} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {staticProjectData.map(({ id, attributes }) => (
          <PostItem
            key={id}
            title={attributes.name}
            description={attributes.description}
            picture={getImagePath(attributes.picture)}
            url={attributes.url}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProjectsPage;
