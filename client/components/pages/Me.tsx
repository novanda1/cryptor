import { IonContent, IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import Container from '../ui/Container';
import PX from '../ui/Px';
import SectionTitle from '../ui/SectionTitlte';

const Me: React.FC<RouteComponentProps> = ({ match: { params } }: any) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <PX size={4}>
            <SectionTitle>Hey here is your room</SectionTitle>
            <p>
             All about you would be right here!
            </p>
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Me;
