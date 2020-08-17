import * as actionTypes from './actionTypes';

export const startAddWidget = payload => {
    return {
        type: actionTypes.START_ADD_WIDGET,
        payload
    }
}
export const startRemoveWidget = id => {
    return {
        type: actionTypes.START_REMOVE_WIDGET,
        id
    }
}

export const addWidgetSuccess = payload => {
    return {
        type: actionTypes.ADD_WIDGET_SUCCESS,
        payload
    }
}

export const removeWidgetSuccess = id => {
    return {
        type: actionTypes.REMOVE_WIDGET_SUCCESS,
        id
    }
}