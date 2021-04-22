import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonalDetails from './Details/PersonalDetails';
import UpdatePersonalDetailsApp from './Details/UpdatePersonlDetailsApp';
import ChangePassword from './Details/ChangePassword';
import BilledStatement from './Statements/BilledStatement';
import UnBilledStatement from './Statements/UnBilledStatement';
import StatementHistory from './Statements/StatementHistory';
import TransactionApp from './Transactions/TransactionApp';
import TransactionHistory from './Transactions/TransactionHistory';
import PayBillApp from './Payments/PayBillApp';
import PaymentHistory from './Payments/PaymentHistory';
import AllCreditCards from './CreditCards/AllCreditCards';
import AddCreditCardApp from './CreditCards/AddCreditCardApp';
import DeleteCreditCardApp from './CreditCards/DeleteCreditCardApp';
import AllAcountApp from './Accounts/AllAcountsApp';
import AddAccountsApp from './Accounts/AddAccountApp';
import DeleteAccountApp from './Accounts/DeleteAccountApp';
import UserHome from './UserHomeContent';
import CreditCardDetails from './CreditCards/CreditCardDetails';


const UserRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/home/:userId' component={UserHome} exact />

            <Route path='/home/:userId/statements/billed' component={BilledStatement} exact />
            <Route path='/home/:userId/statements/unBilled' component={UnBilledStatement} exact />
            <Route path='/home/:userId/statements/history' component={StatementHistory} exact />

            <Route path='/home/:userId/transactions/do' component={TransactionApp} exact />
            <Route path='/home/:userId/transactions/history' component={TransactionHistory} exact />

            <Route path='/home/:userId/payments/payBill/PayUPI' component={PayBillApp} exact />
            <Route path='/home/:userId/payments/payBill/PayAccount' component={PayBillApp} exact />
            <Route path='/home/:userId/payments/history' component={PaymentHistory} exact />

            <Route path='/home/:userId/creditcards' component={AllCreditCards} exact />
            <Route path='/home/:userId/creditcards/addNew' component={AddCreditCardApp} exact />
            <Route path='/home/:userId/creditcards/delete/:cardNumber' component={DeleteCreditCardApp} exact />
            <Route path='/home/:userId/creditcards/view/:cardNumber' component={CreditCardDetails} exact />
            
            <Route path='/home/:userId/accounts' component={AllAcountApp} exact />
            <Route path='/home/:userId/accounts/addNew' component={AddAccountsApp} exact />
            <Route path='/home/:userId/accounts/delete' component={DeleteAccountApp} exact />
   
            <Route path='/home/:userId/personalDetails' component={PersonalDetails} exact />
            <Route path='/home/:userId/personalDetails/update' component={UpdatePersonalDetailsApp} exact />
            <Route path='/home/:userId/changePassword' component={ChangePassword} exact />

        </Switch>
    </BrowserRouter>
);
export default UserRoutes;