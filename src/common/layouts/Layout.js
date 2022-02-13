import { Outlet } from 'react-router-dom';
import { Navigator } from '../components';

import styles from './Layout.module.css';

const Layout = () => (
  <>
    <header className={styles.header}>
      <Navigator />
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
  </>
);

export default Layout;
