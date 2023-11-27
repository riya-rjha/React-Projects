import React from 'react'
import './index.css'

const Button = ({ input, setInput }) => {

    const handleInput = (e) => {
        console.log('Hello');
        setInput(e.target.value);
    }

    return (
        <div>
            
        </div>
    )
}

export default Button