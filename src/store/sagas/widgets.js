import { put, delay } from "redux-saga/effects";
import * as actions from '../actions';

export function* addWidgetSaga(action) {
    yield delay(1000);
    yield put(actions.addWidgetSuccess(action.payload));

}

export function* removeWidgetSaga(action) {
    yield delay(1000);
    yield put(actions.removeWidgetSuccess(action.id));

}