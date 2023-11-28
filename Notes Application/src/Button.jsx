import React from 'react'
import Notes from './Notes'

const Button = ({ notes, setNotes, isActive, setIsActive }) => {

    const handleClick = () => {
        setNotes(prevNotes => [...prevNotes, ''])
        setIsActive(true);
    }
    return (
        <div>
            <button onClick={handleClick}>
                <img src="Images/edit.png" id='editImg' />
                <p>Create Notes</p>
            </button>
            {notes.map((note, index) => (
                <Notes
                    key={index}
                    notes={notes}
                    setNotes={setNotes}
                    isActive={isActive}
                />
            ))}

        </div>
    )
}

export default Button