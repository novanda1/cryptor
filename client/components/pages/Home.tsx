import { IonContent, IonPage } from '@ionic/react';
import Container from '../ui/Container';
import HeroLayout from '../ui/HeroLayout';
import PX from '../ui/Px';
import Stocks from '../ui/Stocks';
import WishList from '../ui/Wishlist';

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <HeroLayout />
          <PX size={4}>
            <WishList />
            <Stocks />
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Home;
