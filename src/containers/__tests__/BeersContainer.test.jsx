import React from "react";
import '@testing-library/jest-dom';

import { render, queryAllByTestId } from "../../utils/testTools/customeMethodRTL";
import { likedBeerEmpty, initListBeers, likedBeersNotEmpty } from "../../utils/testTools/initValues";

import BeersLikedContainer from "../BeersLikedContainer";

test("BeersLikedContwiner should not having beer title", () => {
  render(
    <BeersLikedContainer.WrappedComponent
      likes={likedBeerEmpty}
      beers={initListBeers}
    />
  );

  expect(queryAllByTestId("beer-title").length).toBe(0);
});

test("Should return same number of beer-title than number of beers liked", () => {
  render(
    <BeersLikedContainer.WrappedComponent
      likes={likedBeersNotEmpty}
      beers={initListBeers}
    />
  );

  expect(queryAllByTestId("beer-title").length).toBe(2);
});
