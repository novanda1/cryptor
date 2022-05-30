import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import styles from '../ui/Border.module.css';
import Container from '../ui/Container';
import PageTitle from '../ui/PageTitle';
import PX from '../ui/Px';

const Coin: React.FC<RouteComponentProps> = () => {
  return (
    <IonPage>
      <IonHeader className={styles.HeaderNoBorder} mode="md">
        <IonToolbar mode="md">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Container>
          <PX size={4}>
            <PageTitle>👋Coin</PageTitle>
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Coin;
