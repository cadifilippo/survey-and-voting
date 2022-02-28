import { createContext, useContext } from 'react';
import { useAuth } from './auth';

const UserContext = createContext();

function UserProvider(props) {
  const { data } = useAuth();

  return <UserContext.Provider value={data?.user_metadata} {...props} />;
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
