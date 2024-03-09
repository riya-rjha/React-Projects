import React from 'react';

const App = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-24 w-full gap-14'>
      <div className="flex items-center justify-around gap-16">
        <p className='text-2xl'>Click for Success!</p>
        <button className='outline-none p-2 rounded-lg bg-red-100 border-4 font-semibold'>Success</button>
      </div>
      <div className="flex items-center justify-around gap-16">
        <p className='text-2xl'>Click for Error!</p>
        <button className='outline-none p-2 rounded-lg bg-red-100 border-4 font-semibold'>Error</button>
      </div>
      <div className="flex items-center justify-around gap-16">
        <p className='text-2xl'>Click for Invalid!</p>
        <button className='outline-none p-2 rounded-lg bg-red-100 border-4 font-semibold'>Invalid</button>
      </div>
    </div>
  );
};

export default App;
