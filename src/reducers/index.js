import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorReducer,
    ajaxCallInProgress: ajaxStatusReducer
});

export default rootReducer;
