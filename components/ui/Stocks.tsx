import currency from 'currency.js';
import Avatar from 'react-avatar';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import useMarket from '../../hooks/useMarket';

const Stocks: React.FC<any> = () => {
  const { isError: marketIsError, isLoading: marketIsLoading, market } = useMarket();

  return (
    <>
      <h3 className="mt-10 text-lg font-medium mb-3">Stocks</h3>

      <div>
        <div className="flex flex-col">
          {market &&
            market.map(coin => {
              const price = '$' + currency(coin.current_price);
              const price_change_percentage_24h_in_currency =
                coin.price_change_percentage_24h_in_currency.toFixed(2);
              return (
                <div className="flex flex-row mb-4" key={coin.id}>
                  <Avatar round={true} src={coin.image} size="40px" />
                  <div className="flex flex-col items-start justify-center ml-3">
                    <h4 className="block">{coin.name}</h4>
                    <h5 className="text-gray-500 mt-1">{coin.symbol.toUpperCase()}</h5>
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <h6>{price}</h6>

                    <p className="flex items-center">
                      <span
                        className={
                          coin.price_change_percentage_24h_in_currency > 0
                            ? 'text-green-500'
                            : 'text-red-500'
                        }
                      >
                        {coin.price_change_percentage_24h_in_currency > 0 ? (
                          <FiArrowUpRight />
                        ) : (
                          <FiArrowDownRight />
                        )}
                      </span>
                      <span
                        className={
                          coin.price_change_percentage_24h_in_currency > 0
                            ? 'text-green-500'
                            : 'text-red-500'
                        }
                      >
                        {price_change_percentage_24h_in_currency.replace('-', '') + '%'}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Stocks;
