import React from 'react';
import { yearFormattedDate } from '@utils/day.util';

type EducationItemProps = {
  degree: string;
  school: string;
  from: Date;
  to?: Date;
};

const EducationItem = ({ degree, school, from, to }: EducationItemProps) => {
  return (
    <li className="flex space-x-4 rounded-lg border border-dark-900 p-4">
      <figure className="aspect-square h-full rounded bg-secondary-500" />
      <div>
        <h2 className="font-title"> {/* Aplicando a classe `font-title` */}
          {degree}
        </h2>
        <p className="font-body text-base font-light leading-relaxed text-greyish-800">
          {school} • {yearFormattedDate(from)} - {to ? yearFormattedDate(to) : 'Present'}
        </p>
      </div>
    </li>
  );
};

export default EducationItem;
