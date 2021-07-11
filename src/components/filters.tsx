import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 0 5px;
  border: 1px solid white;
  background: ${(props) => (props.color ? "powderblue" : null)};
  border-radius: 40px;
  text-align: center;
  width: 95px;
  padding: 5px 20px;
  cursor: pointer;
`;

const ColorButton = styled.button`
  margin: 0 5px;
  background-color: ${(props) => (props.name ? props.name : "whitesmoke")};
  border: 1px solid ${(props) => (props.color ? "powderblue" : "white")};
  opacity: ${(props) => (props.color ? "0.3" : "1")};
  border-radius: 40px;
  text-align: center;
  width: 40px;
  padding: 5px 20px;
  cursor: pointer;
  height: 40px;
`;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Filters = ({ map, colors, shapes, toggleShape, toggleColor }: any) => {
  const shapeFilters = shapes.map((item: string) => (
    <Button
      name={item}
      color={map.shape.get(`${item}`)}
      key={item}
      onClick={toggleShape}
    >
      {item}
    </Button>
  ));

  const colorFilters = colors.map((item: string) => (
    <ColorButton
      title={item}
      name={item}
      color={map.color.get(`${item}`)}
      key={item}
      onClick={toggleColor}
    ></ColorButton>
  ));
  return (
    <>
      <Container>
        <h2>Filters</h2>
        <h4>Shapes</h4>
        {shapeFilters}
        <h4>Colors</h4>
        {colorFilters}
      </Container>
    </>
  );
};

export default Filters;
