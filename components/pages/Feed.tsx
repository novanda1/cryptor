import { IonContent, IonPage } from '@ionic/react';
import useTopGainer from '../../hooks/useTopGainer';

const Feed = () => {
  const { isError, isLoading, topGainer } = useTopGainer();

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
            className="absolute bg-white text-black rounded-xl w-4/5 p-3"
          >
            <h2 className="font-medium text-sm">Biggest Gainer</h2>
            {JSON.stringify(topGainer)}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
