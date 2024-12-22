import React from 'react'

function Teachers() {
  return (
    <div className=' lg:h-[120vh] h-[135vh] w-full lg:bg-[#EFEAE0] '>
        {/* <div className='h-[10vh]'></div> */}
        <div className='h-[20vh] flex justify-center items-center lg:text-[64px] text-[30px] font-semibold font-serif'>
            <label>OUR TEACHERS</label>
        </div>
        
        <div className=' h-[90vh] w-[100%] flex lg:justify-between items-center  lg:flex-row flex-col'>
      
      <div className='Teacher-img  lg:w-[50%] w-[95%] lg:h-[90vh] h-[60vh]  flex  lg:justify-end '>
          
          <div className='  h-[80vh] lg:w-[60%] w-full overflow-hidden'>
            <img src='https://optim.tildacdn.one/tild3732-6662-4534-b366-363439393030/-/resize/600x/-/format/webp/_MG_6868_-_c.jpg' className=' img-hover object-cover lg:h-full'></img>
          </div>
          <div className=' Teacher-img1 ' >
            <img src='https://hips.hearstapps.com/hmg-prod/images/girl-practices-yoga-in-the-studio-royalty-free-image-1705935356.jpg' className='h-full object-cover'></img>
          </div>
          

      </div>
      <div className=' lg:w-[45%] w-[95%] lg:h-[80vh] h-[50vh] flex flex-col justify-center items-center lg:gap-7 gap-3'>
      
        <div className='h-[50vh] w-[100%] flex flex-col justify-center items-center gap-5 lg:gap-0'>
        <label className='h-[4vh] font-serif text-[20px] '> Founder, SOUND HEALER</label>
        <label className='font-serif text-[30px] font-bold '>Yogi Bhanu</label>
        <label className='h-[30px] lg:font-normal font-bold lg:font-sans lg:italic'>"Well, I could never imagine myself surrounded by so many vibrations and waves</label>
        <label className='h-[30px] lg:font-normal font-bold lg:font-sans lg:italic'>reflecting on the inner core, questions of the reality seeking answers from every drop</label>
        <label className='h-[30px] lg:font-normal font-bold lg:font-sans lg:italic'>of frequency.</label>
        <label className='h-[30px] lg:font-normal font-bold lg:font-sans lg:italic'>Still, I never imagined. As it comes as it goes too.</label>
        <label className='h-[30px] lg:font-normal font-bold lg:font-sans lg:italic'>Thank everyone for being on this journey."
        </label>
      
        </div>
        <button className='bg-[#DB7137] h-[8vh] w-[30%] text-[white] font-bold text-[20px] hover:bg-[white] hover:text-[black] duration-700 rounded-[100px]'>Read more</button>
      </div>

        </div>

    </div>
  )
}

export default Teachers