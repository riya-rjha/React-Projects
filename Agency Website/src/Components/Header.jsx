import React from 'react';
import Footer from '../Components/Footer.jsx';
import Contact from '../Components/Contact.jsx';
import Main from '../Components/Main.jsx';
import Services from '../Components/Services.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
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
              About Us
            </li>
          </a>
          <li
            className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75
            hover:underline hover:delay-75
            '>
            Services
          </li>
          <li
            className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75
            hover:underline hover:delay-75
            '>
            Contact Us
          </li>
          <li
            className='p-6 text-[20px] hover:text-blue-950 text-orange-800 transition-all delay-75
            hover:underline hover:delay-75
            '>
            Footer
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