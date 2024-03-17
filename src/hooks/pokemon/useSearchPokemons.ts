import { useQuery } from '@tanstack/react-query';

import { getPokemons } from '@/services/pokemonService';
import { GetPokemonsResponse } from '@/lib/types';
import { HttpResponse } from '@/lib/http';

interface UseGetPokemonsParams {
  search?: string;
  initialData?: HttpResponse<GetPokemonsResponse>;
}

export const useSearchPokemons = ({
  initialData,
  search,
}: UseGetPokemonsParams) => {
  const query = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => {
      return getPokemons(new URLSearchParams({ limit: '100000' }).toString());
    },
    initialData: initialData || undefined,
    enabled: !!search,
    select: (response) => {
      return response.data.results
        .filter((pokemon) => {
          return pokemon.name
            .toLocaleLowerCase()
            .includes(search?.trim()?.toLocaleLowerCase() || '');
        })
        .slice(0, 10);
    },
  });

  return query;
};
