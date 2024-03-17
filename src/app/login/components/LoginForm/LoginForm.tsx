'use client';

import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { loginResolver, type LoginSchema } from '@/lib/schemas/loginSchema';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useLogin } from '@/hooks/services/useLogin';
import { Paths } from '@/lib/constants';

export function LoginForm() {
  const router = useRouter();

  const { mutateAsync: login, isPending: isSubmitting } = useLogin();

  const form = useForm<LoginSchema>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: loginResolver,
  });

  const onSubmit = (data: LoginSchema) => {
    login(data).then(() => {
      router.replace(Paths.HOME);
    });
  };

  return (
    <Form {...form}>
      <form className="w-full max-w-sm" onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="space-y-4 py-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter your username or email
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" type="" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter your password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex">
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logining
                </>
              ) : (
                'Login'
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
