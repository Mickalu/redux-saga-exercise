import React from "react";

import { expect } from "chai";

import BeersLiked from "../Beersliked";
import { likedBeerEmpty, initListBeers, likedBeersNotEmpty  } from "../../../utils/testTools/initValues";
import { queryAllByTestId, render } from "../../../utils/testTools/customeMethodRTL";

test("BeersLiked should not having beer title", () => {
  render(
    <BeersLiked.WrappedComponent
      likes = { likedBeerEmpty }
      beers = { initListBeers }
    />
  );

  expect(queryAllByTestId("beer-title").length).to.be.equal(0);
});

test("Should return same number of beer-title than number of beers liked", () => {
  render(
    <BeersLiked.WrappedComponent
      likes = { likedBeersNotEmpty }
      beers = { initListBeers }
    />
  );

  expect(queryAllByTestId("beer-title").length).to.be.equal(2);
});
