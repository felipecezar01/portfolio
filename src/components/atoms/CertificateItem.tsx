import React from 'react';  // Importando React para poder usar JSX

// Definindo as props que o componente irá aceitar
type CertificateItemProps = {
  title: string;
  imageUrl: string;  // Propriedade para a URL da imagem
};

// Componente CertificateItem ajustado para aceitar e exibir um título e uma imagem
const CertificateItem = ({ title, imageUrl }: CertificateItemProps) => {
  return (
    <li className="rounded-lg border border-dark-900 p-4">
      <figure className="aspect-video overflow-hidden rounded-lg">
        {/* Usando a imagem passada como prop */}
        <img src={imageUrl} alt={`Certificate - ${title}`} className="h-full w-full object-cover" />
        {/* Título do certificado */}
        <figcaption className="mt-2 text-center font-bold">{title}</figcaption>
      </figure>
    </li>
  );
};

export default CertificateItem;
