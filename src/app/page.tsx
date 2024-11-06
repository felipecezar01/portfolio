import { FolderOpenIcon } from '@heroicons/react/24/solid';
import { PageHeading, PostItem } from '@atoms';
import { SectionLayout } from '@layouts';
import { getImagePath } from '@utils/image.util';

// Dados estáticos do projeto
const staticProjectData = [
  {
    id: '1',
    attributes: {
      name: 'Calculadora na AWS',
      description: 'Uma calculadora bem simples em Python, que soma 2 números. O foco aqui foi fazer o deploy na AWS.',
      stack: ['Python', 'AWS EC2', 'Configuração de Servidor'],
      picture: {
        data: {
          id: 1,
          attributes: {
            name: 'Calculator',
            url: '/images/calculadoraPython.png'
          }
        }
      },
      url: 'https://github.com/felipecezar01/Cloud-Calculator-Python'
    }
  },
  {
    id: '2',
    attributes: {
      name: 'API de Loja de Carros',
      description: 'API RESTful desenvolvida em Java com Spring Framework. Projeto acadêmico seguindo arquitetura em camadas e padrão MVC.',
      stack: ['Java', 'Spring', 'JWT', 'Swagger', 'MVC', 'Gitflow'],
      picture: {
        data: {
          id: 2,
          attributes: {
            name: 'Banner API de Loja de Carros',
            url: '/images/bannerAv2.png'
          }
        }
      },
      url: 'https://github.com/felipecezar01/av2dac'
    }
  },
  {
    id: '3',
    attributes: {
      name: 'Jogo de Zombie',
      description: 'Jogo de sobrevivência em um apocalipse zombie feito com Unity e C#, hospedado no SIMMER.io.',
      stack: ['Unity', 'C#', 'SIMMER.io', 'VSCode'],
      picture: {
        data: {
          id: 3,
          attributes: {
            name: 'Zombie Game',
            url: '/images/gameimage.jpg'
          }
        }
      },
      url: 'https://simmer.io/@felipecezar/apocalipse-zumbi'
    }
  },
  {
    id: '4',
    attributes: {
      name: 'Sistema de Login com Google',
      description: 'Um sistema usando HTTPS para logar com o Google e uma demonstração de vulnerabilidades e como se proteger.',
      stack: ['SQLI', 'XSS', 'OAuth', 'OpenID', 'HTTPS'],
      picture: {
        data: {
          id: 4,
          attributes: {
            name: 'Sistema de Login',
            url: '/images/loginGoogle.png'
          }
        }
      },
      url: 'https://github.com/felipecezar01/security-showcase'
    }
  },
  {
    id: '5',
    attributes: {
      name: 'API com Monitoramento de Servidor',
      description: 'Uma API com CRUD simples em Javascript para treinar o monitoramento com Grafana e Prometheus.',
      stack: ['Grafana', 'Prometheus', 'JavaScript', 'API'],
      picture: {
        data: {
          id: 5,
          attributes: {
            name: 'Monitoramento com Grafana',
            url: '/images/prometheus.png'
          }
        }
      },
      url: 'https://github.com/felipecezar01/task-manager-monitor'
    }
  },
  {
    id: '6',
    attributes: {
      name: 'Contador de Visitas',
      description: 'O projeto é simples, mas o foco foi usar Docker, Docker Compose e CI/CD com Github Actions e Vercel.',
      stack: ['CI/CD', 'Docker', 'Github Actions', 'Docker Compose'],
      picture: {
        data: {
          id: 6,
          attributes: {
            name: 'Contador de Visitas',
            url: '/images/contador.png'
          }
        }
      },
      url: 'https://github.com/felipecezar01/visit-counter'
    }
  }
];

const ProjectsPage = () => {
  return (
    <SectionLayout className="p-5">
      <PageHeading title="Projetos" icon={<FolderOpenIcon />} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {staticProjectData.map(({ id, attributes }) => (
          <PostItem
            key={id}
            title={attributes.name}
            description={attributes.description}
            stack={attributes.stack}
            picture={getImagePath(attributes.picture)}
            url={attributes.url}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProjectsPage;
