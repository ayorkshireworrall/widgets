import * as actionTypes from '../actions/actionTypes';

const initialState = {
    widgetList: [
        {id: 1, name: 'Alex', description: 'This man is an absolute bloody Legend'},
        {id: 2, name: 'Baloo', description: 'This dog is absolutely Adorable'},
        {id: 3, name: 'Shirlyn', description: 'This lady is Hot Hot Hot!'}
    ],
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

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.START_ADD_WIDGET: return startAddWidget(state, action);
        case actionTypes.START_REMOVE_WIDGET: return startRemoveWidget(state, action);
        case actionTypes.ADD_WIDGET_SUCCESS: return addWidgetSuccess(state, action);
        case actionTypes.REMOVE_WIDGET_SUCCESS: return removeWidgetSucess(state, action);
        default: return state;
    }
}

export default reducer;