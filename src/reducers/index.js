import { combineReducers } from 'redux'
import auth from './auth';
import content from './content';
import user from './user';

export default combineReducers({
    auth,
    content,
    user
});