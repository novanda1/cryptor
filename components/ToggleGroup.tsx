import { MouseEventHandler, useState } from 'react';

type ButtonToggleProps = {
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const ButtonToggle: React.FC<ButtonToggleProps> = ({ active, onClick, children }) => {
  const mainClasses = 'px-4 text-xs font-medium py-2 rounded-lg';
  const inactivaClasses = mainClasses + 'text-white';
  const activeClasses = mainClasses + ' bg-white text-black';

  if (active)
    return (
      <button onClick={onClick} className={activeClasses}>
        {children}
      </button>
    );

  return (
    <button onClick={onClick} className={inactivaClasses}>
      {children}
    </button>
  );
};

const useToggleGroup = ({ types }: { types: number[] }) => {
  const [active, setActive] = useState<number>(types[0]);
  return {
    ToggleGroup: () => (
      <div className="flex justify-center w-full px-2 mt-8">
        {types.map(t => (
          <ButtonToggle
            key={t}
            active={active === t}
            onClick={() => {
              setActive(t);
            }}
          >
            {t} D
          </ButtonToggle>
        ))}
      </div>
    ),
    active,
  };
};

export default useToggleGroup;
