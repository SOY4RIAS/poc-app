import { render } from '@testing-library/react';

import { PokeFavorites } from '@/app/components';

describe('PokeFavorites', () => {
  it('should render a list of favorite pokemon', async () => {
    const { getByRole } = render(<PokeFavorites />);

    expect(getByRole('list')).toBeInTheDocument();
    expect(getByRole('listitem')).toHaveLength(1);
  });
});

jest.mock('@/providers/PokeStoreProvider', () => ({
  usePokeStore: jest.fn(() => ({
    favorites: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
    ],
  })),
}));
