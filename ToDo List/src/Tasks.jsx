import React from 'react'
import { useEffect } from 'react';
import { MdDelete } from "react-icons/md";

const Tasks = ({tasks, setTasks, item}) => {

  const [edit, setEdit] = useState(item.task);

  const handleDelete = (id) => {
    const updatedItems = tasks.filter(task => (
      task.id != id
    ));
    setTasks(updatedItems);
  }

  useEffect(() => {
    const taskss = [...tasks]
    const index = taskss.findIndex(task => task.id == item.id)
    taskss[index].task = edit;
    setTasks(taskss);
  }, [edit]);


  return (
    <div>
        <ul id="tasks-checklist">
            <li
              value={edit}
              onChange={
                (e)=>{
                  setEdit(e.target.value)
                }}
            >
                
            </li>
        <MdDelete onClick={handleDelete(item.id)}/>
        </ul>
    </div>
  )
}

export default Tasks