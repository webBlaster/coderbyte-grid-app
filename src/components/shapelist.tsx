import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px auto;
  justify-content: center;
  text-align: center;
`;

const Grid = styled.ul`
  text-align: center;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 31% 31% 31%;
`;

const Item = styled.li`
  background: whitesmoke;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 10px;
  list-style-type: none;
  border-box: 0 0 10px 10px #aaaaaa;
`;

const ShapeList = ({ shapeData }: any) => {
  let shapeList = shapeData.map((item: any) => {
    return (
      <Item key={item.id}>
        {item.shape} and {item.color}{" "}
      </Item>
    );
  });

  return (
    <Container>
      <h2>Items</h2>
      <br />
      <Grid>{shapeList}</Grid>
    </Container>
  );
};

export default ShapeList;
