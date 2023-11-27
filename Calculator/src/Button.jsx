import React from 'react'
import './index.css'

const Button = ({ handleInput, input, setInput, calculate }) => {

    const handleDelete = () => {
        let newInput = input.slice(0, -1); //deleting last element
        setInput(newInput);
    }

    return (
        <div>
            <div className="buttons">
                <button onClick={() => setInput('')} type='button'>AC</button>
                <button type='button' onClick={() => handleDelete()}>DE</button>
                <button type='button' onClick={() => handleInput('.')}>.</button>
                <button type='button' onClick={() => handleInput('/')}>/</button>
            </div>
            <div className="buttons">
                <button type='button' onClick={() => handleInput('7')} >7</button>
                <button type='button' onClick={() => handleInput('8')}>8</button>
                <button type='button' onClick={() => handleInput('9')}>9</button>
                <button type='button' onClick={() => handleInput('*')}>*</button>
            </div>
            <div className="buttons">
                <button type='button' onClick={() => handleInput('4')}>4</button>
                <button type='button' onClick={() => handleInput('5')}>5</button>
                <button type='button' onClick={() => handleInput('6')}>6</button>
                <button type='button' onClick={() => handleInput('-')}>-</button>
            </div>
            <div className="buttons">
                <button type='button' onClick={() => handleInput('1')}>1</button>
                <button type='button' onClick={() => handleInput('2')}>2</button>
                <button type='button' onClick={() => handleInput('3')}>3</button>
                <button type='button' onClick={() => handleInput('+')}>+</button>
            </div>
            <div className="buttons">
                <button type='button' onClick={() => handleInput('00')}>00</button>
                <button type='button' onClick={() => handleInput('0')}>0</button>
                <button id='equalSign' type='button' onClick={() => calculate()}>=</button>
            </div>
        </div>
    )
}

export default Button