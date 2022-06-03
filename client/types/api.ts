import { Coin, CoinCategory } from '@/types/coin';
import { KeyedMutator } from 'swr';

export interface FetchError {
  error: string;
}

// export interface CoinResponse {
//   coin: Coin & FetchError;
//   isLoading: boolean;
//   isError: any;
// }

// export interface CategoriesResponse {
//   categories: CoinCategory[];
//   isLoading: boolean;
//   isError: any;
// }

// export interface ChartResponse {
//   categories: CoinCategory[];
//   isLoading: boolean;
//   isError: any;
// }

export interface CustomSWRResponse<Data = any, Error = any> {
  data?: Data & FetchError;
  error?: Error;
  mutate: KeyedMutator<Data>;
  isValidating: boolean;
  isLoading: boolean;
  isError: boolean;
}
