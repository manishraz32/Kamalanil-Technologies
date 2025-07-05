import React from "react";
import image1 from "../../assets/image 113.png";

const Navbar = () => {
  return (
    <nav className="bg-[#12161F] px-4 2xl:px-[94px] py-[26px] text-white">
      <div className="flex justify-between items-center w-full">

        <div className="md:flex items-center gap-4">
          <img src="" alt="Desktop Logo" className="w-12 h-12" />
          <div className="leading-tight">
            <p className="font-electrolize md:text-[20.876px] tracking-[0.209px] clamp(9px,4vw,9px)">
              Kamalanil
            </p>
            <p className="font-electrolize font-normal text-[20.876px] clamp(9px,4vw,9px)">
              Technologies
            </p>
          </div>
        </div>

        
        <div className="hidden md:flex items-center gap-10 text-[clamp(16px,4vw,24px)]">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">Courses</span>
          <span className="cursor-pointer">Contact Us</span>
          <button className="inline-flex flex-col justify-center items-center gap-[9px] bg-[#00FFCA] px-[21.6px] py-[14.4px] border-[#00FFCA] border-[1.8px] rounded-[50px] h-[45px] font-semibold text-black">
            Apply Now
          </button>
        </div>
         <div className="md:hidden flex justify-end w-full">
          <img
            src={image1}
            alt="Mobile Logo"
            className="w-10 h-10 object-contain"
          />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

 
