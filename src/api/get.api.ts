import { baseRequest } from '../utils/request';

export const getApi: (
  url: string,
  options?: object,
) => Promise<Record<any, any> | null> = async (url, options = {}) => {
  const response = await baseRequest<Record<any, any>>('GET', url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.error) {
    return response;
    // throw new Error(response.message?.description);
  }
  return response.data;
};
