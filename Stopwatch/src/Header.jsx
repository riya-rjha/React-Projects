import React from 'react'

const Header = ({title}) => {
    return (
        <h1
            style={{
                textAlign: "center",
                color: "white"
            }}
        >{title}</h1>
    )
}

export default Header