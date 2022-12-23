import Banner from "./Banner";
import Branding from "./Branding";
import ContactInformation from "./ContactInformation";
import Education from "./Education";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";
import MyServices from "./MyServices";
import PricePlans from "./PricePlans";
import Recommendations from "./Recommendations";
import Statics from "./Statics";
import WorksSection from "./WorksSection";

export default function MainContent({toggle, setToggle, theme}) {
  return (
    <>
      <div className="main_content">
        <div
          className={`${
            theme === "light" ? "top_bg_overlay_light" : "top_bg_overlay"
          }`}
        ></div>
      </div>
      <div
        className="px-0 pt-0 md:px-10 md:pt-10  w-full 
      overflow-scroll scrollbar h-screen lg:h-[calc(100vh_-_21px)] z-40 overflow-x-hidden relative mt-[60px] md:mt-0"
      >
        <Banner theme={theme} />
        <Statics />
        <MyServices theme={theme} />
        <PricePlans theme={theme} />
        <Recommendations theme={theme} />
        <WorksSection theme={theme} />
        <Education theme={theme} />
        <ContactInformation theme={theme} />
        <GetInTouch theme={theme} />
        <Branding theme={theme} />
        <Footer theme={theme} />
      </div>
    </>
  );
}
