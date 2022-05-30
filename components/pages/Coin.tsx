import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar
} from '@ionic/react';
import Image from 'next/image';
import { RouteComponentProps } from 'react-router-dom';
import useCoin from '../../hooks/useCoin';
import styles from '../ui/Border.module.css';
import Container from '../ui/Container';
import PX from '../ui/Px';

const Coin: React.FC<RouteComponentProps<{ id: string }>> = ({
  match: {
    params: { id },
  },
}) => {
  const { coin } = useCoin({
    id,
    localization: false,
    tickers: false,
    community_data: false,
    developer_data: false,
    market_data: false,
    sparkline: false,
  });

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
          {coin ? (
            <PX size={4}>
              <div className="flex items-center justify-between mt-5  ">
                <div className="w-auto">
                  <h4 className="font-medium">{coin?.symbol.toUpperCase()}</h4>
                  <h1 className="font-bold text-xl">{coin?.name}</h1>
                  <p className="text-sm font-medium">
                    Last close ${coin?.market_data.current_price['usd']}
                  </p>
                </div>
                <div className="w-max">
                  <Image width={60} height={60} src={coin.image.large} alt={coin.name} />
                </div>
              </div>
            </PX>
          ) : (
            'loading...'
          )}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Coin;
