import React, { Component } from 'react';
import './HomeStyle.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as userAction from '../../Store/Actions/UserActions';

class UserHome extends Component{

    constructor(){
        super();
        this.state={
            userId:'',
            amount:'',
            description:'',
            cardNumber:'',
            statements:[],
            errors:{}
        }
    }

    handleInputChange = event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    validate = () =>{
        let amount = this.state.amount;
        let description = this.state.description;
        let errors = {};
        let isValid = true;

        if (!amount) {
          isValid = false;
          errors["amount"] = "Please enter the amount.";
        }
    
        if (!description) {
          isValid = false;
          errors["description"] = "Please enter to whom you paying";
        }   
      
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    doTransaction = event=>{
        event.preventDefault();

        const user={
            amount:this.state.amount,
            description:this.state.description,
            cardNumber:this.state.cardNumber
        };
        if(this.validate()){
            this.props.userAction.doTransaction(user.amount,user.description,user.cardNumber);
        }
    }

    componentDidMount(){
        const userId=this.props.match.params.userId;
        // this.props.userAction.fetchCreditCards(userId);
        // this.props.userAction.fetchPersonalDetails(userId);
    }

    render(){
        // const {personalDetails,creditCards,isFetchedPersonalDetails,isFetchedCreditCards}= this.props;
        // const {isFetchedPendingBills,pendingBills}=this.props;
        return(
            <div className="container-fluid">
                <div className="row">
                    {/* {
                        (isFetchedPersonalDetails===true) && <h3 className="text-animated">Welcome to Credit Card Payment {personalDetails.userName} . Pay Your Bills Online. Stay Home Stay Safe </h3>
                    }
                    {
                        (isFetchedPersonalDetails===false) && <h3 className="text-animated">Welcome to Credit Card Payment. Pay Your Bills Online. Stay Home Stay Safe </h3>
                    } */}
                </div>
                <div className="row body-home">
                    <div className="col-md-8">
                        <div className="container-fluid">
                            <div className="row statement-view">
                               
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container-fluid">
                            <div className="row">
                                Transaction

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
        // creditCards: state.UserReducers.creditCards,
        // personalDetails:state.UserReducers.personalDetails,
        // isFetchedPersonalDetails:state.UserReducers.isFetchedPersonalDetails,
        // isFetchedCreditCards:state.UserReducers.isFetchedCreditCards,
        isFetchedPendingBills:state.UserReducers.isFetchedPendingBills,
        pendingBills:state.UserReducers.pendingBills
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        userAction : bindActionCreators(userAction,dispatch),
   }   
};

export default connect(mapStateToProps,mapDispatchToProps)(UserHome);