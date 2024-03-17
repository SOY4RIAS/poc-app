"use client";

import { MenuIcon, PackageIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Paths } from "@/utils/constants";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/providers/authStoreProvider";

export function Navbar() {
  const pathname = usePathname();

  const isLogin = pathname === Paths.LOGIN;

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <>
      <nav className="flex h-20 w-full items-center px-4 md:px-6">
        <Link className="flex items-center gap-2" href={Paths.HOME}>
          <PackageIcon className="h-6 w-6" />
          <span>POC App</span>
        </Link>
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Link className="font-bold" href="#">
            Tab 1
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Tab 2
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Tab 3
          </Link>
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
              <Link className="flex items-center gap-2" href="#">
                <PackageIcon className="h-6 w-6" />
                <span>Acme Inc</span>
              </Link>
              <div className="flex flex-col gap-4">
                <Link className="font-bold" href="#">
                  Tab 1
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="#">
                  Tab 2
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="#">
                  Tab 3
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className={"ml-auto hidden md:flex gap-4 items-center"}>
          <Link
            href={Paths.LOGIN}
            className={cn("font-bold", { hidden: isLogin || isAuthenticated })}
          >
            <Button variant={"outline"}>
              <span>Login</span>
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}
