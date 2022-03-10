import styles from './Login.module.css';
import { GithubIcon } from '../../../assets';
import { useAuth } from '../../../context/auth';
import { useEffect } from 'react';

const Login = () => {
  const { login, reload } = useAuth();

  useEffect(() => {
    window.addEventListener('hashchange', () => reload());
  }, []);

  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <h1 className={styles.title}>Survey & Voting</h1>
        <button className={styles.button} onClick={login} data-testid="github">
          <GithubIcon width={40} height={40} />
          Sign In with Github
        </button>
      </div>
    </section>
  );
};

export default Login;
