import { IonContent, IonPage } from '@ionic/react';
import { useState } from 'react';
import Store from '../../store';
import { getHomeItems } from '../../store/selectors';

const Feed = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="relative h-2/6 bg-gray-900 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold">Hey Novanda! 👋</h1>
          <p className=" text-sm">Ready to be Cryptor?</p>

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
            <h2>Biggest Gainer</h2>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
