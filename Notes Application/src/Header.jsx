import React from 'react'

const Header = ({title}) => {
  return (
    <div className='header'>
        <img src="Images/logo.png" id='logoImg'/>
        {title}
    </div>
  )
}

export default Header