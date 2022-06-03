import { CoinMarket, SearchResultCoin } from '@/types/coin';
import { IonIcon } from '@ionic/react';
import currency from 'currency.js';
import { chevronForward } from 'ionicons/icons';
import Avatar from 'react-avatar';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { MyCoin } from '../../hooks/useMyPosition';

function CoinListItemRightPriceDetail({ price, price_change_percentage_24h_in_currency, coin }) {
  return (
    <>
      <h6>{price}</h6>

      <p className="flex items-center">
        {price_change_percentage_24h_in_currency && (
          <>
            <span
              className={
                coin.price_change_percentage_24h_in_currency > 0 ? 'text-green-500' : 'text-red-500'
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
                coin.price_change_percentage_24h_in_currency > 0 ? 'text-green-500' : 'text-red-500'
              }
            >
              {price_change_percentage_24h_in_currency.replace('-', '') + '%'}
            </span>
          </>
        )}
      </p>
    </>
  );
}

function CoinListItemRightArrowIcon() {
  return <IonIcon src={chevronForward} />;
}

type Props = {
  coin: CoinMarket & MyCoin & SearchResultCoin;
  border?: 'border-b' | 'border-t';
  isSearch: boolean;
};

const CoinListItem: React.FC<Props> = ({ coin, border = 'border-b', isSearch }) => {
  const price = '$' + currency(coin.current_price);
  const price_change_percentage_24h_in_currency =
    coin?.price_change_percentage_24h_in_currency?.toFixed(2) || undefined;
  return (
    <div className={`flex flex-row py-3 ${border} border-slate-100`} key={coin.id}>
      <Avatar round={true} src={isSearch ? coin.large : coin.image} size="40px" />
      <div className="flex flex-col items-start justify-center ml-3">
        <h4 className="block">{coin.name}</h4>
        <h5 className="text-gray-500 mt-1">{coin.symbol.toUpperCase()}</h5>
      </div>
      <div className="ml-auto flex flex-col items-end justify-center">
        {isSearch ? (
          <CoinListItemRightArrowIcon />
        ) : (
          <CoinListItemRightPriceDetail
            coin={coin}
            price={price}
            price_change_percentage_24h_in_currency={price_change_percentage_24h_in_currency}
          />
        )}
      </div>
    </div>
  );
};

export default CoinListItem;
