import React from 'react';
import Routes from '../../routes';
import {Provider} from 'react-redux';
import createPersistedStore from '../../store';
import { PersistGate } from 'redux-persist/integration/react'

import './App.scss';

const store = createPersistedStore();

const App = () => (
    <div className="app" data-testid="app">
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    </div>
);

export default App;
