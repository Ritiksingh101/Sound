import React from "react";

function Footer() {
  return (


    <div className="footer h-[80vh] w-full flex flex-col lg:flex-row justify-around lg:items-center">
      <div className="h-[60vh] lg:w-[30%] flex flex-col gap-3">
        <label className="text-[35px] font-serif font-bold">Contact us</label>
        <div className="flex gap-3 text-[20px] font-serif ">
        
          <label>himalayanacademyofsound@gmail.com</label>
        </div>
        <label className="text-[20px]">
          Write us an email if you have questions or want to book a session or
          course.
        </label>
        <div className="flex gap-[5%] text-[25px]">
          <label className="flex bg-[#FFF3ED] hover:text-white hover:bg-[#DB7137] rounded-[50%] h-[8vh] lg:w-[13%] w-[18%] justify-center items-center">
          <i class="fa fa-facebook" aria-hidden="true"></i>

          </label >
          <label className="flex bg-[#FFF3ED] hover:text-white hover:bg-[#DB7137] rounded-[50%] h-[8vh] lg:w-[13%] w-[18%] justify-center items-center">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </label>
          <label  className="flex bg-[#FFF3ED] hover:text-white hover:bg-[#DB7137] rounded-[50%] h-[8vh] lg:w-[13%] w-[18%] justify-center items-center">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </label>
        </div>
      </div>

      <div className="h-[60vh] lg:w-[40%] flex gap-3 flex-col">
        <label className="text-[36px] font-bold font-serif">Sign up for our mailing</label>
        <h1 className="text-[22px] font-serif">
          Twice a month we will update you with latest news of academy, new
          projects and also we will find for you the most interesting articles
          and books about yoga, healing methods and latest researches.
        </h1>
       <input type="text" placeholder="Enter your mail" className="h-[8vh] lg:w-[45%] w-[90%] pl-3 outline-none shadow-lg"></input>
       <button className="lg:w-[30%] w-[50%] h-[8vh] bg-[#DB7137] text-white hover:bg-black font-medium">Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
