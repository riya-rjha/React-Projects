import React from 'react';

const Header = () => {
  return (
    <div id='header' className='flex items-center justify-between'>
      <div className='text-[24px] ml-[80px] font-bold underline'>
        Let's Create
      </div>
      <div>
        <ul className='flex cursor-pointer m-6'>
          <a href="#aboutUS">
            <li
              className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75
                hover:underline hover:delay-75
              '>
              <a href="#header">About Us</a>
            </li>
          </a>
          <li
            className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75
            hover:underline hover:delay-75
            '>
            <a href="#services">Services</a>
          </li>
          <li
            className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75
            hover:underline hover:delay-75 
            '>
            <a href="#contact">Contact Us</a>
          </li>
          <li
            className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75
            hover:underline hover:delay-75
            '>
            <a href="#footer">Footer</a>
          </li>
        </ul>
      </div>
      <div>
        <button className=' border-green-800 text text-2xl text-green-800 mr-[35px] border-4 p-[6px] rounded-md hover:bg-green-800 hover:text-white hover:transition-all delay-75'>Let's Talk</button>
      </div>
    </div>
  )
}

export default Header