import App from "../app";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("check if components render without crashing", () => {
  const store = mockStore({ auth: { isAuthenticated: true } });

  it("check if <App/> renders", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
