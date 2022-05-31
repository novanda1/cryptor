import useChart from '@/hooks/useChart';
import { FetchError } from '@/types/api';
import { Coin } from '@/types/coin';
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
import ChartLayout from '../ui/ChartLayout';

const CoinHeading: React.FC<{ coin: Coin & FetchError }> = ({ coin }) => {
  return (
    <div className="flex items-center justify-between w-full px-4 mb-14 -mt-7">
      <div className="w-auto">
        <h4 className="font-medium">{coin.symbol?.toUpperCase()}</h4>
        <h1 className="font-bold text-xl">{coin.name}</h1>
        <p className="text-sm font-medium">Last close ${coin.market_data?.current_price['usd']}</p>
      </div>
      <div className="w-max">
        {coin.image?.large && (
          <Image width={60} height={60} src={coin.image?.large} alt={coin.name} />
        )}
      </div>
    </div>
  );
};

const Coin: React.FC<RouteComponentProps<{ id: string }>> = ({
  match: {
    params: { id },
  },
}) => {
  const {
    data: coin,
    isError,
    isLoading,
  } = useCoin({
    id,
    localization: false,
    tickers: false,
    community_data: false,
    developer_data: false,
    market_data: true,
    sparkline: false,
  });

  const { data } = useChart(id);

  console.log('data', data);

  return (
    <IonPage>
      <IonHeader className={styles.HeaderNoBorder + ' bg-gray-800 text-white'} mode="md">
        <IonToolbar mode="md" className='bg-gray-800 text-white' color='black'>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" color='white' />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
            {coin?.name && !isError ? (
              <ChartLayout
                coinName={coin.id}
                heading={<CoinHeading coin={coin} />}
                data={[
                  { days: '1' },
                  { days: '7' },
                  { days: '30' },
                  { days: '90' },
                  { days: '365' },
                ]}
              />
            ) : isLoading ? (
              'Loading...'
            ) : (
              <div>
                {coin?.error}
                <p>
                  Please contact developer! at{' '}
                  <a
                    href="mailto:novandaahsan1@gmail.com"
                    className="text-green-600 font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    novandaahsan1@gmail.com
                  </a>
                </p>
              </div>
            )}
      </IonContent>
    </IonPage>
  );
};

export default Coin;
