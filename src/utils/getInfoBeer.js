export const getBeerInfoByIndex = (beerId, listBeers) => {
  return listBeers.find(beerElem => beerElem.id === beerId);
};
