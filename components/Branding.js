import React from "react";

export default function Branding() {
  return (
    <div className="mt-6 px-3">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="">
          <img className="h-[120px] w-[120px] mx-auto mb-[30px] block opacity-[0.6]" style={{transition: '0.4s ease-in-out'}} src="/assets/brand/1.png" alt="" />
        </div>
        <div className="">
          <img className="h-[120px] w-[120px] mx-auto mb-[30px] block opacity-[0.6]" style={{transition: '0.4s ease-in-out'}} src="/assets/brand/2.png" alt="" />
        </div>
        <div className="">
          <img className="h-[120px] w-[120px] mx-auto mb-[30px] block opacity-[0.6]" style={{transition: '0.4s ease-in-out'}} src="/assets/brand/3.png" alt="" />
        </div>
        <div className="">
          <img className="h-[120px] w-[120px] mx-auto mb-[30px] block opacity-[0.6]" style={{transition: '0.4s ease-in-out'}} src="/assets/brand/1.png" alt="" />
        </div>
      </div>
    </div>
  );
}
