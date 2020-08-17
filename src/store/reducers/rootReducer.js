import { combineReducers } from 'redux';

import authReducer from './auth';
import widgetReducer from './widgets';

const rootReducer = combineReducers({
    auth: authReducer,
    widgets: widgetReducer,
})

export default rootReducer;