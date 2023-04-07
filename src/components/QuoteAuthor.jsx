import PropTypes from 'prop-types';
import styles from '../styles/Quote.module.css';

const QuoteAuthor = ({ quote, author }) => (
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

QuoteAuthor.defaultProps = {
  quote: '',
  author: '',
};

QuoteAuthor.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

export default QuoteAuthor;
