import currency from 'currency.js';
import Avatar from 'react-avatar';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import useMarket from '../../hooks/useMarket';
import CoinList from './CoinList';

const Stocks: React.FC<any> = () => {
  const { isError: marketIsError, isLoading: marketIsLoading, market } = useMarket();

  return (
    <>
      <h3 className="mt-7 text-lg font-medium mb-3">Stocks</h3>
      <CoinList coins={market} />
    </>
  );
};

export default Stocks;
