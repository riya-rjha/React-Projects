import React from 'react'
import { useEffect } from 'react';

const Notes = ({ notes, setNotes, isActive }) => {

    //save notes
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    //get notes
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(items);
    }, []);

    const handleDelete = (e) => {
        e.target.parentElement.remove();
    }

    return (
        <div>
            {isActive ? (
                <div className='notes-container'>
                    <p className="notes-content"
                        contentEditable='true'
                        id='notes'
                    >
                    </p>
                        <img src="Images/delete.png" id='deleteIcon' onClick={handleDelete} />
                </div>
            ) : <p></p>}
        </div>
    )
}

export default Notes