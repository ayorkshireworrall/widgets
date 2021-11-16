import * as actionTypes from '../actions/actionTypes';

const initialState = {
    payload: null,
    isLoading: true,
    token: null,
    userId: 0,
    errors: null
}

const auth = (state, action) => {
    return {
        ...state,
        payload: action.payload
    }
}

const initiateLogin = (state, action) => {
    return {
        ...state, 
        isLoading: true,
        errors: null
    }
}

const loginSuccess = (state, action) => {
    return {
        ...state,
        isLoading: false,
        token: action.accessToken
    }
}

const loginFail = (state, action) => {
    return {
        ...state,
        isLoading: false,
        errors: action.error,
    }
}

const initiateLogout = (state, action) => {
    return {
        ...state,
        token: null,
    }
}

const initiateRefresh = (state, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

const refreshFail = (state, action) => {
    return {
        ...state,
        isLoading: false
    }
}

const clearAuthErrors = (state, action) => {
    return {
        ...state,
        errors: null
    }
}

const initiateSocialLogin = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const socialLoginSuccess = (state, action) => {
    return {
        ...state,
        isLoading: false
    }
}

const socialLoginFail = (state, action) => {
    return {
        ...state,
        isLoading: false,
        errors: action.error
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH: return auth(state, action);
        case actionTypes.INITIATE_LOGIN: return initiateLogin(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.INITIATE_LOGOUT: return initiateLogout(state, action);
        case actionTypes.INITIATE_REFRESH: return initiateRefresh(state, action);
        case actionTypes.REFRESH_FAIL: return refreshFail(state, action);
        case actionTypes.CLEAR_ERRORS: return clearAuthErrors(state, action);
        case actionTypes.INITIATE_SOCIAL_LOGIN: return initiateSocialLogin(state, action);
        case actionTypes.SOCIAL_LOGIN_SUCCESS: return socialLoginSuccess(state, action);
        case actionTypes.SOCIAL_LOGIN_FAIL: return socialLoginFail(state, action);
        default: return state;
    }
}

export default reducer;