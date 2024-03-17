import { HttpResponse } from '@/lib/http';
import { GetPokemonsResponse } from '@/lib/types';
import { extractId } from '@/lib/utils';

const getPokeImage = (id: string) => {
  const url = process.env.NEXT_PUBLIC_POKE_IMAGE_URL;

  return `${url}/${id}.png`;
};

export const mapWithPokeImage = async (
  promise: Promise<HttpResponse<GetPokemonsResponse>>
) => {
  const response = await promise;

  const result: HttpResponse<GetPokemonsResponse> = {
    ...response,
    data: {
      ...response.data,
      results: response.data.results.map((pokemon) => ({
        ...pokemon,
        image: getPokeImage(extractId(pokemon.url)),
      })),
    },
  };

  return result;
};
