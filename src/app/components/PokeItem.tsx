'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePokeStore } from '@/providers/PokeStoreProvider';
import { cn, extractId } from '@/lib/utils';
import { Paths } from '@/lib/constants';
import { animatePageOut } from '@/animations';
import { Pokemon } from '@/lib/types';

interface PokeItemProps {
  data: Pokemon;
}

export function PokeItem({ data }: PokeItemProps) {
  const router = useRouter();
  const { toggleFavorite, isFavorite } = usePokeStore((state) => {
    return {
      isFavorite: !!state.favorites.find(
        (pokemon) => pokemon.name === data.name
      ),
      toggleFavorite: state.toggleFavorite,
    };
  });

  const handleFavorite = (e: MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(data);
  };

  const handleClick = () => {
    const id = extractId(data.url);
    animatePageOut(Paths.DETAIL.replace(':id', id), router);
  };

  return (
    <Card
      className="hover:cursor-pointer hover:scale-105 hover:shadow-xl transition duration-200"
      role="listitem"
      onClick={handleClick}
    >
      <CardHeader className="relative">
        <CardTitle className="text-center capitalize">{data.name}</CardTitle>
        <Button
          size={'icon'}
          variant={'ghost'}
          className="absolute right-2 top-2"
          onClick={handleFavorite}
          aria-checked={isFavorite}
        >
          <Heart
            className={cn(
              'transition duration-200',
              isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            )}
          />
        </Button>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src={data.image || ''}
          alt={data.name}
          width={100}
          height={100}
          className="object-fill aspect-square"
        />
      </CardContent>
    </Card>
  );
}
