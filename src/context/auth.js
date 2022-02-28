import { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';
import { FullPageSpinner } from '../common/components';
import { checkUser, signInWithGithub, signOut } from '../helpers/auth';

const AuthContext = createContext();

function AuthProvider(props) {
  const [dataRequested, setDataRequested] = useState(false);
  const [data, setData] = useState(null);

  const verifySession = useCallback(() => {
    setDataRequested(false);
    checkUser().then((resp) => {
      setData(resp);
      setDataRequested(true);
    });
  }, [checkUser]);

  useLayoutEffect(() => {
    verifySession();
  }, [verifySession]);

  if (!dataRequested) {
    return <FullPageSpinner />;
  }

  const login = () => {
    signInWithGithub();
  };

  const logout = () => {
    signOut().then(() => {
      verifySession();
    });
  };

  return <AuthContext.Provider value={{ data, login, logout, reload: verifySession }} {...props} />;
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
