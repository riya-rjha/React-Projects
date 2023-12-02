import React from 'react'
import './index.css'
import Header from './Header'
import Button from './Button'
import { useState, useEffect } from 'react'

const App = () => {

    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

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