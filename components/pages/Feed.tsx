import { IonContent, IonPage, IonSlide, IonSlides } from '@ionic/react';
import Avatar from 'react-avatar';
import useMarket from '../../hooks/useMarket';
import useTopGainer from '../../hooks/useTopGainer';
import currency from 'currency.js';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';

const Feed = () => {
  const { isError, isLoading, trending } = useTopGainer();
  const { isError: marketIsError, isLoading: marketIsLoading, market } = useMarket();

  const slideOpts = {
    slidesPerView: 3.8,
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="relative pt-10 pb-16 bg-gray-900 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold">Hey Novanda!</h1>
          <p className=" text-xs mt-1">Ready to be a Cryptor?</p>

          <div className="mt-10 text-center">
            <span className="text-sm">You have</span>
            <h4 className="mt-1">
              <small className="inline-block transform -translate-y-4 mr-0.5">Rp</small>
              <span className="text-2xl font-bold">500.000</span>
            </h4>
          </div>

          <div
            style={{ top: 'calc(100% - 40px)' }}
            className="absolute bg-white text-black rounded-xl w-4/5 p-3 overflow-hidden"
          >
            <h2 className="font-medium text-sm">Trending</h2>
            <div className="flex"></div>
          </div>
        </div>
        <div className="px-4 mx-auto">
          <h3 className="mt-10 text-lg font-medium mb-3">Wishlist</h3>
          <IonSlides pager={false} options={slideOpts} style={{ margin: '0 -0.75rem' }}>
            {trending &&
              trending.coins.map(t => {
                return (
                  <IonSlide key={t.item.coin_id}>
                    <div className="rounded-full border-2 border-red-500 p-1">
                      <Avatar round={true} src={t.item.large} size="60px" />
                    </div>
                  </IonSlide>
                );
              })}
          </IonSlides>

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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
