import React from "react";
import '@testing-library/jest-dom';

import { render, getByTestId } from "../../utils/testTools/customeMethodRTL";
import TinderContainer from "../TinderContainer";

test("TinderContainer should contain like button", () => {
  render( <TinderContainer /> );
  expect(getByTestId("likeBtn")).toBeInTheDocument();
});

test("TinderContainer should contain dislike button", () => {
  render( <TinderContainer /> );
  expect(getByTestId("dislikeBtn")).toBeInTheDocument();
});
