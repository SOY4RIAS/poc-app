import { render } from '@testing-library/react';

import Detail from '@/app/detail/[id]/page';
import { resolvedComponent } from '@/lib/tests';
import { pokemonMock } from '@/lib/tests/mocks/pokemon';

jest.mock('@/services/pokemonService', () => ({
  getPokemon: jest.fn(() => Promise.resolve(pokemonMock)),
}));

describe('DetailPage', () => {
  it('should render', async () => {
    const ResolvedComponent = await resolvedComponent(Detail, {
      params: {
        id: '1',
      },
    });
    const { container } = render(<ResolvedComponent />);
    expect(container).toMatchSnapshot();
  });
});
