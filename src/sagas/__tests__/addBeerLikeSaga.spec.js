import { expect } from "chai";
import { put, select } from "redux-saga/effects";

import { getCurrentIndex } from "../../selectors";
import { addBeerLiked, setCurrentBeerIndex } from "../../actions";
import addLikesSaga from "../addBeerLikeSaga";


const actionTest = {
  beerId: "1",
};

test("should add id beer to likes state", () => {
  const addLikeSagaGenerator = addLikesSaga(actionTest);
  const putAddBeerLike = addLikeSagaGenerator.next();
  expect(putAddBeerLike.value).to.be.deep.equal(put(addBeerLiked("1")));
});

test("should get the id of the current beer", () =>{
  const addLikeSagaGenerator = addLikesSaga(actionTest);
  addLikeSagaGenerator.next();

  const selectGetCurrentIndex = addLikeSagaGenerator.next();
  expect(selectGetCurrentIndex.value).to.be.deep.equal(select(getCurrentIndex));
});

test("should change current beer to the next one into the state", () => {
  const addLikeSagaGenerator = addLikesSaga(actionTest);
  addLikeSagaGenerator.next();
  addLikeSagaGenerator.next();

  const putSetCurrentBeerIndex = addLikeSagaGenerator.next(1);
  expect(putSetCurrentBeerIndex.value).to.be.deep.equal(put(setCurrentBeerIndex(2)));
});
