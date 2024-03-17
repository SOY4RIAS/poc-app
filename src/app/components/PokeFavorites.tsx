'use client';

import { PokeItem } from '@/app/components/PokeItem';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { usePokeStore } from '@/providers/PokeStoreProvider';

export function PokeFavorites() {
  const { favorites } = usePokeStore((state) => state);

  return (
    <Card className="h-full overflow-hidden">
      <CardHeader>
        <CardTitle>PokeFavorites</CardTitle>
        <CardDescription>View all your favorites</CardDescription>
      </CardHeader>
      <CardContent className="overflow-y-auto h-[calc(100%-9rem)]">
        <div
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {favorites.map((pokemon) => (
            <PokeItem key={pokemon.name} data={pokemon} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
