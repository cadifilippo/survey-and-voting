import { useEffect, useState } from 'react';
import { checkUser, signInWithGithub, signOut } from '../../../helpers/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    checkUser()
      .then((user) => setUser(user))
      .catch(() => setUser(null));
    setIsLoading(false);
  }, [checkUser]);

  const logOut = () => {
    signOut();
    setUser(null);
  };

  return { user, isLoading, logOut, signInWithGithub };
};
