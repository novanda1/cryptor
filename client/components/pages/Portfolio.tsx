import { IonContent, IonPage } from '@ionic/react';
import { data, dataRandom } from 'mock/data';
import useMyPosition from '../../hooks/useMyPosition';
import CoinList from '../ui/CoinList';
import Container from '../ui/Container';
import ChartLayout from '../ui/ChartLayout';
import PX from '../ui/Px';
import SectionTitle from '../ui/SectionTitlte';

const Portfolio = () => {
  const { coins, isError, isLoading } = useMyPosition();
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <ChartLayout
            coinName="bitcoin"
            heading={<h1 className="text-xl font-bold mr-auto mb-20 px-4">My Portfolio</h1>}
            data={[{ days: '1' }, { days: '7' }, { days: '30' }, { days: '90' }, { days: '365' }]}
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

export default Portfolio;
