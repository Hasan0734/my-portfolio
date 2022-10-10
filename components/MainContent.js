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

export default function MainContent() {
  return (
    <>
      <div className="main_content">
        <div className="top_bg_overlay"></div>
      </div>
      <div
        className="px-0 pt-0 md:px-10 md:pt-10 -pb-2 w-full 
      overflow-scroll scrollbar h-[calc(100vh_-_21px)] z-40 overflow-x-hidden relative mt-[60px] md:mt-0"
      >
        {/* mobile top bar */}
        <div className="fixed z-[99] w-full h-[70px] bg-[#20202a] mobile_top block md:hidden"></div>

        <Banner />
        <Statics />
        <MyServices />
        <PricePlans />
        <Recommendations />
        <WorksSection />
        <Education />
        <ContactInformation />
        <GetInTouch />
        <Branding />
        <Footer />
      </div>
    </>
  );
}
