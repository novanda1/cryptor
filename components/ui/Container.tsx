type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-2xl px-4 mx-auto">{children}</div>;
};

export default Container;
