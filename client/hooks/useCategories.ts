import customSWRReturn from '@/lib/customSWRReturn';
import { CustomSWRResponse } from '@/types/api';
import { CoinCategory } from '@/types/coin';
import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

function useCategories(): CustomSWRResponse<CoinCategory[]> {
  return customSWRReturn<CoinCategory[]>(
    useSWR('https://api.coingecko.com/api/v3/coins/categories', fetcher)
  );
}

export default useCategories;
