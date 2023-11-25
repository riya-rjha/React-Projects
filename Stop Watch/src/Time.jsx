import React from 'react'
import { useState } from 'react'

const Time = () => {
    const [time, setTime] = useState([0, 0, ":", 0, 0, ":", 0, 0]);
    const changeTime = () => {
        let hrs = 0;
        let mins = 0;
        let secs = 0;
        secs++;
        if (secs > 59) {
            secs = 0;
            mins++;
        }
        if (mins > 59) {
            mins = 0;
            hrs++;
        }
        setInterval(() => {
            changeTime();
            setTime(time);
        }, 1000);
    }

    return (
        <p
            style={{
                paddingTop: "55px",
                fontSize: "45px",
                color: "black",
                fontFamily: "cursive",
                letterSpacing: "1.8px"
            }}
        >{time}
        </p >
    )
}

export default Time