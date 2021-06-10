import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Landing from "./Landing";
import { lightTheme } from "../themes/themes";
import LandingComponent from "./LandingComponent";
import App from "../../App";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Landing Component", () => {
  afterEach(cleanup);

  it("renders Landing Component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <LandingComponent theme={lightTheme}></LandingComponent>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Landing without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <App>
          <Landing theme={lightTheme}></Landing>
        </App>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders buttons correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App>
          <Landing theme={lightTheme}>
            <LandingComponent button={true}></LandingComponent>
          </Landing>
        </App>
      </Provider>
    );
    expect(getByTestId("button")).toHaveTextContent("Let's cook");
  });

  it("renders title correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <LandingComponent
        theme={lightTheme}
        button={false}
        title={true}
        titleContent="About Us"
      ></LandingComponent>,
      div
    );
  });
});
