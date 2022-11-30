import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";

// import store from "../store";

export const queryAllByTestId = (element) => {
    return screen.queryAllByTestId(element)
}

const renderCustome = (element, store) => {
    render(
        <Provider store={store} >
            {element}
        </Provider>
    )
};


export {renderCustome as render};
