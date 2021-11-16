import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { loginSaga, logoutSaga, refreshSaga, socialLoginSaga } from './auth';
import {addWidgetSaga, removeWidgetSaga, initWidgetSaga } from './widgets';

export function* watchAuth() {
    yield takeEvery(actionTypes.ATTEMPT_REFRESH, refreshSaga);
    yield takeEvery(actionTypes.INITIATE_LOGIN, loginSaga);
    yield takeEvery(actionTypes.INITIATE_SOCIAL_LOGIN, socialLoginSaga);
    // yield takeEvery(actionTypes.INITIATE_LOGOUT, logoutSaga);
}

export function* watchWidgets() {
    yield takeEvery(actionTypes.START_ADD_WIDGET, addWidgetSaga);
    yield takeEvery(actionTypes.START_REMOVE_WIDGET, removeWidgetSaga);
    yield takeEvery(actionTypes.INIT_WIDGETS, initWidgetSaga);
}