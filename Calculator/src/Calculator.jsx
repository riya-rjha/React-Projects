import React, { useState } from 'react'
import Button from './Button'

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
                <Button
                    handleInput={handleInput}
                    handleDelete={handleDelete}
                    input={input}
                    setInput={setInput}
                />
            </form>
        </div>

    )
}

export default Calculator