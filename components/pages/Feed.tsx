import { IonContent, IonPage } from '@ionic/react';
import HeroLayout from '../ui/HeroLayout';
import PX from '../ui/Px';
import Stocks from '../ui/Stocks';
import WishList from '../ui/Wishlist';

const Feed = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HeroLayout />
        <PX size={4}>
          <WishList />
          <Stocks />
        </PX>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
