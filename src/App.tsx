import React from "react";
import data from "./data.json";

function App() {
  //property arrays
  let shapes = ["round", "rectangle", "triangle", "oval", "square"];
  let colors = ["red", "blue", "green", "yellow", "grey", "ash"];

  //initialize maps
  let shapeMap = new Map();
  let colorMap = new Map();

  //set default map values
  colors.forEach((item) => {
    colorMap.set(item, true);
  });

  shapes.forEach((item) => {
    shapeMap.set(item, true);
  });

  console.log(shapeMap, colorMap);

  let filteredData = data.filter((item) => {
    return shapeMap.get(item.shape) && colorMap.get(item.color);
  });

  const shapeList = filteredData.map((item) => {
    return (
      <li key={item.id}>
        {item.shape} and {item.color}{" "}
      </li>
    );
  });
  return <ul className="grid">{shapeList}</ul>;
}

export default App;
