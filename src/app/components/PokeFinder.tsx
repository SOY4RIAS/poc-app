'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useSearchPokemons } from '@/hooks/pokemon/useSearchPokemons';
import TransitionLink from '@/components/TransitionLink/TransitionLink';
import { Paths } from '@/lib/constants';

export function PokeFinder() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { data } = useSearchPokemons({ search: query });

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        <span>Open PokeFinder</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} shouldFilter={false}>
        <CommandInput
          placeholder="Type a command or search..."
          onKeyDown={(e) => setQuery(e.currentTarget.value)}
        />
        <CommandList>
          <CommandGroup>
            {data?.map((pokemon) => (
              <CommandItem
                key={pokemon.name}
                value={pokemon.name}
                onClick={() => console.log(pokemon.name)}
                className="cursor-pointer"
              >
                <TransitionLink
                  href={Paths.DETAIL.replace(':id', pokemon.name)}
                  className="flex items-center gap-2 w-full"
                >
                  <Image
                    src={pokemon.image || ''}
                    unoptimized
                    width={32}
                    height={32}
                    alt={pokemon.name}
                  />
                  <span>{pokemon.name}</span>
                </TransitionLink>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
