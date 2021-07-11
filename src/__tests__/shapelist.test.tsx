import ShapeList from "../components/shapelist";
import data from "../data.json";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const store = mockStore({ auth: { isAuthenticated: true } });

describe("check if <ShapeList/> renders", () => {
  it("check if <ShapeList /> contains items", () => {
    render(
      <Provider store={store}>
        <ShapeList shapeData={data} />
      </Provider>
    );
    const item = screen.getByText("oval and red");
    expect(item).toBeInTheDocument();
  });
});
