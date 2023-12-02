import React from 'react'
import { useState, useEffect } from 'react';

const Notes = ({ notes, setNotes, item }) => {
    const [edit, setEdit] = useState(item.note)
    const handleDelete = (id) => {
        const updatedItems = notes.filter((note) => (
            note.id != id
        ))
        setNotes(updatedItems)
    }

    useEffect(() => {
        const notess = [...notes]
        const index = notess.findIndex(note => note.id == item.id)
                    notess[index].note = edit;
                    setNotes(notess);
    }, [edit]);

    return (
        <div>
            <div className='notes-container'>
                <p
                    className="notes-content"
                    id='notes'
                    value={edit}
                    onChange={(e) => {
                        setEdit(e.target.value);
                    }}
                >
                </p>
                <img src="Images/delete.png" id='deleteIcon' onClick={() => handleDelete(item.id)} />
            </div>
        </div>
    )
}

export default Notes