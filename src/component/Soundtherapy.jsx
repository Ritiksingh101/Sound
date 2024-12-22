import React from "react";

function Soundtherapy() {
  return (
    
        <div className=" lg:block">
    <div className="lg:h-[120vh] h-[135vh] flex    justify-center  lg:items-center">
      <div className=" lg:h-[75vh] h-[110vh] w-full lg:relative">
       
        <div className="h-[120vh] lg:h-[100vh]  w-[100%] lg:absolute top-[-15%] left-[10%] overflow-hidden">
        <label className="text-[40px] font-semibold font-serif lg:hidden">What is Sound therapy?</label>
          <p className="text-[20px] font-light font-serif w-[80%] lg:hidden">
            Sound Therapy uses frequencies of different sound-emitting
            instruments to calm your nerves and maintain the health and harmony
            of the body. Healing sounds cure diseases as well as increases the
            rate of healing of the patients already taking conventional medical
            treatment. Healing sounds can also be heard while doing any routine
            task like driving, cooking, relaxing, or working in your workplace.
            It takes merely a few minutes of your time to heal you with ease.
          </p>
          <img
            src="https://optim.tildacdn.one/tild6561-3030-4561-a165-656336653564/-/format/webp/_MG_7271_-_c.jpg"
            className=" lg:h-[100vh] h-[60vh] w-full lg:w-[30%]"
          ></img>

        </div>
        <button className=" h-[10vh] w-[40%] text-[25px] bg-[#DB7137] lg:hidden text-[white] hover:bg-black">Read more</button>

         



          {/* lg screen */}




          <div className="hidden lg:block">
        <div className="lg:h-[75vh]  lg:w-[40%] flex flex-col justify-center gap-6 absolute end-[10%] ">
          <label className="text-[40px] font-semibold font-serif">What is Sound therapy?</label>
          <p className="text-[20px] font-light font-serif w-[80%]">
            Sound Therapy uses frequencies of different sound-emitting
            instruments to calm your nerves and maintain the health and harmony
            of the body. Healing sounds cure diseases as well as increases the
            rate of healing of the patients already taking conventional medical
            treatment. Healing sounds can also be heard while doing any routine
            task like driving, cooking, relaxing, or working in your workplace.
            It takes merely a few minutes of your time to heal you with ease.
          </p>
          <button className="h-[8vh] w-[30%] bg-[#DB7137] text-[white] hover:bg-black">Read more</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Soundtherapy;
