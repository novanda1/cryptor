import { Coin, CoinCategory } from '@/types/coin';

export interface FetchError {
  error: string;
}

export interface CoinResponse {
  coin: Coin & FetchError;
  isLoading: boolean;
  isError: any;
}

export interface CategoriesResponse {
  categories: CoinCategory[];
  isLoading: boolean;
  isError: any;
}
