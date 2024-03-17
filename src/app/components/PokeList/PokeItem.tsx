import Image from 'next/image';
import { Heart } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { POKEMON_IMAGE_URL } from '@/lib/constants/url';
import { Button } from '@/components/ui/button';

interface PokeItemProps {
  data: {
    name: string;
    url: string;
  };
}

export function PokeItem({ data }: PokeItemProps) {
  return (
    <Card className="hover:cursor-pointer hover:scale-105 hover:shadow-xl transition duration-200">
      <CardHeader className="relative">
        <CardTitle className="text-center">{data.name}</CardTitle>
        <Button
          size={'icon'}
          variant={'outline'}
          className="absolute right-2 top-2"
        >
          <Heart />
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
