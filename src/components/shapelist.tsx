import React from "react";

const ShapeList = ({ shapeData }: any) => {
  let shapeList = shapeData.map((item: any) => {
    return (
      <li key={item.id}>
        {item.shape} and {item.color}{" "}
      </li>
    );
  });

  return <ul className="grid">{shapeList}</ul>;
};

export default ShapeList;
