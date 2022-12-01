import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";

export const screenQueryAllByTestId = (element) => {
  return screen.queryAllByTestId(element)
}

const renderWithProvider = (element, store) => {
  render(
    <Provider store={store} >
      {element}
    </Provider>
  )
};

const customRender = (ui, options) =>
  render(ui, {wrapper: renderWithProvider, ...options})

  export * from "@testing-library/react";
  export { customRender as render };
  export { screenQueryAllByTestId as queryAllByTestId };
