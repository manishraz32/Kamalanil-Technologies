import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import hero_section_image from "../../assets/images/hero_section_image.jpg";
import thumbUpIcon from "../../assets/images/thumbUpIcon.png";
import manWithLaptopIcon from "../../assets/images/manWithLaptopIcon.png";
import downArrow from "../../assets/images/downArrow.png";
import certificateIcon from "../../assets/images/certificateIcon.png";
import docIcon from "../../assets/images/docIcon.png";
import performanceDocs from "../../assets/images/performanceDocs.png";
import videoIcon from "../../assets/images/videoIcon.png";

import projectIcon from "../../assets/images/projectIcon.png";
import FeatureCard from "../../components/FeatureCard";
import BenefitCard from "../../components/BenefitCard";

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
      {/* step into the world */}
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

      {/* placed students */}
      <div className="bg-[#2F3645] py-17 px-4 md:px-[clamp(16px,6.53vw,120px)] grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
        {/* Block 1 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[clamp(24px,2.78vw,80px)] font-extrabold text-[#00FFCA] font-inter">
            1,000+
          </h2>
          <p className="text-[clamp(14px,1.32vw,38px)] leading-[clamp(18px,1.5vw,40px)] font-bold mt-2">
            Students trained & Placed
          </p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[clamp(24px,2.78vw,80px)] font-extrabold text-[#00FFCA] font-inter">
            10+
          </h2>
          <p className="text-[clamp(14px,1.32vw,38px)] leading-[clamp(18px,1.5vw,40px)] font-bold mt-2">
            Year of Experience
          </p>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[clamp(24px,2.78vw,80px)] font-extrabold text-[#00FFCA] font-inter">
            60%
          </h2>
          <p className="text-[clamp(14px,1.32vw,38px)] leading-[clamp(18px,1.5vw,40px)] font-bold mt-2">
            MNC & MLC Placements
          </p>
        </div>
      </div>

      {/* Effective learning */}
      <div className="bg-white px-4 md:px-[clamp(16px,6.53vw,120px)] py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="md:text-left">
          <h2 className="text-[clamp(18px,8.7vw,36px)] leading-[clamp(23px,11.2vw,46.5px)] font-bold text-[#0F172A]">
            Equipped with the
            <br /> Finest Tools for
            <br /> Effective Learning
          </h2>
          <button className="bg-[#00FFD1] hidden md:block text-black text-[clamp(14px,2vw,16px)] font-semibold px-8 py-3 rounded-full shadow-md">
            Register for Free
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  px-[clamp(16px,10vw,40px)]">
          <BenefitCard
            icon={videoIcon}
            title="Interactive Sessions"
            description="Engage in real-time learning with interactive sessions led by expert instructors."
          />
          <BenefitCard
            icon={docIcon}
            title="In-Depth Reading Resources"
            description="Access comprehensive written resources like articles, handouts, and guides to deepen your understanding of each topic."
          />
          <BenefitCard
            icon={performanceDocs}
            title="Performance Assessments"
            description="Evaluate your progress through structured assessments designed to strengthen your skills and knowledge."
          />
          <BenefitCard
            icon={certificateIcon}
            title="Certified Awards"
            description="Gain confidence, validate your expertise, and become a certified professional in your field."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2B2F3C] text-white px-4 md:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
              <span className="font-semibold text-lg">
                Kamlanil Technologies
              </span>
            </div>
            <p className="text-sm text-gray-300">
              Empowering future-ready professionals through practical tech
              training and real-world skills.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#">
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="#">
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#">
                <img
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-1 text-[#00FFD1] text-sm">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">CONTACT</h3>

            <div className="flex items-start gap-2">
              <span>📍</span>
              <div>
                <span className="font-medium">Location</span>
                <br />
                <span className="text-[#00FFD1] text-sm">
                  Pune, Maharashtra
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span>📞</span>
              <div>
                <span className="font-medium">Phone (9am - 6pm)</span>
                <br />
                <span className="text-[#00FFD1] text-sm">+91 93223 74766</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span>✉️</span>
              <div>
                <span className="font-medium">E-mail</span>
                <br />
                <span className="text-[#00FFD1] text-sm">
                  info@kamlaniltech.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
