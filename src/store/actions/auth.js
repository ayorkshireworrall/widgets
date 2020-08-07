import * as actionTypes from './actionTypes';

//TODO switch to JWT tokens
export const initiateLogin = (email, password) => {
    return {
        type: actionTypes.INITIATE_LOGIN,
        email,
        password
    }
}

export const loginSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
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

export const logoutFail = error => {
    return { 
        type: actionTypes.LOGOUT_FAIL,
        error
    }
}