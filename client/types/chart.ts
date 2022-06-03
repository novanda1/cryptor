export interface Chart {
  prices: Array<number[]>;
  market_caps: Array<number[]>;
  total_volumes: Array<number[]>;
}

export interface FormatedChartData {
  price: number
  unix: number
}