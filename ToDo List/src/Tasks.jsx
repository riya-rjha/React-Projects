import React from 'react'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

const Tasks = ({ tasks, setTasks, item }) => {

  // const [isClicked, setIsClicked] = useState(false);

  const handleCheck = (id) => {
    // setIsClicked(!isClicked);
    const updatedItems = tasks.map(item => (item.id == id ? {...item, checked: !item.checked} : item));
    setTasks(updatedItems);
  }

  const handleDelete = (id) => {
    const updatedItems = tasks.filter(task => (
      task.id != id
    ));
    setTasks(updatedItems);
  }


  return (
		<div>
			<ul id='tasks-checklist'>
				<div onClick={() => handleCheck(item.id)}>
					<img
						src={item.checked ? "Images/checked.png" : "Images/unchecked.png"}
						className='checkIcon'
						// onClick={() => handleCheck(item.id)}
					/>
					{item.checked ? (
						<li style={{ textDecoration: "line-through" }}>{item.task}</li>
					) : (
						<li>{item.task}</li>
					)}
				</div>

				<MdDelete
					style={{ cursor: "pointer" }}
					onClick={() => handleDelete(item.id)}
				/>
			</ul>
		</div>
	);
}

export default Tasks