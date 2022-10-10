import Link from "next/link";
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
      <div className="mt-4 gap-x-7 gap-y-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-md overflow-hidden shadow-[0px_15px_20px_0px_rgba(0,0,0,0.68)] work_card cursor-pointer">
          <div className="relative h-[240px] overflow-hidden">
            <img
              className=" w-full h-full work-img object-cover"
              src="/assets/works/1.jpg"
              alt=""
            />
            <div className="absolute bg-[#0000006b] w-full links">
              <div className="flex justify-center items-center h-full">
                <div className="flex gap-3">
                  <Link href="/">
                    <a className="bg-[#00000050] p-4 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="bg-[#00000050] p-4 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 py-5">
            <h2 className="text-[#ffc107] text-2xl font-semibold uppercase tracking-wider">
              Hello world
            </h2>
            <h4 className="text-[#ffc10785] text-[11px] font-semibold tracking-wider mt-2">
              Tools:{" "}
              <span className="text-[#8c8c8e]">
                React, Tailwindcss, Node js, Swiper
              </span>
            </h4>

            <p className="text-[#8c8c8e] text-[12px] leading-5 text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              saepe, voluptas provident iusto dolore laboriosam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quos commodi, dicta
              suscipit voluptates libero blanditiis! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nemo accusantium eligendi impedit.
            </p>
          </div>
        </div>
        <div className="rounded-md overflow-hidden shadow-[0px_15px_20px_0px_rgba(0,0,0,0.68)] work_card cursor-pointer">
          <div className="relative h-[240px] overflow-hidden">
            <img
              className=" w-full h-full work-img object-cover"
              src="/assets/works/2.jpg"
              alt=""
            />
            <div className="absolute bg-[#0000006b] w-full links">
              <div className="flex justify-center items-center h-full">
                <div className="flex gap-3">
                  <Link href="/">
                    <a className="bg-[#00000050] p-4 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="bg-[#00000050] p-4 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 py-5">
            <h2 className="text-[#ffc107] text-2xl font-semibold uppercase tracking-wider">
              Hello world
            </h2>
            <h4 className="text-[#ffc10785] text-[11px] font-semibold tracking-wider mt-2">
              Tools:{" "}
              <span className="text-[#8c8c8e]">
                React, Tailwindcss, Node js, Swiper
              </span>
            </h4>
            <p className="text-[#8c8c8e] text-[12px] leading-5 text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              saepe, voluptas provident iusto dolore laboriosam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quos commodi, dicta
              suscipit voluptates libero blanditiis! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nemo accusantium eligendi impedit.
            </p>
          </div>
        </div>
        <div className="rounded-md overflow-hidden shadow-[0px_15px_20px_0px_rgba(0,0,0,0.68)] work_card cursor-pointer">
          <div className="relative h-[240px] overflow-hidden">
            <img
              className=" w-full h-full work-img object-cover"
              src="/assets/works/3.jpg"
              alt=""
            />
            <div className="absolute bg-[#0000006b] w-full links">
              <div className="flex justify-center items-center h-full">
                <div className="flex gap-3">
                  <Link href="/">
                    <a className="bg-[#00000050] p-4 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="bg-[#00000050] p-4 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 py-5">
            <h2 className="text-[#ffc107] text-2xl font-semibold uppercase tracking-wider">
              Hello world
            </h2>
            <h4 className="text-[#ffc10785] text-[11px] font-semibold tracking-wider mt-2">
              Tools:{" "}
              <span className="text-[#8c8c8e]">
                React, Tailwindcss, Node js, Swiper
              </span>
            </h4>
            <p className="text-[#8c8c8e] text-[12px] leading-5 text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              saepe, voluptas provident iusto dolore laboriosam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quos commodi, dicta
              suscipit voluptates libero blanditiis! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nemo accusantium eligendi impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
