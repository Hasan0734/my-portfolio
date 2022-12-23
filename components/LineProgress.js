import React, { useEffect, useState } from "react";

export default function LineProgress({ skill }) {
  const [progress, setProgress] = useState(0);
  const [percent, setPercent] = useState([]);

  useEffect(() => {
    setProgress(skill.progress);

    if (percent.length <= skill.progress) {
      setTimeout(() => {
        for (let i = 0; i < skill.progress; i++) {
          setPercent([...percent, i]);
        }
      }, 1);
    }
  }, [skill.progress, percent, progress]);

  return (
    <>
      <div className="progress_bar my-3">
        <label className="w-full text-[11px] text-[#8c8c8e] flex justify-between mb-1">
          <span>{skill.label}</span>
          <span>{percent.length - 1}%</span>
        </label>

        <div className="w-full bg-pink-200 h-[5px] dark:bg-gray-700">
          <div
            className="dark:bg-[#FFC107] bg-[#ff14a5] h-[5px]"
            style={{ width: `${progress}%`, transition: "all 0.5s" }}
          ></div>
        </div>
      </div>
    </>
  );
}
