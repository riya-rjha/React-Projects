import React from 'react'

const Button = ({ notes, setNotes}) => {

    const handleClick = () => {
        const id = notes.length + 1;
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