import Filters from "../components/filters";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const store = mockStore({ auth: { isAuthenticated: true } });

//property arrays
const shapes: string[] = ["round", "rectangle", "triangle", "oval", "square"];
const colors: string[] = ["red", "blue", "green", "yellow", "grey", "ash"];

let map = {
  color: new Map(),
  shape: new Map(),
};

describe("check if <Filters/> renders", () => {
  it("check if <Filters /> contains buttons", () => {
    render(
      <Provider store={store}>
        <Filters
          map={map}
          colors={colors}
          shapes={shapes}
          toggleShape={() => {}}
          toggleColor={() => {}}
        />
      </Provider>
    );
    const shapeButton = screen.getByText("round");
    const colorButton = screen.getByTitle("red");
    expect(shapeButton).toBeInTheDocument();
    expect(colorButton).toBeInTheDocument();
  });
});
