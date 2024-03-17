'use client';

import { MenuIcon, PackageIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Paths } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/providers/AuthStoreProvider';

export function Navbar() {
  const pathname = usePathname();

  const isLogin = pathname === Paths.LOGIN;

  const { isAuthenticated, user } = useAuthStore((state) => state);

  const loginSection = (
    <>
      {isAuthenticated && <span>{user?.name}</span>}
      <Link
        href={Paths.LOGIN}
        className={cn('font-bold', {
          hidden: isLogin || isAuthenticated,
        })}
      >
        <Button variant={'outline'}>
          <span>Login</span>
        </Button>
      </Link>
    </>
  );

  const linkSection = (
    <>
      <Link className="font-bold" href="#">
        Tab 1
      </Link>
      <Link className="text-gray-500 dark:text-gray-400" href="#">
        Tab 2
      </Link>
      <Link className="text-gray-500 dark:text-gray-400" href="#">
        Tab 3
      </Link>
    </>
  );

  return (
    <nav className="flex h-20 w-full items-center px-4 md:px-6">
      <Link className="flex items-center gap-2" href={Paths.HOME}>
        <PackageIcon className="h-6 w-6" />
        <span>POC App</span>
      </Link>
      <div className="hidden md:flex items-center gap-4 ml-auto">
        {linkSection}
      </div>
      <div className="ml-auto flex items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="flex items-center gap-2" href={Paths.HOME}>
              <PackageIcon className="h-6 w-6" />
              <span>Acme Inc</span>
              {loginSection}
            </Link>
            <div className="flex flex-col gap-4">{linkSection}</div>
          </SheetContent>
        </Sheet>
      </div>
      <div className={'ml-auto hidden md:flex gap-4 items-center'}>
        {loginSection}
      </div>
    </nav>
  );
}
