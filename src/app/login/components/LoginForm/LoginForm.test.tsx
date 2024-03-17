import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginForm } from '@/app/login/components/LoginForm';
import { Paths } from '@/lib/constants';

const login = jest.fn(() => Promise.resolve());

jest.mock('@/hooks/auth/useLogin', () => ({
  useLogin: jest.fn(() => ({ mutateAsync: login, isPending: false })),
}));

const replace = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    replace,
  })),
}));

describe('LoginForm', () => {
  afterEach(() => {
    login.mockClear();
    replace.mockClear();
  });

  it('should call login', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);

    const emailInput = getByPlaceholderText('m@example.com');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Login');

    await userEvent.type(emailInput, 'jL5pE@example.com');
    await userEvent.type(passwordInput, '12345678AAAaaa$');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(login).toHaveBeenCalledTimes(1);
      expect(login).toHaveBeenCalledWith({
        email: 'jL5pE@example.com',
        password: '12345678AAAaaa$',
      });
      expect(replace).toHaveBeenCalledWith(Paths.HOME);
    });
  });

  it('should not call login', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginForm />);

    const emailInput = getByPlaceholderText('m@example.com');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Login');

    await userEvent.type(emailInput, 'jL5pEexample.com');
    await userEvent.type(passwordInput, '12345');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Must be a valid email')).toBeInTheDocument();
      expect(
        getByText('Password must be at least 6 characters')
      ).toBeInTheDocument();
      expect(login).toHaveBeenCalledTimes(0);
    });
  });
});
