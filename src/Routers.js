import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginApp from './Login/LoginApp';
import ChangePasswordApp from './Login/ChangePasswordApp';
import AdminHomeApp from './Home/Admin/HomeApp';
import HomeApp from './Home/User/HomeApp';
import FinishSignUp from './Login/FinishSignUp';
import SignUpApp from './Login/SignUpApp';
import Logout from './Login/Logout';
import GuardedRoute from './ProtectedRoutes';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact><Redirect to='/login'/></Route>
            <Route path='/login' component={LoginApp} exact/>
            <Route path='/logout' component={Logout} exact/>
            <Route path='/changePassword' component={ChangePasswordApp} exact/>  
            <Route path={`/signUp`} component={SignUpApp} exact/>
            <Route path={`/FinishSignUp/:userId`} component={FinishSignUp} exact/>

            <GuardedRoute path='/home/:userId' component={HomeApp} />
            <GuardedRoute path='/admin/home/:userId' component={AdminHomeApp}/>  
            <Route render={() => <h5>404: page not found</h5>} />
        </Switch>
    </BrowserRouter>
);
export default Routes;