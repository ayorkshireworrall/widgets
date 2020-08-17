import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { loginSaga, logoutSaga } from './auth';
import {addWidgetSaga, removeWidgetSaga } from './widgets';

export function* watchAuth() {
    yield takeEvery(actionTypes.INITIATE_LOGIN, loginSaga);
    yield takeEvery(actionTypes.INITIATE_LOGOUT, logoutSaga);
}

export function* watchWidgets() {
    yield takeEvery(actionTypes.START_ADD_WIDGET, addWidgetSaga);
    yield takeEvery(actionTypes.START_REMOVE_WIDGET, removeWidgetSaga);
}