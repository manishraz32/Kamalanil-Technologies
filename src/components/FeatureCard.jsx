import React from 'react';
import { motion } from "framer-motion";

const FeatureCard = ({
  icon,
  title,
  description,
  bgColor = 'rgba(94,47,163,0.1)',
  delay = 0,
  animationType = "slide-left" 
}) => {
  let animationProps = {};

  if (animationType === 'scale') {
    animationProps = {
      initial: { opacity: 0, scale: 0 },
      whileInView: { opacity: 1, scale: 1 },
    };
  } else if (animationType === 'slide-left') {
    animationProps = {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
    };
  } else if (animationType === 'slide-right') {
    animationProps = {
      initial: { opacity: 0, x: 100 },
      whileInView: { opacity: 1, x: 0 },
    };
  }

  return (
    <motion.div
      {...animationProps}
      transition={{ duration: 1, delay }}
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col items-center gap-2.5 md:gap-7.5 text-center md:w-[30%]"
    >
      <div
        className=" flex justify-center items-center"
      >
        <img
          src={icon}
          alt="Icon"
          className="object-contain  w-[clamp(72px,23.3vw,96px)] h-[clamp(72px,23.3vw,96px)] md:w-[clamp(96px,13.18vw,189.847px)] md:h-[clamp(96px,13.18vw,189.847px)] rounded-[24px]"
        />
      </div>

      <div className="text-[clamp(14px,3.8vw,19px)] leading-[clamp(18.9px,5.1vw,30px)] text-[#575757] font-extrabold">
        {title}
      </div>

      <div className="text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] md:text-[clamp(13px,1.1vw,24px)] md:leading-[clamp(18px,1.5vw,24px)] text-[#575757] font-medium px-6">
        {description}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
