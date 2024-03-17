import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PokeItem } from '@/app/components/PokeItem';
import { Paths } from '@/lib/constants';

const mock = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  image: 'https://example.com/bulbasaur.png',
};

describe('PokeItem', () => {
  afterEach(() => {
    toggleFavorite.mockClear();
    transitionClick.mockClear();
  });

  it('should trigger click event', async () => {
    const { getByRole } = render(<PokeItem data={mock} />);
    const element = getByRole('listitem');
    userEvent.click(element);
    await waitFor(() => {
      expect(transitionClick).toHaveBeenCalledTimes(1);
      expect(transitionClick).toHaveBeenCalledWith(
        Paths.DETAIL.replace(':id', '1'),
        {
          push: expect.any(Function),
        }
      );
    });
  });
  it('should trigger favorite event', async () => {
    const { getByRole } = render(<PokeItem data={mock} />);
    const element = getByRole('button');
    userEvent.click(element);
    await waitFor(() => {
      expect(toggleFavorite).toHaveBeenCalledTimes(1);
    });
  });

  describe('favorites state', () => {
    it('should render as a favorite', async () => {
      usePokeStoreFn.mockReturnValueOnce({
        toggleFavorite,
        isFavorite: true,
      });
      const { getByRole } = render(<PokeItem data={mock} />);
      const element = getByRole('button');
      await waitFor(() => {
        expect(element).toHaveAttribute('aria-checked', 'true');
      });
    });

    it('should render as a favorite', async () => {
      usePokeStoreFn.mockReturnValueOnce({
        toggleFavorite,
        isFavorite: false,
      });
      const { getByRole } = render(<PokeItem data={mock} />);
      const element = getByRole('button');
      await waitFor(() => {
        expect(element).toHaveAttribute('aria-checked', 'false');
      });
    });
  });
});

const toggleFavorite = jest.fn();
const transitionClick = jest.fn();
const usePokeStoreFn = jest.fn(() => ({
  toggleFavorite,
  isFavorite: false,
}));

jest.mock('@/animations', () => ({
  animatePageOut: (...params: any) => {
    transitionClick(...params);
  },
}));

jest.mock('@/providers/PokeStoreProvider', () => ({
  usePokeStore: jest.fn(() => usePokeStoreFn()),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));
