import {createStore} from 'redux';
import { persistStore } from 'redux-persist'
import combinedReducers from '../reducers';

export default () => {
    let store = createStore(combinedReducers)
    let persistor = persistStore(store)
    return { store, persistor }
};