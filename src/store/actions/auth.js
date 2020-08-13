import * as actionTypes from './actionTypes';

//TODO switch to JWT tokens
export const initiateLogin = (email, password) => {
    return {
        type: actionTypes.INITIATE_LOGIN,
        email,
        password
    }
}

export const loginSuccess = (userId, token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userId,
        token
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