import React from 'react'
const projects = [
  { id: 1, name: "Years Experience", number: "10 +" },
  { id: 2, name: "Completed Projects", number: "143" },
  { id: 3, name: "Happy Customers", number: "117" },
  { id: 4, name: "Honors and Awards", number: "20 +" },
];
export default function Statics() {
  return (
    <>
      <div className="py-8 grid grid-cols-4">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center gap-3">
            <h4 className="text-[#FFC107] text-[22px] font-semibold leading-7">
              {project.number}
            </h4>
            <h5 className="text-[#fafafc] text-[12px] font-normal">
              {project.name}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
}
