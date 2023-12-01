import React from 'react'
import './index.css'
import Header from './Header'
import Button from './Button'
import { useState } from 'react'

const App = () => {

    const [notes, setNotes] = useState([
        {
            id: 0,
            note: "This is note 0",
        },
        {
            id: 1,
            note: "This is note 1",
        },
        {
            id: 2,
            note: "This is note 2",
        }
    ]);
    //empty array - object
    //onClick create -> id = id+1
    //put in notes using spread operator
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='container'>
            <Header title="Notes" />
            <Button
                notes={notes}
                setNotes={setNotes}
                isActive={isActive}
                setIsActive={setIsActive}
            />
        </div>
    )
}

export default App