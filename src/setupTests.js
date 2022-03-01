import '@testing-library/jest-dom';

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn()
}));

jest.mock('./context/auth', () => ({
  useAuth: () => ({
    login: jest.fn(),
    reload: jest.fn()
  })
}));
