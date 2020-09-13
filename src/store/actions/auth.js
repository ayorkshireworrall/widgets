import * as actionTypes from './actionTypes';

export const initiateLogin = (username, password) => {
    return {
        type: actionTypes.INITIATE_LOGIN,
        username,
        password
    }
}

export const loginSuccess = accessToken => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        accessToken
    }
}

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error
    }
}

export const initiateLogout = () => {
    return {
        type: actionTypes.INITIATE_LOGOUT
    }
}

export const logoutSuccess = () => {
    return { 
        type: actionTypes.LOGOUT_SUCCESS
    }
}

export const attemptRefresh = () => {
    return {
        type: actionTypes.ATTEMPT_REFRESH
    }
}

export const initiateRefresh = () => {
    return {
        type: actionTypes.INITIATE_REFRESH
    }
}

export const refreshFail = () => {
    return {
        type: actionTypes.REFRESH_FAIL
    }
}