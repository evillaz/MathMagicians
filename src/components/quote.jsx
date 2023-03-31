import PropTypes from 'prop-types';

const Quote = ({ quote, author }) => (
  <div className="quote">
    {quote}
    <span className="author">
      <br />
      &quot;
      {author}
      &quot;
    </span>
  </div>
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
