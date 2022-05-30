import useSWR from 'swr';

type MarketFetcherArgs = {
  /**
   * The target currency of market data (usd, eur, jpy, etc.)
   */
  vs_currency: string;
  /**
   * The ids of the coin, comma separated crytocurrency symbols (base). refers to /coins/list.
   * When left empty, returns numbers the coins observing the params limit and start
   */
  ids?: string;
  /**
   * filter by coin category. Refer to /coin/categories/list
   */
  category?: string;
  /**
   * valid values: market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc
   * sort results by field.
   */
  order?: string;
  /**
   * valid values: 1..250
   * Total results per page
   */
  per_page?: string;
  /**
   * Page through results
   */
  page?: string;
  /**
   * Include sparkline 7 days data (eg. true, false)
   */
  sparkline?: boolean;
  /**
   * Include price change percentage in 1h, 24h, 7d, 14d, 30d, 200d, 1y (eg. '1h,24h,7d' comma-separated, invalid values will be discarded)
   */
  price_change_percentage?: string;
};

export const marketFetcher = async (args: MarketFetcherArgs) => {
  const query = new URLSearchParams();
  Object.keys(args).map(key => query.append(key, args[key] + ''));
  return fetch(`https://api.coingecko.com/api/v3/coins/markets?${query.toString()}`).then(res =>
    res.json()
  );
};

export const useMarketSWR = (args: MarketFetcherArgs) => {
  return useSWR(args, marketFetcher);
};
