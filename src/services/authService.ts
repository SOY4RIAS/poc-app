import { signIn } from 'next-auth/react';

import type { LoginSchema } from '@/lib/schemas/loginSchema';

export const login = async (user: LoginSchema) => {
  return signIn('credentials', {
    redirect: false,
    email: user.email,
    password: user.password,
  });
};
