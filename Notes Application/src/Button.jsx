import React from 'react'
import Notes from './Notes'
import {nanoid} from 'nanoid'; //unique string id generator
const Button = ({ notes, setNotes}) => {

    const handleClick = () => {
        const id = nanoid();
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