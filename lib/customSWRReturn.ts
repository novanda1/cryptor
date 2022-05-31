import { CustomSWRResponse } from '@/types/api';
import { SWRResponse } from 'swr';

function customSWRReturn<T = any>(swr: SWRResponse): CustomSWRResponse<T> {
  const isLoading = !swr.data && !swr.error;
  const isError = Boolean(swr.error);

  return {
    ...swr,
    isLoading,
    isError,
  };
}

export default customSWRReturn;
