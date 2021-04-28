import React, { Component } from 'react';
import './AccountsStyle.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';
import { Redirect } from 'react-router';

class AddAccount extends Component{

    constructor(){
        super();
        this.state={
            accountNumber:'',
            accountName:'',
            accountType:'',
            accountBalance:0.0,
            errors:{}
        }
    }
    
    handleInputChange = event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    validate = () =>{
        let accountNumber = this.state.accountNumber;
        let accountName = this.state.accountName;
        let accountType = this.state.accountType;
        let accountBalance = this.state.accountBalance;
        let errors = {};
        let isValid = true;

        if (!accountNumber) {
          isValid = false;
          errors["accountNumber"] = "Enter Account Number";
        }else if(!accountNumber.match("^[1-9][0-9]{8,17}$")){
            isValid = false;
          errors["accountNumber"] = "Enter valid Account Number of min 9 Length";
        }
    
        if (!accountName) {
          isValid = false;
          errors["accountName"] = "Enter Account Holder Name";
        }else if(!accountName.match("^[A-Z a-z]{6,30}$")){
            isValid = false;
            errors["accountName"] = "Enter Account Holder Name Correctly";
        }
      
        if (!accountType) {
            isValid = false;
            errors["accountType"] = "Choose Account Type";
          }
      
          if (!accountBalance) {
            isValid = false;
            errors["accountBalance"] = "Enter Account Balance";
          }else if(!accountBalance.match("^[0-9.]{1,14}$")){
              isValid = false;
              errors["accountBalance"] = "Enter valid Account Balance"
          }

        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    addAccount = event=>{
        
        event.preventDefault();
        const account={
            accountNumber:this.state.accountNumber,
            accountName:this.state.accountName,
            accountType:this.state.accountType,
            accountBalance:this.state.accountBalance
        };
        if(this.validate()){
            this.props.userAction.addAccount(this.props.match.params.userId,account);
        }
    }


    render(){
        if(this.props.isAddedAccount){
            return <Redirect to={`/home/${this.props.match.params.userId}/accounts`}/>
        }
        return(
            <div className="container top-padding">
                <div className="container add-account">
                    <div className="row">
                        <div className="col-sm-6 status">
                            {
                                (this.props.isAddedAccount===false) && <div className="alert alert-danger" role="alert">{this.props.account}</div>
                            }
                            {
                                (this.props.isAddedAccount===true) && <div className="alert alert-success " role="alert">Account {this.props.account.accountNumber} is Added Successfully</div>
                            }
                        </div>

                    </div>
                    <div className="row heading-add-account">
                        <h2 className="h2">Add Account</h2>
                    </div>
                    <hr className="bg-light"/>
                    <div className="row add-account-body">
                        <div className="col-sm-3 logo-account-add">
                            <i className="fa fa-bank fa-bank-account"></i>
                        </div>
                        <div className="col-sm-8 account-form">
                            <div className="row form-heading">
                                <h3 className="h3">Enter the Account Details</h3>
                            </div>
                            <div className="row form-content-account">
                                <div className="col-sm-12">
                                    <form onSubmit={this.addAccount}>
                                        <div className="row form-control-add-account">
                                            <div className="col-sm-4 form-label-add-account">Account Number</div>
                                            <div className="col-sm-1">:</div>
                                            <div className="col-sm-6 form-input-add-account">
                                                <input className="input-add-account" type="text" placeholder="Account Number" name="accountNumber" onChange={this.handleInputChange}/>
                                                <span className="text-danger">{this.state.errors.accountNumber}</span>
                                            </div>
                                        </div>
                                        <div className="row form-control-add-account">
                                            <div className="col-sm-4 form-label-add-account">Account Number</div>
                                            <div className="col-sm-1">:</div>
                                            <div className="col-sm-6 form-input-add-account">
                                                <input className="input-add-account" type="text" placeholder="Account Name" name="accountName" onChange={this.handleInputChange}/>
                                                <span className="text-danger">{this.state.errors.accountName}</span>
                                            </div>
                                        </div>
                                        <div className="row form-control-add-account">
                                            <div className="col-sm-4 form-label-add-account">Account Type</div>
                                            <div className="col-sm-1">:</div>
                                            <div className="col-sm-6 form-input-add-account">
                                                <select name="accountType" className="input-add-account" defaultValue="default" onChange={this.handleInputChange} >
                                                    <option disabled value="default">Account Type*</option>
                                                    <option value="SAVINGS" className="text-dark">SAVINGS</option>
                                                    <option value="CURRENT" className="text-dark">CURRENT</option>
                                                    <option value="JOINT" className="text-dark">JOINT</option>
                                                </select>
                                                <span className="text-danger">{this.state.errors.accountType}</span>
                                            </div>
                                        </div>
                                        <div className="row form-control-add-account">
                                            <div className="col-sm-4 form-label-add-account">Account Balance</div>
                                            <div className="col-sm-1">:</div>
                                            <div className="col-sm-6 form-input-add-account">
                                                <input className="input-add-account" type="text" placeholder="Account Balance" name="accountBalance" onChange={this.handleInputChange}/>
                                                <span className="text-danger">{this.state.errors.accountBalance}</span>
                                            </div>
                                        </div>
                                        <div className="row form-control-add-account">
                                            <div className="col-md-6"><input type="submit" className="form-control btn-primary" value="Add Account"/></div>
                                            <div className="col-md-6"><input type="reset" className="form-control btn-danger" value="Clear"/></div>
                                        </div>
                                    </form>
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
        account: state.UserReducers.account,
        isAddedAccount: state.UserReducers.isAddedAccount
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        userAction : bindActionCreators(userAction,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps) (AddAccount);