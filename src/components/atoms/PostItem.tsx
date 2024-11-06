import Link from 'next/link';
import Image from 'next/image';
import { StackList } from '@atoms'; // Importa o StackList

type PostItemProps = {
  title: string;
  description: string;
  stack: string[];
  picture: string;
  url: string;
};

const PostItem = ({ title, description, stack, picture, url }: PostItemProps) => {
  return (
    <Link href={url} target={url.startsWith('/') ? '_self' : '_blank'}>
      <article className="group cursor-pointer rounded-lg border border-dark-900 p-4 transition-colors duration-200 ease-in hover:bg-dark-900">
        <figure className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={picture} alt={title} className="object-cover" fill priority />
        </figure>
        <h3 className="mt-4 font-display text-xl font-bold text-white hover:underline hover:decoration-primary-500">
          {title}
        </h3>
        <p className="mt-2 font-body text-base font-light leading-relaxed text-greyish-800 line-clamp-4">
          {description}
        </p>
        <div className="mt-4"> {/* Adiciona margem superior para espaçar */}
          <StackList stacks={stack} /> {/* Usa o StackList para exibir as stacks */}
        </div>
      </article>
    </Link>
  );
};

export default PostItem;
