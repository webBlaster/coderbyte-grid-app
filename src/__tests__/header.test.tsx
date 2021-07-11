import Header from "../components/header";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const store = mockStore({ auth: { isAuthenticated: true } });
describe("check if <Header/> renders", () => {
  it("check if <Header /> contains login button if authenticated", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });
});
