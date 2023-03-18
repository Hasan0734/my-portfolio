import React, { useState } from "react";
import WorkCard from "./WorkCard";

const ProjectSection = ({ theme }) => {
  const [active, setActive] = useState("All Categories");
  return (
    <div className="mt-6 px-3">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
        <h3 className="dark:text-[#fafafc] text-[#20202a] font-semibold">
          Projects
        </h3>
        <ul className="flex flex-wrap gap-y-4  gap-x-4 items-center">
          <li
            onClick={() => setActive("All Categories")}
            className={`text-[11px] cursor-pointer ${
              active === "All Categories"
                ? "dark:text-[#fafafc] text-pink-600"
                : "text-[#8c8c8e]"
            } uppercase font-semibold transition duration-300 dark:hover:text-[#fafafc] hover:text-pink-600`}
          >
            All Categories
          </li>
          <li
            onClick={() => setActive("Web Templates")}
            className={`text-[11px] cursor-pointer ${
              active === "Web Templates"
                ? "dark:text-[#fafafc] text-pink-600"
                : "text-[#8c8c8e]"
            } uppercase font-semibold transition duration-300 dark:hover:text-[#fafafc] hover:text-pink-600`}
          >
            Web Templates
          </li>
          <li
            onClick={() => setActive("Logos")}
            className={`text-[11px] cursor-pointer ${
              active === "Logos"
                ? "dark:text-[#fafafc] text-pink-600"
                : "text-[#8c8c8e]"
            } uppercase font-semibold transition duration-300 dark:hover:text-[#fafafc] hover:text-pink-600`}
          >
            Logos
          </li>
          <li
            onClick={() => setActive("Drawings")}
            className={`text-[11px] cursor-pointer ${
              active === "Drawings"
                ? "dark:text-[#fafafc] text-pink-600"
                : "text-[#8c8c8e]"
            } uppercase font-semibold  transition duration-300 dark:hover:text-[#fafafc] hover:text-pink-600`}
          >
            Drawings
          </li>
          <li
            onClick={() => setActive("UI Elements")}
            className={`text-[11px] cursor-pointer ${
              active === "UI Elements"
                ? "dark:text-[#fafafc] text-pink-600"
                : "text-[#8c8c8e]"
            } uppercase font-semibold transition duration-300 dark:hover:text-[#fafafc] hover:text-pink-600`}
          >
            UI Elements
          </li>
        </ul>
      </div>
      <div
        className="mt-4 gap-x-7 gap-y-5 grid-flow-row lg:grid-flow-col grid 
      grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
      >
        <WorkCard theme={theme} />
        <WorkCard theme={theme} />
        <WorkCard theme={theme} />
      </div>
    </div>
  );
};

export default ProjectSection;
