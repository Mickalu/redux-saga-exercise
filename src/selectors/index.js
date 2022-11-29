export const isFetchingBeers = (state: Object) => (
  state.beers.isFetching
)

export const settings = (state: Object) => (
  state.settings
)

export const getCurrentIndex = (state: Object) => (
  state.beer.currentIndex
)
