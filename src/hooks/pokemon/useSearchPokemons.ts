import { useQuery } from '@tanstack/react-query';

import { getPokemons } from '@/services/pokemonService';

interface UseGetPokemonsParams {
  search?: string;
}

export const useSearchPokemons = ({ search }: UseGetPokemonsParams) => {
  const query = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => {
      return getPokemons(new URLSearchParams({ limit: '100000' }).toString());
    },
    enabled: !!search,
    select: (response) => {
      return response.data.results
        .filter((pokemon) => {
          if (!search) return true;

          return pokemon.name
            .toLocaleLowerCase()
            .includes(search.trim().toLocaleLowerCase());
        })
        .slice(0, 10);
    },
  });

  return query;
};
