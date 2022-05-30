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

const useToggleGroup = ({ types }: { types: string[] }) => {
  const [active, setActive] = useState<string>(types[0]);
  return {
    ToggleGroup: () => (
      <div className="flex justify-between w-full px-2">
        {types.map(t => (
          <ButtonToggle
            key={t}
            active={active === t}
            onClick={() => {
              setActive(t);
            }}
          >
            {t}
          </ButtonToggle>
        ))}
      </div>
    ),
    active,
  };
};

export default useToggleGroup;
