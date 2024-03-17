import { getAllByRole, getByRole, render } from '@testing-library/react';

import { PokeList } from '@/app/components';
import { resolvedComponent } from '@/lib/tests';

describe('PokeList', () => {
  it('should render a list of pokemons', async () => {
    const ResolvedComponent = await resolvedComponent(PokeList, {
      search: '',
    });

    const { container } = render(<ResolvedComponent />);

    expect(getByRole(container, 'list')).toBeInTheDocument();
    expect(getAllByRole(container, 'listitem')).toHaveLength(2);
  });
});

jest.mock('./PokeItem', () => ({
  __esModule: true,
  PokeItem: () => <div role="listitem" />,
}));

jest.mock('./PokeFinder', () => ({
  __esModule: true,
  PokeFinder: () => <button />,
}));

jest.mock('@/services/pokemonService', () => ({
  getPokemons: jest.fn(() =>
    Promise.resolve({
      status: 200,
      data: {
        next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
        previous: null,
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
          },
        ],
      },
    })
  ),
}));
