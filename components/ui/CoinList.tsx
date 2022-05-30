import CoinListItem from './CoinListItem';

type Props = {
  coins: any;
};

const CoinList: React.FC<Props> = ({ coins }) => {
  return (
    <div className="flex flex-col">
      {coins && coins.map((coin: any) => <CoinListItem coin={coin} key={coin.id} />)}
    </div>
  );
};

export default CoinList;
