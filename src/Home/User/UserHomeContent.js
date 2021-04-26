import React, { Component } from 'react';
import './HomeStyle.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as userAction from '../../Store/Actions/UserActions';

class UserHome extends Component {

    constructor() {
        super();
        this.state = {
            userId: '',
            amount: '',
            description: '',
            cardNumber: '',
            statements: [],
            errors: {}
        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validate = () => {
        let amount = this.state.amount;
        let description = this.state.description;
        let cardNumber = this.state.cardNumber;
        let errors = {};
        let isValid = true;

        if (!amount) {
            isValid = false;
            errors["amount"] = "Please enter the amount";
        }

        if (!description) {
            isValid = false;
            errors["description"] = "Perpose of sending";
        }
        if (!cardNumber) {
            isValid = false;
            errors["cardNumber"] = "choose card number";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }
    doTransaction = event => {
        event.preventDefault();

        const user = {
            amount: this.state.amount,
            description: this.state.description,
            cardNumber: this.state.cardNumber
        };
        if (this.validate()) {
            this.props.userAction.doTransaction(user.cardNumber, user.amount, user.description);
        }
    }

    componentDidMount() {
        const { match, userAction } = this.props;
        userAction.fetchBilledStatementsById(match.params.userId);
        userAction.fetchUnBilledStatementsById(match.params.userId);
        userAction.fetchCreditCards(match.params.userId);
        userAction.fetchPersonalDetails(match.params.userId);
    }

    render() {
        const { billedStatementsById, isFetchedBilledStatementById, unBilledStatementsById, isFetchedUnBilledStatementsById,
            isFetchedPersonalDetails, personalDetails, creditCards, isFetchedCreditCards, transaction, isTransaction } = this.props;
        // alert(isTransaction)
        return (
            <div className="container-fluid bg-dark text-light">
                <div className="row scroll-message">
                    {
                        (isFetchedPersonalDetails === true) && <h3 className="text-animated scroll-message">Welcome to Credit Card Payment {personalDetails.userName} . Pay Your Bills Online. Stay Home Stay Safe </h3>
                    }
                    {
                        (isFetchedPersonalDetails === false) && <h3 className="text-animated scroll-message">Welcome to Credit Card Payment. Pay Your Bills Online. Stay Home Stay Safe </h3>
                    }
                </div>
                <div className="row body-home">
                    <div className="col-md-8">
                        <div className="container-fluid">
                            <div className="row statement-view">
                                {
                                    (isFetchedBilledStatementById === true) &&
                                    <div className="col-xl-6 ">
                                        <div className="container p-3 justify-content-center body-accountDetails">
                                            {
                                                billedStatementsById.map((statement) =>
                                                    <div className="container p-3 billed-statements">
                                                        <div className="row justify-content-center">
                                                            <div className="col-lg-12 account-details billed-statements">
                                                                <h4 className="h4 text-center">Billed Statement</h4>
                                                                <div className="row justify-content-center bill-row">
                                                                    <div className="col-lg-4 label-bill">Card Number</div>
                                                                    <div className="col-lg-1">:</div>
                                                                    <div className="col-lg-5 bill-value">{statement.cardNumber}</div>
                                                                </div>
                                                                <div className="row justify-content-center bill-row">
                                                                    <div className="col-lg-4 label-bill">Name</div>
                                                                    <div className="col-lg-1">:</div>
                                                                    <div className="col-lg-5 bill-value bill-value-name">{statement.customerName}</div>
                                                                </div>
                                                                <div className="row justify-content-center bill-row">
                                                                    <div className="col-lg-4 label-bill">Due Date</div>
                                                                    <div className="col-lg-1">:</div>
                                                                    <div className="col-lg-5 bill-value">{statement.dueDate}</div>
                                                                </div>
                                                                <div className="row justify-content-center bill-row">
                                                                    <div className="col-lg-4 label-bill">Due Amount</div>
                                                                    <div className="col-lg-1">:</div>
                                                                    <div className="col-lg-5 text-danger bill-value" id={statement.cardNumber}>{statement.dueAmount}</div>
                                                                </div>
                                                                <div className="row justify-content-center bill-row">
                                                                    {
                                                                        (statement.dueAmount === 0) && <Link className="btn btn-primary disabled" to={`/home/${this.props.match.params.userId}/payments/payBill/${statement.statementId}`}>Bill Paid</Link>
                                                                    }
                                                                    {
                                                                        (statement.dueAmount > 0) && <Link className="btn btn-primary" to={`/home/${this.props.match.params.userId}/payments/payBill/${statement.statementId}`}>Pay Bill</Link>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    (isFetchedUnBilledStatementsById === true) &&
                                    <div className="col-xl-6">
                                        <div className="container p-3 justify-content-center body-accountDetails">
                                            {
                                                unBilledStatementsById.map((statement) =>
                                                    <div className="container p-3 unBilled-statements">
                                                        <div className="row justify-content-center">
                                                            <div className="col-lg-12 account-details unBilled-statements">
                                                                <h4 className="h4 text-center">UnBilled Statement</h4>
                                                                <div className="row justify-content-center bill-row">
                                                                    <div className="col-lg-4 label-bill">Card Number</div>
                                                                    <div className="col-lg-1">:</div>
                                                                    <div className="col-lg-5">{statement.cardNumber}</div>
                                                                </div>
                                                                <div className="row justify-content-center bill-row">
                                                                    <div className="col-lg-4 label-bill">Name</div>
                                                                    <div className="col-lg-1">:</div>
                                                                    <div className="col-lg-5 bill-value bill-value-name">{statement.customerName}</div>
                                                                </div>
                                                                <div className="row justify-content-center bill-row">
                                                                    <div className="col-lg-4 label-bill">Bill Date</div>
                                                                    <div className="col-lg-1">:</div>
                                                                    <div className="col-lg-5 bill-value">{statement.billDate}</div>
                                                                </div>
                                                                <div className="row justify-content-center bill-row">
                                                                    <div className="col-lg-4 label-bill">Used Amount</div>
                                                                    <div className="col-lg-1">:</div>
                                                                    <div className="col-lg-5 bill-value">{statement.billAmount}</div>
                                                                </div>
                                                                <div className="row justify-content-center bill-row">
                                                                    {
                                                                        (isFetchedBilledStatementById===true) &&
                                                                        (document.getElementById(statement.cardNumber)!=null) &&
                                                                        (document.getElementById(statement.cardNumber).innerHTML!=="0") ? <Link className="btn btn-primary disabled" to={`/home/${this.props.match.params.userId}/payments/payUnBill/${statement.cardNumber}`}>Pay Later</Link>:<Link className="btn btn-primary" to={`/home/${this.props.match.params.userId}/payments/payUnBill/${statement.cardNumber}`}>Pay Now</Link>
                                                                    }
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container-fluid bg-light text-dark transaction-block">
                            <div className="row transaction-row">
                                <div className="col-sm-12 transaction-heading bg-light text-dark">
                                    <h4 className="text-center">Use Your Credit card To Buy</h4>
                                </div>
                                <div className="col-sm-12">
                                    <div>
                                        {
                                            (isTransaction === true) && <div class="alert alert-success" role="alert">Transaction Successful</div>
                                        }
                                        {
                                            (isTransaction === false) && <div class="alert alert-danger" role="alert">Transaction Failed</div>
                                        }
                                    </div>
                                    <div className="container-fluid no-padding">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <form onSubmit={this.doTransaction} className="transact-from form-group" method="POST">

                                                    <div className="form-group">
                                                        <input name="amount" placeholder="Amount to send" onChange={this.handleInputChange} className="input-transaction form-control" />
                                                        <span className="text-danger">{this.state.errors.amount}</span>
                                                    </div>


                                                    <div className="form-group">
                                                        <select name="description" className="input-transaction form-control" onChange={this.handleInputChange} >
                                                            <option disabled selected>Perpose of sending</option>
                                                            <option value="ToFriend">To Friend</option>
                                                            <option value="Mobile Recharge">Mobile Recharge</option>
                                                            <option value="To Shop">To Shop</option>
                                                            <option value="Fee">Fee</option>
                                                            <option value="others">others</option>
                                                        </select>
                                                        <span className="text-danger">{this.state.errors.description}</span>
                                                    </div>


                                                    <div className="form-group">
                                                        {
                                                            (isFetchedCreditCards === true) &&
                                                            <select name="cardNumber" className="input-transaction form-control" onChange={this.handleInputChange} >
                                                                <option disabled selected>choose a credit card</option>
                                                                {
                                                                    creditCards.map(card =>
                                                                        <option value={card.cardNumber}>{card.cardNumber}</option>
                                                                    )
                                                                }
                                                            </select>
                                                        }
                                                        <span className="text-danger">{this.state.errors.cardNumber}</span>
                                                    </div>

                                                    <div className="form-group buttons-transact">
                                                        <input type="submit" className=" btn btn-success bttn-send" value="Send Money" />
                                                        <input type="reset" className="btn btn-danger bttn-transact-cancel" value="Cancel" />

                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        billedStatementsById: state.UserReducers.billedStatementsById,
        isFetchedBilledStatementById: state.UserReducers.isFetchedBilledStatementById,
        isFetchedUnBilledStatementsById: state.UserReducers.isFetchedUnBilledStatementsById,
        unBilledStatementsById: state.UserReducers.unBilledStatementsById,
        personalDetails: state.UserReducers.personalDetails,
        isFetchedPersonalDetails: state.UserReducers.isFetchedPersonalDetails,
        creditCards: state.UserReducers.creditCards,
        isFetchedCreditCards: state.UserReducers.isFetchedCreditCards,
        isTransaction: state.UserReducers.isTransaction,
        transaction: state.UserReducers.transaction
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);