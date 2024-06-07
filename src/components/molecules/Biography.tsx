import React from 'react';
import Image from 'next/image';
import { IProfile } from '@interfaces/profile'; // Garanta que o caminho para a interface está correto
import { getImagePath } from '@utils/image.util'; // Confirme se essa função existe e está correta

type BiographyProps = {
  data: IProfile;
};

const Biography = ({ data }: BiographyProps) => {
  const { attributes } = data;
  const { name, role, location, biography, picture } = attributes;
  const imageUrl = getImagePath(picture);

  return (
    <section className="flex flex-col items-center justify-center rounded-lg border border-dark-900 bg-darken-900 p-5">
      <figure className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-primary-500">
        <Image src={imageUrl} alt={name} className="object-cover" layout="fill" />
      </figure>
      <h1 className="mt-5 text-center font-display text-2xl font-bold text-white">{name}</h1>
      <div className="mt-4 font-body text-sm font-light text-gray-900">
        <span className="font-description">{role} • </span>
        <span className="font-description">{location}</span>
      </div>
      <p className="mt-4 text-center font-description">{biography}</p>
    </section>
  );
};

export default Biography;
