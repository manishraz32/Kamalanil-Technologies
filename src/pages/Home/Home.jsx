import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import hero_section_image from "../../assets/images/hero_section_image.jpg";
import thumbUpIcon from "../../assets/images/thumbUpIcon.svg";
import manWithLaptopIcon from "../../assets/images/manWithLaptopIcon.svg";
import downArrow from "../../assets/images/downArrow.png";
// import certificateIcon from "../../assets/images/certificateIcon.png";
import image109 from "../../assets/image 109.svg";
import image108 from "../../assets/image 108 (1).svg";
import image124 from "../../assets/image 124- (1).png";
import docIcon from "../../assets/images/docIcon.png";
import performanceDocs from "../../assets/images/performanceDocs.png";
import videoIcon from "../../assets/images/videoIcon.png";
import greenMobileBackgroundImage from "../../assets/images/greenMobileBackgroundImage.png";
import meetingMobileImage from "../../assets/images/meetingMobileImage.png";
import mobileMeetingWithborder from "../../assets/images/mobileMeetingWithborder.png";
import greenTextBackgroundImage from "../../assets/images/greenTextBackgroundImage.png";
import rightIconSvg from "../../assets/images/rightIconSvg.svg";
import sdetBackgrounImage from "../../assets/images/sdetBackgrounImage.png";
import Rectangle from "../../../public/images/Rectangle.png";
import trainingsvg from "../../assets/images/training.svg";
import emailIcon from "../../assets/images/emailIcon.png";
import mapIcon from "../../assets/images/mapIcon.svg";
import phoneIcon from "../../assets/images/phoneIcon.png";
import company_logo from "../../assets/Frame 4.svg";
import smallEmailSvg from "../../assets/images/smallEmailSvg.svg";
import smallMapIcon from "../../assets/images/smallMapIcon.svg";
import smallPhoneSvg from "../../assets/images/smallPhoneSvg.svg";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import whatsapp from "../../assets/images/whatsapp.png";

import projectIcon from "../../assets/images/projectIcon.svg";
import FeatureCard from "../../components/FeatureCard";
import BenefitCard from "../../components/BenefitCard";

import image110 from "../../assets/image 110 (1).png";
import image114 from "../../assets/image 114.png";
import image61 from "../../assets/image 61.png";
import image65 from "../../assets/image 65.png";
import image66 from "../../assets/image 66.png";
import imageHeroSectio from "../../assets/image.png";
import ScrollToTop from "../../components/ScrollToTop";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import image131 from "../../assets/image 131.svg";
import image55 from "../../assets/image 55.png";
import interactive from "../../assets/Interactive session icons.png";
import resourcesicon from "../../assets/resourcesicon.png";
import readingIcon from "../../assets/performace-Assesment.png";
import SuccessModal from "../../components/SuccessModal";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, scale } from "framer-motion";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const MotionFeatureCard = motion(FeatureCard);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    console.log("e", e);
    console.log("e.target", e.target);
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setFormData((prev) => {
      console.log("Previous formData:", prev);
      const updated = { ...prev, [name]: value };
      console.log("Updated formData:", updated);
      return updated;
    });

    //Clear error for the current field if it's being fixed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";

    // Phone number validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Course validation
    if (!formData.course) newErrors.course = "Please select a course";

    // City validation
    if (!formData.city.trim()) newErrors.city = "City is required";



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);

      // Add timestamp if using {{time}} in template
      const fullData = {
        ...formData,
        time: new Date().toLocaleString(),
      };

      // Send form data to EmailJS
      emailjs
        .send(
          "service_rg7zslu", // Your service ID
          "template_q99yq7q", // Your template ID
          fullData, // Your form data + time
          "2qMCy92i-24VLWAM9" // Your public key
        )
        .then((response) => {
          // toast.success("Form submitted successfully! ");
          console.log("Email sent:", response.status, response.text);

          setFormData({
            name: "",
            phone: "",
            email: "",
            course: "",
            city: "",
            message: "",
          });
          setErrors({});
          setShowSuccess(true);
        })
        .catch((error) => {
          toast.error("Failed to send email.");
          console.error("EmailJS error:", error);
        });
    }
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div id="home" className="w-full scroll-smooth">
        <div className="flex flex-col min-h-screen">
          <div
            className="flex-1 bg-cover bg-center hero-section"
            style={{ backgroundImage: `url(${hero_section_image})` }}
          >
            <div className="flex flex-col gap-10 mt-[5vh] md:mt-[20vh] px-[clamp(20px,5.76vw,83px)]">
              <div className="flex flex-col gap-4 md:gap-6">
                <h1 className="font-semibold text-22px text-white text-center">
                  Step Into the World of Tech
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="font-bold text-[40px] text-white md:text-[clamp(28px,3.82vw,90px)] text-center leading-[56px] md:leading-[clamp(40.6px,5.54vw,150px)]">
                  Start your journey in Software Technology with{" "}
                  <span className="font-montserrat font-bold text-gradient">
                    Kamlanil Technologies.
                  </span>
                </motion.div>
              </div>
              <div className="flex justify-center">
                <motion.button
                  initial={{
                    opacity: 0,
                    scale: 0,

                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,

                    borderRadius: "50px", // Animate to rounded pill shape
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  onClick={() => navigate("/freedemopage")}
                  className="inline-flex flex-col justify-center items-center bg-[#00FFCA] px-[clamp(12px,1.5vw,21.6px)] py-[14.4px] border-[#00FFCA] border-[1.8px] rounded-[50px] font-[800] font-inter text-20px text-black"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  > Book A Free Demo
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-padding-x">
          <div className="flex flex-col gap-10 md:gap-20 py-6">
            <div className="flex flex-col md:items-center gap-4 md:gap-0">
              <p className="pr-10 font-bold text-[#12161F] text-[clamp(18px,5vw,24px)] md:text-[clamp(20px,2.22vw,48px)] leading-[clamp(24px,6vw,30px)] md:leading-[clamp(40px,5.55vw,120px)]">
                Your Gateway to a Bright Career in the IT Industry – Learn from
                the Best.
              </p>
              <p className="pr-10 font-medium text-[#575757] text-[clamp(14px,3.8vw,16px)] md:text-[clamp(14px,1.32vw,19px)] md:text-center leading-[clamp(18.9px,5.1vw,21.6px)] md:leading-[clamp(18px,1.5vw,21.6px)]">
                Join{" "}
                <span className="inline-block relative">
                  <span className="font-semibold">KAMLANIL TECHNOLOGIES</span>
                  <span className="top-full left-0 absolute bg-gradient-to-r from-[#00FFCA] to-[#009979] md:mt-[1px] w-full h-[2px] md:h-[4px]"></span>
                </span>{" "}
                be sure about the future
              </p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-center gap-4">

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
        <div className="relative bg-[url('/images/mobileTextBackgroundImage.png')] md:bg-[url('/images/TextbackgroundImage.png')] md:bg-cover bg-no-repeat md:bg-left md:pt-[50px] 2xl:pt-[100px] w-full h-[672px] md:h-[74vh] 2xl:h-[100vh] 3xl:h-[120vh] xl:h-[85vh]">
          <div className="flex flex-col gap-5 pt-27 md:pt-30 section-padding-x">
            <h2 className="font-bold text-[clamp(16px,4.8vw,20px)] text-white md:text-[clamp(28px,3.47vw,70px)] leading-[clamp(24px,7.2vw,30px)] md:leading-[clamp(44px,5.56vw,100px)]">
              Step in the World of Tech with Confidence
            </h2>
            <p className="font-medium text-[clamp(12px,3.6vw,14px)] text-white md:text-[clamp(14px,1.32vw,25px)] leading-[clamp(22px,6.7vw,26px)] md:leading-[clamp(18px,1.5vw,30px)]">
              The tech industry is evolving rapidly, and skilled professionals
              are in high demand. Whether you dream of building robust
              applications or ensuring software quality through automation, now
              is the perfect time to start your journey.
            </p>
            <p className="font-medium text-[clamp(12px,3.6vw,14px)] text-white md:text-[clamp(14px,1.32vw,25px)] leading-[clamp(22px,6.7vw,26px)] md:leading-[clamp(18px,1.5vw,30px)]">
              At Kamlanil Technologies, we offer hands-on, career-focused
              training in SDET (QA Automation with Python & Selenium) and Full
              Stack Development, delivered through flexible online sessions and
              real-time projects. We've already helped hundreds of learners
              unlock their potential — and we’re here to help you do the same.
            </p>
            <div className="flex justify-start items-center gap-3 md:pt-10">
              <button className="bg-[#00FFCA] px-[12px] md:px-[clamp(16px,2.23vw,32.073px)] py-[8px] md:py-[clamp(12px,1.48vw,21.382px)] border-[#00FFCA] border-[1.8px] rounded-[50px] font-[600] text-[clamp(14px,3.8vw,16px)] text-black md:text-[clamp(14px,1.53vw,30px)] leading-[clamp(18.9px,5.1vw,21.6px)] md:leading-[clamp(13.7px,1.5vw,30.6px)]">
                Find out which course is for you
              </button>
              <img
                src={image55}
                alt="Down Arrow"
                className="ml-4 w-[clamp(20px,4.3vw,80px)] h-[clamp(20px,4.3vw,80px)]"
              />
            </div>
          </div>
        </div>

        {/* sdet sectiion */}
        <div className="px-4 md:px-[clamp(16px,6.53vw,120px)] md:py-[clamp(14px,3.88vw,112px)] overflow-hidden">
          <div className="flex md:flex-row flex-col md:gap-20">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-2 md:gap-[clamp(10px,2.77vw,80px)]">
              {/* Heading */}
              <div className="flex flex-col gap-2 md:gap-10">
                <div className="pt-8 font-montserrat font-bold text-[#12161F] text-[clamp(28px,8.73vw,36px)] md:text-[clamp(36px,3.47vw,100px)] leading-[clamp(36px,11.28vw,46.482px)] md:leading-[clamp(46px,4.375vw,126px)]">
                  <h1>Kick Start your</h1>
                  <h1>
                    <span className="text-[#21B495]">SDET</span> Career
                  </h1>
                </div>
                <p className="font-montserrat font-medium text-[#575757] text-[clamp(14px,3.89vw,16px)] md:text-[clamp(16px,1.319vw,50px)] leading-[clamp(21px,1.67vw,24px)] md:leading-[clamp(23px,1.875vw,108px)]">
                  Our programs are delivered through flexible online training,
                  with offline batches launching soon. Designed for beginners
                  and aspiring professionals, our courses build strong
                  foundations in both core concepts and technical skills—no
                  prior coding experience required.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="bg-[#00FFCA] px-[clamp(20px,5vw,30px)] py-[clamp(12px,3vw,20px)] border-[#00FFCA] border-2 rounded-[clamp(24px,5vw,48px)] w-full h-[clamp(50px,5vw,64px)] font-semibold text-[clamp(17px,4.917vw,20px)] text-black leading-[clamp(25px,2.6vw,30px)]">
                Learn More
              </motion.button>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="py-7 md:py-0">
                <div className="flex md:flex-row flex-col items-center gap-9 md:gap-5 bg-white text-[#12161F]">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-3">
                    <img
                      src={image61}
                      alt="Rupee"
                      className="w-[clamp(25px,7.73vw,32px)] md:w-[clamp(25px,2.43vw,70px)] h-auto"
                    />
                    <div>
                      <p className="font-inter font-bold text-[clamp(14px,3.77vw,16px)] md:text-[clamp(16px,1.528vw,44px)]">
                        Get 65% OFF
                      </p>
                      <p className="font-inter text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)]">
                        Starting from ₹4,000
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-3 md:gap-3 mr-7 md:mr-0 pl-0 md:pl-3 md:border-[#00775F] md:border-l-2">
                    <img
                      src={image65}
                      alt="Calendar"
                      className="ml-2 md:ml-0 w-[clamp(25px,7.73vw,32px)] md:w-[clamp(25px,2.43vw,70px)] h-auto"
                    />
                    <div>
                      <p className="font-inter font-bold text-[clamp(14px,3.77vw,16px)] md:text-[clamp(16px,1.528vw,44px)]">
                        3 Months
                      </p>
                      <p className="font-inter text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)]">
                        Course Duration
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-3 md:gap-3 ml-3 md:ml-0 pl-0 md:pl-3 md:border-[#00775F] md:border-l-2">
                    <img
                      src={image66}
                      alt="Placement"
                      className="mt-1 w-[clamp(25px,7.73vw,32px)] md:w-[clamp(25px,2.43vw,70px)] h-auto"
                    />
                    <div>
                      <p className="font-inter font-bold text-[clamp(14px,3.77vw,16px)] md:text-[clamp(16px,1.528vw,44px)]">
                        100% Placement
                      </p>
                      <p className="font-inter text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)]">
                        Placement Assurance
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src={image110}
              alt="Coding Setup"
              className="pt-5 rounded-[clamp(24px,4.5vw,66px)] w-full md:max-w-[clamp(280px,26.92vw,775.416px)] h-auto object-cover"
            />
          </div>
        </div>

        {/* fullstack section */}
        <div className="px-4 md:px-[clamp(16px,6.53vw,120px)] py-5 md:py-0 md:pb-[clamp(14px,3.88vw,112px)] overflow-hidden">
          <div className="flex md:flex-row flex-col md:gap-20">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src={imageHeroSectio}
              alt="Coding Setup"
              className="hidden md:flex pt-5 rounded-[clamp(24px,4.5vw,66px)] w-full md:max-w-[clamp(280px,26.92vw,775.416px)] h-auto object-cover"
            />
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-2 md:gap-[clamp(10px,2.77vw,80px)]">
              {/* Heading */}
              <div className="flex flex-col gap-10">
                <div className="font-montserrat font-bold text-[#12161F] text-[clamp(28px,8.73vw,36px)] md:text-[clamp(36px,3.47vw,100px)] leading-[clamp(36px,11.28vw,46.482px)] md:leading-[clamp(46px,4.375vw,126px)]">
                  <h1>Build It All. </h1>
                  <h1>
                    Be a <span className="text-[#21B495]">Full Stack</span> Pro
                  </h1>
                </div>
                <p className="md:w-[80%] font-montserrat font-medium text-[#575757] text-[clamp(14px,3.89vw,16px)] md:text-[clamp(16px,1.319vw,50px)] leading-[clamp(21px,1.67vw,24px)] md:leading-[clamp(23px,1.875vw,108px)]">
                  Our programs are delivered through flexible online training,
                  with offline batches launching soon. Designed for beginners
                  and aspiring professionals, our courses build strong
                  foundations in both core concepts and technical skills—no
                  prior coding experience required.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="bg-[#00FFCA] px-[clamp(20px,5vw,30px)] py-[clamp(12px,3vw,20px)] border-[#00FFCA] border-2 rounded-[clamp(24px,5vw,48px)] w-full h-[clamp(50px,5vw,64px)] font-semibold text-[clamp(17px,4.917vw,20px)] text-black leading-[clamp(25px,2.6vw,30px)]">
                Learn More
              </motion.button>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="py-7 md:py-0">
                <div className="flex md:flex-row flex-col items-center gap-9 md:gap-5 bg-white text-[#12161F]">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-3">
                    <img
                      src={image61}
                      alt="Rupee"
                      className="w-[clamp(25px,7.73vw,32px)] md:w-[clamp(25px,2.43vw,70px)] h-auto"
                    />
                    <div>
                      <p className="font-inter font-bold text-[clamp(14px,3.77vw,16px)] md:text-[clamp(16px,1.528vw,44px)]">
                        Get 65% OFF
                      </p>
                      <p className="font-inter text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)]">
                        Starting from ₹4,000
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-3 md:gap-3 mr-7 md:mr-0 pl-0 md:pl-3 md:border-[#00775F] md:border-l-2">
                    <img
                      src={image65}
                      alt="Calendar"
                      className="ml-2 md:ml-0 w-[clamp(25px,7.73vw,32px)] md:w-[clamp(25px,2.43vw,70px)] h-auto"
                    />
                    <div>
                      <p className="font-inter font-bold text-[clamp(14px,3.77vw,16px)] md:text-[clamp(16px,1.528vw,44px)]">
                        3 Months
                      </p>
                      <p className="font-inter text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)]">
                        Course Duration
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-3 md:gap-3 ml-3 md:ml-0 pl-0 md:pl-3 md:border-[#00775F] md:border-l-2">
                    <img
                      src={image66}
                      alt="Placement"
                      className="mt-1 w-[clamp(25px,7.73vw,32px)] md:w-[clamp(25px,2.43vw,70px)] h-auto"
                    />
                    <div>
                      <p className="font-inter font-bold text-[clamp(14px,3.77vw,16px)] md:text-[clamp(16px,1.528vw,44px)]">
                        100% Placement
                      </p>
                      <p className="font-inter text-[#6C6C6C] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.39vw,40px)]">
                        Placement Assurance
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <img
              src={imageHeroSectio}
              alt="Coding Setup"
              className="md:hidden pt-5 rounded-[clamp(24px,4.5vw,66px)] w-full md:max-w-[clamp(280px,26.92vw,775.416px)] h-auto object-cover"
            />
          </div>
        </div>

        {/* placed students */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 bg-[#2F3645] px-4 md:px-[clamp(16px,6.53vw,120px)] py-17 text-white text-center">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center">
            <h2 className="font-inter font-extrabold text-[#00FFCA] text-[clamp(24px,2.78vw,80px)]">
              1,000+
            </h2>
            <p className="mt-2 font-bold text-[clamp(14px,1.32vw,38px)] leading-[clamp(18px,1.5vw,40px)]">
              Students trained & Placed
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0.4, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center">
            <h2 className="font-inter font-extrabold text-[#00FFCA] text-[clamp(24px,2.78vw,80px)]">
              10+
            </h2>
            <p className="mt-2 font-bold text-[clamp(14px,1.32vw,38px)] leading-[clamp(18px,1.5vw,40px)]">
              Year of Experience
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center">
            <h2 className="font-inter font-extrabold text-[#00FFCA] text-[clamp(24px,2.78vw,80px)]">
              60%
            </h2>
            <p className="mt-2 font-bold text-[clamp(14px,1.32vw,38px)] leading-[clamp(18px,1.5vw,40px)]">
              MNC & MLC Placements
            </p>
          </motion.div>
        </div>

        {/* Effective learning */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] bg-white px-4 md:px-[clamp(16px,6.53vw,120px)] py-10 md:py-[clamp(16px,6.53vw,120px)]">
          {/* Left Section */}
          <div className="flex flex-col gap-6 md:text-left">
            <h2 className="font-bold text-[#0F172A] text-[clamp(18px,8.7vw,36px)] md:text-[clamp(28px,3.47vw,70px)] leading-[clamp(23px,11.2vw,46.5px)] md:leading-[126%]">
              Equipped with the
              <br /> Finest Tools for
              <br /> Effective Learning
            </h2>
            <div className="hidden md:block">
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="hidden md:block bg-[#00FFD1] shadow-md px-8 md:px-[90px] py-3 md:py-[21px] rounded-full font-semibold text-[clamp(14px,2vw,16px)] text-black md:text-[clamp(16px,1.48vw,40px)] md:leading-[clamp(24px,2.23vw,40px)]">
                Register for Free
              </motion.button>
            </div>
          </div>

          {/* Right Section */}
          <div className="gap-6 md:gap-x-[clamp(16px,2.08vw,30px)] md:gap-y-[clamp(20px,2.78vw,40px)] grid grid-cols-1 sm:grid-cols-2 px-[clamp(16px,10vw,40px)] md:px-0">
            <BenefitCard
              icon={interactive}
              title="Interactive Sessions"
              description="Engage in real-time learning with interactive sessions led by expert instructors."
            />
            <BenefitCard
              icon={resourcesicon}
              title="In-Depth Reading Resources"
              description="Access comprehensive written resources like articles, handouts, and guides to deepen your understanding of each topic."
            />
            <BenefitCard
              icon={readingIcon}
              title="Performance Assessments"
              description="Evaluate your progress through structured assessments designed to strengthen your skills and knowledge."
            />
            <BenefitCard
              icon={image109}
              title="Certified Awards"
              description="Gain confidence, validate your expertise, and become a certified professional in your field."
            />
          </div>
          <button className="md:hidden bg-[#21B495] shadow-md px-8 py-3 rounded-full font-semibold text-[#FFFFFF] text-[clamp(16px,5.08vw,21.382px)] leading-[clamp(24px,7.62vw,32.073px)]">
            Register for Free
          </button>
        </div>

        {/* about section     */}
        <section id="about" className="relative bg-white w-full">
          {/* Background for mobile and desktop */}
          <img
            src={greenMobileBackgroundImage}
            alt="Green Background"
            className="top-0 z-0 absolute w-full h-[12%] md:h-[25%]"
          />

          {/* Top Section */}
          <div className="z-10 relative mx-auto md:pt-[clamp(30px,3.81vw,110px)] text-center">
            <h2 className="pt-2 font-bold text-[#292C34] text-[clamp(30px,8.737vw,36px)] md:text-[clamp(36px,3.819vw,110px)] leading-[clamp(54px,15.29vw,63px)] md:leading-[clamp(54px,4.375vw,126px)]">
              About Us
            </h2>
            <p className="font-semibold text-[#292C34] text-[clamp(10px,2.91vw,12px)] md:text-[clamp(12px,1.04vw,32px)] leading-[clamp(25px,6.55vw,27px)] md:leading-[clamp(27px,1.875vw,54px)]">
              Empowering Careers Through Real-World Tech Training
            </p>
            <div className="relative px-4 md:px-50 overflow-hidden">
              {/* Wrapper with fixed spacing */}
              <div className="flex flex-col justify-end mx-auto px-4 md:px-10 pt-1 pb-4 md:pb-10 border-[#21B495] border-[2px] rounded-[32px] md:rounded-[50px] w-full">
                <img
                  src={image124}
                  alt="Meeting"
                  className="block mx-auto md:mt-5 mb-[-4px] rounded-[15px] md:rounded-[50px] w-full object-cover"
                />
              </div>

              {/* SVG Border */}
              {/* <div className="right-0 bottom-[-5px] left-2 absolute w-full overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 200"
                  fill="none"
                  className="w-full h-auto"
                >
                  <path
                    d="M1 0V160C1 180 20 199 40 199H760C780 199 799 180 799 160V0"
                    stroke="#21B495"
                    strokeWidth="2"
                  />
                </svg>
              </div> */}
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-[clamp(16px,3.47vw,100px)] pt-6 md:pr-[clamp(16px,7.63vw,220px)] md:pb-[clamp(30px,6.45vw,186px)] md:pl-[clamp(16px,6.53vw,120px)]">
            {/* Left Text */}
            <div className="px-4 md:px-0">
              <div className="px-1.5 w-[95%]">
                <h3 className="font-semibold text-[#12161F] text-[clamp(18px,5.82vw,24px)] md:text-[clamp(24px,2.23vw,64px)] leading-[clamp(26px,7.28vw,30px)] md:leading-[clamp(30px,4.375vw,126px)]">
                  Our story
                </h3>

                <h2 className="font-bold text-[#21B495] text-[clamp(18px,5.82vw,24px)] md:text-[clamp(50px,2.8vw,72px)] leading-[clamp(30px,7.28vw,63px)] md:leading-[clamp(63px,4.375vw,126px)] tracking-wide">
                  Kamlanil Technologies
                </h2>

                <p className="md:py-4 pr-7 md:pr-0 md:w-[95%] text-[#12161F] text-[clamp(14px,3.89vw,16px)] md:text-[clamp(16px,1.11vw,32px)] leading-[clamp(18.9px,6.55vw,27px)] md:leading-[clamp(27px,6.55vw,1.875px)]">
                  At KamlanilTech, we empower future-ready tech professionals
                  through practical, hands-on IT training and expert
                  consultancy. Our programs in Full Stack Development, Software
                  Testing, and AWS-DevOps are designed to bridge the gap between
                  theory and industry demands.
                </p>
              </div>
              {/* Mission & Vision */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4 px-2.5 w-[95%]">
                <div>
                  <h4 className="mt-6 font-bold text-[#12161F] text-[clamp(14px,3.8vw,16px)] md:text-[clamp(16px,1.52vw,44px)]">
                    Mission
                  </h4>
                  <p className="text-[#12161F] text-[clamp(14px,3.8vw,16px)] md:text-[clamp(14px,1.31vw,38px)] leading-[clamp(18.9px,6.55vw,27px)] md:leading-[clamp(27px,1.875vw,54px)]">
                    To transform careers and businesses by delivering
                    real-world, expert-led IT education and consultancy.
                  </p>
                </div>
                <div>
                  <h4 className="md:mt-6 font-bold text-[#12161F] text-[clamp(14px,3.8vw,16px)] md:text-[clamp(16px,1.52vw,44px)]">
                    Vision
                  </h4>
                  <p className="text-[#12161F] text-[clamp(14px,3.8vw,16px)] md:text-[clamp(14px,1.31vw,38px)] leading-[clamp(18.9px,6.55vw,27px)] md:leading-[clamp(27px,1.875vw,54px)]">
                    To be a trusted leader in IT training, building a skilled
                    workforce through quality, innovation, and practical
                    learning.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Feature Box */}

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 px-4">
              <div
                className="relative bg-cover bg-no-repeat bg-center px-5 md:px-[clamp(38px,4.57vw,131.74px)] md:py-[clamp(20px,5.55vw,160px)] pt-9.5 pb-14.5 rounded-2xl md:w-[clamp(280px,30.23vw,870.828px)]"
                style={{
                  backgroundImage: `url(${greenTextBackgroundImage})`,
                }}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <div className="space-y-3 bg-[#21B495] p-6 md:p-3 rounded-[21px] text-white">
                    {[
                      "Diverse Programs: Full Stack Development, Software Testing (Manual + Automation), and AWS-DevOps",
                      "Flexible Learning: 100% Online Courses with Weekend & Weekday Batches",
                      "Industry-Focused Training: Hands-on projects aligned with real-world technologies",
                      "Career-Driven Outcomes: Empowering students to land jobs with practical, job-ready skills",
                      "Integrated Approach: Blending coding, cloud, testing, and DevOps for a complete IT foundation",
                    ].map((text, index) => (
                      <div key={index}>
                        <div className="flex gap-2">
                          <img
                            src={rightIconSvg}
                            className="mt-1 w-[20px] h-[20px]"
                          />
                          <p className="font-medium text-[clamp(9px,2.88vw,11.87px)] md:text-[clamp(11.87px,0.82vw,23.74px)] leading-[clamp(17px,4.80vw,19.784px)] md:leading-[clamp(19.784px,1.373vw,39.568px)]">
                            {text}
                          </p>
                        </div>
                        {index !== 4 && (
                          <div className="bg-[#FFFFFF] opacity-30 my-[7px] h-[1px]"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* sdet trainer banner */}
        <section className="w-full">
          {/* Section 1: SDET Training Banner */}
          <div className="relative bg-[url('/images/sdetBackgrounImage.png')] md:bg-[url('/images/Rectangle.png')] md:bg-cover bg-no-repeat md:bg-left px-4 md:px-[clamp(16px,6.53vw,120px)] pt-[120px] md:pt-[130px] 2xl:pt-[200px] w-full h-[820px] md:h-[74vh] 2xl:h-[100vh] xl:h-[80vh]">
            <h2 className="font-bold text-[clamp(18px,8.7vw,36px)] text-white md:text-[clamp(36px,3.47vw,100px)] leading-[clamp(23px,11.2vw,46.5px)] md:leading-[clamp(46.5px,5.56vw,160px)]">
              Break into <span className="text-[#71ffe5]">IT</span> with
              Practical <span className="text-[#00FFD1]">SDET Training</span>
            </h2>
            <div className="flex flex-col gap-3 mt-6">
              <p className="font-medium text-[#fff] text-[clamp(12px,3.39vw,14px)] md:text-[clamp(14px,1.319vw,38px)] leading-[clamp(23px,6.310vw,26px)] md:leading-[clamp(23px,1.80vw,52px)]">
                An SDET is much more than just a tester or QA professional. They
                bring a powerful blend of development skills, quality assurance
                expertise, and project insight. SDETs work closely with
                development teams, contribute to product development, write
                application code, understand end-user requirements, and build
                custom automation tools.
              </p>
              <p className="font-medium text-[#fff] text-[clamp(12px,3.39vw,14px)] md:text-[clamp(14px,1.319vw,38px)] leading-[clamp(23px,6.310vw,26px)] md:leading-[clamp(23px,1.80vw,52px)]">
                This unique combination of skills makes the SDET role highly
                valuable and in demand across the software industry. While a ]QA
                engineer may be sufficient for small web applications, complex
                systems with advanced business logic and long development cycles
                absolutely require the depth and versatility that an SDET
                brings.
              </p>
            </div>
          </div>

          {/* Section 2: Flexible Learning */}
          <div className="bg-white">
            <h2 className="mb-4 md:mb-0 px-4 pt-[clamp(40px,4.93vw,142px)] md:pl-[clamp(16px,6.53vw,120px)] font-bold text-[#000] text-[clamp(18px,8.7vw,36px)] md:text-[clamp(36px,3.47vw,100px)] leading-[clamp(23px,11.2vw,46.5px)] md:leading-[clamp(46.5px,5.56vw,160px)]">
              Flexible Learning That Fits Your Schedule
            </h2>
            <div className="flex md:flex-row flex-col justify-between md:pr-[clamp(50px,6.45vw,186px)] md:pl-[clamp(94px,10.41vw,300px)]">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center">
                <img
                  src={trainingsvg}
                  alt="Flexible Learning"
                  className="w-full object-contain"
                />
              </motion.div>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-5 md:my-20 px-4 pt-5 md:w-[45%]">
                <p className="font-medium text-[#000] text-[clamp(14px,3.8vw,16px)] md:text-[clamp(16px,1.31vw,38px)] leading-[clamp(18.9px,5.1vw,21.6px)] md:leading-[clamp(21.6px,1.80vw,52px)]">
                  One of the key advantages of learning with Kamlanil
                  Technologies is the flexibility we offer for working
                  professionals and students alike.
                </p>
                <p className="font-medium text-[#000] text-[clamp(14px,3.8vw,16px)] md:text-[clamp(16px,1.31vw,38px)] leading-[clamp(18.9px,5.1vw,21.6px)] md:leading-[clamp(21.6px,1.80vw,52px)]">
                  Our classes are scheduled to fit around your existing
                  commitments, with twice-weekly weekday sessions in the early
                  evening, so there's no need to take time off from work or
                  studies. For added convenience, weekend classes are available
                  as well — attend on Saturday or Sunday, either online or at
                  our training center.
                  <br />
                  Plus, all sessions are recorded, so if you miss a class, you
                  can easily catch up at your own pace.
                </p>
              </motion.div>
            </div>
            {/* Image */}
          </div>
        </section >

        {/* Contact Section */}
        < section
          id="contact"
          className="items-start gap-10 grid grid-cols-1 md:grid-cols-2 bg-white px-4 py-12 md:pr-[clamp(50px,11.79vw,339.66px)] md:pl-[clamp(16px,6.53vw,120px)] w-full"
        >
          {/* Contact Info */}
          < div className="" >
            <h2 className="font-bold text-[#12161F] text-[clamp(18px,8.7vw,36px)] md:text-[clamp(16px,3.48vw,100px)] leading-[clamp(23px,11.2vw,46.5px)] md:leading-[clamp(46.5pxpx,4.375vw,126px)]">
              Contact Details
            </h2>
            <h3 className="md:py-5.5 font-bold text-[#12161F] text-[clamp(18px,5.8vw,24px)] md:text-[clamp(24px,1.67vw,48px)] leading-[clamp(24px,7.2vw,30px)] md:leading-[clamp(46.5pxpx,4.375vw,126px)]">
              Let's Connect
            </h3>
            <p className="py-4.5 md:py-0 md:pt-3.4 md:pb-5 md:max-w-[95%] md:font-normal font-medium text-[#12161F] text-[clamp(14px,3.89vw,16px)] md:text-[clamp(16px,1.319vw,50px)] leading-[clamp(21px,1.67vw,26px)] md:leading-[clamp(23px,1.875vw,108px)]">
              We’re here to help! Whether you have questions about our courses,
              need IT consultancy, or just want to say hello — don’t hesitate to
              reach out. Fill out the form below, and our team will get back to
              you as soon as possible.
            </p>

            {/* Contact Icons */}
            <div className="flex flex-col gap-5 text-[clamp(14px,2vw,16px)]">
              <div className="flex gap-2 md:gap-[6px]">
                <img
                  src={mapIcon}
                  className="md:mt-2 w-8 md:w-[clamp(24px,2.77vw,79.698px)] h-8 md:h-[clamp(24px,2.75vw,79.246px)]"
                />
                <div className="font-semibold text-[12px] md:text-[clamp(12px,1.25vw,36px)] leading-4 md:leading-[clamp(18.9px,3.69vw,106.496px)]">
                  <p className="leading-4 md:leading-[clamp(18.9px,2.08vw,60px)]">
                    Location:
                  </p>
                  <p className="text-[#21B495] leading-4">Pune , Maharashtra</p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={phoneIcon}
                  className="md:mt-2 w-8 md:w-[clamp(24px,2.77vw,79.698px)] h-8 md:h-[clamp(24px,2.75vw,79.246px)]"
                />
                <div className="font-semibold text-[12px] md:text-[clamp(12px,1.25vw,36px)] leading-4 md:leading-[clamp(18.9px,3.69vw,106.496px)]">
                  <p className="leading-4 md:leading-[clamp(18.9px,2.08vw,60px)]">
                    Phone(9am - 6am):
                  </p>
                  <p className="text-[#21B495] leading-4">+91-9322374766</p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={emailIcon}
                  className="md:mt-2 w-8 md:w-[clamp(24px,2.77vw,79.698px)] h-8 md:h-[clamp(24px,2.75vw,79.246px)]"
                />
                <div className="font-semibold text-[12px] md:text-[clamp(12px,1.25vw,36px)] leading-4 md:leading-[clamp(18.9px,3.69vw,106.496px)]">
                  <p className="leading-4 md:leading-[clamp(18.9px,2.08vw,60px)]">
                    E-mail::
                  </p>
                  <p className="text-[#21B495] leading-4">
                    info@kamlaniltech.com
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-start gap-[6px] pt-3">
                {/* Left Globe Icon */}

                <div className="flex justify-center items-center bg-[#E1DEE1] mt-2 rounded-lg w-[40px] h-[40px]">
                  <img src={image131} alt="" className="w-[20px] h-[20px]" />
                </div>

                {/* Text + Social Icons */}
                <div className="font-semibold text-[12px] md:text-[clamp(12px,1.25vw,36px)] leading-4 md:leading-[clamp(18.9px,3.69vw,106.496px)]">
                  <p className="leading-4 md:leading-[clamp(18.9px,2.08vw,60px)]">
                    Follow us on:
                  </p>

                  <div className="flex items-center gap-[6px]">
                    {/* LinkedIn */}
                    <div className="flex justify-center items-center bg-[#21B495] rounded-full w-6 md:w-6 h-6 md:h-6">
                      <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-3.5 h-3.5"
                      />
                    </div>

                    {/* Instagram */}
                    <div className="flex justify-center items-center bg-[#21B495] rounded-full w-6 md:w-6 h-6 md:h-6">
                      <img
                        src={instagram}
                        alt="Instagram"
                        className="w-3.5 h-3.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >

          {/* Contact Form */}
          < motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="px-4" >
            <div className="bg-[rgba(167,159,168,0.34)] px-5 md:px-5 py-3 rounded-[13.583px] w-full">
              <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Phone no. *
                  </label>
                  <div className="flex py-2 input">
                    <div className="inline-flex items-center bg-[#EEE] px-4 border border-gray-300 rounded-md whitespace-nowrap">
                      🇮🇳 +91{"   "}
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block md:pr-10 font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Course *
                  </label>
                  <select
                    className="input"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option>Select Course</option>
                    <option>SEDT</option>
                    <option>Full Stack Developer</option>
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-sm">{errors.course}</p>
                  )}
                </div>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                    className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="block font-bold text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)]">
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    rows="3"
                    name="message"
                    className="placeholder:text-[clamp(12px,1.11vw,32.6px)] input"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="block bg-[#21B495] hover:bg-[#00b970] mt-3 rounded-[33px] w-full font-bold text-[#000] text-[12px] md:text-[clamp(12px,1.11vw,32.6px)] leading-[42px] md:leading-[clamp(36px,2.91vw,84px)] transition cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div >
        </section >

        {/* Footer */}
        < footer className="flex justify-center bg-[rgb(47,54,69)] px-4 py-10 md:pt-[clamp(10px,3.125vw,45px)] md:pr-[clamp(94px,3.40vw,49px)] pb-20 md:pl-[clamp(94px,8.19vw,236px)]" >
          <div className="flex md:flex-row flex-col justify-between w-full">
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:w-[25%] text-center md:text-start">
              <div className="flex items-center gap-2">
                <img
                  src={company_logo}
                  alt="Logo"
                  className="md:w-[181.619px] md:h-[47.4427px]"
                />
              </div>
              <p className="w-[75%] md:w-[120%] text-[#fff] text-[12px] md:text-[clamp(12px,1.04vw,30px)] text-center md:text-start">
                Empowering future-ready professionals through practical tech
                training and real-world skills.
              </p>
              <div className="hidden md:flex gap-3 mt-4">
                <a
                  href="#"
                  className="flex justify-center items-center bg-[#21B495] rounded-full w-[50px] h-[50px]"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center bg-[#21B495] rounded-full w-[50px] h-[50px]"
                >
                  <img src={instagram} alt="Instagram" className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center bg-[#21B495] rounded-full w-[50px] h-[50px]"
                >
                  <img src={whatsapp} alt="WhatsApp" className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-0 text-center">
              <h3 className="md:mb-5 font-[Montserrat] font-bold text-[16px] text-white md:text-[clamp(12px,1.38vw,40px)] text-center">
                Quick Links
              </h3>
              <ul className="space-y-4 font-medium text-[#00FFCA] text-sm">
                <li className="md:text-[clamp(12px,1.041vw,30px)]">
                  <a href="#">Home</a>
                </li>
                <li className="md:text-[clamp(12px,1.041vw,30px)]">
                  <a href="#">About</a>
                </li>
                <li className="md:text-[clamp(12px,1.041vw,30px)]">
                  <a href="#">Courses</a>
                </li>
                <li className="md:text-[clamp(12px,1.041vw,30px)]">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info  */}
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-center">
              <h3 className="font-[Montserrat] font-bold text-[16px] text-white md:text-[clamp(16px,1.38vw,40px)]">
                CONTACT
              </h3>

              <div className="flex md:flex-row flex-col items-center md:items-start">
                <div className="flex flex-col">
                  <div className="flex md:flex-row flex-col items-center md:items-start gap-2">
                    <img
                      src={smallMapIcon}
                      className="md:mt-2 w-[20px] h-[16px]"
                    />
                    <p className="font-bold text-[12px] text-white md:text-[clamp(12px,1.38vw,40px)]">
                      Location
                    </p>
                  </div>
                  <p className="font-medium text-[#21B495] text-[12px] md:text-[clamp(12px,1.11vw,32.6px)]">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex flex-col">
                  <div className="flex md:flex-row flex-col items-center md:items-start gap-2">
                    <img
                      src={smallPhoneSvg}
                      className="md:mt-2 w-[20px] h-[16px]"
                    />
                    <p className="font-bold text-[12px] text-white md:text-[clamp(12px,1.38vw,40px)]">
                      Phone
                    </p>
                  </div>
                  <p className="font-medium text-[#21B495] text-[12px] md:text-[clamp(12px,1.11vw,32.6px)]">
                    +91-9322374766
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex flex-col">
                  <div className="flex md:flex-row flex-col items-center md:items-start gap-2">
                    <img
                      src={smallEmailSvg}
                      className="md:mt-2 w-[20px] h-[16px]"
                    />
                    <p className="font-bold text-[12px] text-white md:text-[clamp(12px,1.38vw,40px)]">
                      Email
                    </p>
                  </div>
                  <p className="font-medium text-[#21B495] text-[12px] md:text-[clamp(12px,1.11vw,32.6px)]">
                    info@kamlaniltech.com
                  </p>
                </div>
              </div>
            </div>

            <div className="md:hidden flex flex-col items-center space-y-4">
              <h3 className="font-[Montserrat] font-bold text-[16px] text-white text-center">
                Social Media
              </h3>
              <div className="flex flex-row gap-3">
                <div className="flex justify-center items-center bg-black rounded-full w-[24px] h-[24px]">
                  <img src={linkedin} className="w-[16px] h-[16px]" />
                </div>
                <div className="flex justify-center items-center bg-black rounded-full w-[24px] h-[24px]">
                  <img src={instagram} className="w-[16px] h-[16px]" />
                </div>
                <div className="flex justify-center items-center bg-black rounded-full w-[24px] h-[24px]">
                  <img src={whatsapp} className="w-[16px] h-[16px]" />
                </div>
              </div>
            </div>
          </div>
        </footer >
      </div >
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />
      }
    </>
  );
}
