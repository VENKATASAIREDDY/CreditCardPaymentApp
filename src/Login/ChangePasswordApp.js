import { Alert } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as changePasswordAction from '../Store/Actions/ChangePasswordActions';
import './LoginStyle.css';

class ChangePasswordApp extends Component{
    constructor(){
        super();
        this.state={
            userId:'',
            currentPassword:'',
            newPassword:'',
            confirmPassword:'',
            errors:{}
        }
    }
    
    handleInputChange = event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    validate = () =>{
        let userId = this.state.userId;
        let currentPassword = this.state.currentPassword;
        let newPassword = this.state.newPassword;
        let confirmPassword = this.state.confirmPassword;
        let errors = {};
        let isValid = true;

        if (!userId) {
          isValid = false;
          errors["userId"] = "Please enter your UserId.";
        }
    
        if (!currentPassword) {
          isValid = false;
          errors["currentPassword"] = "Please enter your password.";
        }   

        if (!newPassword) {
            isValid = false;
            errors["newPassword"] = "Please enter your password.";
        }else if(!newPassword.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$")){
            isValid = false;
            errors["newPassword"] = "Password should contain atleast 1 Capital, Lower, Numeric and symbol with min of 8 charecters"
        }

        if (!confirmPassword) {
            isValid = false;
            errors["confirmPassword"] = "Please enter your password.";
        } 

        if((newPassword!=confirmPassword)){
            isValid = false;
            errors["confirmPassword"] = "Password and confirm Password didn't match"
        }
      
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    changePassword = event=>{
        event.preventDefault();

        const user={
            userId:this.state.userId,
            currentPassword:this.state.currentPassword,
            newPassword : this.state.newPassword,
            confirmPassword : this.state.confirmPassword
        };
        if(this.validate()){
            this.props.changePasswordAction.changePassword(user);
        }
    }

    render(){
        return(
            <div className="container-fluid whole">
                <div className="container-fluid header">
                    <h2 className="h2-changepassword">Welcome to Credit Card payment</h2>
                </div>
                <div className="container-fluid body">
                    <div className="container body-start">
                        <div className="row message">
                            <div className="col-md-4">
                                {
                                    (this.props.isChanged===false) && <div class="alert alert-danger" role="alert">Change Password Failed</div>
                                }
                                {
                                    (this.props.isChanged===true) && <div class="alert alert-success" role="alert">Password Changed Successfully</div>
                                }
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-lg-4 bg-light login-body">
                                <h3 className="text h3">Change Password </h3>
                                <form className="login-form" onSubmit={this.changePassword}>
                                    <div className="form-group">
                                        <input type="text" name="userId" className="form-control" placeholder="UserId*" onChange={this.handleInputChange} required={this.state.errors.userId}/>
                                        <span className="validations text-danger">{this.state.errors.userId}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="currentPassword" className="form-control" placeholder="current Password*" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.currentPassword}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="newPassword" className="form-control" placeholder="create Password*" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.newPassword}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="confirmPassword" className="form-control" placeholder="confirm Password*" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.confirmPassword}</span>
                                    </div>
                                    <div className="form-group submit">
                                        <input type="submit" className="form-control btn-primary" value="Change Password"/>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <p className="mb-0"> Click here to <Link to="/">signIn</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid fotter">
                    <h2 className="h2-changepassword">Fotter</h2>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        status: state.ChangePasswordReducers.status,
        isChanged : state.ChangePasswordReducers.isChanged
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        changePasswordAction : bindActionCreators(changePasswordAction,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(ChangePasswordApp);