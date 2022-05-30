import { IonContent, IonPage } from '@ionic/react';
import useMyPosition from '../../hooks/useMyPosition';
import CoinList from '../ui/CoinList';
import Container from '../ui/Container';
import PortoLayout from '../ui/PortoLayout';
import PX from '../ui/Px';
import SectionTitle from '../ui/SectionTitlte';

const Lists = () => {
  const { coins, isError, isLoading } = useMyPosition();
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <PortoLayout />

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
