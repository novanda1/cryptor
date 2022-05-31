import useSWR from 'swr';

export type MyCoin = {
  id: string;
  name: string;
  image: string;
  symbol: string;
  buyAtPrice: number;
  current_price: number;
  price_change_percentage_24h_in_currency: number;
};

export type MyPositionResponse = {
  coins: MyCoin[];
  isLoading: boolean;
  isError: any;
};

function useMyPosition(): MyPositionResponse {
  const { data, error } = useSWR('/myposition', () => [
    {
      id: 'bitcoin',
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      name: 'Bitcoin',
      buyAtPrice: 40,
      current_price: 40,
      price_change_percentage_24h_in_currency: 30,
      symbol: 'btc',
    },
    {
      id: 'ethereum',
      image: 'https://assets.coingecko.com/coins/images/1/large/ethereum.png',
      name: 'ethereum',
      buyAtPrice: 40,
      current_price: 40,
      price_change_percentage_24h_in_currency: 30,
      symbol: 'eth',
    },
  ]);

  return {
    coins: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useMyPosition;
