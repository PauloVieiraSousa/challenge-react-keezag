 
import { combineReducers } from 'redux';
import example from './example.reducer';

const reducers = combineReducers({
    example: example,
});

export default reducers;