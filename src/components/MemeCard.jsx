const MemeCard = ({ meme }) => {
  return (
    <div className='p-2 m-2 border border-black rounded-lg'>
      <img className='h-64 w-64' src={meme.url} alt={meme.title} />
      <p>{meme.author}</p>
    </div>
  );
};

export default MemeCard;
