import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../store";

export const queryAllByTestId = (element) => {
    return screen.queryAllByTestId(element)
}
