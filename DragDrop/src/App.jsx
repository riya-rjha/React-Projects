import React, { useState } from 'react';
import './index.css';

function App() {
  const [item, setItem] = useState(null);

  const handleStart = (e, id) => {
    setItem(document.getElementById(id));
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, id) => {
    const targetBox = document.getElementById(id);
    e.preventDefault();

    if (id === 'right') {
      if (item.parentElement.id !== 'right') {
        targetBox.appendChild(item);
      }
    } else {
      if (item.parentElement.id === 'right') {
        targetBox.appendChild(item);
      }
    }

    setItem(null);
  };

  return (
    <div className="container">
      <div id="left">
        <div
          id='list1'
          draggable
          className="list"
          onDragStart={(e) => handleStart(e, "list1")}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          <span role="img" aria-label="List Icon">📋</span> <div className='heading'> Reactjs - Components</div>
          <p>Build reusable UI components with React.js</p>
        </div>
        <div
          id="list2"
          draggable
          className="list"
          onDragStart={(e) => handleStart(e, "list2")}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          <span role="img" aria-label="List Icon">📋</span><div className='heading'> Nextjs - Animations</div>
          <p>Create stunning animations with Next.js</p>
        </div>
        <div
          id="list3"
          draggable
          className="list"
          onDragStart={(e) => handleStart(e, "list3")}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          <span role="img" aria-label="List Icon">📋</span> <div className='heading'>HTML - Layouts</div>
          <p>Design responsive layouts using HTML</p>
        </div>
        <div
          id="list4"
          draggable
          className="list"
          onDragStart={(e) => handleStart(e, "list4")}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          <span role="img" aria-label="List Icon">📋</span> <div className='heading'>CSS - Styling</div>
          <p>Add beautiful styles to your web pages with CSS</p>
        </div>
        <div
          id="list5"
          draggable
          className="list"
          onDragStart={(e) => handleStart(e, "list5")}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          <span role="img" aria-label="List Icon">📋</span> <div className='heading'>JavaScript - Functionalities</div>
          <p>Implement various functionalities using JavaScript</p>
        </div>
      </div>
      <div
        id="right"
        onDragOver={handleDrag}
        onDrop={(e) => handleDrop(e, 'right')}
      >
        <p>Drop In Here If Completed</p>
      </div>
    </div>
  );
}

export default App;
