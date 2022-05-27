
import {
  IonContent, IonHeader, IonPage
} from '@ionic/react';
import Container from '../ui/Container';
import PortoLayout from '../ui/PortoLayout';

const Lists = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <Container>
          <PortoLayout />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Lists;
