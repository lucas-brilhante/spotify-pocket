import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Authorize, PrivateRoute } from '../containers';
import DashboardMain from '../containers/Dashboard/DashboardMain';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true}>
                <Login />
            </Route>
            <Route path="/authorize">
                <Authorize />
            </Route>
            <PrivateRoute path="/dashboard" comp={DashboardMain} />
        </Switch>
    </BrowserRouter>
);

export default Routes;