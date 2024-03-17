'use client';
import { ReactNode } from 'react';

import { useAuthStore } from '@/providers/AuthStoreProvider';

interface HydrateFlowProps {
  children: ReactNode;
}

export function HydrateFlow({ children }: HydrateFlowProps) {
  const hasHydrated = useAuthStore((state) => state._hasHydrated);

  if (hasHydrated) {
    return children;
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}
