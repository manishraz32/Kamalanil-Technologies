import React from "react";
import Group from "../assets/Group 4704.svg";
import image140 from "../assets/image 140.svg";
import CheckIcon from "../assets/Group 4699.svg";
import Ractangle from "../assets/images/Rectangle 62.svg";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center w-full h-screen">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F1F1FDE] z-0"></div>

      {/* Modal box */}
      <div className="relative z-10 bg-white shadow-xl pt-14 md:pt-40 rounded-[20px] w-[clamp(247.1815px,17.16vw,247.1815px)] md:w-[clamp(280px,34.72vw,500px)] overflow-hidden text-center">
        <div className="relative">
          <div className="relative h-[180px]">
            <div className="">
              <img
                src={Group}
                alt="Wave Background"
                className="md:hidden block top-0 left-[-1px] z-10 absolute w-full h-full object-cover"
              />
              <img
                src={Ractangle}
                alt="Wave Background"
                className="hidden md:block top-0 left-0 z-10 absolute w-full h-full object-cover"
              />
            </div>

            <div className="top-[35%] z-30 absolute flex flex-col items-center pl-3 sm:pl-4 md:pl-5 lg:pl-22 2xl:pl-30 3xl:pl-35 4xl:pl-40 xl:pl-30 text-white">
              <div className="flex items-center gap-2 mb-2 font-medium text-[14px]">
                <span className="md:text-[clamp(18px,1.38vw,20px)] leading-5 md:leading-[clamp(20px, 1.45vw, 63px)]">
                  Submitted successfully
                </span>
                <img
                  src={CheckIcon}
                  alt="Check"
                  className="w-[17px] md:w-[20px] h-[17px] md:h-[20px]"
                />
              </div>
              <p className="text-[13px] md:text-[clamp(13px,1.11vw,48px)] md:leading-[clamp(20px, 1.45vw, 63px)]">
                Our team will call you shortly.
              </p>
              <button
                onClick={onClose}
                className="bg-[#21B495] cursor-pointer hover:bg-[#21B495] shadow-md mt-4 md:mt-2 mb-5 px-25 py-2 rounded-full font-medium text-[16px] text-white leading-[clamp(20px,1.45vw,63px)] transition "
              >
                OK
              </button>
            </div>
          </div>

          {/* Thumbs Up Image */}
          <div className="md:items-center">
            <img
              src={image140}
              alt="Thumbs Up"
              className="top-[-50px] md:top-[-150px] right-1 md:right-auto md:left-1/2 z-5 absolute mr-5 md:mr-0 w-[126px] md:w-[211px] h-auto md:h-[211px] md:translate-x-[-50%] image-rendering-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
