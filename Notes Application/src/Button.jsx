import React from 'react'
import Notes from './Notes'

const Button = ({ notes, setNotes, isActive, setIsActive }) => {

    const handleClick = () => {
        setNotes(prevNotes => [...prevNotes, ''])
        setIsActive(true);
    }
    const fun = () => {
        setNotes((id)=>id+1);
        console.log(notes);
    }
    return (
        <div>
            <button onClick={handleClick}>
                <img src="Images/edit.png" id='editImg' />
                <p
                    onClick={fun}
                >Create Notes</p>
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