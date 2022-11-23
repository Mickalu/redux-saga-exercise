import MySaga from "../sagas";
import configureStore from "./configureStore.dev";

const store = configureStore;
store.runSaga(MySaga);
