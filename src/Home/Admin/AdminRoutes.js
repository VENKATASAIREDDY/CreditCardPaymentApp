import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllUsers from './Users/AllUsersbootstrap-table';
import AllCustomersApp from './Customers/AllCustomersApp';
import AddUser from './Users/AddUser';
import AllCreditCards from './CreditCards/AllCreditCards';
import PersonalDetails from './Details/PersonalDetails';
import UpdatePersonlDetailsApp from './Details/UpdatePersonlDetailsApp';
import ChangePassword from './Details/ChangePassword';
import CustomerDetails from './Customers/CustomerDetails';
import UpdateCustomerDetails from './Customers/UpdateCustomerDetails';
import DeleteUser from './Users/DeleteUser';
import AllTransactions from './Transactions/AllTransactions';
import AllPayments from './Payments/AllPayments';
import AllStatements from './Statements/AllStatements';
import CreditCardsHistory from './CreditCards/CreditCardsHistory';
import StatementsByCardNumber from './Statements/StatementsByCardNumber';
import TransactionsByCardNumber from './Transactions/TransactionsByCardNumber';
import PaymentsByCardNumber from './Payments/PaymentsByCardNumber';

const AdminRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/admin/home/:userId' component={AllUsers} exact />
            <Route path='/admin/home/:userId/delete/:customerId' component={DeleteUser} exact />
            <Route path='/admin/home/:userId/statements' component={AllStatements} exact />
            <Route path='/admin/home/:userId/transactions' component={AllTransactions} exact />
            <Route path='/admin/home/:userId/payments' component={AllPayments} exact />
            <Route path='/admin/home/:userId/creditcards' component={AllCreditCards} exact />
            <Route path='/admin/home/:userId/creditCards/history' component={CreditCardsHistory} exact/>
            
            <Route path='/admin/home/:userId/transactions/history/:cardNumber' component={TransactionsByCardNumber} exact/>
            
            <Route path='/admin/home/:userId/statements/history/:cardNumber' component={StatementsByCardNumber} exact/>
            
            <Route path='/admin/home/:userId/payments/history/:cardNumber' component={PaymentsByCardNumber} exact/>

            <Route path='/admin/home/:userId/personalDetails' component={PersonalDetails} exact/>
            <Route path='/admin/home/:userId/personalDetails/update' component={UpdatePersonlDetailsApp} exact/>
            <Route path='/admin/home/:userId/personalDetails/changePassword' component={ChangePassword} exact/>
            
            {/* <Route path='/admin/home/:userId/allCustomers' component={AllCustomersUITable} exact /> */}
            <Route path='/admin/home/:userId/allCustomers' component={AllCustomersApp} exact />
            <Route path='/admin/home/:userId/customerDetails/:customerId' component={CustomerDetails} exact />
            <Route path='/admin/home/:userId/customerDetails/update/:customerId' component={UpdateCustomerDetails} exact />
            <Route path='/admin/home/:userId/addUser' component={AddUser} exact />
        </Switch>
    </BrowserRouter>
);
export default AdminRoutes;