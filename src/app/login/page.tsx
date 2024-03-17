'use client';

import { useRouter } from 'next/navigation';

import { LoginForm } from '@/app/login/components/LoginForm';
import { Paths } from '@/lib/constants';
import { useAuthStore } from '@/providers/AuthStoreProvider';

export default function Login() {
  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    router.replace(Paths.HOME);

    return null;
  }

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <LoginForm />
    </main>
  );
}
