import React from "react";

const Filters = ({ colors, shapes, toggleShape, toggleColor }: any) => {
  const shapeFilters = shapes.map((item: string) => (
    <button name={item} key={item} onClick={toggleShape}>
      {item}
    </button>
  ));

  const colorFilters = colors.map((item: string) => (
    <button name={item} key={item} onClick={toggleColor}>
      {item}
    </button>
  ));
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
    </>
  );
};

export default Filters;
