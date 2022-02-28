import { supabase } from '../services/supabase';

export const checkUser = async () => {
  const authUser = await supabase.auth.user();
  return authUser;
};

export const signInWithGithub = async () => {
  const response = await supabase.auth.signIn({ provider: 'github' });
  return response;
};

export const signOut = async () => {
  const response = await supabase.auth.signOut();
  return response;
};
