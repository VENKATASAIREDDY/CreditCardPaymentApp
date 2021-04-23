// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import AdminRoutes from './Home/Admin/AdminRoutes';
// import AdminHomeApp from './Home/Admin/HomeApp';
// import ChangePasswordApp from './Login/ChangePasswordApp';
// import FinishSignUp from './Login/FinishSignUp';
// import LoginApp from './Login/LoginApp';
// import SignUpApp from './Login/SignUpApp';

// const Routes = () => (
//     <BrowserRouter>
//         <Switch>
//             <Route path='/' component={LoginApp} exact />
//             <Route path='/signUp' component={SignUpApp} exact/>
//             <Route path='/changePassword' component={ChangePasswordApp} exact/>
//             <Route path='/finishSignUp/:userId' component={FinishSignUp} exact/>
//             <Route path={'/admin/home/:userId'} component={AdminHomeApp} exact/>
//         </Switch>
//     </BrowserRouter>
// );
// export default Routes;
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginApp from './Login/LoginApp';
import ChangePasswordApp from './Login/ChangePasswordApp';
import AdminHomeApp from './Home/Admin/HomeApp';
import HomeApp from './Home/User/HomeApp';
import FinishSignUp from './Login/FinishSignUp';
import SignUpApp from './Login/SignUpApp';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact><Redirect to='/login'/></Route>
            <Route path='/login' component={LoginApp} exact/>
            <Route path='/changePassword' component={ChangePasswordApp} exact/>
            <Route path='/admin/home/:userId' component={AdminHomeApp}/>    
            <Route path={`/signUp`} component={SignUpApp} exact/>
            <Route path={`/FinishSignUp/:userId`} component={FinishSignUp} exact/>
            <Route path={`/home/:userId`} component={HomeApp}/>
            
        </Switch>
    </BrowserRouter>
);
export default Routes;