import { useState, useEffect } from 'react';
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    setIsLoading(true);

    const data = await fetch('https://meme-api.com/gimme/20');
    const json = await data.json();
    setMemes(json.memes);

    setIsLoading(false);
  };

  return (
    <div className='flex flex-wrap'>
      {isLoading && <Shimmer />}
      {memes.map((meme) => (
        <MemeCard key={meme.postLink} meme={meme} />
      ))}
    </div>
  );
};

export default Body;
