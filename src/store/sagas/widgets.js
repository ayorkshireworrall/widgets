import { put, delay } from "redux-saga/effects";
import * as actions from '../actions';
import axios from 'axios';

export function* addWidgetSaga(action) {
    yield delay(1000);
    yield put(actions.addWidgetSuccess(action.payload));

}

export function* removeWidgetSaga(action) {
    yield delay(1000);
    yield put(actions.removeWidgetSuccess(action.id));
}

export function* initWidgetSaga(action) {
    try {
        const response = yield axios.get(`${process.env.REACT_APP_API_SERVER_URL}api/v2/widgets/`);
        yield put(actions.setWidgets(response.data))
    } catch (error) {
        console.log("Ah damn!")
    }
}