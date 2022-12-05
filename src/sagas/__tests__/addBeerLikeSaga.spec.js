import { expect } from "chai";
import { put } from "redux-saga/effects";

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

test("should change current beer to the next one into the state", () => {
  const addLikeSagaGenerator = addLikesSaga(actionTest);

  addLikeSagaGenerator.next();

  const putIncrementIndexBeer = addLikeSagaGenerator.next(1);
  expect(putIncrementIndexBeer.value).to.be.deep.equal(put(incrementIndexBeer()));
});

test("next function saga should change current beer index for the next one", () => {
  const nextBeerSagaGenerator = nextBeerSaga();

  const putIncrementIndexBeer = nextBeerSagaGenerator.next(1);

  expect(putIncrementIndexBeer.value).to.be.deep.equal(put(incrementIndexBeer()));
});
