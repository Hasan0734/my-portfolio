import React from "react";

export default function Experience({ theme }) {
  return (
    <div>
      <h3 className="dark:text-[#fafafc] text-[#20202a] font-semibold">
        Work History
      </h3>
      <div
        className={`${
          theme === "light" ? "timeline_area_light" : "timeline_area"
        }`}
      >
        <div className="timeline">
          <div className="timeline-mark-light"></div>
          <div
            className={`${
              theme === "light" ? "timeline-mark-mode" : "timeline-mark"
            }`}
          ></div>
          <div
            className={`education mt-4 timeline_card ${
              theme === "light" ? "timeline_card_bg_light" : "timeline_card_bg"
            }`}
          >
            <div className="flex md:flex-row flex-col justify-between">
              <div>
                <h5 className="text-[14px] font-semibold dark:text-[#fafafc] text-[#20202a]">
                  Title of Section
                </h5>
                <div className="text-[#646466] text-[11px] mt-[5px] mb-[15px]">
                  Template author
                </div>
              </div>
              <div className="mb-[15px]">
                <span
                  className="text-[#646466] ml-auto dark:bg-[#20202a] bg-gray-100 rounded-[15px]
                   px-[15px] py-[5px] text-[10px]"
                  style={{
                    boxShadow:
                      theme === "light"
                        ? " 0 3px 8px 0 rgb(15 15 20 / 12%)"
                        : "inset 0 3px 8px 0 rgb(15 15 20 / 20%)",
                  }}
                >
                  Jan 2018 - May 2020
                </span>
              </div>
            </div>
            <p className="mb-4 text-[12px] dark:text-[#8c8c8e] text-gray-700 font-light tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, fugiat dolor. Optio facilis nemo eos eum distinctio?
              Sequi, sunt numquam?
            </p>
            <a
              href=""
              className="dark:text-[#ffc107] text-pink-600 relative uppercase text-[10px] cer_link
              tracking-[1.5px] font-semibold gap-1 flex items-center"
            >
              <span>Diplome</span>
              <svg
                className="w-2 h-2 link_chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${
          theme === "light" ? "timeline_area_light" : "timeline_area"
        }`}
      >
        <div className="timeline">
          <div className="timeline-mark-light"></div>
          <div
            className={`${
              theme === "light" ? "timeline-mark-mode" : "timeline-mark"
            }`}
          ></div>
          <div
            className={`education mt-4 timeline_card ${
              theme === "light" ? "timeline_card_bg_light" : "timeline_card_bg"
            }`}
          >
            <div className="flex md:flex-row flex-col justify-between">
              <div>
                <h5 className="text-[14px] font-semibold dark:text-[#fafafc] text-[#20202a]">
                  Title of Section
                </h5>
                <div className="text-[#646466] text-[11px] mt-[5px] mb-[15px]">
                  Template author
                </div>
              </div>
              <div className="mb-[15px]">
                <span
                  className="text-[#646466] ml-auto dark:bg-[#20202a] bg-gray-100 rounded-[15px]
                   px-[15px] py-[5px] text-[10px]"
                  style={{
                    boxShadow:
                      theme === "light"
                        ? " 0 3px 8px 0 rgb(15 15 20 / 12%)"
                        : "inset 0 3px 8px 0 rgb(15 15 20 / 20%)",
                  }}
                >
                  Jan 2018 - May 2020
                </span>
              </div>
            </div>
            <p className="mb-4 text-[12px] dark:text-[#8c8c8e] text-gray-700 font-light tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, fugiat dolor. Optio facilis nemo eos eum distinctio?
              Sequi, sunt numquam?
            </p>
            <a
              href=""
              className="dark:text-[#ffc107] text-pink-600 relative uppercase text-[10px] cer_link
              tracking-[1.5px] font-semibold gap-1 flex items-center"
            >
              <span>Diplome</span>
              <svg
                className="w-2 h-2 link_chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${
          theme === "light" ? "timeline_area_light" : "timeline_area"
        }`}
      >
        <div className="timeline">
          <div className="timeline-mark-light"></div>
          <div
            className={`${
              theme === "light" ? "timeline-mark-mode" : "timeline-mark"
            }`}
          ></div>
          <div
            className={`education mt-4 timeline_card ${
              theme === "light" ? "timeline_card_bg_light" : "timeline_card_bg"
            }`}
          >
            <div className="flex md:flex-row flex-col justify-between">
              <div>
                <h5 className="text-[14px] font-semibold dark:text-[#fafafc] text-[#20202a]">
                  Title of Section
                </h5>
                <div className="text-[#646466] text-[11px] mt-[5px] mb-[15px]">
                  Template author
                </div>
              </div>
              <div className="mb-[15px]">
                <span
                  className="text-[#646466] ml-auto dark:bg-[#20202a] bg-gray-100 rounded-[15px]
                   px-[15px] py-[5px] text-[10px]"
                  style={{
                    boxShadow:
                      theme === "light"
                        ? " 0 3px 8px 0 rgb(15 15 20 / 12%)"
                        : "inset 0 3px 8px 0 rgb(15 15 20 / 20%)",
                  }}
                >
                  Jan 2018 - May 2020
                </span>
              </div>
            </div>
            <p className="mb-4 text-[12px] dark:text-[#8c8c8e] text-gray-700 font-light tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, fugiat dolor. Optio facilis nemo eos eum distinctio?
              Sequi, sunt numquam?
            </p>
            <a
              href=""
              className="dark:text-[#ffc107] text-pink-600 relative uppercase text-[10px] cer_link
              tracking-[1.5px] font-semibold gap-1 flex items-center"
            >
              <span>Diplome</span>
              <svg
                className="w-2 h-2 link_chevron"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
