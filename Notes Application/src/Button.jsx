import React from 'react'
import { nanoid } from "nanoid"; //generates unique 23 characters string for id

const Button = ({ notes, setNotes}) => {

    const handleClick = () => {
        const id = nanoid();
        const note = "";
        const newItem = { id, note };
        const updatedNotes = [...notes, newItem];
        setNotes(updatedNotes);
    }

    return (
        <div>
            <button onClick={handleClick}>
                <img src="Images/edit.png" id='editImg' />
                <p>Create Notes</p>
            </button>
        </div>
    )
}

export default Button