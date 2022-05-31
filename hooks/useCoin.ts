import { CoinResponse } from '@/types/api';
import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

export type UseCoinArgs = {
  // pass the coin id (can be obtained from /coins) eg. bitcoin
  id: string;
  // Include all localized languages in response (true/false) [default: true]
  localization?: boolean;
  // Include tickers data (true/false) [default: true]
  tickers?: boolean;
  // Include market_data (true/false) [default: true]
  market_data?: boolean;
  // Include community_data data (true/false) [default: true]
  community_data?: boolean;
  // Include developer_data data (true/false) [default: true]
  developer_data?: boolean;
  // Include sparkline 7 days data (eg. true, false) [default: false]
  sparkline?: boolean;
};

function useCoin(args: UseCoinArgs): CoinResponse {
  const query = new URLSearchParams();
  Object.keys(args)
    .filter(key => key !== 'id')
    .map(key => query.append(key, args[key] + ''));
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${args.id}?query`,
    fetcher
  );

  return {
    coin: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useCoin;
