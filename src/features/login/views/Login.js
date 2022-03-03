import styles from './Login.module.css';
import { BgLogin, GithubIcon } from '../../../assets';
import { useAuth } from '../../../context/auth';
import { useEffect } from 'react';

const Login = () => {
  const { login, reload } = useAuth();

  useEffect(() => {
    window.addEventListener('hashchange', () => reload());
  }, []);

  return (
    <section className={styles.login} style={{ backgroundImage: `url(${BgLogin})` }}>
      <div className={styles.form}>
        <h1 className={styles.title}>Survey & Voting</h1>
        <button
          data-testid="github"
          className={styles.button}
          style={{ backgroundImage: `url(${BgLogin})` }}
          onClick={login}
        >
          <GithubIcon width={40} height={40} />
          Sign In with Github
        </button>
      </div>
    </section>
  );
};

export default Login;
