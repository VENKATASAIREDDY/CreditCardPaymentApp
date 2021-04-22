import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllUsers from '../Admin/Users/AllUsers';
import AllCustomersApp from './Customers/AllCustomersApp';
import AddUser from './Users/AddUser';


const AdminRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/admin/home/:userId' component={AllUsers} exact />
            <Route path='/admin/home/:userId/statements' component={AllUsers} exact />
            <Route path='/admin/home/:userId/transactions' component={AllUsers} exact />
            <Route path='/admin/home/:userId/payments' component={AllUsers} exact />
            <Route path='/admin/home/:userId/creditcards' component={AllUsers} exact />
            
            <Route path='/admin/home/:userId/allCustomers' component={AllCustomersApp} exact />
            <Route path='/admin/home/:userId/addUser' component={AddUser} exact />
        </Switch>
    </BrowserRouter>
);
export default AdminRoutes;