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
      <div className="px-4 pt-4 md:px-10 md:pt-10 -pb-2 w-full overflow-scroll  scrollbar   h-[calc(100vh_-_21px)]  ">
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
        <Footer/>
      </div>
    </>
  );
}
