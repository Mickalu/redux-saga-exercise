import React from "react";

import { expect } from "chai";
import {  render } from "@testing-library/react";
import { initListBeers, propsLikedBeerEmpty, propsLikedBeersNotEmpty } from "../../../../__tests__/initValues";
import BeersLiked from "../Beersliked";
import { Provider } from "react-redux";
import store from "../../../../store";
import { queryAllByTestId } from "../../../../__tests__/customeMethodRTL";

describe("BeersLiked component should display all liked beer title", () => {
    it("Should display only a div if liked beers array is empty", () => {
        render (
            <Provider store={store} >
                <BeersLiked
                    likes={{ data: propsLikedBeerEmpty }}
                    beers={ initListBeers }
                />
            </Provider>
        );

        expect(queryAllByTestId("beer-title").length).to.be.equal(0);
    });

    it("Should return same number of beer-title than number of beers liked", () => {
        render(
            <Provider store={store} >
            <BeersLiked
                likes={{ data: propsLikedBeersNotEmpty }}
                beers={ initListBeers }
            />
        </Provider>
        );

        expect(queryAllByTestId("beer-title").length).to.be.equal(13);
    })
})
