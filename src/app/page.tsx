import { FlaskConicalIcon, HomeIcon } from 'lucide-react';

import { Dummy, PokeList } from '@/app/components';
import { TabBuilder } from '@/components/TabBuilder';

export default function Home() {
  return (
    <main className="p-10 h-full overflow-hidden">
      <TabBuilder
        tabs={[
          {
            icon: <HomeIcon size={20} />,
            label: 'Home',
            component: <PokeList />,
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
