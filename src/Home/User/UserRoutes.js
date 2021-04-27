import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonalDetails from './Details/PersonalDetails';
import UpdatePersonalDetailsApp from './Details/UpdatePersonlDetailsApp';
import ChangePassword from './Details/ChangePassword';
import BilledStatement from './Statements/BilledStatement';
// import UnBilledStatement from './Statements/UnBilledStatement';
import StatementHistory from './Statements/StatementHistory';
// import TransactionApp from './Transactions/TransactionApp';
import TransactionHistory from './Transactions/TransactionHistory';
import PayBillApp from './Payments/PayBillApp';
import PayUnBillApp from './Payments/PayUnBillApp';
import PaymentHistory from './Payments/PaymentHistory';
import AllCreditCards from './CreditCards/AllCreditCards';
import AddCreditCardApp from './CreditCards/AddCreditCardApp';
import DeleteCreditCardApp from './CreditCards/DeleteCreditCardApp';
import AllAcountApp from './Accounts/AllAcountsApp';
import AddAccountsApp from './Accounts/AddAccountApp';
import DeleteAccountApp from './Accounts/DeleteAccountApp';
import UserHome from './UserHomeContent';
import CreditCardDetails from './CreditCards/CreditCardDetails';
import StatementHistoryOfCard from './Statements/StatementHistoryOfCard';
import TransactionHistoryOfCard from './Transactions/TransactionHistoryOfCard';
import PaymentHistoryOfCard from './Payments/PaymentHistoryOfCard';


const UserRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/home/:userId' component={UserHome} exact />

            <Route path='/home/:userId/statements/billed/:cardNumber/:statementId' component={BilledStatement} exact />
            <Route path='/home/:userId/statements/billed/:cardNumber' component={StatementHistoryOfCard} exact />
            <Route path='/home/:userId/statements/history' component={StatementHistory} exact />

            <Route path='/home/:userId/transactions/history/:cardNumber' component={TransactionHistoryOfCard} exact /> 
            <Route path='/home/:userId/transactions/history' component={TransactionHistory} exact />

            <Route path='/home/:userId/payments/payBill/:statementId' component={PayBillApp} exact />
            <Route path='/home/:userId/payments/payUnBill/:cardNumber' component={PayUnBillApp} exact />
            <Route path='/home/:userId/payments/history' component={PaymentHistory} exact />
            <Route path='/home/:userId/payments/history/:cardNumber' component={PaymentHistoryOfCard} exact />

            <Route path='/home/:userId/creditcards' component={AllCreditCards} exact />
            <Route path='/home/:userId/creditcards/addNew' component={AddCreditCardApp} exact />
            <Route path='/home/:userId/creditcards/delete/:cardNumber' component={DeleteCreditCardApp} exact />
            <Route path='/home/:userId/creditcards/view/:cardNumber' component={CreditCardDetails} exact />
            
            <Route path='/home/:userId/accounts' component={AllAcountApp} exact />
            <Route path='/home/:userId/accounts/addNew' component={AddAccountsApp} exact />
            <Route path='/home/:userId/accounts/delete/:accountNumber' component={DeleteAccountApp} exact />
   
            <Route path='/home/:userId/personalDetails' component={PersonalDetails} exact />
            <Route path='/home/:userId/personalDetails/update' component={UpdatePersonalDetailsApp} exact />
            <Route path='/home/:userId/changePassword' component={ChangePassword} exact />

        </Switch>
    </BrowserRouter>
);
export default UserRoutes;