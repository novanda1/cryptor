import { IonContent, IonPage } from '@ionic/react';
import Stocks from '../ui/Stocks';
import WishList from '../ui/Wishlist';

const Feed = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          className="relative pt-10 pb-16 bg-gray-900 flex flex-col items-center justify-center"
          style={{ marginTop: 'var(--safe-area-top)' }}
        >
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
        <div className="ion-padding">
          <WishList />
          <Stocks />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
