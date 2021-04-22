import React, { Component } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as userAction from '../../../Store/Actions/UserActions';

    
class CreditCardDetails extends Component{

    componentDidMount(){
        const userId=this.props.match.params.userId;
        const cardNumber=this.props.match.params.cardNumber;
        this.props.userAction.fetchCreditCard(cardNumber);
        this.props.userAction.fetchPersonalDetails(userId);
    }

    render(){
        const userId=this.props.match.params.userId;
        var userName=""
        const {isFetchedCreditCardDetails,creditCardDetails,isFetchedPersonalDetails,personalDetails}=this.props;
        if(isFetchedPersonalDetails){
            userName=personalDetails.userName;
        }
        if(isFetchedCreditCardDetails && isFetchedPersonalDetails){
        return(
            
            <div className="container whole-addcard">
                <div className="conatiner-fluid heading-addcard">
                    <h3 className="h3-add">Credit Card of {personalDetails.userName}</h3>
                </div>
                <div className="container-fluid body-addcard">
                    <div className="row">
                        <div className="col-md-6 card-image">
                            <Card className="text-dark card">
                                <div className="row">
                                    <div className="col-sm-12 cardtitle">Credit Card</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 cardpadding"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 cardnumber">{creditCardDetails.cardNumber}</div>
                                </div>
                                <div className="row expiry">
                                <div className="col-sm-8 cardexpiry">valid: {creditCardDetails.expiryDate}</div>
                                    
                                </div>
                                <div className="row">
                                <div className="col-sm-8 cardname">{personalDetails.userName}</div>
                                    
                                    <div className="col-sm-4 cardtype">{creditCardDetails.cardName}</div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6 shadow-lg card-text-details">
                            <div className="row">
                                <div className="col-sm-4"><p className="label-card">Card Number</p></div>
                                <div className="col-sm-1"><p className="label-card">:</p></div>
                                <div className="col-sm-6"><p className="value-card">{creditCardDetails.cardNumber}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><p className="label-card">Card Holder</p></div>
                                <div className="col-sm-1"><p className="label-card">:</p></div>
                                <div className="col-sm-6"><p className="value-card">{personalDetails.userName}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><p className="label-card">Card Name</p></div>
                                <div className="col-sm-1"><p className="label-card">:</p></div>
                                <div className="col-sm-6"><p className="value-card">{creditCardDetails.cardName}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><p className="label-card">Card Type</p></div>
                                <div className="col-sm-1"><p className="label-card">:</p></div>
                                <div className="col-sm-6"><p className="value-card">{creditCardDetails.cardType}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><p className="label-card">Valid Upto</p></div>
                                <div className="col-sm-1"><p className="label-card">:</p></div>
                                <div className="col-sm-6"><p className="value-card">{creditCardDetails.expiryDate}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><p className="label-card">CVV</p></div>
                                <div className="col-sm-1"><p className="label-card">:</p></div>
                                <div className="col-sm-6"><p className="value-card">{creditCardDetails.cvv}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><p className="label-card">Card Limit</p></div>
                                <div className="col-sm-1"><p className="label-card">:</p></div>
                                <div className="col-sm-6"><p className="value-card">{creditCardDetails.cardLimit}</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4"><p className="label-card">Amount Used</p></div>
                                <div className="col-sm-1"><p className="label-card">:</p></div>
                                <div className="col-sm-6"><p className="value-card">{creditCardDetails.usedLimit}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>               
        )
    }else{
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-bttn">
                        <Spinner/>
                    </div> 
                </div>
            </div>
        )
    }
    }
}
function mapStateToProps(state) {
    return { 
        creditCardDetails: state.UserReducers.creditCardDetails,
        isFetchedCreditCardDetails:state.UserReducers.isFetchedCreditCardDetails,
        personalDetails: state.UserReducers.personalDetails,
        isFetchedPersonalDetails:state.UserReducers.isFetchedPersonalDetails
    }
}  
    
function mapDispatchToProps (dispatch) {
    return {
        userAction : bindActionCreators(userAction,dispatch),
    }   
};

export default connect(mapStateToProps,mapDispatchToProps)(CreditCardDetails);