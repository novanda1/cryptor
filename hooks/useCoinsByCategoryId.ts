import { useMarketSWR } from '../lib/marketFetcher';
import { Market } from './useMarket';

export interface CoinsByCategoryIdResponse {
  coins: Market[];
  isLoading: boolean;
  isError: any;
}

function useCoinsByCategoryId(categoryIds: string): CoinsByCategoryIdResponse {
  const { data, error } = useMarketSWR({
    vs_currency: 'usd',
    category: categoryIds,
    per_page: '10',
    page: '1',
    order: 'market_cap_desc',
    sparkline: true,
    price_change_percentage: '24h',
  });

  return {
    coins: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useCoinsByCategoryId;
