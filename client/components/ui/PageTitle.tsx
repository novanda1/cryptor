type Props = {
  children: React.ReactNode;
};

const PageTitle: React.FC<Props> = ({ children }) => {
  return <h3 className="mt-4 text-xl font-bold mb-3">{children}</h3>;
};

export default PageTitle;
