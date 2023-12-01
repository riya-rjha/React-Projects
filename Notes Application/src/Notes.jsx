import React from 'react'
import { useEffect } from 'react';

const Notes = ({ notes, setNotes, isActive }) => {

    //save notes
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        // Only update if there are changes
        if (JSON.stringify(storedNotes) !== JSON.stringify(notes)) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('notes')) || [];
    //     console.log('Retrieved notes from localStorage:', items);
    //     setNotes(items);
    // }, []);


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
                        {notes.note}
                    </p>
                    <img src="Images/delete.png" id='deleteIcon' onClick={handleDelete} />
                </div>
            ) : <p></p>}
        </div>
    )
}

export default Notes