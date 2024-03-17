import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Navbar } from '@/app/components/Navbar/Navbar';
import { cn } from '@/lib/utils';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

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
        <NextAuthProvider>
          <ReactQueryProvider>
            <header className="flex w-full shrink-0 items-center px-4 md:px-6">
              <Navbar />
            </header>
            {children}
          </ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
