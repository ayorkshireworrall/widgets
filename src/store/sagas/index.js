import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { loginSaga, logoutSaga } from './auth';

export function* watchAuth() {
    yield takeEvery(actionTypes.INITIATE_LOGIN, loginSaga);
    yield takeEvery(actionTypes.INITIATE_LOGOUT, logoutSaga);
}