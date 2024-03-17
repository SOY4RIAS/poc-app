import { withAuth } from 'next-auth/middleware';

import { Paths } from '@/lib/constants';

export default withAuth({
  pages: {
    signIn: Paths.LOGIN,
  },
});
