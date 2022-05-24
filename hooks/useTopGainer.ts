import useSWR from 'swr';
import { API_URL } from '../lib/constants';

function useTopGainer() {
  const { data, error } = useSWR(API_URL + '/v1/cryptocurrency/trending/gainers-losers');

  return {
    topGainer: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useTopGainer;
