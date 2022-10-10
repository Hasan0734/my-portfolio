import Link from "next/link";
import React, { useState } from "react";
import CircularProgress from "../components/CircularProgress";
import LineProgress from "../components/LineProgress";
import MainContent from "../components/MainContent";
import ProfileAvater from "../components/ProfileAvater";
import SidebarFooter from "../components/SidebarFooter";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div
      className="max-w-[1440px] container w-full  mx-auto 
    relative lg:px-0 my-4  overflow-hidden h-[calc(100vh_-_35px)]"
    >
     
      <div className="flex mx-0 md:mx-3 bg-[#1e1e28] overflow-hidden relative">
        {/* left sidebar */}
        <div
          className="bg-[#20202a] w-[290px] min-w-[290px] h-[calc(100vh_-_35px)] hidden md:block
        z-[999] relative shadow-[0px_3px_8px_0_rgba(15,15,20,0.2)] scroll-smooth scrollbar
          scrollbar-hide"
          style={{ transition: "0.4s ease-in-out" }}
        >
          <ProfileAvater />

          <Skills />

          <SidebarFooter />
        </div>

        <MainContent />
      </div>
    </div>
  );
}
