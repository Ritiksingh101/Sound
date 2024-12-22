import React from "react";

function Main() {
  return (
    <div className="lg:h-[100vh] flex justify-center h-[120vh] overflow-hidden bg-[#E3C6A6]">
      <div className="h-[110vh] w-[95%] gap-[20%] lg:gap-0 flex lg:justify-around lg:flex-row flex-col ">

      <div className="Main-round overflow-hidden lg:hidden">
          <img
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2150907210/settings_images/3637f7-363-e444-711c-bf11236614f6_Workshops_Images_-_2024-04-10T132912.383.png"
            className="h-[80vh] object-cover"
          ></img>
        </div>

        <div className="lg:h-[100vh] lg:w-[40%] h-[40vh] flex flex-col  justify-center gap-[2%]">
          <label className=" text-1 lg:text-[70px] text-[26px]">
            HIMALAYAN ACADEMY OF SOUND HEALING
          </label>
          <label className="text-2">Learn. Heal. Connect.</label>

          <div className="main-btn w-[40%] h-[9vh] bg-[#DB7137] hover:bg-black flex justify-center gap-3 text-[16px]  items-center">
            <label className=" text-[white] font-serif font-medium">
              VIEW MORE
            </label>
            <label className=" main-btn-1 text-[white] font-serif font-medium text-[20px]">
              {" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </label>
          </div>
        </div>

        <div className="Main-round overflow-hidden hidden lg:block">
          <img
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2150907210/settings_images/3637f7-363-e444-711c-bf11236614f6_Workshops_Images_-_2024-04-10T132912.383.png"
            className="h-[80vh] object-cover"
          ></img>
        </div>
        <div className="Main-round-1 overflow-hidden  object-fill">
          <img
            src="https://m.media-amazon.com/images/I/61sBTn3jl5L._UF1000,1000_QL80_.jpg"
            className="h-[51vh] w-full"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Main;
