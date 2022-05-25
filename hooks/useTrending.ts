import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

const coin = {
  item: {
    id: 'terra-luna',
    coin_id: 8284,
    name: 'Terra',
    symbol: 'LUNA',
    market_cap_rank: 59,
    thumb: 'https://assets.coingecko.com/coins/images/8284/thumb/luna1557227471663.png?1567147072',
    small: 'https://assets.coingecko.com/coins/images/8284/small/luna1557227471663.png?1567147072',
    large: 'https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072',
    slug: 'terra-luna',
    price_btc: 5.908465929169439e-9,
    score: 0,
  },
};

interface TrendingResponse {
  trending: {
    coins: typeof coin[];
    exchanges: [];
  };
  isLoading: boolean;
  isError: any;
}

function useTrending(): TrendingResponse {
  const { data, error } = useSWR('https://api.coingecko.com/api/v3/search/trending', fetcher);

  return {
    trending: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useTrending;
