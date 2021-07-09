import React, { useState, useEffect } from "react";
import data from "./data.json";

function App() {
  const [shapeData, setShapeData] = useState(data);
  const [map, setMap] = useState({ shape: new Map(), color: new Map() });

  //property arrays
  let shapes = ["round", "rectangle", "triangle", "oval", "square"];
  let colors = ["red", "blue", "green", "yellow", "grey", "ash"];

  useEffect(() => {
    let currentMap = map;
    //set default map values
    colors.forEach((item) => {
      currentMap.color.set(item, true);
    });

    shapes.forEach((item) => {
      currentMap.shape.set(item, true);
    });
    setMap(currentMap);
  }, []);

  const filterData = (): void => {
    let filteredData = data.filter((item) => {
      return map.shape.get(item.shape) && map.color.get(item.color);
    });
    setShapeData(filteredData);
  };

  const toggleShape = (event: any): void => {
    event.preventDefault();
    let currentMap = map;
    currentMap.shape.set(
      event.target.name,
      !currentMap.shape.get(event.target.name)
    );
    setMap(currentMap);
    filterData();
    console.log(map.shape, shapeData);
  };

  const toggleColor = (event: any): void => {
    event.preventDefault();
    let currentMap = map;
    currentMap.color.set(
      event.target.name,
      !currentMap.color.get(event.target.name)
    );
    filterData();
    console.log(map.color);
  };

  const shapeFilters = shapes.map((item) => (
    <button name={item} onClick={toggleShape}>
      {item}
    </button>
  ));
  const colorFilters = colors.map((item) => (
    <button name={item} onClick={toggleColor}>
      {item}
    </button>
  ));

  let shapeList = shapeData.map((item) => {
    return (
      <li key={item.id}>
        {item.shape} and {item.color}{" "}
      </li>
    );
  });
  return (
    <>
      <h1>Filters</h1>
      <div className="filters">
        <h4>Shapes</h4>
        {shapeFilters}
        <hr />
        <h4>Colors</h4>
        {colorFilters}
      </div>
      <h1>Items</h1>
      <ul className="grid">{shapeList}</ul>
    </>
  );
}

export default App;
