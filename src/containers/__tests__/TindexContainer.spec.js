import React from "react";
import '@testing-library/jest-dom';

import { render, getByTestId } from "../../utils/testTools/customeMethodRTL";
import { tinderContainerProps } from "../../utils/testTools/initValues";
import TinderContainer from "../TinderContainer";

test("TinderContainer should contain like button", () => {
  render(
    <TinderContainer />,
    { preloadedState: tinderContainerProps },
  );

  expect(getByTestId("likeBtn")).toBeInTheDocument();
});

test("TinderContainer should contain dislike button", () => {
  render(
    <TinderContainer />,
    { preloadedState: tinderContainerProps },
  );

  expect(getByTestId("dislikeBtn")).toBeInTheDocument();
});
