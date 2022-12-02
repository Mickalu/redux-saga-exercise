import React from "react";

import { expect } from "chai";

import BeersLiked from "../Beersliked";
import { propsLikedBeerEmpty, propsLikedBeersNotEmpty } from "../../../utils/testTools/initValues";
import { queryAllByTestId, render, setupStore} from "../../../utils/testTools/customeMethodRTL";

test("BeersLiked Should display only a div if liked beers array is empty", () => {
  render (
    <BeersLiked/>,
    { preloadedState: propsLikedBeerEmpty }
  );

  expect(queryAllByTestId("beer-title").length).to.be.equal(0);
});

test("Should return same number of beer-title than number of beers liked", () => {
  render (
    <BeersLiked/>,
    { preloadedState: propsLikedBeersNotEmpty },
  );

  expect(queryAllByTestId("beer-title").length).to.be.equal(2);
});
