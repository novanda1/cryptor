import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

const singleCoin = {
  usd: 29755,
  usd_market_cap: 566558450063.8464,
  usd_24h_vol: 24011588547.27736,
  usd_24h_change: 1.249548944072012,
  last_updated_at: 1653464693,
};

type coins = {
  [key: string]: typeof singleCoin;
};

interface TrendingResponse {
  simplePrice: coins;
  isLoading: boolean;
  isError: any;
}

function useSimplePrice(ids: string): TrendingResponse {
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`,
    fetcher
  );

  return {
    simplePrice: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSimplePrice;
