import { combineReducers } from 'redux';
import { gmailAPIReducer } from './gmailAPIReducer/gmailAPIReducer';

export const rootReducer = combineReducers({
    gmailAPI: gmailAPIReducer,
});
