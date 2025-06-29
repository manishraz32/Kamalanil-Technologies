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
import greenMobileBackgroundImage from "../../assets/images/greenMobileBackgroundImage.png";
import meetingMobileImage from "../../assets/images/meetingMobileImage.png";
import mobileMeetingWithborder from "../../assets/images/mobileMeetingWithborder.png";
import greenTextBackgroundImage from "../../assets/images/greenTextBackgroundImage.png";
import rightIconSvg from "../../assets/images/rightIconSvg.svg";
import sdetBackgrounImage from "../../assets/images/sdetBackgrounImage.png";
import trainingsvg from "../../assets/images/training.svg";
import emailIcon from "../../assets/images/emailIcon.png";
import mapIcon from "../../assets/images/mapIcon.svg";
import phoneIcon from "../../assets/images/phoneIcon.png";

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
      <div className="bg-[#2F3645] mt-10 py-17 px-4 md:px-[clamp(16px,6.53vw,120px)] grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
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
      <div className="bg-white px-4 md:px-[clamp(16px,6.53vw,120px)] py-10 md:py-[clamp(16px,6.53vw,120px)] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:text-left">
          <h2 className="text-[clamp(18px,8.7vw,36px)] leading-[clamp(23px,11.2vw,46.5px)] md:text-[clamp(28px,3.47vw,70px)] md:leading-[126%] font-bold text-[#0F172A]">
            Equipped with the
            <br /> Finest Tools for
            <br /> Effective Learning
          </h2>
          <div className="hidden md:block">
            <button className="bg-[#00FFD1] hidden md:block text-black text-[clamp(14px,2vw,16px)] md:text-[clamp(16px,1.48vw,40px)] md:leading-[clamp(24px,2.23vw,40px)] md:py-[21px] md:px-[90px] font-semibold px-8 py-3 rounded-full shadow-md">
              Register for Free
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-y-[clamp(20px,2.78vw,40px)] md:gap-x-[clamp(16px,2.08vw,30px)] px-[clamp(16px,10vw,40px)] md:px-0">
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
        <button className="bg-[#21B495] text-[#FFFFFF] md:hidden text-[clamp(16px,5.08vw,21.382px)] leading-[clamp(24px,7.62vw,32.073px)] font-semibold px-8 py-3 rounded-full shadow-md">
          Register for Free
        </button>
      </div>

      <section className="w-full relative bg-white">
        {/* Hero Image */}
        {/* <img
          src="/images/about-hero.jpg"
          alt="Classroom"
          className="w-full h-auto object-cover rounded-2xl"
        /> */}
        <img
          src={greenMobileBackgroundImage}
          alt="Green Background"
          className="w-full h-auto md:hidden absolute top-0"
        />
        {/* Header Section */}
        <div className=" p-4 text-center relative overflow-hidden">
          <h2 className="text-[clamp(18px,8.7vw,36px)] leading-[36px] font-bold text-[#292C34]">
            About Us
          </h2>
          <p className="text-[#292C34] text-[clamp(10px,2.91vw,12px)] leading-[36px]  font-[600]">
            Empowering Careers Through Real-World Tech Training
          </p>
          <div>
            <img src={mobileMeetingWithborder} />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6.5 md:px-16 pt-2 pb-6 items-center">
          {/* Left side - Text */}
          <div className="space-y-2">
            <h3 className="text-[#12161F] font-semibold text-[clamp(18px,5.8vw,24px)] leading-[clamp(24px,7.2vw,30px)]">
              Our story
            </h3>
            <h2 className="text-[#21B495] text-[clamp(18px,5.8vw,24px)] leading-[clamp(24px,7.2vw,30px)] font-bold">
              Kamlanil Technologies
            </h2>
            <p className="text-[#12161F] text-[clamp(14px,3.8vw,16px)] leading-[168%] mb-6">
              At KamlanilTech, we empower future-ready tech professionals
              through practical, hands-on IT training and expert consultancy.
              Our programs in Full Stack Development, Software Testing, and
              AWS-DevOps are designed to bridge the gap between theory and
              industry demands.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-2">
              <div>
                <h4 className="font-bold text-[#12161F] text-[clamp(14px,3.8vw,16px)] leading-[168%]">
                  Mission
                </h4>
                <p className="text-[#12161F] text-[clamp(14px,3.8vw,16px)] leading-[168%]">
                  To transform careers and businesses by delivering real-world,
                  expert-led IT education and consultancy.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#12161F] text-[clamp(14px,3.8vw,16px)] leading-[168%]">
                  Vision
                </h4>
                <p className="text-[#12161F] text-[clamp(14px,3.8vw,16px)] leading-[168%]">
                  To be a trusted leader in IT training, building a skilled
                  workforce through quality, innovation, and practical learning.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image with feature box */}
          <div
            className="relative w-full bg-no-repeat bg-cover bg-center px-6 py-10 rounded-2xl"
            style={{
              backgroundImage: `url(${greenTextBackgroundImage})`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="bg-[#21B495] rounded-[21px] p-6 text-white">
                <div className="">
                  <div className="flex ">
                    <div className="">
                      <img src={rightIconSvg} className="w-[50px] h-[10px]" />
                    </div>
                    <div className="text-[11px] font-medium leading-[166%]">
                      Diverse Programs: Full Stack Development, Software Testing
                      (Manual + Automation), and AWS DevOps
                    </div>
                  </div>
                  <div className="h-[0.989px] bg-[#FFFFFF] my-[7px]"></div>
                  {/* List Item 1 */}
                  <div className="flex gap-2">
                    <div>
                      <img src={rightIconSvg} className="w-[50px] h-[10px]" />
                    </div>
                    <div className="text-[11px] font-medium leading-[166%]">
                      Flexible Learning: 100% Online Courses with Weekend &
                      Weekday Batches
                    </div>
                  </div>
                  <div className="h-[0.989px] bg-[#FFFFFF] my-[7px]"></div>

                  {/* List Item 2 */}
                  <div className="flex gap-2">
                    <div>
                      <img src={rightIconSvg} className="w-[50px] h-[10px]" />
                    </div>
                    <div className="text-[11px] font-medium leading-[166%]">
                      Industry-Focused Training: Hands-on projects aligned with
                      real-world technologies
                    </div>
                  </div>
                  <div className="h-[0.989px] bg-[#FFFFFF] my-[7px]"></div>

                  {/* List Item 3 */}
                  <div className="flex gap-2">
                    <div>
                      <img src={rightIconSvg} className="w-[50px] h-[10px]" />
                    </div>
                    <div className="text-[11px] font-medium leading-[166%]">
                      Career-Driven Outcomes: Empowering students to land jobs
                      with practical, job-ready skills
                    </div>
                  </div>
                  <div className="h-[0.989px] bg-[#FFFFFF] my-[7px]"></div>

                  {/* List Item 4 */}
                  <div className="flex gap-2">
                    <div>
                      <img src={rightIconSvg} className="w-[50px] h-[10px]" />
                    </div>
                    <div className="text-[11px] font-medium leading-[166%]">
                      Integrated Approach: Blending coding, cloud, testing, and
                      DevOps for a complete IT foundation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sdet trainer banner */}
      <section className="w-full">
        {/* Section 1: SDET Training Banner */}
        <div
          className="relative w-full h-[820px] md:h-[74vh] pt-[120px] px-4 md:bg-cover md:bg-left bg-no-repeat
             bg-[url('/images/sdetBackgrounImage.png')] 
             md:bg-[url('/images/TextbackgroundImage.png')]"
        >
          <h2 className="text-[clamp(18px,8.7vw,36px)] leading-[clamp(23px,11.2vw,46.5px)] font-bold text-white">
            Break into <span className="text-[#00FFD1]">IT</span> with Practical{" "}
            <span className="text-[#00FFD1]">SDET Training</span>
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            <p className="text-[14px] font-medium leading-[26px] text-[#fff]">
              An SDET is much more than just a tester or QA professional. They
              bring a powerful blend of development skills, quality assurance
              expertise, and project insight. SDETs work closely with
              development teams, contribute to product development, write
              application code, understand end-user requirements, and build
              custom automation tools.
            </p>
            <p className="text-[14px] font-medium leading-[26px] text-[#fff]">
              This unique combination of skills makes the SDET role highly
              valuable and in demand across the software industry. While a QA
              engineer may be sufficient for small web applications, complex
              systems with advanced business logic and long development cycles
              absolutely require the depth and versatility that an SDET brings.
            </p>
          </div>
        </div>

        {/* Section 2: Flexible Learning */}
        <div className=" bg-white px-5">
          <h2 className="text-[clamp(18px,8.7vw,36px)] leading-[clamp(23px,11.2vw,46.5px)] font-bold text-[#000] mb-4">
            Flexible Learning That Fits Your Schedule
          </h2>
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img
                src={trainingsvg}
                alt="Flexible Learning"
                className="w-full max-w-md object-contain"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-5 pt-5">
              <p className="text-[#000] text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] font-medium">
                One of the key advantages of learning with Kamlanil Technologies
                is the flexibility we offer for working professionals and
                students alike.
              </p>
              <p className="text-[#000] text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] font-medium">
                Our classes are scheduled to fit around your existing
                commitments, with twice-weekly weekday sessions in the early
                evening, so there's no need to take time off from work or
                studies. For added convenience, weekend classes are available as
                well — attend on Saturday or Sunday, either online or at our
                training center.
                <br />
                Plus, all sessions are recorded, so if you miss a class, you can
                easily catch up at your own pace.
              </p>
            </div>
          </div>
          {/* Image */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white">
        {/* Contact Info */}
        <div className="space-y-3">
          <h2 className="text-[clamp(18px,8.7vw,36px)] leading-[clamp(23px,11.2vw,46.5px)] font-bold text-[#12161F]">
            Contact Details
          </h2>
          <h3 className="text-[clamp(18px,5.8vw,24px)] leading-[clamp(24px,7.2vw,30px)] font-bold text-[#12161F]">
            Let's Connect
          </h3>
          <p className="text-[#000] text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] font-medium">
            We’re here to help! Whether you have questions about our courses,
            need IT consultancy, or just want to say hello — don’t hesitate to
            reach out. Fill out the form below, and our team will get back to
            you as soon as possible.
          </p>

          {/* Contact Icons */}
          <div className="space-y-4 text-[clamp(14px,2vw,16px)]">
            <div className="flex gap-[6px]">
              <img src={mapIcon} className="w-8 h-8" />
              <div className="text-[12px] font-medium leading-4">
                <p className="leading-4">Location:</p>
                <p className="text-[#21B495] leading-4">Pune , Maharashtra</p>
              </div>
            </div>
            <div className="flex gap-[6px]">
              <img src={phoneIcon} className="w-8 h-8" />
              <div className="text-[12px] font-medium leading-4">
                <p className="leading-4">Phone(9am - 6am):</p>
                <p className="text-[#21B495] leading-4">+91-9322374766</p>
              </div>
            </div>
            <div className="flex gap-[6px]">
              <img src={emailIcon} className="w-8 h-8" />
              <div className="text-[12px] font-medium leading-4">
                <p className="leading-4">E-mail::</p>
                <p className="text-[#21B495] leading-4">
                  info@kamlaniltech.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="px-4">
          <div className="rounded-[13.583px] bg-[rgba(167,159,168,0.34)] py-3 px-5  md:p-8 w-full">
            <form className="flex flex-col gap-1">
              <div>
                <label className="block text-[12px] leading-[42px] font-bold">
                  Name *
                </label>
                <input type="text" placeholder="Enter Name" className="input" />
              </div>
              <div>
                <label className="block text-[12px] leading-[42px] font-bold">
                  Phone no. *
                </label>
                <div className="flex input py-2">
                  <div className="inline-flex items-center border border-gray-300 bg-[#EEE] px-4 rounded-md whitespace-nowrap">
                    🇮🇳 +91{"   "}
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] leading-[42px] font-bold">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="input"
                />
              </div>
              <div>
                <label className="block text-[12px] leading-[42px] font-bold">
                  Course *
                </label>
                <select className="input">
                  <option>Select Course</option>
                  <option>Full Stack</option>
                  <option>QA Testing</option>
                  <option>AWS DevOps</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] leading-[42px] font-bold">
                  City *
                </label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="input"
                />
              </div>
              <div>
                <label className="block text-[12px] leading-[42px] font-bold">
                  Message
                </label>
                <textarea
                  placeholder="Type your message here..."
                  rows="3"
                  className="input"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#21B495] text-[#000] text-[12px] rounded-[33px] font-bold py-4 mt-3  hover:bg-[#00b970] transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

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
