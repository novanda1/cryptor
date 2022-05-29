
import {
  IonContent, IonHeader, IonPage
} from '@ionic/react';
import Container from '../ui/Container';
import PortoLayout from '../ui/PortoLayout';

const Lists = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <PortoLayout />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Lists;
