import { combineReducers } from 'redux';
import todos from './todos';
import appState from './appState';

const reducers = combineReducers({todos, appState});

export default reducers;