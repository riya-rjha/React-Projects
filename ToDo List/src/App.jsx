import { useState, useEffect } from 'react'
import './App.css'
import AddTask from './addTask'

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <>
      <AddTask 
        tasks={tasks}
        setTasks={setTasks}
      />
        
    </>
  )
}

export default App
