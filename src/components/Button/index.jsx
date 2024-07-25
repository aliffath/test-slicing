import React from "react";

const Button = ({ title }) => {
  return (
    <>
      <button className="bg-[#364F6B] text-white px-5 py-[6px] leading-[17px ] rounded-full font-bold text-sm hover:font-normal hover:text-lg hover:leading-[21px] active:bg-[#3FC1C9]">
        {title}
      </button>
    </>
  );
};

export default Button;
