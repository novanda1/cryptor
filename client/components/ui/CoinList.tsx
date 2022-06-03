import { IonRouterLink } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import CoinListItem from './CoinListItem';

type Props = {
  coins: any;
  border?: 'border-b' | 'border-t';
  isSearch?: boolean;
};

const CoinList: React.FC<Props> = ({ coins, border = 'border-b', isSearch = false }) => {
  const { push } = useHistory();
  return (
    <div className="flex flex-col">
      {coins &&
        coins.map((coin: any) => (
          <IonRouterLink key={coin.id} onClick={() => push(`/coin/${coin.id}`)}>
            <CoinListItem coin={coin} border={border} isSearch={isSearch} />
          </IonRouterLink>
        ))}
    </div>
  );
};

export default CoinList;
