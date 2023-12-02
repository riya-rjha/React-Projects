import React from 'react'
import './index.css'
import Header from './Header'
import Button from './Button'
import Notes from './Notes'
import { useState, useEffect } from 'react'

const App = () => {

    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
			<div className='container'>
				<Header title='Notes' />
				<Button notes={notes} setNotes={setNotes} />
				{notes.length ? (
					notes.map((item) => (
						<Notes
							item={item}
							key={item.id}
							notes={notes}
							setNotes={setNotes}
						/>
					))
				) : (
					<p 
						style={{color: "red"}}
					>No notes to display!</p>
				)}
			</div>
		);
}

export default App