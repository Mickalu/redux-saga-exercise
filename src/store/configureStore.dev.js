import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import createSagaMiddleware, { runSaga } from "redux-saga";

// Tip: replace the thunk and promise middleware with the redux-saga middleware

const configureStore = (initialState) => {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleWare),
  )

  return {
    ...store,
    runSaga: sagaMiddleWare.run
  }
}

export default configureStore
