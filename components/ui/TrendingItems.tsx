import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import useSimplePrice from '../../hooks/useSimplePrice';
import { Trending } from '../../hooks/useTrending';

type Props = {
  trending: Trending;
};

const TrendingItems: React.FC<Props> = ({ trending }) => {
  const { simplePrice } = useSimplePrice(trending?.coins.map(({ item }) => item.id).join('%2C'));

  return (
    <>
      {trending && trending.coins.slice(0, 3).map(({ item }) => {
        return (
          <div key={item.coin_id}>
            <h3>{item.symbol.toUpperCase()}</h3>
            <div className="flex items-center text-sm">
              <span
                className={
                  simplePrice && simplePrice[item.id].usd_24h_change > 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }
              >
                {simplePrice && simplePrice[item.id].usd_24h_change > 0 ? (
                  <FiArrowUpRight />
                ) : (
                  <FiArrowDownRight />
                )}
              </span>
              <span
                className={
                  simplePrice && simplePrice[item.id].usd_24h_change > 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }
              >
                {simplePrice && simplePrice[item.id].usd_24h_change.toFixed(2).replace('-', '')}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TrendingItems;
