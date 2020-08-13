import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';
import * as ERROR_CONSTANTS from '../../shared/errorConstants';

export function* logoutSaga(action) {
    yield actions.logoutSuccess();
}

//TODO: replace with connection to actual backend to retrieve auth token
export function* loginSaga(action) {
    yield delay(2000);
    if (action.email === 'alex@mail.com' && action.password === 'Password') {
        const userId = 1;
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlIjp7ImlkIjoxMjA2LCJmdWxsTmFtZSI6IlRlc3QgQnVzaW5lc3MiLCJwcm9maWxlVHlwZSI6ImJ1c2luZXNzIiwibWVtYmVyc2hpcFR5cGUiOiJmcmVlIn0sInVzZXIiOnsiaWQiOjE0NTYsInVzZXJuYW1lIjoidGVzdC5idXNpbmVzc0BwbGFuemhlcm9lcy5vcmciLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE1OTM0NzU3NjMsImV4cCI6MTU5MzQ5MDE2MywiYXVkIjoicGxhbnpoZXJvZXMiLCJpc3MiOiJwbGFuemhlcm9lcyJ9.zI5afzbOvIw2_jqs-0VN84G9JCHvDQ_PWYxbnCjWf5U';
        yield put(actions.loginSuccess(userId, token));
    } else {
        const error = {
            type: ERROR_CONSTANTS.TYPE.WEB,
            code: 401,
            message: ERROR_CONSTANTS.MESSAGE[401]
        }
        yield put(actions.loginFail(error));
    }
}