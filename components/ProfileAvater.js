import React from 'react'

export default function ProfileAvater() {
  return (
    <>
      <div
        className="profile_header p-[30px] h-[235px] z-[9999] fixed w-[290px] min-w-[290px]
            shadow-[0_1px_4px_0_rgba(15,15,20,0.1)]"
      >
        <div
          className="profile_avatar w-[90px]
               h-[90px] mx-auto my-0 mb-[15px] rounded-full relative"
        >
          <div className="w-full h-full rounded-full z-0 relative profile_img">
            <img
              className="rounded-full w-full h-full object-cover "
              src="./assets/profile.jpg"
              alt=""
            />
            <div
              className="w-[30px] h-[30px] text-center expand 
                  absolute  text-[11px] leading-[30px]  z-10 self-center top-7 left-7 p-[10px]"
            >
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" />
              </svg>
            </div>
          </div>
          <div className="z-10 pro_lamp_light">
            <div className="pro_available_light"></div>
          </div>
        </div>

        <div>
          <h5 className="text-[#fafafc] text-center font-semibold text-[14px]">
            Jahid Hasan
          </h5>
        </div>
        <div className="text-[11px] text-center font-[300] text-[#8c8c8e] mt-2">
          Front-end Developer <br /> &quot;UI/UX&quot; Designer
        </div>
      </div>
    </>
  );
}
