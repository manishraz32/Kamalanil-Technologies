import React from 'react';

const FeatureCard = ({ icon, title, description, bgColor = 'rgba(94,47,163,0.1)' }) => {
  return (
    <div className="flex flex-col items-center gap-2.5 md:gap-7.5 text-center md:w-[30%]">
      <div
        className="w-[clamp(72px,23.3vw,96px)] h-[clamp(72px,23.3vw,96px)] md:w-[clamp(96px,13.18vw,189.847px)] md:h-[clamp(96px,13.18vw,189.847px)] rounded-[24px] flex justify-center items-center"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={icon}
          alt="Icon"
          className="w-2/3 h-2/3 md:w-[30%] md:h-[30%] object-contain"
        />
      </div>

      <div className="text-[clamp(14px,3.8vw,19px)] leading-[clamp(18.9px,5.1vw,30px)] text-[#575757] font-extrabold">
        {title}
      </div>

      <div className="text-[clamp(14px,3.8vw,16px)] leading-[clamp(18.9px,5.1vw,21.6px)] md:text-[clamp(13px,1.1vw,24px)] md:leading-[clamp(18px,1.5vw,24px)]; text-[#575757] font-medium px-6">
        {description}
      </div>
    </div>
  );
};

export default FeatureCard;
