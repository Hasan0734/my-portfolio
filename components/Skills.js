import Link from 'next/link';
import React, { useState } from 'react'
import CircularProgress from './CircularProgress';
import LineProgress from './LineProgress';



const skills = [
  { id: 1, label: "HTML", progress: 90 },
  { id: 2, label: "CSS", progress: 95 },
  { id: 3, label: "Js", progress: 70 },
  { id: 4, label: "React", progress: 75 },
  { id: 5, label: "Node", progress: 50 },
];
export default function Skills({theme}) {
      const [english, setEnglish] = useState(60);
      const [bangla, setBangla] = useState(100);
      const [hindi, setHindi] = useState(40);
  return (
    <>
      <div className="h-full w-full block absolute top-0 duration-200">
        <div
          style={{
            transform: "translate3d(0px, 0px, 0px)",
            padding: "240px 0 50px",
          }}
        >
          {/* locations */}
          <div className="p-[15px]">
            <ul>
              <li className="mb-[5px] flex justify-between">
                <h5 className="text-[12px] font-normal dark:text-[#fafafc] text-[#20202a]">
                  Residence:
                </h5>
                <span className="dark:text-[#8c8c8e] text-[#20202a] text-[12px] font-[300]">
                  Bangladesh
                </span>
              </li>
              <li className="mb-[5px] flex justify-between">
                <h5 className="text-[12px] font-normal dark:text-[#fafafc] text-[#20202a]">
                  City:
                </h5>
                <span className="dark:text-[#8c8c8e] text-[#20202a] text-[12px] font-[300]">
                  Mymensingh
                </span>
              </li>
              <li className="mb-[5px] flex justify-between">
                <h5 className="text-[12px] font-normal dark:text-[#fafafc] text-[#20202a]">
                  Age:
                </h5>
                <span className="dark:text-[#8c8c8e] text-[#20202a] text-[12px] font-[300]">
                  21
                </span>
              </li>
            </ul>
            <div className="bg-[#646466] w-full h-[1px] opacity-[0.3] mt-4"></div>
          </div>
          {/* languages skills */}
          <div className="p-[15px]">
            <div className="grid grid-cols-3">
              <div className="mb-[15px] text-center flex  flex-col items-center ">
                <div className="mb-[15px] w-[65%]">
                  <CircularProgress
                    size={55}
                    strokeWidth={4}
                    color={theme === "light" ? "#ff14a5" : "#FFC107"}
                    percentage={bangla}
                  />
                </div>
                <h6 className="text-[12px] font-normal dark:text-[#fafafc] text-[#20202a]">
                  Bangla
                </h6>
              </div>
              <div className="mb-[15px] text-center flex flex-col items-center">
                <div className="mb-[15px] w-[65%]">
                  <CircularProgress
                    size={55}
                    strokeWidth={4}
                    color={theme === "light" ? "#ff14a5" : "#FFC107"}
                    percentage={english}
                  />
                </div>
                <h6 className="text-[12px] font-normal dark:text-[#fafafc] text-[#20202a]">
                  English
                </h6>
              </div>
              <div className="mb-[15px] text-center flex  flex-col items-center">
                <div className="mb-[15px] w-[65%]">
                  <CircularProgress
                    size={55}
                    strokeWidth={4}
                    color={theme === "light" ? "#ff14a5" : "#FFC107"}
                    percentage={hindi}
                  />
                </div>
                <h6 className="text-[12px] font-normal dark:text-[#fafafc] text-[#20202a]">
                  Hindi
                </h6>
              </div>
            </div>
            <div className="bg-[#646466] w-full h-[1px] opacity-[0.3] mt-4"></div>
          </div>

          {/* Line skills */}
          <div className="p-[15px]">
            {skills.map((skill) => (
              <LineProgress theme={theme} key={skill.id} skill={skill} />
            ))}
            <div className="bg-[#646466] w-full h-[1px] opacity-[0.3] mt-9"></div>
            <ul className="mt-4">
              <li className="dark:text-[#8c8c8e] text-[#20202a] text-[12px] font-[300] flex gap-2 items-center">
                <svg
                  className="dark:text-[#FFC107] text-pink-600 w-3 h-3"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <span>Bootstrap, Materialize</span>
              </li>
              <li className="dark:text-[#8c8c8e] text-[#20202a] text-[12px] font-[300] flex gap-2 items-center">
                <svg
                  className="dark:text-[#FFC107] text-pink-600 w-3 h-3"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <span>Stylus, Sass, Less</span>
              </li>
              <li className="dark:text-[#8c8c8e] text-[#20202a] text-[12px] font-[300] flex gap-2 items-center">
                <svg
                  className="dark:text-[#FFC107] text-pink-600 w-3 h-3"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <span>Gulp, Webpack, Grunt</span>
              </li>
              <li className="dark:text-[#8c8c8e] text-[#20202a] text-[12px] font-[300] flex gap-2 items-center">
                <svg
                  className="dark:text-[#FFC107] text-pink-600 w-3 h-3"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <span>GIT knowledge</span>
              </li>
            </ul>
            <div className="bg-[#646466] w-full h-[1px] opacity-[0.3] mt-9"></div>

            <div className="mt-4">
              <Link href="/">
                <a
                  className="dark:text-[#8c8c8e] text-[#20202a] text-[10px] flex gap-2 items-center tracking-[1.5px]
                   font-semibold uppercase"
                >
                  Download
                  <svg
                    className="w-3 h-3 text-pink-500 dark:text-[#8c8c8e]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
