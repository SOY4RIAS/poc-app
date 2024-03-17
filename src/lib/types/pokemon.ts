export interface GetPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface GetPokemonsParams {
  offset?: string;
  limit?: string;
}

export interface Pokemon {
  name: string;
  url: string;
}
