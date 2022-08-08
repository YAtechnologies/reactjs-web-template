export const API_URL = process.env.REACT_APP_API_URL;

interface BaseResponse {
  statusCode: number;
  headers?: Record<string, any>;
}

interface SuccessfulResponse<T> extends BaseResponse {
  error: false;
  data: T;
}

interface EmptyResponse extends SuccessfulResponse<null> {
  statusCode: 204;
  error: false;
}

interface ErrorResponse<T = Record<string, any>> extends BaseResponse {
  error: true;
  data?: T;
  message?: {
    title: string;
    description?: string;
  };
}

export type Response<T> = SuccessfulResponse<T> | ErrorResponse | EmptyResponse;

export async function baseRequest<T>(
  method: string,
  url: string,
  options?: any,
): Promise<Response<T>> {
  const { headers, data, ...rest } = options || {};
  const reqHeaders = headers || {};
  if (!reqHeaders['Content-Type']) {
    reqHeaders['Content-Type'] = 'application/json';
  }
  const session = JSON.parse(localStorage.getItem('session') ?? '{}');
  if (session && session.token) {
    reqHeaders.Authorization = `Bearer ${session.token}`;
  }
  const requestConfig: any = {
    method,
    body: JSON.stringify(data),
    headers: reqHeaders,
    ...rest,
  };
  const response = await fetch(`${API_URL}${url}`, requestConfig);
  const { ok, status, headers: responseHeaders } = response;
  if (status === 204) {
    return {
      error: false,
      statusCode: 204,
      data: null,
      headers: responseHeaders,
    };
  }
  let body;
  if (reqHeaders['Content-Type'] === 'application/json') {
    body = await response.json();
  }
  if (reqHeaders['Content-Type'] === 'application/pdf') {
    body = await response.blob();
  }
  if (!body) {
    throw new Error('Unrecognized or unspecified content type for the request');
  }
  if (status === 401) {
    return {
      data: body,
      error: true,
      statusCode: status,
      message: {
        title: body.error,
        description: body.message,
      },
      headers: responseHeaders,
    };
  }
  if (ok) {
    return {
      error: false,
      statusCode: status,
      data: body,
      headers: responseHeaders,
    };
  }
  return {
    error: true,
    statusCode: status,
    message: {
      title: body.error,
      description: body.message,
    },
    headers: responseHeaders,
  };
}
