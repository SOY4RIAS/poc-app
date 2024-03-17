import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginForm } from '@/app/login/components/LoginForm';

const login = jest.fn();
jest.mock('@/providers/AuthStoreProvider', () => ({
  useAuthStore: jest.fn(() => ({ login })),
}));

describe('LoginForm', () => {
  afterEach(() => {
    login.mockClear();
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
        name: 'jL5pE',
      });
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
