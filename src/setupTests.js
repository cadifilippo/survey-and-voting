import '@testing-library/jest-dom';

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn()
}));
