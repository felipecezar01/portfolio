type AbilitiesListProps = {
  abilities: string | string[];
};

const AbilitiesList = ({ abilities }: AbilitiesListProps) => {
  // Se habilidades é uma string, divida-a em um array
  const abilitiesArray = typeof abilities === 'string' ? abilities.split(',') : abilities;

  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5 ">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {abilitiesArray.map(ability => (
          <li
            key={ability}
            className="rounded-lg bg-primary-500 bg-opacity-10 px-4 py-1 font-body text-xs font-light uppercase text-primary-400"
          >
            {ability}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AbilitiesList;
