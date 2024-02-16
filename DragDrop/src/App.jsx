import React from 'react';
import { useState } from 'react';
import './index.css';

function App() {
  const [item, setItem] = useState(null);

  const handleStart = (item) => {
    setItem(item);
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
          draggable
          className="list"
          onDragStart={() => handleStart(document.getElementById("list1"))}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          List No 1
        </div>
        <div
          id="list2"
          draggable
          className="list"
          onDragStart={() => handleStart(document.getElementById("list2"))}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          List No 2
        </div>
        <div
          id="list3"
          draggable
          className="list"
          onDragStart={() => handleStart(document.getElementById("list3"))}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          List No 3
        </div>
        <div
          id="list4"
          draggable
          className="list"
          onDragStart={() => handleStart(document.getElementById("list4"))}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          List No 4
        </div>
        <div
          id="list5"
          draggable
          className="list"
          onDragStart={() => handleStart(document.getElementById("list5"))}
          onDragOver={handleDrag}
          onDrop={(e) => handleDrop(e, 'left')}
        >
          List No 5
        </div>
      </div>
      <div
        id="right"
        onDragOver={handleDrag}
        onDrop={(e) => handleDrop(e, 'right')}
      ></div>
    </div>
  );
}

export default App;
