import { expect } from "chai";
import { put, select } from "redux-saga/effects";

import { getCurrentIndex } from "../../selectors";
import { addBeerLiked, incrementIndexBeer } from "../../actions";
import { addLikesSaga, nextBeerSaga } from "../addBeerLikeSaga";

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

  const putIncrementIndexBeer = addLikeSagaGenerator.next(1);
  expect(putIncrementIndexBeer.value).to.be.deep.equal(put(incrementIndexBeer()));
});

test("next function saga should select current beer index ", () => {
  const nextBeerSagaGenerator = nextBeerSaga();

  const selectCurrentIndex = nextBeerSagaGenerator.next();
  expect(selectCurrentIndex.value).to.be.deep.equal(select(getCurrentIndex));
});

test("next function saga should change current beer index for the next one", () => {
  const nextBeerSagaGenerator = nextBeerSaga();

  nextBeerSagaGenerator.next();
  const putIncrementIndexBeer = nextBeerSagaGenerator.next(1);

  expect(putIncrementIndexBeer.value).to.be.deep.equal(put(incrementIndexBeer()));
});
