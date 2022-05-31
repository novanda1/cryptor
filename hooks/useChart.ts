interface UseChartArgs {
  // pass the coin id (can be obtained from /coins) eg. bitcoin
  id: string;
  // The target currency of market data (usd, eur, jpy, etc.)
  vs_currency: string;
  // Data up to number of days ago (eg. 1,14,30,max)
  days: string;
  // Data interv/al. Possible value: daily
  interval: string;
}

const useChart = () => {};

export default useChart;
