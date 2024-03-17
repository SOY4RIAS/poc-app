import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Navbar } from '@/app/components/Navbar/Navbar';
import { AuthStoreProvider } from '@/providers/AuthStoreProvider';
import { cn } from '@/lib/utils';
import { HydrateFlow } from '@/components/HydrateFlow/HydrateFlow';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'POC app',
  description: 'POC 57B app description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'flex flex-col')}>
        <AuthStoreProvider>
          <HydrateFlow>
            <header className="flex w-full shrink-0 items-center px-4 md:px-6">
              <Navbar />
            </header>
            {children}
          </HydrateFlow>
        </AuthStoreProvider>
      </body>
    </html>
  );
}
