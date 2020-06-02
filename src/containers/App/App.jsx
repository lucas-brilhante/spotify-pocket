import React from 'react';
import Routes from '../../routes';
import {Provider} from 'react-redux';
import store from '../../store';

import './App.scss';

const App = () => (
    <div className="app">
        <Provider store={store}>
            <Routes />
        </Provider>
    </div>
);

export default App;
