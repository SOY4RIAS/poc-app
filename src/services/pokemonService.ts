import { HttpClient } from '@/lib/http';
import type { GetPokemonsResponse } from '@/lib/types';

const http = new HttpClient(process.env.NEXT_PUBLIC_API_URL || '');

export const getPokemons = async (search?: string) => {
  const params = new URLSearchParams(search);

  return http.get<GetPokemonsResponse>('/pokemon', params);
};
