import React from 'react';
import { FullPageSpinner } from '../common/components';
import { useUser } from '../context/user';

const PrivateApp = React.lazy(() => import('./Private.routes'));
const PublicApp = React.lazy(() => import('./Public.routes'));

function AppRouter() {
  const user = useUser();

  console.log('user', user);
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <PrivateApp /> : <PublicApp />}
    </React.Suspense>
  );
}

export default AppRouter;
