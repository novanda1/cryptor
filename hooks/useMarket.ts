import customSWRReturn from '@/lib/customSWRReturn';
import { CustomSWRResponse } from '@/types/api';
import { CoinMarket } from '@/types/coin';
import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

function useMarket(): CustomSWRResponse<CoinMarket[]> {
  return customSWRReturn(
    useSWR(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h',
      fetcher
    )
  );
}

export default useMarket;
