import { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './quote';

const DisplayQuote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes?category=leadership';

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url, {
          headers: {
            'X-Api-Key': 'k7shCDZxzekW1jb0EMX/Fg==FsmufvqiSIUwWL1Q',
          },
          mode: 'cors',
        });
        const result = res.data[0];
        setData(result);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setData, setIsLoading]);
  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Quote quote={data.quote} author={data.author} />
  );
};

export default DisplayQuote;
