import React, { useState } from "react";

export default function GetInTouch({theme}) {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="mt-6 px-3">
      <h3 className="dark:text-[#fafafc] text-[#20202a] textt-[12px] font-semibold">
        Get in touch
      </h3>
      <div
        className={`mt-4 ${
          theme === "light" ? "send_message_bg_light" : "send_message_bg"
        } send_message p-[20px] md:p-[30px]`}
      >
        <form action="">
          <div className="relative mb-[30px]">
            <input
              className={`w-full dark:text-[#fafafc] text-[#20202a] ${
                theme === "light" ? "input_field_light" : "input_field"
              } text-[12px]`}
              placeholder="Name"
              type="text"
              name="name"
              id="name"
            />
            <label
              className={`${
                theme === "light" ? " input_label_light" : "input_label"
              } flex justify-center items-center`}
              htmlFor="name"
            >
              <svg
                className="w-[14px] h-[14px]"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </label>
          </div>
          <div className="relative mb-[30px]">
            <input
              className={`w-full dark:text-[#fafafc] text-[#20202a] ${
                theme === "light" ? "input_field_light" : "input_field"
              } text-[12px]`}
              placeholder="Email"
              type="text"
              name="email"
              id="email"
            />
            <label
              className={`${
                theme === "light" ? " input_label_light" : "input_label"
              } flex justify-center items-center`}
              htmlFor="email"
            >
              <svg
                fill="currentColor"
                className="w-[14px] h-[14px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z" />
              </svg>
            </label>
          </div>
          <div className="relative mb-[30px]">
            <textarea
              className={`w-full dark:text-[#fafafc] text-[#20202a] text-[12px] py-3 ${
                theme === "light" ? "message_light" : "message"
              }`}
              placeholder="message"
              type="text"
              name="message"
              id="message"
            />
            <label
              className={`${
                theme === "light" ? "message_label_light" : "message_label"
              } flex justify-center items-center`}
              htmlFor="message"
            >
              <svg
                fill="currentColor"
                className="w-[14px] h-[14px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
              </svg>
            </label>
          </div>

          <div className="relative h-[45px]">
            {!isTrue && (
              <button
                onClick={() => setIsTrue(true)}
                className="px-8 py-3 dark:bg-[#ffc107] bg-pink-500 dark:text-black text-white text-[12px] font-semibold tracking-wide uppercase"
                type="submit"
              >
                Send Message
              </button>
            )}
            <div
              className="message_success flex gap-2 items-center justify-center"
              style={{
                transform: `scale(${isTrue ? "1" : "0"})`,
              }}
            >
              <span>Success</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
