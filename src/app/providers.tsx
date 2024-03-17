'use client';

import NextAuthProvider from '@/providers/NextAuthProvider';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextAuthProvider>
  );
}
