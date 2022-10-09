import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <>
      <div className=" max-h-[315px] w-full header_banner">
        <div className="z-50 flex rid-cols-2">
          <div className="banner_content p-5 md:p-10 pr-2 w-full">
            <h1 className="text-[#fafafc] hidden lg:block text-[36px] font-bold">
              Discover my Amazing <br /> Art Space!
            </h1>
            <h1 className="text-[#fafafc]  text-[20px] font-bold">
              Discover my Amazing Art Space!
            </h1>

            <p className="text-white font-normal text-[8px] md:text-[14px] tracking-[2.2px] mt-3">
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
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              &lt;/<span className="text-[#FFC107]">code</span>&gt;
            </p>
            <div className="mt-10 ">
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
                  className=" text-[#fcfcfc] px-3 md:px-7 py-[12px] mt-6 rounded-sm uppercase
              tracking-[1.5px] leading-6 text-[12px] font-semibold"
                >
                  Hire me &gt;
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full hidden xl:block">
            <img className="w-[68%] -mt-[37px]" src="/assets/face-2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
