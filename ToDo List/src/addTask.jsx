import React from 'react'
import { useState } from 'react'

const addTask = () => {

    const [newTask, addNewTask] = useState('');
    const [task, setTask] = useState([]);
    const addItem = async (item) => {
        const id = task.length ? task[task.length - 1].id + 1 : 1; //to calc id of newElement being placed
        const myTask = { id, checked: false, item };  //to define attributes for newElement
        const listTask = [...task, myTask]; //to save myNewTask in task using spread operator
        setTask(listTask); //save to Local Storage

        //Adding task through CRUD Operations - Data from Data/db.json
        const postOperations = { //object notation (POST Operations)
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' //data being sent in JSON Format
            },
            body: JSON.stringify(myNewItem)
        }
    }
    
        return (
            <div>
                <div className="container">
                    <div id="to-do-heading">
                        <h2>To-Do List</h2>
                        <img src="Images/icon.png" alt="To-Do-List Image" />
                    </div>
                    <div id="search-bar">
                        <input
                            type="text"
                            name="SearchBar"
                            id="inputField"
                            required
                            placeholder="Add your task"
                            value={newTask}
                            onChange={(e) => addNewTask(e.target.value)}
                            autoFocus
                            spellCheck='false'
                        />
                        <button id="button-img">Add</button>
                    </div>
                </div>
            </div>
        )
    }
    export default addTask