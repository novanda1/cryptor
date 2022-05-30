import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

const coin = {
  id: 'ethereum-ecosystem',
  name: 'Ethereum Ecosystem',
  market_cap: 501826711181.70337,
  market_cap_change_24h: 2.4573162788518457,
  content: '',
  top_3_coins: [
    'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707',
    'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389',
  ],
  volume_24h: 68929237041.42876,
  updated_at: '2022-05-30T02:55:59.898Z',
};

export type Category = typeof coin;

export interface CategoriesResponse {
  categories: Category[];
  isLoading: boolean;
  isError: any;
}

function useCategories(): CategoriesResponse {
  const { data, error } = useSWR('https://api.coingecko.com/api/v3/coins/categories', fetcher);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useCategories;
