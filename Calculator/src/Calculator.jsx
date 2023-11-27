import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleInput = (value) => {
        //current value is appended to the previous value stored in the input field
        setInput((prevInput) => prevInput + value);
    }

    const calculate = () => {
        let value = input;
        let ans = 0;
        let expression = 0;
        for (let i = 0; i < value.length; i++) {
            switch (value[i]) {
                case '+':
                    expression = value.split('+');
                    ans += parseFloat(expression[0]) + parseFloat(expression[1]);
                    break;
                case '-':
                    expression = value.split('-');
                    ans += parseFloat(expression[0]) - parseFloat(expression[1]);
                    break;
                case '*':
                    expression = value.split('*');
                    ans += parseFloat(expression[0]) * parseFloat(expression[1]);
                    break;
                case '/':
                    expression = value.split('/');
                    ans += parseFloat(expression[0]) / parseFloat(expression[1]);
                    break;
                default:
                    break;
            }
        }
        setInput(ans);
    }

    const handleClick = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            calculate();
        }
    }

    const handleDelete = () => {
        let newInput = input.slice(0, -1);
        setInput(newInput);
    }

    return (
        <div className='calculator'>
            <form>
                <div className='inputField'>
                    <input type="text"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        onKeyDown={handleClick}
                    />
                </div>
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
            </form>
        </div>

    )
}

export default Calculator