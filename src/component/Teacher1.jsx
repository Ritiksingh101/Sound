import React from 'react'

function Teachers() {
  return (
    <div className=' lg:h-[120vh] h-[115vh] w-full lg:bg-[#EFEAE0] '>
        {/* <div className='h-[10vh]'></div> */}
       
        
        <div className=' h-[90vh] w-[100%] flex lg:justify-between items-center  lg:flex-row flex-col'>
      
      <div className='Teacher-img  lg:w-[50%] w-[95%] lg:hidden lg:h-[90vh] h-[60vh]  flex  lg:justify-end '>
          
          <div className='  h-[80vh] lg:w-[60%] w-full overflow-hidden'>
            <img src='https://optim.tildacdn.one/tild6634-3564-4839-b864-323363663131/-/resize/600x/-/format/webp/Screenshot_2024-05-1.png' className=' img-hover object-cover lg:h-full'></img>
          </div>
          <div className=' Teacher-img1 ' >
            <img src='https://images.squarespace-cdn.com/content/v1/62fa9b7721a7d776644ad800/62ef990b-48f8-46e4-a7d7-9028fbc0df3e/IMG_2735.jpg?format=1500w' className='h-full object-cover'></img>
          </div>
          

      </div>
      <div className=' lg:w-[45%]  w-[95%] lg:h-[80vh] h-[50vh] flex flex-col justify-center items-center lg:gap-7 gap-3'>
      
        <div className='h-[50vh] w-[100%] flex flex-col justify-center items-center gap-5 lg:gap-0'>
       
        <label className='font-serif text-[30px] font-bold '>Rachel Ocean</label>
        <label className='h-[30px] lg:font-normal font-bold lg:font-sans lg:italic'>Sound Healer, Reiki Grand Master, Yoga Instructor</label>
        <label className='h-[30px] lg:font-normal font-bold lg:font-sans lg:italic'>RYT 500, E-RYT 200, YACEP</label>
     
      
        </div>
        <button className='bg-[#DB7137] h-[8vh] w-[30%] text-[white] font-bold text-[20px] hover:bg-[white] hover:text-[black] duration-700 rounded-[100px]'>Read more</button>
      </div>
              
      <div className='Teacher-img lg:w-[65%] lg:block hidden lg:h-[90vh] h-[60vh] '>
          
          <div className='  h-[80vh] lg:w-full w-full flex justify-center  overflow-hidden'>
            <img src='https://optim.tildacdn.one/tild6634-3564-4839-b864-323363663131/-/resize/600x/-/format/webp/Screenshot_2024-05-1.png' className=' img-hover object-cover lg:h-full'></img>
          </div>
          <div className=' Teacher-img1 ' >
            <img src='https://images.squarespace-cdn.com/content/v1/62fa9b7721a7d776644ad800/62ef990b-48f8-46e4-a7d7-9028fbc0df3e/IMG_2735.jpg?format=1500w' className='h-full object-cover'></img>
          </div>
          

      </div>
        </div>

    </div>
  )
}

export default Teachers