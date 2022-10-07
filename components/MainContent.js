import Banner from "./Banner";
import Statics from "./Statics";


export default function MainContent() {
  return (
    <>
      <div className="p-10 w-full">
        <Banner />
        <Statics/>
      </div>
    </>
  );
}
