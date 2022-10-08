import React from "react";

const SwiperPrev = ({ children }) => {
  return (
    <button className="text-white cursor-pointer p-1 bg-red-500">
      {children}
    </button>
  );
};

export default SwiperPrev;
