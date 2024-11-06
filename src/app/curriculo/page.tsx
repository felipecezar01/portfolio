import { SectionLayout } from '@layouts';

const ContactPage = () => {
  return (
    <SectionLayout className="p-5 lg:px-5 lg:py-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl font-bold text-white">Baixe meu currículo em PDF</h2>
        <p className="mt-2 w-full text-center font-body font-light text-greyish-800 lg:w-7/12">
        Este currículo apresenta uma visão completa das minhas competências principais, experiências relevantes e informações de contato. Ao fazer o download, você terá acesso aos detalhes da minha trajetória acadêmica e profissional, bem como às minhas habilidades em desenvolvimento backend e projetos com Python e JavaScript. Fico à disposição para conversar sobre oportunidades e responder quaisquer dúvidas. Obrigado por considerar o meu perfil!
        </p>

        <div className="mt-6">
          <a href="/pdfs/curriculo.pdf" download="FelipeCezarCV">
            <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
              Baixe aqui meu currículo
            </button>
          </a>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactPage;
