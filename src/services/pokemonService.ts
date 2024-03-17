import { HttpClient } from '@/lib/http';
import type { GetPokemonsParams, GetPokemonsResponse } from '@/lib/types';

const http = new HttpClient(process.env.NEXT_PUBLIC_API_URL || '');

export const getPokemons = async ({ offset, limit }: GetPokemonsParams) => {
  const params = new URLSearchParams({
    offset: String(offset),
    limit: String(limit),
  });

  return http.get<GetPokemonsResponse>('/pokemon', params);
};
