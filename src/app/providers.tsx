'use client';

import NextAuthProvider from '@/providers/NextAuthProvider';
import { PokeStoreProvider } from '@/providers/PokeStoreProvider';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>
        <PokeStoreProvider>{children}</PokeStoreProvider>
      </ReactQueryProvider>
    </NextAuthProvider>
  );
}
