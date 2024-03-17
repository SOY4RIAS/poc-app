import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowRightFromLine } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPokemons } from '@/services/pokemonService';
import { PokeItem } from '@/app/components/PokeList/PokeItem';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PokeListProps {
  search?: string;
}

export async function PokeList({ search }: PokeListProps) {
  const response = await getPokemons(search);

  const { next, results, previous } = response.data;

  const nextSearch = next && new URL(next).searchParams.toString();
  const previousSearch = previous && new URL(previous).searchParams.toString();

  return (
    <Card className="h-full overflow-hidden">
      <CardHeader>
        <CardTitle>PokeList</CardTitle>
        <CardDescription>View all your pokemons</CardDescription>
        <div className="flex justify-between">
          <Button
            asChild
            className={cn({
              ['pointer-events-none opacity-50']: !previous,
            })}
          >
            <Link href={`?${previousSearch}`}>
              <ArrowLeft />
              Previous
            </Link>
          </Button>
          <Button
            asChild
            className={cn({
              ['pointer-events-none opacity-50']: !next,
            })}
          >
            <Link href={`?${nextSearch}`}>
              Next
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto h-[calc(100%-9rem)]">
        <div
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {results.map((pokemon) => (
            <PokeItem key={pokemon.name} data={pokemon} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
