import { LoginForm } from '@/app/login/components/LoginForm';

export default async function Login() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <LoginForm />
    </main>
  );
}
