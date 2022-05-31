import { IonContent, IonPage } from '@ionic/react';
import { data, dataRandom } from 'mock/data';
import useMyPosition from '../../hooks/useMyPosition';
import CoinList from '../ui/CoinList';
import Container from '../ui/Container';
import ChartLayout from '../ui/ChartLayout';
import PX from '../ui/Px';
import SectionTitle from '../ui/SectionTitlte';

const Lists = () => {
  const { coins, isError, isLoading } = useMyPosition();
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <ChartLayout
            heading={<h1 className="text-xl font-bold mr-auto mb-20 px-4">My Portfolio</h1>}
            data={[
              { data: data, type: '1W' },
              { data: dataRandom(), type: '1M' },
              { data: dataRandom(), type: '3M' },
              { data: dataRandom(), type: '1Y' },
            ]}
          />

          <PX size={4}>
            <SectionTitle>My positions</SectionTitle>

            <CoinList coins={coins} />
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Lists;
