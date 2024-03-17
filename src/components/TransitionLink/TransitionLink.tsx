'use client';

import { useRouter } from 'next/navigation';

import { animatePageOut } from '@/animations';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
