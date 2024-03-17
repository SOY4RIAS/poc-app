import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';
import { Paths } from '@/lib/constants';

export default async function RootPage() {
  const session = await auth();

  if (session) {
    return redirect(Paths.HOME);
  } else {
    return redirect(Paths.LOGIN);
  }
}
