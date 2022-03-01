import PropTypes from 'prop-types';
import { AuthProvider } from './auth';
import { UserProvider } from './user';

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProviders;
