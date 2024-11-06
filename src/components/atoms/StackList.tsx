type StackListProps = {
    stacks: string | string[];
  };
  
  const StackList = ({ stacks }: StackListProps) => {
    // Se stacks é uma string, divida-a em um array
    const stacksArray = typeof stacks === 'string' ? stacks.split(',') : stacks;
  
    return (
      <ul className="flex flex-wrap items-center gap-2">
        {stacksArray.map(stack => (
          <li
            key={stack}
            className="rounded-lg bg-primary-500 bg-opacity-10 px-4 py-1 font-body text-xs font-light uppercase text-primary-400"
          >
            {stack}
          </li>
        ))}
      </ul>
    );
  };
  
  export default StackList;
  