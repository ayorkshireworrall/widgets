import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';

export function* logoutSaga(action) {
    yield actions.logoutSuccess();
}

//TODO: replace with connection to actual backend to retrieve auth token
export function* loginSaga(action) {
    yield delay(2000);
    if (action.email === 'alex@mail.com' && action.password === 'Password1') {
        yield put(actions.loginSuccess());
    } else {
        yield put(actions.loginFail());
    }
}