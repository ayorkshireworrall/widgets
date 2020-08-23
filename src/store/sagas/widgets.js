import { put, delay } from "redux-saga/effects";
import * as actions from '../actions';
import axios from 'axios';

export function* addWidgetSaga(action) {
    try {
        const response = yield axios.put(`${process.env.REACT_APP_API_SERVER_URL}api/v2/widgets/create`, action.payload)
        yield put(actions.addWidgetSuccess(action.payload));
    } catch (error) {
        console.log('Error handling required')
    }

}

export function* removeWidgetSaga(action) {
    try {
        const response = yield axios.delete(`${process.env.REACT_APP_API_SERVER_URL}api/v2/widgets/${action.id}`)
        yield put(actions.removeWidgetSuccess(action.id));
    } catch (error) {
        console.log("Error handling required")
    }
}

export function* initWidgetSaga(action) {
    try {
        const response = yield axios.get(`${process.env.REACT_APP_API_SERVER_URL}api/v2/widgets/`);
        yield put(actions.setWidgets(response.data))
    } catch (error) {
        console.log("Ah damn!")
    }
}