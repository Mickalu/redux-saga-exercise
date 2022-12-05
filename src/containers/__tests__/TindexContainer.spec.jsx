import React from "react";
import '@testing-library/jest-dom';

import { render, getByTestId } from "../../utils/testTools/customeMethodRTL";
import { initListBeers, firstBeer } from "../../utils/testTools/initValues";
import TinderContainer from "../TinderContainer";

test("TinderContainer should contain like button", () => {
  render(
    <TinderContainer
      beer={firstBeer}
      beers={initListBeers}
    />
  );

  expect(getByTestId("likeBtn")).toBeInTheDocument();
});

test("TinderContainer should contain dislike button", () => {
  render(
    <TinderContainer
      beer={firstBeer}
      beers={initListBeers}
    />
  );

  expect(getByTestId("dislikeBtn")).toBeInTheDocument();
});
