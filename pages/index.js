import Link from "next/link";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import CircularProgress from "../components/CircularProgress";
import LineProgress from "../components/LineProgress";
import MainContent from "../components/MainContent";
import ProfileAvater from "../components/ProfileAvater";
import SidebarFooter from "../components/SidebarFooter";
import Skills from "../components/Skills";

export default function Home() {
  const [toggle, setToggle] = useState(false)
  return (
    <div
      className="max-w-[1440px] container w-full  mx-auto 
    relative lg:px-0 my-0 lg:my-4  overflow-hidden h-screen lg:h-[calc(100vh_-_35px)]"
    >
      <div className="flex mx-0 lg:mx-3 bg-[#1e1e28] overflow-hidden relative">
        {/* mobile top bar */}
        <div className="fixed z-[99] w-full h-[70px] bg-[#20202a] mobile_top block lg:hidden"></div>
        {/* left sidebar */}

        <div
          className={`absolute lg:static duration-500 ${
            toggle ? "left-0" : "-left-[300px]"
          } lg:left-0`}
        >
          <OutsideClickHandler onOutsideClick={() => setToggle(false)}>
            <div
              className="bg-[#20202a] w-[290px] min-w-[290px] h-[calc(100vh_-_35px)]  duration-200
        z-[999] relative shadow-[0px_3px_8px_0_rgba(15,15,20,0.2)] scroll-smooth scrollbar
          scrollbar-hide"
              style={{ transition: "0.4s ease-in-out" }}
            >
              <ProfileAvater toggle={toggle} setToggle={setToggle} />

              <Skills />

              <SidebarFooter />
            </div>
          </OutsideClickHandler>
        </div>

        <MainContent toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
}
