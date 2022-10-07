import React, { useEffect, useState } from "react";

export default function CircularProgress({
  size,
  strokeWidth,
  percentage,
  color,
}) {
  const [progress, setProgress] = useState(0);
  const [percent, setPercent] = useState([]);

  useEffect(() => {
    setProgress(percentage);

    if (percent.length <= percentage) {
      setTimeout(() => {
        for (let i = 0; i < percentage; i++) {
          setPercent([...percent, i]);
        }
      }, 1);
    }
  }, [percentage, percent]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;
  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        fill="none"
        stroke="#191923"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap={"round"}
        style={{ transition: "all 0.3s" }}
      />
      <text
        fill="#8c8c8e"
        fontSize={"10px"}
        x="50%"
        y="50%"
        dy="5px"
        textAnchor="middle"
      >
        {`${percent.length - 1}%`}
      </text>
    </svg>
  );
}
