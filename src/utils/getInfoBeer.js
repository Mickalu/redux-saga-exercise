export const getBeerInfoByIndex = (beerId, listBeers) => {
    const result = listBeers.find(beer => beer.id == beerId);
    return result
};
