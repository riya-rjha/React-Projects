import React, { useState } from 'react';
import Time from './Time.jsx';
import Buttons from './Buttons.jsx';

const Box = () => {

    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const handlePause = () => {
        console.log("Paused");
    }

    const handleReset = () => {
        console.log("Reset");
    }

    const handleStop = () => {
        console.log("Stopped");
    }

    return (
        <div className='box'
            style={{
                height: "50vh",
                width: "45%",
                margin: "50px auto 0px",
                borderRadius: "4px"
            }}
        >
            <h2>
                <Time />
            </h2>

            <div>
                <Buttons 
                    handlePause={handlePause}
                    handleReset={handleReset}
                    handleStop={handleStop}
                />
            </div>
        </div>
    )
}

export default Box