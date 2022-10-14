import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <>
      <div className=" max-h-[315px] w-full header_banner">
        <div className="z-50 flex">
          <div className="banner_content py-5 pl-5 md:pl-10 pr-5 md:pr-5 md:py-10  w-full">
            <h1 className="text-[#fafafc] text-[44px] font-bold lg:text-start text-center">
              Discover my Amazing <br /> Art Space!
            </h1>
            {/* <h1 className="text-[#fafafc]  text-[24px] font-bold block lg:hidden text-center">
              Discover my Amazing <br/> Art Space!
            </h1> */}

            <p className="text-white font-normal text-[14px] tracking-[2.2px] mt-3 text-center lg:text-start">
              &lt;<span className="text-[#FFC107]">code</span>&gt;{" "}
              <span>I build </span>
              <Typewriter
                className=""
                words={[
                  "web interfaces. ",
                  "ios and android applications. ",
                  "automation tools. ",
                ]}
                loop
                cursor
                cursorStyle=" "
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={2000}
              />
              &lt;/<span className="text-[#FFC107]">code</span>&gt;
            </p>
            <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-start items-center">
              <Link href="/">
                <a
                  className="bg-[#FFC107] text-[#20202a] px-3 md:px-7 py-2 md:py-[12px] rounded-sm uppercase
              tracking-[1.5px] leading-6 text-[14px] font-semibold"
                >
                  Explore Now
                </a>
              </Link>
              <Link href="/">
                <a
                  className=" text-[#fcfcfc] px-3 md:px-7 py-[12px] rounded-sm uppercase
              tracking-[1.5px] leading-6 text-[12px] font-semibold"
                >
                  Hire me &gt;
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden xl:block w-[68%]">
            <img
              className="w-[84.5%] -mt-[37px]"
              src="/assets/face-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
