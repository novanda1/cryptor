import useMarket from '../../hooks/useMarket';
import CoinList from './CoinList';

const Stocks: React.FC<any> = () => {
  const { isError, isLoading, data: market } = useMarket();

  return (
    <>
      <h3 className="mt-7 text-lg font-medium mb-3">Stocks</h3>
      <CoinList coins={market} />
    </>
  );
};

export default Stocks;
