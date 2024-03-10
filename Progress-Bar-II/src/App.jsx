import React, { useState, useEffect } from 'react';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress === 95) {
        clearInterval(interval);
      } else {
        setProgress(prevProgress => prevProgress + 1);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex items-center justify-center w-full min-h-[100vh] h-screen bg-green-100">
      <div className=" bg-white shadow-xl rounded-full w-40 h-40 flex items-center justify-center">
        <div className=" bg-white rounded-full w-[120px] h-[120px] flex items-center justify-center shadow-inner">
          <div className="text-2xl font-bold">
            {progress}%
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="absolute bottom-[222px] right-[603px]">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" style={{ strokeDasharray: '520', strokeDashoffset: `${520 - (520 * progress) / 100}` }} />
      </svg>
    </div>
  );
};

export default App;
