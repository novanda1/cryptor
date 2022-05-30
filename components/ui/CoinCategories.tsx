import useCategories from '../../hooks/useCategories';

type Props = {};

const CoinCategories: React.FC<Props> = () => {
  const { categories } = useCategories();
  return (
    <div className="overflow-x-auto overflow-y-hidden -mx-4 my-10 pl-4 py-1">
      <div className="flex flex-wrap -m-2" style={{ width: '900vw' }}>
        {categories &&
          categories.map(cat => {
            return (
              <div key={cat.id} className="px-4 py-2 rounded-full border border-gray-200 mx-1 my-1.5">
                {cat.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CoinCategories;
