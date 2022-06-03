import customSWRReturn from '@/lib/customSWRReturn';
import { CustomSWRResponse } from '@/types/api';
import { SearchResult } from '@/types/coin';
import useSWR from 'swr';

interface UseSearchArgs {
  query: string;
}

export const fetcher = args => {
  const res = new Response(JSON.stringify({ error: 'query must greater that 3' }));
  console.log('!args?.query && args?.query?.length < 3', !args?.query && args?.query?.length < 3)
  if (args?.query?.length < 3) {
    return res.json();
  }
  return fetch(args.url).then(res => res.json());
};

const useSearch = (args: UseSearchArgs): CustomSWRResponse<SearchResult> => {
  const query = new URLSearchParams();
  Object.keys(args).map(key => {
    query.append(key, args[key] + '');
  });

  return customSWRReturn(
    useSWR({ url: `https://api.coingecko.com/api/v3/search?${query}`, query: args.query }, fetcher)
  );
};

export default useSearch;
