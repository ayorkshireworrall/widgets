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


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH: return auth(state, action);
        case actionTypes.INITIATE_LOGIN: return initiateLogin(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.INITIATE_LOGOUT: return initiateLogout(state, action);
        case actionTypes.INITIATE_REFRESH: return initiateRefresh(state, action);
        default: return state;
    }
}

export default reducer;