import { screen } from "@testing-library/react";

export const getByClass = (className) => {
    return screen.getByClass(className);
};
