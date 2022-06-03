import customSWRReturn from '@/lib/customSWRReturn';
import { CustomSWRResponse } from '@/types/api';
import { CoinMarket } from '@/types/coin';
import { useMarketSWR } from '../lib/marketFetcher';

function useCoinsByCategoryId(categoryIds: string): CustomSWRResponse<CoinMarket[]> {
  return customSWRReturn(
    useMarketSWR({
      vs_currency: 'usd',
      category: categoryIds,
      per_page: '10',
      page: '1',
      order: 'market_cap_desc',
      sparkline: true,
      price_change_percentage: '24h',
    })
  );
}

export default useCoinsByCategoryId;
