import { CoinMarket } from '@/types/coin';
import currency from 'currency.js';
import Avatar from 'react-avatar';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { MyCoin } from '../../hooks/useMyPosition';

type Props = {
  coin: CoinMarket | MyCoin;
  border?: 'border-b' | 'border-t';
};

const CoinListItem: React.FC<Props> = ({ coin, border = 'border-b' }) => {
  const price = '$' + currency(coin.current_price);
  const price_change_percentage_24h_in_currency =
    coin?.price_change_percentage_24h_in_currency?.toFixed(2) || undefined;
  return (
    <div
      className={`flex flex-row py-3 ${border} border-slate-100`}
      key={coin.id}
    >
      <Avatar round={true} src={coin.image} size="40px" />
      <div className="flex flex-col items-start justify-center ml-3">
        <h4 className="block">{coin.name}</h4>
        <h5 className="text-gray-500 mt-1">{coin.symbol.toUpperCase()}</h5>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <h6>{price}</h6>

        <p className="flex items-center">
          {price_change_percentage_24h_in_currency && (
            <>
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
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default CoinListItem;
