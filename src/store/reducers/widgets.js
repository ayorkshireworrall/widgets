import * as actionTypes from '../actions/actionTypes';

const initialState = {
    widgetList: [],
    loading: false
}

const startAddWidget = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const startRemoveWidget = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const addWidgetSuccess = (state, action) => {
    return {
        ...state,
        widgetList: state.widgetList.concat(action.payload),
        loading: false
    };
}

const removeWidgetSucess = (state, action) => {
    return {
        ...state,
        widgetList: state.widgetList.filter(widget => widget.id !== action.id),
        loading: false
    };
}

const setWidgets = (state, action) => {
    return {
        ...state,
        widgetList: action.widgets,
        loading: false
    }
}

const initWidgets = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.START_ADD_WIDGET: return startAddWidget(state, action);
        case actionTypes.START_REMOVE_WIDGET: return startRemoveWidget(state, action);
        case actionTypes.ADD_WIDGET_SUCCESS: return addWidgetSuccess(state, action);
        case actionTypes.REMOVE_WIDGET_SUCCESS: return removeWidgetSucess(state, action);
        case actionTypes.SET_WIDGETS: return setWidgets(state, action);
        case actionTypes.INIT_WIDGETS: return initWidgets(state, action);
        default: return state;
    }
}

export default reducer;