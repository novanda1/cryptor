import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
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

            <div className="relative mt-5">
              <input
                className="bg-gray-100 w-full rounded-lg pr-4 pl-10 py-3"
                placeholder='Try "BTC" or "Bitcoin"'
              />
              <IonIcon src={searchOutline} className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-300" />
            </div>

            <CoinCategories />
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Search;
