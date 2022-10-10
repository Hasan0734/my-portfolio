import Link from "next/link";
import React from "react";

export default function PricePlans() {
  return (
    <>
      <div className="mt-6 px-3">
        <h3 className="text-[#fafafc] textt-[12px] font-normal">Price Plans</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-7 mt-6">
          <div className="my-service-box rounded-sm">
            <div className="p-6 pb-3 text-center">
              <h2 className="text-[14px] font-semibold text-[#fafafc] mb-6">
                Starter Price
              </h2>
              <h1 className="text-[#ffc107] tracking-wide uppercase  relative">
                <span className="text-[32px] font-semibold">Free</span>
                <span className="text-[#ffc1078a]  absolute top-2 ml-1">*</span>
              </h1>
              <ul className="mt-5">
                <li className="flex justify-center items-center gap-1 mb-4">
                  {" "}
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">UI Design</span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  {" "}
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">
                    Web Development
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-[#FFC107] w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-[#8c8c8e4a] text-[12px]">
                    Logo design
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-[#FFC107] w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-[#8c8c8e4a] text-[12px]">
                    SEO optimization
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-[#FFC107] w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-[#8c8c8e4a] text-[12px]">
                    Wordpress Integration
                  </span>
                </li>
              </ul>
              <div>
                <Link href="/">
                  <a className="text-[#ffc107] text-[10px] font-semibold tracking-wide uppercase">
                    Order Now &gt;
                  </a>
                </Link>
                <p className="text-[8px] text-[#8c8c8e4a] mt-2">
                  &apos;Free only when ordering paid services
                </p>
              </div>
            </div>
          </div>
          <div className="my-service-box rounded-sm relative">
            <div className="absolute rotate-45 -right-[25px] top-5 bg-[#ffc107] ">
              <h2
                className="
             text-[10px] font-semibold uppercase tracking-wide px-8 leading-5
             "
              >
                Popular
              </h2>
            </div>
            <div className="p-6 pb-3 text-center">
              <h2 className="text-[14px] font-semibold text-[#fafafc] mb-6">
                Hourly payment
              </h2>
              <h1 className="text-[#ffc107] tracking-wide uppercase  relative">
                <span className="text-[#fafafc82] text-[12px]">$ </span>
                <span className="text-[32px] font-semibold">29</span>
                <span className="text-[#fafafc82] text-[12px]"> h</span>
                {/* <span className="text-[#ffc1078a]  absolute top-2 ml-1">*</span> */}
              </h1>
              <ul className="mt-5">
                <li className="flex justify-center items-center gap-1 mb-4">
                  {" "}
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">UI Design</span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">
                    Web Development
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">
                    Logo design
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-[#FFC107] w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-[#8c8c8e4a] text-[12px]">
                    SEO optimization
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-[#FFC107] w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-[#8c8c8e4a] text-[12px]">
                    Wordpress Integration
                  </span>
                </li>
              </ul>
              <div>
                <Link href="/">
                  <a className="text-[#ffc107] text-[10px] font-semibold tracking-wide uppercase">
                    Order Now &gt;
                  </a>
                </Link>
                <p className="text-[8px] text-[#8c8c8e4a] mt-2"></p>
              </div>
            </div>
          </div>
          <div className="my-service-box rounded-sm relative">
            {/* <div className="absolute rotate-45 -right-[25px] top-5 bg-[#ffc107] ">
              <h2
                className="
             text-[10px] font-semibold uppercase tracking-wide px-8 leading-5
             "
              >
                Popular
              </h2>
            </div> */}
            <div className="p-6 pb-3 text-center">
              <h2 className="text-[14px] font-semibold text-[#fafafc] mb-6">
                Full time
              </h2>
              <h1 className="text-[#ffc107] tracking-wide uppercase  relative">
                <span className="text-[#fafafc82] text-[12px]">$ </span>
                <span className="text-[32px] font-semibold">2999</span>
                <span className="text-[#fafafc82] text-[12px]"> m</span>
                {/* <span className="text-[#ffc1078a]  absolute top-2 ml-1">*</span> */}
              </h1>
              <ul className="mt-5">
                <li className="flex justify-center items-center gap-1 mb-4">
                  {" "}
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">UI Design</span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  {" "}
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">
                    Web Development
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">
                    Logo design
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">
                    SEO optimization
                  </span>
                </li>
                <li className="flex justify-center items-center gap-1 mb-4">
                  <svg
                    className="text-[#FFC107] w-3 h-3"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <span className="text-[#8c8c8e] text-[12px]">
                    Wordpress Integration
                  </span>
                </li>
              </ul>
              <div>
                <Link href="/">
                  <a className="text-[#ffc107] text-[10px] font-semibold tracking-wide uppercase">
                    Order Now &gt;
                  </a>
                </Link>
                <p className="text-[8px] text-[#8c8c8e4a] mt-2"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
