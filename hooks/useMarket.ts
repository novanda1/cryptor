import customSWRReturn from '@/lib/customSWRReturn';
import { CustomSWRResponse } from '@/types/api';
import { CoinMarket } from '@/types/coin';
import useSWR from 'swr';
import { fetcher } from '../lib/cmc-fetcher';

interface UseMarketArgs {
  // The target currency of market data (usd, eur, jpy, etc.)
  vs_currency?: string;
  /**
   * The ids of the coin, comma separated crytocurrency symbols (base). refers to /coins/list.
   * When left empty, returns numbers the coins observing the params limit and start
   */
  ids?: string;
  // filter by coin category. Refer to /coin/categories/list
  category?: string;
  /**
   * valid values: market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc
   * sort results by field.
   *
   * @default market_cap_desc
   */
  order?: string;
  /**
   * valid values: 1..250
   * Total results per page
   *
   * @default 100
   */
  per_page?: number;
  /**
   * Page through results
   *
   * @default 100
   *
   **/
  page?: number;
  /**
   * Include sparkline 7 days data (eg. true, false)
   *
   * @default false
   */
  sparkline?: Boolean;
  /**
   * Include price change percentage in 1h, 24h, 7d, 14d, 30d, 200d, 1y (eg. '1h,24h,7d' comma-separated, invalid values will be discarded)
   */
  price_change_percentage?: string;
}

function useMarket(args: UseMarketArgs = {}): CustomSWRResponse<CoinMarket[]> {
  if (!args?.vs_currency) args.vs_currency = 'usd'
  if (!args?.sparkline === undefined) args.sparkline = true;
  if (!args?.price_change_percentage) args.price_change_percentage = '24h';

  const query = new URLSearchParams();
  Object.keys(args).map(key => {
    query.append(key, args[key] + '');
  });
  return customSWRReturn(
    useSWR(`https://api.coingecko.com/api/v3/coins/markets?${query}`, fetcher)
  );
}

export default useMarket;
