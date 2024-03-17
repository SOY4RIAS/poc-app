import { HTTP_STATUS_MESSAGE } from '@/lib/constants/httpStatus';

export interface HttpResponse<T> {
  data: T;
  status: string;
  statusCode: number;
}

export class HttpClient {
  constructor(private readonly baseUrl: string) {
    if (!baseUrl) {
      throw new Error('baseUrl is required');
    }
  }

  async jsonResponse<T>(response: Promise<Response>) {
    const awaitedResponse = await response;

    return {
      data: (await awaitedResponse.json()) as T,
      statusCode: awaitedResponse.status,
      status: HTTP_STATUS_MESSAGE[awaitedResponse.status],
    };
  }

  async get<T>(
    path: string,
    params?: URLSearchParams
  ): Promise<HttpResponse<T>> {
    const url = new URL(`${this.baseUrl}${path}`);
    if (params) {
      url.search = params.toString();
    }
    const fetchPromise = fetch(url);

    return this.jsonResponse<T>(fetchPromise);
  }

  async post<T, B>(path: string, body: B): Promise<HttpResponse<T>> {
    const fetchPromise = fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return await this.jsonResponse<T>(fetchPromise);
  }
}
