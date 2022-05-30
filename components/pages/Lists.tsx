import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Container from '../ui/Container';
import PortoLayout from '../ui/PortoLayout';
import PX from '../ui/Px';
import SectionTitle from '../ui/SectionTitlte';

const Lists = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <PortoLayout />

          <PX size={4}>
            <SectionTitle>My positions</SectionTitle>

            
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Lists;
