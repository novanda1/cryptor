type Props = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<Props> = ({ children }) => {
  return <h3 className="mt-7 text-md font-bold mb-3">{children}</h3>;
};

export default SectionTitle;
