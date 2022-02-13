import { Link } from 'react-router-dom';
import styles from './Main.module.css';

const Main = () => {
  return (
    <section className={styles.content}>
      <h1 className={styles.title}>App: Survey & Voting</h1>
      <section className={styles.buttons}>
        <Link to="/survey/new" className={styles.button__text}>
          <button className={styles.button}>Survey</button>
        </Link>
        <Link to="/voting/new" className={styles.button__text}>
          <button className={styles.button}>Voting</button>
        </Link>
      </section>
    </section>
  );
};

export default Main;
