'use client';

import { MenuIcon, PackageIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Paths } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

export function Navbar() {
  const pathname = usePathname();

  const isLogin = pathname === Paths.LOGIN;

  const { isAuthenticated, data: sessionData } = useAuth();

  const loginSection = (
    <>
      {isAuthenticated && <span>{sessionData?.user?.name}</span>}
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

  return (
    <nav className="flex h-20 w-full items-center px-4 md:px-6">
      <Link className="flex items-center gap-2" href={Paths.HOME}>
        <PackageIcon className="h-6 w-6" />
        <span>POC App</span>
      </Link>
      <div className="hidden md:flex items-center gap-4 ml-auto"></div>
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
            <div className="flex flex-col gap-4"></div>
          </SheetContent>
        </Sheet>
      </div>
      <div className={'ml-auto hidden md:flex gap-4 items-center'}>
        {loginSection}
      </div>
    </nav>
  );
}
