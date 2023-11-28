import React from 'react'

const Notes = ({ notes, note, isActive, setIsActive }) => {

    // const notes = document.getElementById('notes');

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