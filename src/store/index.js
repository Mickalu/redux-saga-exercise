import rootSaga from '../sagas';
import configureStore from './configureStore.dev';

const store = configureStore();
store.runSaga(rootSaga);

export default store;
