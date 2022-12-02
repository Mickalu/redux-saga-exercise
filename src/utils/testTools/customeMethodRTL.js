import React from "react";

import { screen, fireEvent } from '@testing-library/dom';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { setupStore } from "./setupRenderTest";
import { propsLikedBeerEmpty, initListBeers } from "./initValues";


const screenQueryAllByTestId = (element) => screen.queryAllByTestId(element);

const screenGetByTestId = (element) => screen.getByTestId(element);

const fireEventCustom = (testId) => fireEvent.click(screen.getByTestId(testId));

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
export { fireEventCustom as fireEvent };
export { screenGetByTestId as getByTestId };
