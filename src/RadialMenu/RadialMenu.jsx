import React from "react";
import PieChart from "./PieChart";

const RadialMenu = () => {
  const slices = [
    { color: "blue", onClick: () => alert("Blue slice clicked!"), label: "Blue" },
    { color: "green", onClick: () => alert("Green slice clicked!"), label: "Green" },
    { color: "orange", onClick: () => alert("Orange slice clicked!"), label: "Orange" },
    { color: "red", onClick: () => alert("Red slice clicked!"), label: "Red" },
    { color: "fuchsia", onClick: () => alert("Fuchsia slice clicked!"), label: "Fuchsia" },
    { color: "indigo", onClick: () => alert("Indigo slice clicked!"), label: "Indigo" },
    { color: "gold", onClick: () => alert("Gold slice clicked!"), label: "Gold" },
    { color: "jade", onClick: () => alert("Jade slice clicked!"), label: "Jade" },
    
  ];

  return (
    <div>
      <PieChart
        slices={slices}
        size={300}
        gap={5}
        centerCircleRadius={60}
        centerCircleColor="white"
        hoverEffect={true}
        labelColor="white"
        labelRadius={70}
        fontSize={17}
        textPadding={30}
      />
    </div>
  );
};

export default RadialMenu;