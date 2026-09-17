import React from "react";
import PieSlice from "./PieSlice";

const PieChart = ({
  slices,
  size = 200,
  gap = 2,
  strokeColor = "white",
  centerCircleRadius = 30,
  centerCircleColor = "white",
  hoverEffect = true,
  labelColor = "black", // Default label color
  labelRadius = 70, // Default label radius as a percentage of slice radius
  fontSize = 12, // Default font size for labels
  textPadding = 10, // Default text padding for labels
}) => {
  let cumulativeDegree = 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`-5 -5 ${size + 10} ${size +10}`}
      style={{ cursor: "pointer", display: "block", margin: "50px auto" }}
    >
      {slices.map((slice, index) => {
        const sliceData = {
          degree: 360 / slices.length,
          color: slice.color,
          startAngle: cumulativeDegree,
          size,
          gap,
          strokeColor,
          onClick: slice.onClick,
          hoverEffect,
          label: slice.label || "", // Use label from slice data or default to empty string
          labelColor,
          labelRadius,
          fontSize,
          fontFamily: "Arial", // Default font family
        };

        cumulativeDegree += 360 / slices.length;
        return <PieSlice key={index} {...sliceData} />;

      })}

      <circle
        cx={size / 2}
        cy={size / 2}
        r={centerCircleRadius}
        fill={centerCircleColor}
        stroke={strokeColor}
        strokeWidth={gap}
      />
    </svg>
  );
};

export default PieChart;