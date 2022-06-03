import useSearch from '@/hooks/useSearch';
import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import { useState } from 'react';
import CoinCategories from '../ui/CoinCategories';
import CoinList from '../ui/CoinList';
import Container from '../ui/Container';
import PX from '../ui/Px';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data, isLoading, isError } = useSearch({ query: searchQuery });

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
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-gray-100 w-full rounded-lg pr-4 pl-10 py-3"
                placeholder='Try "BTC" or "Bitcoin"'
              />
              <IonIcon
                src={searchOutline}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-300"
              />
            </div>

            {!searchQuery && <CoinCategories />}

            {(searchQuery.length < 3 && searchQuery.length && (
              <div className="mt-3">Type at least 3 char</div>
            )) ||
              ''}

            {isLoading && <div className="mt-3">Loading...</div>}

            {data && !isError && (
              <div className="mt-4">
                <CoinList coins={data.coins} isSearch={true} />
              </div>
            )}
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Search;
