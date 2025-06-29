import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import hero_section_image from "../../assets/images/hero_section_image.jpg";
import thumbUpIcon from "../../assets/images/thumbUpIcon.png";
import manWithLaptopIcon from "../../assets/images/manWithLaptopIcon.png";
import downArrow from "../../assets/images/downArrow.png";

import projectIcon from "../../assets/images/projectIcon.png";
import FeatureCard from "../../components/FeatureCard";

export default function Home() {
  return (
    <div className="w-full">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div
          className="hero-section flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero_section_image})` }}
        >
          <div className="px-[clamp(20px,5.76vw,83px)] mt-[5vh] md:mt-[20vh] flex flex-col gap-10">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-22px font-semibold text-white text-center">
                Step Into the World of Tech
              </h1>
              <div className="text-[40px] leading-[56px] md:text-[clamp(28px,3.82vw,60px)] md:leading-[clamp(40.6px,5.54vw,100px)] font-bold text-white  text-center">
                Start your journey in Software Technology with{" "}
                <span className="text-gradient font-montserrat font-bold">
                  Kamlanil Technologies.
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-20px inline-flex flex-col justify-center items-center bg-[#00FFCA] px-[clamp(12px,1.5vw,21.6px)] py-[14.4px] border-[#00FFCA] border-[1.8px] rounded-[50px] font-[800] font-inter text-black">
                Book A Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding-x">
        <div className="flex flex-col py-6 gap-10 md:gap-20">
          <div className="flex flex-col gap-4 md:gap-0">
            <p className="text-[clamp(18px,5vw,24px)] leading-[clamp(24px,6vw,30px)] md:text-[clamp(20px,2.22vw,32px)] md:leading-[clamp(40px,5.55vw,80px)]  font-bold text-[#12161F] pr-10">
              Your Gateway to a Bright Career in the IT Industry – Learn from
              the Best.
            </p>
            <p className="text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] md:text-[clamp(14px,1.32vw,19px)] md:leading-[clamp(18px,1.5vw,21.6px)] md:text-center text-[#575757] font-medium pr-10">
              Join <span className="font-semibold">KAMLANIL TECHNOLOGIES</span>{" "}
              and be sure about the future
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center">
            <FeatureCard
              icon={thumbUpIcon}
              title="100% Placement"
              description="We guide you from training to hiring with complete placement support and interview preparation."
              bgColor="rgba(94, 47, 163, 0.1)"
            />

            <FeatureCard
              icon={manWithLaptopIcon}
              title="Learn with Experts"
              description="Get trained by experienced industry professionals who know what top companies expect."
              bgColor="rgba(253, 101, 0, 0.10)"
            />
            <FeatureCard
              icon={projectIcon}
              title="Live Projects"
              description="Apply your skills in real-world projects and build job-ready confidence."
              bgColor="rgba(6, 101, 230, 0.10)"
            />
          </div>
        </div>
      </div>
      <div
        className="relative w-full  h-[672px] md:h-[74vh] md:bg-cover md:bg-left bg-no-repeat
             bg-[url('/images/mobileTextBackgroundImage.png')] 
             md:bg-[url('/images/TextbackgroundImage.png')]"
      >
        <div className="section-padding-x pt-27 md:pt-30 flex flex-col gap-5">
          <h2 className="text-white text-[clamp(16px,4.8vw,20px)] leading-[clamp(24px,7.2vw,30px)] md:text-[clamp(28px,3.47vw,70px)] md:leading-[clamp(44px,5.56vw,100px)] font-bold">
            Step in the World of Tech with Confidence
          </h2>
          <p className="text-[clamp(12px,3.6vw,14px)] leading-[clamp(22px,6.7vw,26px)] md:text-[clamp(14px,1.32vw,25px)] md:leading-[clamp(18px,1.5vw,30px)] text-white font-medium">
            The tech industry is evolving rapidly, and skilled professionals are
            in high demand. Whether you dream of building robust applications or
            ensuring software quality through automation, now is the perfect
            time to start your journey.
          </p>
          <p className="text-[clamp(12px,3.6vw,14px)] leading-[clamp(22px,6.7vw,26px)] md:text-[clamp(14px,1.32vw,25px)] md:leading-[clamp(18px,1.5vw,30px)] text-white font-medium">
            At Kamlanil Technologies, we offer hands-on, career-focused training
            in SDET (QA Automation with Python & Selenium) and Full Stack
            Development, delivered through flexible online sessions and
            real-time projects. We've already helped hundreds of learners unlock
            their potential — and we’re here to help you do the same.
          </p>
          <div className="flex justify-start items-center gap-3 md:pt-10">
            <button className="text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] md:text-[clamp(14px,1.53vw,30px)] md:leading-[clamp(13.7px,1.5vw,30.6px)] bg-[#00FFCA] py-[8px] px-[12px]  md:px-[clamp(16px,2.23vw,32.073px)] md:py-[clamp(12px,1.48vw,21.382px)] border-[#00FFCA] border-[1.8px] rounded-[50px] font-[600]  text-black">
              Find out which course is for you
            </button>
            <img
              src={downArrow}
              alt="Down Arrow"
              className="ml-4 w-[clamp(20px,4.3vw,80px)] h-[clamp(20px,4.3vw,80px)]"
              />
          </div>
        </div>
      </div>
    </div>  
  );
}
