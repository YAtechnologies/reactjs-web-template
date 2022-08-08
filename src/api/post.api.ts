import { baseRequest, Response } from '../utils/request';

export async function postApi<T>(
  url: string,
  data: object,
): Promise<Response<T> | any> {
  const response = await baseRequest<Record<any, any>>('POST', url, {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (response.error) {
    return response;
  }
  return response.data;
}
