import { FetchError } from '@/types/api';
import { Coin } from '@/types/coin';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { analyticsOutline, cashOutline, earOutline, shieldOutline } from 'ionicons/icons';
import Image from 'next/image';
import { RouteComponentProps } from 'react-router-dom';
import formatUsd from 'utils/formatUsd';
import useCoin from '../../hooks/useCoin';
import styles from '../ui/Border.module.css';
import ChartLayout from '../ui/ChartLayout';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitlte';

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

  return (
    <IonPage>
      <IonHeader className={styles.HeaderNoBorder + ' bg-gray-800 text-white'} mode="md">
        <IonToolbar mode="md" className="bg-gray-800 text-white" color="black">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" color="white" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {coin?.name && !isError ? (
          <>
            <ChartLayout
              coinName={coin.id}
              heading={<CoinHeading coin={coin} />}
              data={[{ days: '1' }, { days: '7' }, { days: '30' }, { days: '90' }, { days: '365' }]}
            />
            <Container>
              <div className="px-4">
                <SectionTitle>Market stats</SectionTitle>

                <div className="flex flex-col">
                  <div className="flex justify-between items-center py-3 border-b last:border-none border-slate-100">
                    {/* icon */}
                    <div className="flex justify-center items-center rounded-full w-12 h-12 bg-slate-100 text-green-600">
                      <IonIcon icon={cashOutline} className="w-6 h-6" />
                    </div>
                    <div className="mr-auto ml-2 text-gray-600 font-medium">Market cap</div>
                    <div>{formatUsd(coin.market_data.market_cap.usd)}</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b last:border-none border-slate-100">
                    {/* icon */}
                    <div className="flex justify-center items-center rounded-full w-12 h-12 bg-slate-100 text-green-600">
                      <IonIcon icon={analyticsOutline} className="w-6 h-6" />
                    </div>
                    <div className="mr-auto ml-2 text-gray-600 font-medium">
                      Circulating Supply{' '}
                    </div>
                    <div>{formatUsd(coin.market_data.circulating_supply)}</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b last:border-none border-slate-100">
                    {/* icon */}
                    <div className="flex justify-center items-center rounded-full w-12 h-12 bg-slate-100 text-green-600">
                      <IonIcon icon={earOutline} className="w-6 h-6" />
                    </div>
                    <div className="mr-auto ml-2 text-gray-600 font-medium">Total Supply </div>
                    <div>{formatUsd(coin.market_data.total_supply)}</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b last:border-none border-slate-100">
                    {/* icon */}
                    <div className="flex justify-center items-center rounded-full w-12 h-12 bg-slate-100 text-green-600">
                      <IonIcon icon={shieldOutline} className="w-6 h-6" />
                    </div>
                    <div className="mr-auto ml-2 text-gray-600 font-medium">Max Supply </div>
                    <div>
                      {coin.market_data.max_supply
                        ? formatUsd(coin.market_data.max_supply)
                        : 'Infinity'}
                    </div>
                  </div>
                </div>

                <SectionTitle>What is {coin.name}?</SectionTitle>
                <p dangerouslySetInnerHTML={{ __html: coin.description.en }} className="prose"></p>
              </div>
            </Container>
          </>
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
