import React from "react";

import { expect } from "chai";

import BeersLiked from "../Beersliked";
import { initListBeers, propsLikedBeerEmpty, propsLikedBeersNotEmpty } from "../../../utils/testTools/initValues";
import { queryAllByTestId, render, setupStore} from "../../../utils/testTools/customeMethodRTL";

test("BeersLiked Should display only a div if liked beers array is empty", () => {
  const props = {
    likes: propsLikedBeerEmpty,
    beers: initListBeers,
  };

  render (
    <BeersLiked/>, {
      preloadedState: props,
    }
  );

  expect(queryAllByTestId("beer-title").length).to.be.equal(0);
});

test("Should return same number of beer-title than number of beers liked", () => {

  const props = {
    likes: propsLikedBeersNotEmpty,
    beers: initListBeers,
  };

  render (
    <BeersLiked/>, {
      preloadedState: props,
    }
  )

  expect(queryAllByTestId("beer-title").length).to.be.equal(2);
});
