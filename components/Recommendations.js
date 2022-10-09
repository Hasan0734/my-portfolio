import React, { useCallback, useRef } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import SwiperNext from "./SwiperNext";
import SwiperPrev from "./SwiperPrev";

export default function Recommendations() {
  const navigatePrevRef = useRef(null);
  const navigateNextRef = useRef(null);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="mt-6">
      <h3 className="text-[#fafafc] textt-[12px] font-normal">
        Recommendations
      </h3>
      <div className="mt-6">
        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={1}
          loop={true}
          pagination={{
            clickable: true,
            className: "pagination-button",
          }}
          // autoplay={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          // onBeforeInit={(swiper) => {
          //   swiper.params.navigation.prevEl = navigatePrevRef.current;
          //   swiper.params.navigation.nextEl = navigateNextRef.current;
          // }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          speed={2500}
        >
          <SwiperSlide>
            <div className="py-10">
              <div className="recommendation">
                <div className="relative">
                  <div>
                    <h3 className="text-[14px] text-[#fafafc] font-semibold leading-5">
                      Jahid Hasan
                    </h3>
                    <h6 className="mt-[5px] text-[#646466] text-[11px]">
                      Templato author
                    </h6>
                  </div>
                </div>
                <div className=" absolute right-8 -top-3">
                  <img
                    className="rounded-full w-[65px] h-[65px] "
                    src="/assets/client.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[12px] text-[#8c8c8e] font-[300] tracking-wide text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio incidunt ullam voluptatibus illo aliquid vitae
                    architecto quo atque nesciunt! Quidem, eligendi optio
                    distinctio quaerat excepturi recusandae, assumenda nostrum
                    ullam perspiciatis in maiores ipsum odio odit?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-10">
              <div className="recommendation">
                <div className="relative">
                  <div>
                    <h3 className="text-[14px] text-[#fafafc] font-semibold leading-5">
                      Jahid Hasan
                    </h3>
                    <h6 className="mt-[5px] text-[#646466] text-[11px]">
                      Templato author
                    </h6>
                  </div>
                </div>
                <div className=" absolute right-8 -top-3">
                  <img
                    className="rounded-full w-[65px] h-[65px] "
                    src="/assets/client.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[12px] text-[#8c8c8e] font-[300] tracking-wide text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio incidunt ullam voluptatibus illo aliquid vitae
                    architecto quo atque nesciunt! Quidem, eligendi optio
                    distinctio quaerat excepturi recusandae, assumenda nostrum
                    ullam perspiciatis in maiores ipsum odio odit?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-10">
              <div className="recommendation">
                <div className="relative">
                  <div>
                    <h3 className="text-[14px] text-[#fafafc] font-semibold leading-5">
                      Jahid Hasan
                    </h3>
                    <h6 className="mt-[5px] text-[#646466] text-[11px]">
                      Templato author
                    </h6>
                  </div>
                </div>
                <div className=" absolute right-8 -top-3">
                  <img
                    className="rounded-full w-[65px] h-[65px] "
                    src="/assets/client.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[12px] text-[#8c8c8e] font-[300] tracking-wide text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio incidunt ullam voluptatibus illo aliquid vitae
                    architecto quo atque nesciunt! Quidem, eligendi optio
                    distinctio quaerat excepturi recusandae, assumenda nostrum
                    ullam perspiciatis in maiores ipsum odio odit?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="flex gap-3 justify-end absolute bottom-0 right-0">
            <div
              onClick={handlePrev}
              className="text-white cursor-pointer swiper_prev"
            ></div>
            <div
              onClick={handleNext}
              className="text-white cursor-pointer swiper_next"
            ></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
