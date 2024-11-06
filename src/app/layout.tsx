import '@styles/globals.css';
import { AbilitiesList } from '@atoms';
import { Biography } from '@molecules';
import { Navbar } from '@molecules';
import { DefaultLayout } from '@layouts';
import { SocialMediaList } from '@atoms';

type EntryLayoutProps = {
  children: React.ReactNode;
};

const staticProfileData = {
  id: 1,
  attributes: {
    name: 'Felipe Cezar',
    role: 'Desenvolvedor de Software',
    location: '🇧🇷',
    biography:
      'Estudante de Bacharelado em Sistemas de Informação com foco em desenvolvimento backend em Python e JavaScript.',
    abilities:
      'JavaScript, Python, AWS, Docker, Flask, Django, Node.js, MongoDB, MySQL, React, TypeScript, PostgreSQL',
    social: {
      linkedin: 'https://www.linkedin.com/in/felipecezarcruz/',
      github: 'https://github.com/felipecezar01',
      xcom: 'https://x.com/techlife_fc'
    },
    picture: {
      data: {
        id: 1,
        attributes: {
          name: 'Profile Picture',
          url: '/images/fotomeadjust.jpg'
        }
      }
    }
  }
};

const EntryLayout = ({ children }: EntryLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Felipe Cezar | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/ball.png" type="image/png" />
      </head>
      <body>
        <DefaultLayout>
          <div className="h-52 bg-primary-500" />
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-12">
            <div className="-mt-12 flex flex-col gap-4 lg:col-span-3">
              {/* Remove a imagem direta para evitar duplicação */}
              <Biography data={staticProfileData} />
              <SocialMediaList data={staticProfileData.attributes.social} />
              <AbilitiesList abilities={staticProfileData.attributes.abilities.split(', ')} />
            </div>
            <main className="flex flex-col gap-4 pb-12 lg:col-span-9 lg:-mt-12">
              <Navbar />
              {children}
            </main>
          </div>
          {/* <footer className="py-2 text-center font-display text-sm font-light text-white">
            Designed & built by{' '}
            <span className="underline decoration-primary-500">Felipe Cezar</span>.
          </footer> */}
        </DefaultLayout>
      </body>
    </html>
  );
};

export default EntryLayout;
