import Paragraph from '../components/Paragraph';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.homeWrapper}>
    <h2>
      Welcome to our page!
    </h2>
    <div className={styles.paragraphContainer}>
      <Paragraph />
      <Paragraph />
    </div>
  </div>
);

export default Home;
