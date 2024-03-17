'use client';

import type { ReactNode } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabComponent {
  icon?: ReactNode;
  label: string;
  component: ReactNode;
}

interface TabBuilderProps {
  tabs: TabComponent[];
}

export function TabBuilder({ tabs }: TabBuilderProps) {
  return (
    <Tabs defaultValue={tabs[0].label} className="w-full h-[calc(100%-3rem)]">
      <TabsList className="grid w-full grid-cols-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.label} value={tab.label}>
            {tab.icon}
            <span className="ml-2 justify-self-center">{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.label} value={tab.label} className="h-full">
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
  );
}
