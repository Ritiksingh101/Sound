import React from "react";
import Imgscrol from "./Imgscrol";

function Details() {
  return (
    <div className="lg:h-[100vh] h-[135vh] w-full flex flex-col lg:flex-row ">
      <div className="lg:h-[100vh] h-[80vh] lg:w-[50%] w-full flex flex-col justify-center items-center">
        <div className=" h-[100vh] lg:w-[80%] w-[90%] flex flex-col items-center justify-center gap-5 lg:gap-10">
          <label className=" font-serif font-medium text-[20px]">
            Believing in understanding of true self through YOGA, ART, and
            MUSIC.
          </label>
          <label className=" font-serif lg:text-[40px] text-[30px] font-bold ">
            HIMALAYAN ACADEMY OF SOUND HEALING
          </label>
          <p className=" font-serif ">
            Himalayan academy of sound healing (HASH) is an institute that
            brings together alternative and natural way of therapies to provide
            education and awareness to heal ourselves and others. <br></br>
            The school is focused on spreading knowledge of sound medicine via
            various sources. It can be used as a medicine to overcome the
            troubling effects of the modern lifestyle. <br></br>
            Sound has always been the key element in developing the self in a
            true way. Our true nature is nothing but pure vibrations. We do the
            healing to reach our absolute true nature.
          </p>
          <button className="bg-[#DB7137] h-[8vh] w-[35%] text-[white] font-medium ">Register Now</button>
        </div>

       
      </div>
      <div className="h-[100vh] lg:w-[68%] w-full flex justify-center items-center">
        <div className="h-[80vh] w-[90%] ">
          <Imgscrol></Imgscrol>
        </div>
      </div>
    </div>
  );
}

export default Details;
