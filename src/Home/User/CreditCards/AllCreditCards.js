import React, { Component } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './CardStyle.css';

import * as userAction from '../../../Store/Actions/UserActions';

    
class AllCreditCards extends Component{

    componentDidMount(){
        const userId=this.props.match.params.userId;
        this.props.userAction.fetchCreditCards(userId);
        this.props.userAction.fetchPersonalDetails(userId);
    }

    render(){
        const userId=this.props.match.params.userId;
        var userName=""
        const {isFetchedCreditCards,creditCards,isFetchedPersonalDetails,personalDetails}=this.props;
        if(isFetchedPersonalDetails){
            userName=personalDetails.userName;
        }        
        if(isFetchedCreditCards){
        return(
            
            <div>
                <div className="container-fluid total-view">
                    <div className="container p-3 body-creditcards">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <div className="container p-3 justify-content-center body-cardDetails">
                                    { 
                                    creditCards.map((card)=>
                                            <Card className="text-dark card">
                                                <div className="row">
                                                    <div className="col-sm-12 cardtitle">Credit Card</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 cardpadding"></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 cardnumber">{card.cardNumber}</div>
                                                </div>
                                                <div className="row expiry">
                                                <div className="col-sm-8 cardexpiry">valid: {card.expiryDate}</div>
                                                    
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-8 cardname">{userName}</div>
                                                    <div className="col-sm-4 cardtype">{card.cardName}</div>
                                                </div>
                                                <div className="row">
                                                <div class="overlay"></div>
                                                
                                                <Link to={`/home/${userId}/creditcards/view/${card.cardNumber}`} class="btn btn-primary hover-btn-view"> View </Link>
                                                <Link to={`/home/${userId}/creditcards/delete/${card.cardNumber}`} class="btn btn-danger hover-btn-del"> Delete </Link>
                                                </div>
                                                
                                            </Card>
                                        )
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <Link className="btn btn-primary" to={`/home/${userId}/creditcards/addNew`}>Add New Card</Link>
                                    </div> 
                                </div>
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
                        <Link className="btn btn-primary" to={`/home/${userId}/creditcards/addNew`}>Add New Card</Link>
                    </div> 
                </div>
            </div>
        )
    }
    }
}
function mapStateToProps(state) {
    return { 
        creditCards: state.UserReducers.creditCards,
        isFetchedCreditCards:state.UserReducers.isFetchedCreditCards,
        personalDetails: state.UserReducers.personalDetails,
        isFetchedPersonalDetails:state.UserReducers.isFetchedPersonalDetails
    }
}  
    
function mapDispatchToProps (dispatch) {
    return {
        userAction : bindActionCreators(userAction,dispatch),
    }   
};

export default connect(mapStateToProps,mapDispatchToProps)(AllCreditCards);