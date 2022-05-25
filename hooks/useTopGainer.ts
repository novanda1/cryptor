import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

function useTopGainer() {
  const { data, error } = useSWR('/api/cmc/v1/cryptocurrency/trending/gainers-losers', fetcher)

  return {
    topGainer: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useTopGainer;
