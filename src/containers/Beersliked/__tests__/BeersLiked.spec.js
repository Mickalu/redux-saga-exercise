import React from "react";

import { expect } from "chai";

import BeersLiked from "../Beersliked";
import { initListBeers, propsLikedBeerEmpty, propsLikedBeersNotEmpty } from "../../../../utils/testTools/initValues";
import { queryAllByTestId, render} from "../../../../utils/testTools/customeMethodRTL";

describe("BeersLiked component should display all liked beer title", () => {
  it("Should display only a div if liked beers array is empty", () => {

    render (
      <BeersLiked
        likes={ propsLikedBeerEmpty }
        beers={ initListBeers }
      />
    );

    expect(queryAllByTestId("beer-title").length).to.be.equal(0);
  });

  it("Should return same number of beer-title than number of beers liked", () => {
    render(
      <BeersLiked
        likes={ propsLikedBeersNotEmpty }
        beers={ initListBeers }
      />
    );

    expect(queryAllByTestId("beer-title").length).to.be.equal(13);
  })
});
