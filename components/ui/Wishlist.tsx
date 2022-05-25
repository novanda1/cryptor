import { IonSlides, IonSlide } from '@ionic/react';
import Avatar from 'react-avatar';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import useMarket from '../../hooks/useMarket';

const slideOpts = {
  slidesPerView: 3.8,
};

const WishList: React.FC<any> = () => {
  const { isLoading, market } = useMarket();

  return (
    <>
      <h3 className="mt-10 text-lg font-medium mb-3">Wishlist</h3>
      {isLoading && 'Loading...'}
      {market && (
        <IonSlides pager={false} options={slideOpts} style={{ margin: '0 -0.75rem' }}>
          {market.map(coin => {
            const price_change_percentage_24h_in_currency =
              coin.price_change_percentage_24h_in_currency.toFixed(2);
            return (
              <IonSlide key={coin.id}>
                <div className="">
                  <div className="rounded-full border-2 border-red-500 p-1">
                    <Avatar round={true} src={coin.image} size="60px" />
                  </div>
                  <h5 className="text-gray-500 mt-1">{coin.symbol.toUpperCase()}</h5>

                  <div className="flex items-center">
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
                  </div>
                </div>
              </IonSlide>
            );
          })}
        </IonSlides>
      )}
    </>
  );
};

export default WishList;
