import customSWRReturn from '@/lib/customSWRReturn';
import { CustomSWRResponse } from '@/types/api';
import { SimplePrice } from '@/types/coin';
import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

function useSimplePrice(ids: string): CustomSWRResponse<SimplePrice> {
  return customSWRReturn<SimplePrice>(
    useSWR(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`,
      fetcher
    )
  );
}

export default useSimplePrice;
