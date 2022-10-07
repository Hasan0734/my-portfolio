import Banner from "./Banner";
import MyServices from "./MyServices";
import Statics from "./Statics";

export default function MainContent() {
  return (
    <>
      <div className="p-10 w-full overflow-scroll  scrollbar  h-screen ">
        <Banner />
        <Statics />
        <MyServices />
      </div>
    </>
  );
}
