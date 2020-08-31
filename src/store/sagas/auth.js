import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* logoutSaga(action) {
    yield actions.logoutSuccess();
}

//TODO: replace with connection to actual backend to retrieve auth token
export function* loginSaga(action) {
    const data = {
        username: action.username,
        password: action.password
    }
    try {
        const response = yield axios.post(`/api/token/`, data);
        axios.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
        yield put(actions.loginSuccess(response.data.access));
    } catch (error) {
        yield put(actions.loginFail(error));
    }
}