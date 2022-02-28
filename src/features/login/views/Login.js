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
    <div className={styles.login}>
      <div>
        <h1>Hello, please SignIn</h1>

        <button onClick={login}>
          <GithubIcon width={40} height={40} />
          Sign In with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
