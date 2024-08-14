const Shimmer = () => {
  return Array(15)
    .fill(0)
    .map((_, i) => (
      <div key={i} className='p-2 m-2 border border-gray-600 rounded-lg'>
        <div className='w-64 h-64 bg-gray-200'></div>
      </div>
    ));
};

export default Shimmer;
