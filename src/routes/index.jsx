import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Authorize, PrivateRoute } from '../containers';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true}>
                <Login />
            </Route>
            <Route path="/authorize">
                <Authorize />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;