import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white ml-[55px] mr-[55px] mt-10 rounded-lg '>
      <div className="flex flex-col items-center">
        <div>Contact Us</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" required name="name" id="name" />
          </div>
          <div>
            <label htmlFor="no">Mobile No</label>
            <input type="number" required name="no" id="no" />
          </div>
          <div>
            <label htmlFor="email">Email Id</label>
            <input type="email" required name="email" id="email " />
          </div>
          <div>
            <label htmlFor="text">Feedback(If any)</label>
            <textarea name="text" id="text" ></textarea>
          </div>
          <div>
            <button className=' border-green-800 text text-xl text-green-800 
            border-2 p-[8px] pl-[25px] pr-[25px] 
          rounded-md hover:bg-green-800 
          hover:text-white hover:transition-all delay-75 mb-5'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact