import React, { useState } from 'react';
import Time from './Time.jsx';
import Buttons from './Buttons.jsx';

const Box = () => {
    const [time, setTime] = useState(0); 
    const [intervalId, setIntervalId] = useState(null);
    const [isActive, setIsActive] = useState(false);
    
    const handlePause = () => {
        if (!isActive) {
            setIsActive(true);
            const newIntervalId = setInterval(() => {
                setTime((prevTime) => prevTime+60);
            }, 60);
            setIntervalId(newIntervalId);
        }
    };

    const handleReset = () => {
        setTime(0);
    };

    const handleStop = () => {
        if (isActive) {
            setIsActive(false);
            clearInterval(intervalId);
        }
    };

    return (
        <div
            className="box"
            style={{
                height: '50vh',
                width: '45%',
                margin: '50px auto 0px',
                borderRadius: '4px',
            }}
        >
            <h2>
                <Time time={time} />
            </h2>

            <div>
                <Buttons
                    handlePause={handlePause}
                    handleReset={handleReset}
                    handleStop={handleStop}
                />
            </div>
        </div>
    );
};

export default Box;
