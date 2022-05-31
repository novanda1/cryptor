import { CategoriesResponse } from '@/types/api';
import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

function useCategories(): CategoriesResponse {
  const { data, error } = useSWR('https://api.coingecko.com/api/v3/coins/categories', fetcher);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useCategories;
