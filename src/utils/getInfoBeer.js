export const getBeerInfoByIndex = (beerId, listBeers) => {
  return listBeers.find(beer => beer.id === beerId);
};
