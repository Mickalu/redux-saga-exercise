import React from "react";

import { screen, fireEvent } from '@testing-library/dom';
import { render as RTLRender} from "@testing-library/react";
import { Provider } from "react-redux";

import configureStore from "../../store/configureStore.dev";

const screenQueryAllByTestId = (element) => screen.queryAllByTestId(element);

const screenGetByTestId = (element) => screen.getByTestId(element);

const fireEventCustom = (testId) => fireEvent.click(screen.getByTestId(testId));

const getByRoleCustom = (role) => screen.getByRole(screen.getByRole(role));

const store = configureStore();

const renderWithProviders = ({ children }) => (
  <Provider store={store}>
    { children }
  </Provider>
);

export const render = (ui, options = {}) => RTLRender(ui, { wrapper: renderWithProviders, ...options });

export * from "@testing-library/react";
export { screenQueryAllByTestId as queryAllByTestId };
export { fireEventCustom as fireEvent };
export { screenGetByTestId as getByTestId };
export { getByRoleCustom as getByRole };
