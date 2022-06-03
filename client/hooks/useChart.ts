import { fetcher } from '@/lib/cmc-fetcher';
import customSWRReturn from '@/lib/customSWRReturn';
import { CustomSWRResponse } from '@/types/api';
import { Chart } from '@/types/chart';
import useSWR from 'swr';

interface UseChartArgs {
  // The target currency of market data (usd, eur, jpy, etc.)
  vs_currency: string;
  // Data up to number of days ago (eg. 1,14,30,max)
  days: string;
  // Data interv/al. Possible value: daily
  interval?: string;
}

function useChart(
  id: string,
  args: UseChartArgs = { vs_currency: 'usd', days: '1', interval: '1m' }
): CustomSWRResponse<Chart> {
  const query = new URLSearchParams();
  Object.keys(args)
    .filter(key => key !== 'id')
    .map(key => query.append(key, args[key] + ''));

  return customSWRReturn<Chart>(
    useSWR(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?${query}`, fetcher)
  );
}

export default useChart;
