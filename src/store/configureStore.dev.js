import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";

import reducers from '../reducers'

// Tip: replace the thunk and promise middleware with the redux-saga middleware

const configureStore = () => {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare),
  )

  return {
    ...store,
    runSaga: sagaMiddleWare.run,
  }
}

export default configureStore;
