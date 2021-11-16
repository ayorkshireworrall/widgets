import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* logoutSaga(action) {
    try {
        const response = yield axios.get('/api/logout');
        yield actions.logoutSuccess();
    } catch (error) {
        console.log('Error handling required')
    }
}

export function* loginSaga(action) {
    const data = {
        username: action.username,
        password: action.password
    }
    try {
        const response = yield axios.post(`/authenticate`, data);
        axios.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
        yield put(actions.loginSuccess(response.data.token));
    } catch (error) {
        yield put(actions.loginFail(error));
    }
}

export function* refreshSaga(action) {
    try {
        yield put(actions.initiateRefresh())
        const response = yield axios.get('/api/token/refresh');
        axios.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
        yield put(actions.loginSuccess(response.data.access));
    } catch (error) {
        //This is silent but will turn loading to false
        yield put(actions.refreshFail());
    }
}

export function* socialLoginSaga(action) {
    try {
        const response = yield axios.get(action.authUrl);
        yield put(actions.socialLoginSuccess())
    } catch (error) {
        yield put(actions.socialLoginFail(error))
    }
}