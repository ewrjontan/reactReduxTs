import { combineReducers } from 'redux';

//need atleast one reducer to avoid an error
export const reducers = combineReducers({
    counter: () => 1
});