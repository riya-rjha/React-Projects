import React from 'react'
import Notes from './Notes'

const Button = ({ notes, setNotes, isActive, setIsActive }) => {

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