import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
    todos: Todo[];
}

//need atleast one reducer to avoid an error
export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});