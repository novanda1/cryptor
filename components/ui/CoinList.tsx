import CoinListItem from './CoinListItem';

type Props = {
  coins: any;
  border?: 'border-b' | 'border-t';
};

const CoinList: React.FC<Props> = ({ coins, border = 'border-b' }) => {
  return (
    <div className="flex flex-col">
      {coins &&
        coins.map((coin: any) => <CoinListItem key={coin.id} coin={coin} border={border} />)}
    </div>
  );
};

export default CoinList;
