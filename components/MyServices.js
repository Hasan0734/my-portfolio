import Link from "next/link";
import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis  officia tenetur, voluptatem assumenda veritatis deserunt optio ea pariatur illo vero.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis  officia tenetur, voluptatem assumenda veritatis deserunt optio ea pariatur illo vero.",
  },
  {
    id: 3,
    title: "Sound Design",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis  officia tenetur, voluptatem assumenda veritatis deserunt optio ea pariatur illo vero.",
  },
  {
    id: 4,
    title: "Game Design",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis  officia tenetur, voluptatem assumenda veritatis deserunt optio ea pariatur illo vero.",
  },
  {
    id: 5,
    title: "Advertising",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis  officia tenetur, voluptatem assumenda veritatis deserunt optio ea pariatur illo vero.",
  },
];

export default function MyServices() {
  return (
    <div className="px-3">
      <h3 className="text-[#fafafc] textt-[12px] font-normal">My Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
        {services.map((service) => (
          <div key={service.id} className="my-service-box rounded-sm">
            <div className="p-[30px]">
              <h3 className="text-[#fafafc] text-[12px] font-normal tracking-wide">
                {service.title}
              </h3>
              <p className="text-[12px] font-[300] text-[#8c8c8e] mt-3 mb-3 text-justify">
                {service.body}
              </p>
              <Link href="/order-now">
                <a className="text-[#FFC107] text-[10px] font-semibold uppercase tracking-[1.5px]">
                  Order Now &gt;
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
