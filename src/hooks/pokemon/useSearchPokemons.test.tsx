import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';

import { useSearchPokemons } from '@/hooks/pokemon/useSearchPokemons';
import { pokemonsMock } from '@/lib/tests/mocks/pokemons';

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useSearchPokemon', () => {
  it('should return nothing when search is empty', async () => {
    const { result } = renderHook(() => useSearchPokemons({ search: '' }), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.data).toBeUndefined();
    });
  });
  it('should return pokemons with search', async () => {
    const { result } = renderHook(() => useSearchPokemons({ search: 'p' }), {
      wrapper,
    });

    await waitFor(() => {
      const expected = {
        ...pokemonsMock,
        data: {
          ...pokemonsMock.data,
          results: pokemonsMock.data.results
            .filter((pokemon) => pokemon.name.includes('p'))
            .slice(0, 10),
        },
      };
      expect(result.current.data).toStrictEqual(expected.data.results);
    });
  });
});

jest.mock('@/services/pokemonService', () => ({
  getPokemons: jest.fn(() => {
    Promise.resolve(pokemonsMock);

    return Promise.resolve({
      status: 200,
      data: pokemonsMock.data,
    });
  }),
}));
