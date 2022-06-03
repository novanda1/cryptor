import customSWRReturn from '@/lib/customSWRReturn';
import { CustomSWRResponse } from '@/types/api';
import { Trending } from '@/types/coin';
import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

function useTrending(): CustomSWRResponse<Trending> {
  return customSWRReturn(useSWR('https://api.coingecko.com/api/v3/search/trending', fetcher));
}

export default useTrending;
