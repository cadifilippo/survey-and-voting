import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { useUser } from '../../../context/user';

import styles from './Navigator.module.css';

import { LogoutIcon } from '../../../assets';

const Navigator = () => {
  const user = useUser();
  const { logout } = useAuth();

  return (
    <nav className={styles.container}>
      <section className={styles.menu}>
        <ul className={styles.menu_list}>
          <li>
            <NavLink
              className={styles.nav_link}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black'
                };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={styles.user}>
        <ul className={styles.user_list}>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black'
                };
              }}
              to="/profile"
            >
              {user?.name || 'usuario'}
            </NavLink>
          </li>
          <li className={styles.button_container}>
            <button className={styles.button} onClick={logout}>
              <LogoutIcon width={20} height={20} />
            </button>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navigator;
