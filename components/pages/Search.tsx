import { IonContent, IonPage } from '@ionic/react';
import CoinCategories from '../ui/CoinCategories';
import Container from '../ui/Container';
import PX from '../ui/Px';

const Search = () => {
  return (
    <IonPage>
      <IonContent>
        <Container>
          <PX size={4}>
            <h1 className="text-xl sm:text-2xl font-bold pt-10">
              What will your next great pick be?
            </h1>

            <input
              className="bg-gray-100 w-full mt-5 rounded-lg px-4 py-3"
              placeholder='Try "BTC" or "Bitcoin"'
            />

            <CoinCategories />
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Search;
