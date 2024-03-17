export const pokemonMock = {
  data: {
    id: 1,
    name: 'bulbasaur',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
        },
      },
    ],
    sprites: {
      animated: {
        front_default: 'https://example.com/bulbasaur.gif',
      },
      front_default: 'https://example.com/bulbasaur.png',
    },
    abilities: [
      {
        ability: {
          name: 'overgrow',
        },
      },
      {
        ability: {
          name: 'chlorophyll',
        },
      },
    ],
    stats: [
      {
        base_stat: 45,
        stat: {
          name: 'hp',
        },
      },
    ],
  },
};
