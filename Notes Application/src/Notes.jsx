import React from 'react'
// import { useEffect } from 'react';

const Notes = ({ notes, setNotes, isActive }) => {

    const handleDelete = () => {
        const updatedItems = notes.filter((note) => (
            note.id != id
        ))
        setNotes(updatedItems)
    }

    return (
        <div>
            {isActive ? (
                <div className='notes-container'>
                    <p className="notes-content"
                        contentEditable='true'
                        id='notes'
                    >
                        {item.note}
                    </p>
                    <img src="Images/delete.png" id='deleteIcon' onClick={handleDelete} />
                </div>
            ) : <p></p>}
        </div>
    )
}

export default Notes