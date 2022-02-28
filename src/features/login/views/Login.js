import styles from './Login.module.css';
import { GithubIcon } from '../../../assets';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { user, isLoading, logOut, signInWithGithub } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <>
        <div>
          <h1>Hello {user.email}</h1>
          <button onClick={logOut}>Sign Out</button>
        </div>
      </>
    );
  }

  return (
    <div className={styles.login}>
      <div>
        <h1>Hello, please SignIn</h1>

        <button onClick={signInWithGithub}>
          <GithubIcon width={40} height={40} />
          Sign In with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
