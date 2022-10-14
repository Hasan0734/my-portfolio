import React from "react";

const ContactInformation = () => {
  return (
    <div className="mt-6 px-3">
      <h3 className="text-[#fafafc] textt-[12px] font-normal">
        Contact Information
      </h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="contact_card p-[30px]">
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                Country
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                Bangladesh
              </span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                City
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                Mymensingh
              </span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                Streat
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                Fulbaria
              </span>
            </li>
          </ul>
        </div>
        <div className="contact_card p-[30px]">
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                Email
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                Jahid0734@gmail.com
              </span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                Telegram
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                @Jahid07
              </span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                Whatsapp
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                +8801743782856
              </span>
            </li>
          </ul>
        </div>
        <div className="contact_card p-[30px]">
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                Support service
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                +8801743782856
              </span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                Office
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                +8801743782856
              </span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-[#fafafc] text-[12px] font-normal">
                Personal
              </span>
              <span className="text-[#8c8c8e] text-[12px] font-normal">
                +8801743782856
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
