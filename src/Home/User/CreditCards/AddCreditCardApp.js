import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './CardStyle.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';
import { Redirect } from 'react-router';

class AddCreditCard extends Component{

    constructor(props){
        super(props);
        this.state={
            userId:this.props.match.params.userId,
            cardNumber:'xxxx xxxx xxxx xxxx',
            cardName:'',
            cardType:'',
            expiryDate:'',
            cvv:'',
            bankName:'',
            cardLimit: '',
            usedLimit:0.0,
            errors:{}
        }
    }

    handleInputChange = event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    validate = () =>{
        let cardNumber = this.state.cardNumber;
        let cardName = this.state.cardName;
        let cardType = this.state.cardType;
        let expiryDate = this.state.expiryDate;
        let cvv = this.state.cvv;
        let bankName = this.state.bankName;
        let cardLimit = this.state.cardLimit;
        let errors = {};
        let isValid = true;

        if (!cardNumber || cardNumber.match("xxxx xxxx")) {
          isValid = false;
          errors["cardNumber"] = "Please enter card Number";
        }else if(!cardNumber.match("^[1-9][0-9]{15}$")){
            isValid = false;
            errors["cardNumber"] = "Enter valid Card Number";
        }
    
        if (!cardName) {
          isValid = false;
          errors["cardName"] = "Please choose name of the card Type";
        } 

        if (!cardType) {
            isValid = false;
            errors["cardType"] = "Please choose card Type";
          }
      
          if (!expiryDate) {
            isValid = false;
            errors["expiryDate"] = "Please enter expiry date";
          }else if(new Date(expiryDate)<new Date()){
            isValid = false;
            errors["expiryDate"] = "expiry date should be future date";
        }

        if (!cvv) {
            isValid = false;
            errors["cvv"] = "Please enter cvv";
        }else if(!cvv.match("^[1-9][0-9]{2}$")){
            isValid = false;
            errors["cvv"] = "Enter valid cvv of length 3";
        }
      
          if (!bankName) {
            isValid = false;
            errors["bankName"] = "Please enter the bank name";
          }else if(!bankName.match("^[A-Z a-z]{2,20}$")){
              isValid = false;
              errors["bankName"] = "Enter valid bank name";
          }
          if (!cardLimit) {
            isValid = false;
            errors["cardLimit"] = "Please enter the card limit";
          }else if(!cardLimit.match("^[0-9]{1,7}$")){
              isValid=false;
              errors["cardLimit"] = "enter valid card limit";
          }

        this.setState({
          errors: errors
        });
    
        return isValid;
    }

    addCreditCard = event=>{
        event.preventDefault();

        const creditCard={
            cardNumber:this.state.cardNumber,
            cardName:this.state.cardName,
            cardType:this.state.cardType,
            expiryDate:this.state.expiryDate,
            cvv:this.state.cvv,
            bankName:this.state.bankName,
            cardLimit: this.state.cardLimit,
            usedLimit:0.0
        };
        if(this.validate()){
            this.props.userAction.addCreditCard(creditCard,this.state.userId);
        }
    }


    render(){
        const {isAddedCreditCard, creditCard} = this.props;
        if(isAddedCreditCard){
            return <Redirect to={`/home/${this.props.match.params.userId}/creditcards`}/> 
        }
        return(
            <div className="container whole-addcard">
                {
                    (isAddedCreditCard) && <div className="text-center alert alert-success"> Credit Card Added Succesfully</div>                
                }
                {
                    (isAddedCreditCard===false) && <div className="alert alert-danger text-center">Failed to Add {creditCard}</div>                
                }                   

                <div className="conatiner-fluid heading-addcard">
                    <h3 className="h3-add">Add Credit Cards</h3>
                </div>
                <div className="container-fluid body-addcard">
                    <div className="row">
                        <div className="col-lg-6">
                            <Card className="text-dark card">
                                <div className="row">
                                    <div className="col-sm-6 card-bank-name" onChange={this.handleInputChange}>{this.state.bankName}</div>
                                    <div className="col-sm-6 cardtitle">Credit Card</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 cardpadding"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 cardnumber" onChange={this.handleInputChange}>{this.state.cardNumber}</div>
                                </div>
                                <div className="row expiry">
                                <div className="col-sm-8 cardexpiry" onChange={this.handleInputChange}>valid: {this.state.expiryDate}</div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col-sm-7 cardname"></div>
                                    <div className="col-sm-5 cardtype" onChange={this.handleInputChange}>{this.state.cardName}</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 cardType-right" onChange={this.handleInputChange}>{this.state.cardType}</div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-lg-4">
                            <form onSubmit={this.addCreditCard}>
                                <div className="form-group text"><h4 className="h4-enter">Enter details of Card</h4></div>
                                <div className="form-group">
                                    <input type="text" name="cardNumber" className="form-control" placeholder="card Number xxxx xxxx xxxx xxxx" onChange={this.handleInputChange}/>
                                    <span className="validations text-danger">{this.state.errors.cardNumber}</span>
                                </div>
                                <div className="form-group">
                                    <select name="cardType" className="form-control" defaultValue="default" onChange={this.handleInputChange} >
                                        <option disabled value="default">Card Type</option>
                                        <option value="ELITE">ELITE</option>
                                        <option value="PRIME">PRIME</option>
                                        <option value="IRCTCPLATINUM">IRCTCPLATINUM</option>
                                        <option value="YATRA">YATRA</option>
                                        <option value="PREMIUM">PREMIUM</option>
                                        <option value="GOLD">GOLD</option>
                                    </select>
                                    <span className="validations text-danger">{this.state.errors.cardType}</span>
                                </div>
                                <div className="form-group">
                                    <select name="cardName" className="form-control" defaultValue="default" onChange={this.handleInputChange} >
                                        <option disabled value="default">Name of Card Type</option>
                                        <option value="AMERICAN">AMERICAN</option>
                                        <option value="VISA">VISA</option>
                                        <option value="MASTER">MASTER</option>
                                        <option value="MASTRO">MASTRO</option>
                                    </select>
                                    <span className="validations text-danger">{this.state.errors.cardName}</span>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="bankName" className="form-control" placeholder="Bank Name" onChange={this.handleInputChange}/>
                                    <span className="validations text-danger">{this.state.errors.bankName}</span>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <input type="date" name="expiryDate" className="form-control" placeholder="expiryDate" onChange={this.handleInputChange}/>
                                            <span className="validations text-danger">{this.state.errors.expiryDate}</span>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="password" name="cvv" className="form-control" placeholder="CVV" onChange={this.handleInputChange}/>
                                            <span className="validations text-danger">{this.state.errors.cvv}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="cardLimit" className="form-control" placeholder="card limit" onChange={this.handleInputChange}/>
                                    <span className="validations text-danger">{this.state.errors.cardLimit}</span>
                                </div>
                                <div className="form-group submit">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="submit" className="form-control btn-primary bttn" value="Add Card"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="reset" className="form-control clear-btn" value="clear"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
        creditCard: state.UserReducers.creditCard,
        isAddedCreditCard:state.UserReducers.isAddedCreditCard
    }
}  
    
function mapDispatchToProps (dispatch) {
    return {
        userAction : bindActionCreators(userAction,dispatch),
    }   
};

export default connect(mapStateToProps,mapDispatchToProps) (AddCreditCard);