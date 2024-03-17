import { useQuery } from '@tanstack/react-query';

import { getPokemons } from '@/services/pokemonService';
import { GetPokemonsResponse } from '@/lib/types';
import { HttpResponse } from '@/lib/http';

interface UseGetPokemonsParams {
  search?: string;
  initialData?: HttpResponse<GetPokemonsResponse>;
}

export const useGetPokemons = ({
  initialData,
  search,
}: UseGetPokemonsParams) => {
  return useQuery({
    queryKey: ['pokemons', search],
    queryFn: () => getPokemons(search),
    initialData: initialData || undefined,
  });
};
