import { expect } from "chai";
import { put, select } from "redux-saga/effects";

import { getCurrentIndex } from "../../selectors";
import { addBeerLiked, setCurrentBeerIndex } from "../../actions";
import addLikesSaga from "../addBeerLikeSaga";

describe("#Saga: addBeerLikeSaga ", () => {
    it("Add liked beer to liked beers list and setCurrentBeerIndex to the next one", () => {
        const actionTest = {
            beerId: "1",
        };

        const currentIndex = { currentIndex: 1 };

        const addLikeSagaGenerator = addLikesSaga(actionTest);

        const putAddBeerLike = addLikeSagaGenerator.next();
        expect(putAddBeerLike.value).to.be.deep.equal(put(addBeerLiked("1")));

        const selectGetCurrentIndex = addLikeSagaGenerator.next();
        expect(selectGetCurrentIndex.value).to.be.deep.equal(select(getCurrentIndex));

        const putSetCurrentBeerIndex = addLikeSagaGenerator.next(1);
        expect(putSetCurrentBeerIndex.value).to.be.deep.equal(put(setCurrentBeerIndex(2)));
    });
});
