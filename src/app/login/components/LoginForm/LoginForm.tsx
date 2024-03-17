'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LoginSchema,
  loginSchema,
} from '@/app/login/components/LoginForm/schema';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useAuthStore } from '@/providers/AuthStoreProvider';

export function LoginForm() {
  const { login } = useAuthStore((state) => ({
    login: state.login,
  }));

  const [isSubmiting, setIsSubmiting] = useState(false);
  const toggleSubmit = () => setIsSubmiting((prev) => !prev);

  const form = useForm<LoginSchema>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: LoginSchema) => {
    toggleSubmit();
    setTimeout(() => {
      login({
        email: values.email,
        name: values.email.split('@')[0],
      });
      toggleSubmit();
    }, 1000);
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
            <Button className="w-full" type="submit" disabled={isSubmiting}>
              {isSubmiting ? (
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
