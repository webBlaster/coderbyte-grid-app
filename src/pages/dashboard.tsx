import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Filters from "../components/filters";
import data from "../data.json";
import ShapeList from "../components/shapelist";

const Dashboard: React.FC = () => {
  const [shapeData, setShapeData] = useState(data);
  const [map, setMap] = useState({ shape: new Map(), color: new Map() });

  //property arrays
  const shapes: string[] = ["round", "rectangle", "triangle", "oval", "square"];
  const colors: string[] = ["red", "blue", "green", "yellow", "grey", "ash"];

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
    // eslint-disable-next-line
  }, []);

  //filter data based on filters
  const filterData = (): void => {
    let filteredData = data.filter((item) => {
      return map.shape.get(item.shape) && map.color.get(item.color);
    });
    setShapeData(filteredData);
  };

  //select and deselect shapes
  const toggleShape = (event: any): void => {
    event.preventDefault();
    let currentMap = map;
    currentMap.shape.set(
      event.target.name,
      !currentMap.shape.get(event.target.name)
    );
    setMap(currentMap);
    filterData();
  };

  //select and deselect colors
  const toggleColor = (event: any): void => {
    event.preventDefault();
    let currentMap = map;
    currentMap.color.set(
      event.target.name,
      !currentMap.color.get(event.target.name)
    );
    filterData();
  };

  return (
    <>
      <Header />
      <Filters
        map={map}
        colors={colors}
        shapes={shapes}
        toggleColor={toggleColor}
        toggleShape={toggleShape}
      />
      <ShapeList shapeData={shapeData} />
    </>
  );
};

export default Dashboard;
