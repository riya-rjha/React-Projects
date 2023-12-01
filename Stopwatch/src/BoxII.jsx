import React, { useState } from 'react';
import Buttons from './Buttons.jsx';

const Box = () => {

    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    //window - allows execution of code at specific intervals 
    const handlePause = () => {
        window.timer = (setInterval(() => {
            setSec((sec) => sec + 1);
        }, 1000));
    }

    const handleReset = () => {
        clearInterval(window.timer);
        setHour(0);
        setMin(0);
        setSec(0);
    }

    const handleStop = () => {
        clearInterval(window.timer);
    }

    if (sec > 59) {
        setMin((min) => min + 1);
        setSec(0);
    }

    if (min > 59) {
        setHour((hr) => hr + 1);
        setMin(0);
    }

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
                <span className="timingII">{hour < 10 ? "0" + hour : hour}:</span>
                <span className="timingII">{min < 10 ? "0" + min : min}:</span>
                <span className="timingII">{sec < 10 ? "0" + sec : sec}</span>
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
