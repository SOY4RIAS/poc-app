'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { POKEMON_IMAGE_URL } from '@/lib/constants/url';
import { Button } from '@/components/ui/button';
import { usePokeStore } from '@/providers/PokeStoreProvider';
import { cn } from '@/lib/utils';

interface PokeItemProps {
  data: {
    name: string;
    url: string;
  };
}

export function PokeItem({ data }: PokeItemProps) {
  const { favorites, addFavorite, removeFavorite } = usePokeStore(
    (state) => state
  );

  const isFavorite = favorites.includes(data.name);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(data.name);
    } else {
      addFavorite(data.name);
    }
  };

  return (
    <Card className="hover:cursor-pointer hover:scale-105 hover:shadow-xl transition duration-200">
      <CardHeader className="relative">
        <CardTitle className="text-center capitalize">{data.name}</CardTitle>
        <Button
          size={'icon'}
          variant={'ghost'}
          className="absolute right-2 top-2"
          onClick={handleFavorite}
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
          src={POKEMON_IMAGE_URL.replace('[name]', data.name.toLowerCase())}
          alt={data.name}
          width={100}
          height={100}
          unoptimized
          className="object-fill aspect-square"
        />
      </CardContent>
    </Card>
  );
}
