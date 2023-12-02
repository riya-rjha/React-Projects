import React from 'react'
import Notes from './Notes'

const Button = ({ notes, setNotes, isActive, setIsActive }) => {

    const handleClick = () => {
        const id = notes.length + 1;
        const note = "";
        const newItem = { id, note };
        const updatedNotes = [...notes, newItem];
        setNotes(updatedNotes);
        setIsActive(true);
    }

    return (
        <div>
            <button onClick={handleClick}>
                <img src="Images/edit.png" id='editImg' />
                <p>Create Notes</p>
            </button>

            {notes.length ? (
                notes.map((item) => (
                    <Notes item={item} key={item.id} notes={notes} setNotes={setNotes} />
                ))
            ) : (
                <p>
                    No notes to display!
                </p>
            )}

        </div>
    )
}

export default Button