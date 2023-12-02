import React from 'react'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

const Tasks = ({ tasks, setTasks, item }) => {

  const [isClicked, setIsClicked] = useState(false);

  const handleCheck = () => {
    setIsClicked(!isClicked);
  }

  const handleDelete = (id) => {
    const updatedItems = tasks.filter(task => (
      task.id != id
    ));
    setTasks(updatedItems);
  }


  return (
    <div>
      <ul id="tasks-checklist">
        <img src="Images/unchecked.png" className='checkIcon' onClick={handleCheck} />
        {isClicked ? 
        <li style={{textDecoration: "line-through"}}>
          {item.task}
        </li> 
        :
        (<li>{item.task}</li>)
        }
        
        <MdDelete
          style={{ cursor: 'pointer' }}
          onClick={() => handleDelete(item.id)} />
      </ul>
    </div>
  )
}

export default Tasks