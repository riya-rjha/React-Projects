import React from 'react'
import TextareaAutosize from "react-textarea-autosize";
import { useState, useEffect } from 'react';

const Notes = ({ notes, setNotes, item}) => {
    const [edit, setEdit] = useState(item.note)
    const handleDelete = (id) => {
        const updatedItems = notes.filter((note) => (
            note.id != id
        ))
        setNotes(updatedItems)
    }

    useEffect(() => {
			const notess = [...notes];
			notess[item.id-1].note = edit;
			setNotes(notess);
		}, [edit]);

    return (
        <div>
                <div className='notes-container'>
                    <TextareaAutosize 
                      className="notes-content"
                        id='notes'
                        value={edit}
                        onChange={(e) => {
                            setEdit(e.target.value);
                        }}
                     />
                    <img src="Images/delete.png" id='deleteIcon' onClick={() => handleDelete(item.id)} />
                </div>
        </div>
    )
}

export default Notes