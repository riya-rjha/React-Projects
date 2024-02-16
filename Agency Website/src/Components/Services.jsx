import React from 'react'

const Services = () => {
  return (
    <div className='bg-white ml-[55px] mr-[55px] rounded-lg '>
      <div className="flex  mt-[80px] items-center gap-20">
        <img src="../Images/work2.avif" className='rounded-full w-[380px] h-[252px] ml-[80px]' />
        <div className='ml-[-55px]'>
          <div className='text-3xl text-orange-950 drop-shadow mt-6'>
            We create some things for you!
          </div>
          <div className='mt-2 mb-6 text-[20px]'><span className='text-3xl text-orange-600 italic'>Designs</span> for your success future!</div>
          <div >
            <ul className='mt-8 text-[18px] mb-6'>
              <li className='list-disc ml-4'><span className='drop-shadow text-[20px] font-semibold text-green-950'>Inspiration Gallery:</span> a variety of UI/UX ideas in the inspiration gallery to get fast creative inspiration</li>
              <li className='list-disc ml-4'><span className='drop-shadow text-[20px] font-semibold text-green-950'>Case Studies: </span>Gain knowledge from actual initiatives and triumphs.</li>
              <li className='list-disc ml-4'><span className='drop-shadow text-[20px] font-semibold text-green-950'>Trend Insights: </span>Stay ahead with the latest design trends and forecasts</li>
              <li className='list-disc ml-4'><span className='drop-shadow text-[20px] font-semibold text-green-950'>Workshops & Webinars: </span>Gain practical knowledge and advice from experts.</li>
              <li className='list-disc ml-4'><span className='drop-shadow text-[20px] font-semibold text-green-950'>Community Involvement: </span>Make connections, exchange ideas, and work together.</li>
            </ul>
          </div>
          <button
            className=' border-green-800 text text-xl text-green-800 
            border-2 p-[8px] pl-[25px] pr-[25px] 
          rounded-md hover:bg-green-800 
          hover:text-white hover:transition-all delay-75 mb-5'
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services