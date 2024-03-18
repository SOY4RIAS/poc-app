import { HeartIcon, HomeIcon } from 'lucide-react';

import { PokeFavorites, PokeList } from '@/app/components';
import { TabBuilder } from '@/components/TabBuilder';

interface HomeProps {
  searchParams: {
    offset?: string;
    limit?: string;
  };
}

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: HomeProps) {
  const search = new URLSearchParams(searchParams);

  return (
    <main className="p-10 h-full overflow-hidden">
      <TabBuilder
        tabs={[
          {
            icon: <HomeIcon size={20} />,
            label: 'Home',
            component: <PokeList search={search.toString()} />,
          },
          {
            icon: <HeartIcon size={20} />,
            label: 'Favorites',
            component: <PokeFavorites />,
          },
        ]}
      />
    </main>
  );
}
