import { FlaskConicalIcon, HomeIcon } from 'lucide-react';

import { Dummy, PokeList } from '@/app/components';
import { TabBuilder } from '@/components/TabBuilder';

interface HomeProps {
  searchParams: {
    offset?: string;
    limit?: string;
  };
}

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
            icon: <FlaskConicalIcon size={20} />,
            label: 'Dummy',
            component: <Dummy />,
          },
        ]}
      />
    </main>
  );
}
