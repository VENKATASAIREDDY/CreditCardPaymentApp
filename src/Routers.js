import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChangePasswordApp from './Login/ChangePasswordApp';
import LoginApp from './Login/LoginApp';
import SignUpApp from './Login/SignUpApp';

const Routers = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={LoginApp} exact />
            <Route path='/signUp' component={SignUpApp} exact/>
            <Route path='/changePassword' component={ChangePasswordApp} exact/>
            {/* <Route path="/home/admin" component={Admin} exact/> */}
        </Switch>
    </BrowserRouter>
);
export default Routers;