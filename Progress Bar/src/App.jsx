import React, { useState, useEffect } from 'react';
import CorrectIcon from '../Images/correct.png';
import WrongIcon from '../Images/wrong.png';
import InvalidIcon from '../Images/invalid.png';

const App = () => {
  const arr = ["Success", "Error", "Invalid"];

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToasts(prevToasts => prevToasts.slice(1));
    }, 8000); 
    return () => clearTimeout(timeout);
  }, [toasts]);

  const showToast = (type) => {
    let message;
    let icon;
    switch (type) {
      case "Success":
        message = "Successfully Submitted";
        icon = CorrectIcon;
        break;
      case "Error":
        message = "Please fix the error!";
        icon = WrongIcon;
        break;
      case "Invalid":
        message = "Invalid input, check again!";
        icon = InvalidIcon;
        break;
      default:
        message = "";
    }
    setToasts(prevToasts => [...prevToasts, { id: Date.now(), type, message, icon }]);
  };

  const removeToast = (id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  };

  return (
    <div className='flex items-center justify-center mt-24 w-full gap-14'>
      <div className="flex items-center justify-around gap-16 buttons">
        {arr.map((text, index) => (
          <button
            key={index}
            className='outline-none px-12 py-2 rounded-lg bg-gray-100 border-black 
            border-4 text-[20px] text-center 
            font-semibold delay-100 transition hover:bg-black hover:text-white'
            onClick={() => showToast(text)}
          >
            {text}
          </button>
        ))}
      </div>
      <div id="toastBox">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type.toLowerCase()} shadow-lg p-4 rounded-md flex items-center justify-evenly gap-6 font-bold animate-toast`} onAnimationEnd={() => removeToast(toast.id)}>
            <img src={toast.icon} alt={toast.type} className="w-8" />
            <p>{toast.message}</p>
            <div className={`animation ${toast.type.toLowerCase()}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
