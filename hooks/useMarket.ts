import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

const coin = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  current_price: 30173,
  market_cap: 574752730699,
  market_cap_rank: 1,
  fully_diluted_valuation: 633629159999,
  total_volume: 23975599744,
  high_24h: 30173,
  low_24h: 28716,
  price_change_24h: 856.46,
  price_change_percentage_24h: 2.92145,
  market_cap_change_24h: 16139860438,
  market_cap_change_percentage_24h: 2.88927,
  circulating_supply: 19048693,
  total_supply: 21000000,
  max_supply: 21000000,
  ath: 69045,
  ath_change_percentage: -56.4232,
  ath_date: '2021-11-10T14:24:11.849Z',
  atl: 67.81,
  atl_change_percentage: 44270.95951,
  atl_date: '2013-07-06T00:00:00.000Z',
  roi: null,
  last_updated: '2022-05-25T03:55:55.392Z',
};

interface MarketResponse {
  market: {
    coins: typeof coin[];
    exchanges: [];
  };
  isLoading: boolean;
  isError: any;
}

function useTopGainer(): MarketResponse {
  const { data, error } = useSWR(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    fetcher
  );

  return {
    market: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useTopGainer;
