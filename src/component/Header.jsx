import React, { useState } from "react";

function Header() {
  const [show, setShow] =useState(false)

  return (
    <div className="h-[10vh] lg:h-[12vh] w-full  flex justify-center items-center">


      <div className=" h-[10vh] w-[5%]"> LOGO</div>



      <div className=" header h-[10vh] w-[90%] flex justify-between">
        <div className="flex justify-center items-center h-[10vh]">
          <label className="text-[#DB7137] font-bold hover:text-[black]">
            HOME
          </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide">ABOUT </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide">HISTORY </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide text-[14px]">SOUND HEALING WORKSHOP </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide text-[14px]">HEALING & MEDITATION TTC </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide text-[14px]">HEALING RETREATS </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide text-[14px]">GALLERY </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide text-[14px]">HEALING PRODUCTS  </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide text-[14px]">TESTIMONIALS   </label>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <label className="hover:text-[#DB7137] font-bold tracking-wide text-[14px]">ONLINE REGISTRATION  </label>
        </div>

          

               

      </div>

  {/* -------------------------------------responsive side bar ----------------------------------- */}
  <div onClick={()=> setShow(true)} className="flex lg:hidden  text-[30px]">
  <i class="fa fa-bars" aria-hidden="true"></i> 
  </div>
  <>

  {show == true ?

  <div className='w-[100%] h-[100vh] fixed top-0 left-0 z-10'>
            <div onClick={()=> setShow(false)} className='bg-black w-full h-[100vh] opacity-60 fixed cursor-pointer left-0 top-0 ' >
            </div>
            <div className='bg-white sidebar-popup lg:h-[100vh] h-[60vh] lg:w-[30%] w-[100%] absolute right-0 z-[11]' >
              <button className='w-[100%] h-[10vh]  text-[35px] text-start pl-10' onClick={()=> setShow(false)}  >X</button>
              <div className='w-[90%] h-[25vh] flex gap-[40%] pl-10  '>
                <div className='flex flex-col gap-[8%]   '>
                  <h4>Language</h4>
                  <label>English</label>
                  <label>French</label>
                  <label>Arabric</label>
                  
                
                </div>
               
              </div>
            </div></div> 
:null}

            </> 
 
  

     
    </div>
  );
}

export default Header;
