import { call, takeEvery } from "redux-saga";
import { sagaActions } from "./sagaSessionActions";
import { startSession } from "../api";

function* fetchStartSession(action){
    try{
        yield call(startSession);
    }
    catch(error){
        console.log(error);
    };
};

export default function* sessionSaga(){
    yield takeEvery(sagaActions.FETCH_START_SESSION, fetchStartSession)
};
