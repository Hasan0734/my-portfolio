import Banner from "./Banner";
import ContactInformation from "./ContactInformation";
import Education from "./Education";
import MyServices from "./MyServices";
import PricePlans from "./PricePlans";
import Recommendations from "./Recommendations";
import Statics from "./Statics";
import WorksSection from "./WorksSection";

export default function MainContent() {
  return (
    <>
      <div className="p-4 md:p-10 w-full overflow-scroll  scrollbar   h-[calc(100vh_-_30px)]  ">
        <Banner />
        <Statics />
        <MyServices />
        <PricePlans />
        <Recommendations />
        <WorksSection />
        <Education />
        <ContactInformation/>
      </div>
    </>
  );
}
