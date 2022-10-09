import React, { useState } from "react";

const WorksSection = () => {
  const [active, setActive] = useState("All Categories");
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-[#fafafc] textt-[12px] font-normal">Works</h3>
        <ul className="flex justify-between gap-x-4 items-center">
          <li
            onClick={() => setActive("All Categories")}
            className={`text-[11px] cursor-pointer ${
              active === "All Categories" ? "text-[#fafafc]" : "text-[#8c8c8e]"
            } uppercase font-semibold transition duration-300 hover:text-[#fafafc]`}
          >
            All Categories
          </li>
          <li
            onClick={() => setActive("Web Templates")}
            className={`text-[11px] cursor-pointer ${
              active === "Web Templates" ? "text-[#fafafc]" : "text-[#8c8c8e]"
            } uppercase font-semibold transition duration-300 hover:text-[#fafafc]`}
          >
            Web Templates
          </li>
          <li
            onClick={() => setActive("Logos")}
            className={`text-[11px] cursor-pointer ${
              active === "Logos" ? "text-[#fafafc]" : "text-[#8c8c8e]"
            } uppercase font-semibold transition duration-300 hover:text-[#fafafc]`}
          >
            Logos
          </li>
          <li
            onClick={() => setActive("Drawings")}
            className={`text-[11px] cursor-pointer ${
              active === "Drawings" ? "text-[#fafafc]" : "text-[#8c8c8e]"
            } uppercase font-semibold  transition duration-300 hover:text-[#fafafc]`}
          >
            Drawings
          </li>
          <li
            onClick={() => setActive("UI Elements")}
            className={`text-[11px] cursor-pointer ${
              active === "UI Elements" ? "text-[#fafafc]" : "text-[#8c8c8e]"
            } uppercase font-semibold transition duration-300 hover:text-[#fafafc]`}
          >
            UI Elements
          </li>
        </ul>
      </div>
      <div className="mt-4 gap-5 grid grid-cols-3">
        <div>
          <img src="/assets/works/1.jpg" alt="" />
        </div>
     
        
      </div>
    </div>
  );
};

export default WorksSection;
