import { NewspaperIcon } from '@heroicons/react/24/solid';
import { PageHeading, PostItem } from '@atoms';
import { SectionLayout } from '@layouts';

// Dados estáticos de exemplo, mantendo apenas o primeiro artigo
const staticArticles = [
  {
    id: 1,
    attributes: {
      title: 'Understanding All Types of Page Rendering in Next.js',
      description:
        'Next.js is a powerful framework for React that facilitates the creation of modern web applications. One of its strengths is the flexibility in page rendering. In this article, we...',
      stack: ['Next.js', 'React', 'Rendering', 'SSR', 'SSG', 'CSR'], // Adiciona uma stack relevante ao artigo
      picture: '/images/tips.png',
      url: 'https://dev.to/felipecezar01/understanding-all-types-of-page-rendering-in-nextjs-1fbi'
    }
  }
];

const ArticlesPage = () => {
  return (
    <SectionLayout className="p-5">
      <PageHeading title="Artigos" icon={<NewspaperIcon />} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {staticArticles.map(({ id, attributes }) => (
          <PostItem
            key={id}
            title={attributes.title}
            description={attributes.description}
            stack={attributes.stack} // Passa a stack para o PostItem
            picture={attributes.picture}
            url={attributes.url}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ArticlesPage;
