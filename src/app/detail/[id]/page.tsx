import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPokemon } from '@/services/pokemonService';
import { Progress } from '@/components/ui/progress';

interface DetailParams {
  params: {
    id: string;
  };
}

export default async function Detail({ params: { id } }: DetailParams) {
  const { data: pokemon } = await getPokemon(id);

  const types = pokemon.types.map((t) => t.type.name).join(', ');

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>{pokemon.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Image
              src={
                pokemon.sprites.animated?.front_default ||
                pokemon.sprites.front_default
              }
              className="border aspect-square rounded-xl"
              alt={pokemon.name}
              width={96}
              height={96}
            />
            <div className="grid gap-1.5">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">Type</span>
                <div className="flex items-center space-x-2 uppercase">
                  {types}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">Abilities</span>
                <ul className="flex space-x-2 text-sm">
                  {pokemon.abilities.map((a) => (
                    <li key={a.ability.name}>{a.ability.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-1.5 mt-5">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">Height</span>
              <span>{pokemon.height} cm</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">Weight</span>
              <span>{pokemon.weight} g</span>
            </div>
          </div>

          {/* stats */}
          {pokemon.stats.map((s) => (
            <div
              className="grid grid-cols-3 mt-5 w-full justify-between"
              key={s.stat.name}
            >
              <span>{s.stat.name}</span>
              <span className="w-full">
                <Progress value={s.base_stat} />
              </span>
              <span className="text-right">{s.base_stat}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
