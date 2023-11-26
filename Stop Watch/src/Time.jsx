import React from 'react'

const Time = ({ time }) => {


    return (
        <div className='timing'>
            <p
                style={{
                    paddingTop: "55px",
                    fontSize: "45px",
                    color: "black",
                    fontFamily: "cursive",
                    letterSpacing: "1.8px"
                }}
            >{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </p >
            <p
                style={{
                    paddingTop: "55px",
                    fontSize: "45px",
                    color: "black",
                    fontFamily: "cursive",
                    letterSpacing: "1.8px"
                }}
            >{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
            </p >
            <p
                style={{
                    paddingTop: "55px",
                    fontSize: "45px",
                    color: "black",
                    fontFamily: "cursive",
                    letterSpacing: "1.8px"
                }}
            >{("0" + ((time / 10) % 100)).slice(-2)}
            </p >
        </div>
    )
}

export default Time