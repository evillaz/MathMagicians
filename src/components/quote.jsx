import PropTypes from 'prop-types';
import styles from '../styles/Quote.module.css';

const Quote = ({ quote, author }) => (
  <>
    <span className={styles.quote}>
      {quote}
    </span>
    <span className={styles.author}>
      <br />
      &quot;
      {author}
      &quot;
    </span>
  </>
);

Quote.defaultProps = {
  quote: '',
  author: '',
};

Quote.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

export default Quote;
