import { put, call } from "redux-saga/effects";
import { RECEIVE_SESSION } from "../actions";
import { startSession } from "../api";

export function* fetchStartSession(action){
    try{
        const session = yield call(startSession);
        yield put({type: RECEIVE_SESSION, session: session} );
    }
    catch(error){
        console.log(error);
    };
};
