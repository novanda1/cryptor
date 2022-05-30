import { IonContent, IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import Container from '../ui/Container';
import PX from '../ui/Px';
import SectionTitle from '../ui/SectionTitlte';

const Fund: React.FC<RouteComponentProps> = ({ match: { params } }: any) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Container>
          <PX size={4}>
            <SectionTitle> Talk money to me 💰</SectionTitle>
            <p>
              Since its just for learning purpose we don&apos;t really need a real money here! drop
              me an email at{' '}
              <a
                href="mailto:novandaahsan1@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-green-500"
              >
                novandaahsan1@gmail.com
              </a>{' '}
              for more!
            </p>
          </PX>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Fund;
