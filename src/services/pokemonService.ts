import { HttpClient } from '@/lib/http';
import { GetPokemonResponse, type GetPokemonsResponse } from '@/lib/types';
import { mapWithPokeImage } from '@/services/mappers/pokemonMapper';

const http = new HttpClient(process.env.NEXT_PUBLIC_API_URL || '');

export const getPokemons = async (search?: string) => {
  const params = new URLSearchParams(search);

  return mapWithPokeImage(http.get<GetPokemonsResponse>('/pokemon', params));
};

export const getPokemon = async (id: string) => {
  return http.get<GetPokemonResponse>(`/pokemon/${id}`);
};
