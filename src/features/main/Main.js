import { Link } from 'react-router-dom';

import styles from './Main.module.css';

const Main = () => {
  return (
    <section className={styles.content}>
      <h1>App: Survey & Voting</h1>
      <button>
        <Link to="/survey/new">Survey</Link>
      </button>
      <button>
        <Link to="/voting/new">Voting</Link>
      </button>
    </section>
  );
};

export default Main;
