import React from 'react';
import { nanoid } from 'nanoid';
import Tasks from './Tasks';
const addTask = ({ tasks, setTasks }) => {

    const addNewTask = () => {
        const id = nanoid();
        const task = "";
        const updatedTask = [...tasks];
        setTasks(updatedTask);
    }

    return (
        <>
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
                        autoFocus
                        spellCheck='false'
                        value={tasks}
                        onChange={
                            (e) => {
                                setTasks(e.target.value)
                            }}
                    />
                    <button
                        id="button-img"
                        onClick={addNewTask}
                    >Add</button>
                </div>
                <div>
                    {tasks.length ? (
                        tasks.map((item) => (
                            <Tasks
                                tasks={tasks}
                                setTasks={setTasks}
                                item={item}
                                key={item.id}
                            />
                        ))
                    ) : <p style={{
                        color: "red",
                        textAlign: "left",
                        paddingLeft: "22px",
                        paddingBottom: "5px"
                    }}
                    >Nothing to display!</p>}

                </div>
            </div >
        </>
    )
}
export default addTask