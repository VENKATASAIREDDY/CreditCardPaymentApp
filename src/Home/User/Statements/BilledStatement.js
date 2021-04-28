import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';
import './StatementStyles.css';

class BilledStatement extends Component {

    componentDidMount() {
        const { userAction, match } = this.props;
        userAction.fetchTransactionsByStatement(match.params.statementId);
        userAction.fetchStatement(match.params.statementId);
        userAction.fetchPersonalDetails(match.params.userId);
        userAction.fetchCreditCard(match.params.cardNumber);
    }

    render() {
        const {isFetchedCreditCardDetails,creditCardDetails, isFetchedStatement, statement, transactionHistoryByStatement, isFetchedTransactionsByStatement, isFetchedPersonalDetails, personalDetails } = this.props;
        if (isFetchedStatement && isFetchedPersonalDetails && isFetchedCreditCardDetails) {
            return (
                <div className="container-fluid top-statements">
                    <div className="row entire-statement">
                        <div className="col-sm-8">
                            <div className="container heading-statements">
                                <div className="row">
                                    <div className="col-sm-2"><h2 className="h2-statements bank-name">{creditCardDetails.bankName}</h2></div>
                                    <div className="col-sm-7"></div>
                                    <div className="col-sm-3"><h2 className="h2-statements h2-statements-view-right">STATEMENT</h2></div>
                                </div>
                            </div>
                            <hr />
                            <div className="row row-personal-details">
                                <div className="col-sm-8">
                                    <div className="row row-personal-details">
                                        <div className="col-sm-5 card-details-label">
                                            Credit Card Number
                                        </div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-6">{creditCardDetails.cardNumber}</div>
                                    </div>
                                    <div className="row row-personal-details">
                                        <div className="col-sm-5 card-details-label">
                                            Customer Name
                                        </div>
                                        <div className="col-sm-1 ">:</div>
                                        <div className="col-sm-6">{statement.customerName}</div>
                                    </div>
                                    <div className="row row-personal-details">
                                        <div className="col-sm-5 card-details-label">
                                            Contact Number
                                        </div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-6">{personalDetails.contactNo}</div>
                                    </div>
                                    <div className="row row-personal-details">
                                        <div className="col-sm-5 card-details-label">
                                            Contact Email
                                        </div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-6">{personalDetails.email}</div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row row-card-details">
                                        <div className="col-sm-6 card-details-label">Card Limit</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-3">{creditCardDetails.cardLimit}</div>
                                    </div>
                                    <div className="row row-card-details">
                                        <div className="col-sm-6 card-details-label">Used Limit</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-3">{creditCardDetails.usedLimit}</div>
                                    </div>
                                    <div className="row row-card-details">
                                        <div className="col-sm-6 card-details-label">Avail Limit</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-3">{creditCardDetails.cardLimit-creditCardDetails.usedLimit}</div>
                                    </div>
                                </div>                             
                            </div>
                            <hr className="hr-line-bold"/>
                            <div className="row row-statement-summary">Statement Summary</div>
                            <div className="row row-summary-details">
                                {
                                    (isFetchedTransactionsByStatement) &&
                                    <table className="view-statement-transactions" responsive>
                                        <thead className="view-statement-transactions-head">
                                            <tr>
                                                <th>sl.no</th>

                                                <th className="date-row-head">transaction Date</th>
                                                <th className="time-row-head">transaction time</th>
                                                <th className="descrip-row-head">Description of Transaction</th>
                                                <th className="amount-row-head">amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="view-statement-transactions-body">
                                            {
                                                transactionHistoryByStatement.map((transaction, index) =>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td className="date-row-value">{transaction.transactionDate}</td>
                                                        <td className="time-row-value">{transaction.transactionTime}</td>
                                                        <td className="descrip-row-value">{transaction.description}</td>
                                                        <td className="amount-row-value">Rs. {transaction.amount}/-</td>
                                                    </tr>
                                                )
                                            }
                                            <tr>
                                                <td colSpan="6"><hr className="hr-line" /></td>
                                            </tr>
                                            <tr >
                                                <td colspan="4" className="total-amount">Total-amount</td>
                                                <td className="amount-row-value total-amount-value" id="totalAmount">
                                                    Rs. {
                                                        transactionHistoryByStatement.map(transaction => transaction.amount).reduce((a, b) => a + b, 0)
                                                    }/-
                                    </td>
                                            </tr>
                                            <tr >
                                                <td colspan="4" className="paid-amount"><strong>Previously Paid-amount</strong> (Paid Amount before generating bill)</td>
                                                <td className="amount-row-value paid-amount-value">
                                                    - Rs. {
                                                        transactionHistoryByStatement.map(transaction => transaction.amount).reduce((a, b) => a + b, 0) - statement.billAmount
                                                    }/-
                                    </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="6"><hr className="hr-line" /></td>
                                            </tr>
                                            <tr >
                                                <td colspan="4" className="bill-amount">Bill-amount</td>
                                                <td className="amount-row-value bill-amount-value" id="totalAmount">
                                                    Rs. {statement.billAmount}/-
                                    </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                }
                            </div>
                            <hr className="hr-line-bold"/>
                            <div className="row row-billing-details">
                                <div className="col-sm-6">
                                    <div className="row row-billing-details">
                                        <div className="col-sm-4 card-details-label">Billed Date</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-6">{statement.billDate}</div>
                                    </div>
                                    <div className="row row-billing-details">
                                        <div className="col-sm-4 card-details-label">Due Date</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-6">{statement.dueDate}</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row row-billing-details-right">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-4 card-details-label">Bill Amount</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-4 bill-amount-value">Rs. {statement.billAmount}/-</div>
                                    </div>
                                    <div className="row row-billing-details-right">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-4 card-details-label">Due Amount</div>
                                        <div className="col-sm-1">:</div>
                                        <div className="col-sm-4 due-amount-value">Rs. {statement.dueAmount}/-</div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr-line-bold"/>
                            <div className="row text-center">
                                <div className="col-sm-4">
                                    <Link className="btn btn-primary" to={`/home/${this.props.match.params.userId}/payments/payBill/${statement.statementId}`}>Pay Bill</Link>
                                </div>
                                <div className="col-sm-4">
                                    <Link className="btn btn-primary" onClick={window.print}>Print</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    still fetching ...
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        statement: state.UserReducers.statement,
        isFetchedStatement: state.UserReducers.isFetchedStatement,
        transactionHistoryByStatement: state.UserReducers.transactionHistoryByStatement,
        isFetchedTransactionsByStatement: state.UserReducers.isFetchedTransactionsByStatement,
        personalDetails: state.UserReducers.personalDetails,
        isFetchedPersonalDetails: state.UserReducers.isFetchedPersonalDetails,
        creditCardDetails: state.UserReducers.creditCardDetails,
        isFetchedCreditCardDetails:state.UserReducers.isFetchedCreditCardDetails,
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BilledStatement);