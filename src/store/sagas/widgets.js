import { put } from "redux-saga/effects";
import * as actions from '../actions';
import axios from 'axios';

export function* addWidgetSaga(action) {
    try {
        yield axios.put(`/api/v2/widgets/create`, action.payload)
        yield put(actions.addWidgetSuccess(action.payload));
    } catch (error) {
        console.log('Error handling required')
    }

}

export function* removeWidgetSaga(action) {
    try {
        yield axios.delete(`/api/v2/widgets/${action.id}`)
        yield put(actions.removeWidgetSuccess(action.id));
    } catch (error) {
        console.log("Error handling required")
    }
}

export function* initWidgetSaga(action) {
    try {
        const response = yield axios.get(`/api/v2/widgets/`);
        yield put(actions.setWidgets(response.data))
    } catch (error) {
        console.log("Error handling required!")
    }
}