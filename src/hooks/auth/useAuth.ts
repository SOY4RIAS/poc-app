import { useSession } from 'next-auth/react';

type AuthParams = Parameters<typeof useSession>[0];

export const useAuth = (params?: AuthParams) => {
  const session = useSession(params);

  return {
    ...session,
    isAuthenticated: session.status === 'authenticated',
    isFetchingSession: session.status === 'loading',
  };
};
