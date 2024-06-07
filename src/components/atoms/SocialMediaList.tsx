import { GitHub as GitHubIcon, Linkedin as LinkedinIcon } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';

// Definição de tipos para as propriedades do componente
type SocialMediaListProps = {
  data: Record<string, string>;
};

// Estilos padrões aplicados aos ícones
const ICON_CLASSNAMES =
  'h-5 w-5 text-white group-hover:text-primary-400 transition duration-300 ease-in';

// Mapeamento de ícones para identificadores conhecidos
const SOCIAL_ICONS = {
  github: <GitHubIcon className={ICON_CLASSNAMES} />,
  linkedin: <LinkedinIcon className={ICON_CLASSNAMES} />,
  xcom: <Image src="/images/x-icon.png" alt="X Icon" width={20} height={20} />
};

// Componente SocialMediaList
const SocialMediaList = ({ data }: SocialMediaListProps) => {
  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
      <div className="flex items-center justify-center space-x-4">
        {Object.entries(data).map(([key, value]) => (
          <Link
            key={key}
            href={value}
            target="_blank"
            className="group flex items-center justify-center rounded-full border border-dark-900 p-3 transition duration-200 ease-in hover:bg-purple-500 hover:bg-opacity-10"
          >
            {SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS]}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaList;
