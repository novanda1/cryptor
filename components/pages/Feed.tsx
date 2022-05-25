import { IonAvatar, IonContent, IonPage, IonSlide, IonSlides } from '@ionic/react';
import Image from 'next/image';
import useTopGainer from '../../hooks/useTopGainer';
import Avatar from 'react-avatar';

const Feed = () => {
  const { isError, isLoading, trending } = useTopGainer();

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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
