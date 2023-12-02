import React from 'react'
import { useEffect } from 'react';
import { MdDelete } from "react-icons/md";

const Tasks = ({tasks, setTasks, item}) => {

  const handleDelete = (id) => {
    const updatedItems = tasks.filter(task => (
      task.id != id
    ));
    setTasks(updatedItems);
  }


  return (
    <div>
        <ul id="tasks-checklist">
            <li>
                {tasks}
            </li>
        <MdDelete onClick={handleDelete(item.id)}/>
        </ul>
    </div>
  )
}

export default Tasks