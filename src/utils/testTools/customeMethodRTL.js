import React from "react";

import { screen } from '@testing-library/dom';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { setupStore } from "./setupRenderTest";
import { propsLikedBeerEmpty, initListBeers } from "./initValues";


const screenQueryAllByTestId = (element) => {
  return screen.queryAllByTestId(element);
};

export function renderWithProviders(
  ui,
  {
    preloadedState = {
      likes: propsLikedBeerEmpty,
      beers: initListBeers,
    },
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from "@testing-library/react";
export { renderWithProviders as render };
export { screenQueryAllByTestId as queryAllByTestId };
