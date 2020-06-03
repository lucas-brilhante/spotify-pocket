import { combineReducers } from 'redux'
import auth from './auth';
import content from './content';
import user from './user';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: '@spotify-pocket',
    storage,
}

export default combineReducers({
    auth: persistReducer(persistConfig, auth),
    content,
    user
});