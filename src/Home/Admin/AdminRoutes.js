import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllUsers from './Users/AllUsersbootstrap-table';
import AllCustomersApp from './Customers/AllCustomersApp';
import AddUser from './Users/AddUser';
import AllCustomersUITable from './Customers/AllCustomersUITable';
import AllCreditCards from './CreditCards/AllCreditCards';


const AdminRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/admin/home/:userId' component={AllUsers} exact />
            <Route path='/admin/home/:userId/statements' component={AllUsers} exact />
            <Route path='/admin/home/:userId/transactions' component={AllUsers} exact />
            <Route path='/admin/home/:userId/payments' component={AllUsers} exact />
            <Route path='/admin/home/:userId/creditcards' component={AllCreditCards} exact />
            
            <Route path='/admin/home/:userId/allCustomers' component={AllCustomersUITable} exact />
            <Route path='/admin/home/:userId/addUser' component={AddUser} exact />
        </Switch>
    </BrowserRouter>
);
export default AdminRoutes;