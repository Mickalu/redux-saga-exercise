import { call, takeEvery } from "redux-saga";
import { put } from "redux-saga/effects";
import { RECEIVE_SESSION } from "../actions";
import { startSession } from "../api";

export function* fetchStartSession(action){
    try{
        yield call(startSession);
        yield put({type: RECEIVE_SESSION});
    }
    catch(error){
        console.log(error);
    };
};

export function* fetchReceiveSession(state = { session: {} }, action){
    try{
        return { ...state, session: action.session }
    }
    catch(error){
        console.log(error);
    }
};
