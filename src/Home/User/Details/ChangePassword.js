import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as changePasswordAction from '../../../Store/Actions/ChangePasswordActions';
import './DetailsStyle.css';

class ChangePassword extends Component{
    constructor(){
        super();
        this.state={
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
        let currentPassword = this.state.currentPassword;
        let newPassword = this.state.newPassword;
        let confirmPassword = this.state.confirmPassword;
        let errors = {};
        let isValid = true;
 
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

        if((newPassword!==confirmPassword)){
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
            userId:this.props.match.params.userId,
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
                <div className="container-fluid body body-change">
                    <div className="container body-start body-start-change">
                        <div className="row message">
                            <div className="col-md-4">
                                {
                                    (this.props.isChanged===false) && <div className="alert alert-danger" role="alert">Change Password Failed</div>
                                }
                                {
                                    (this.props.isChanged===true) && <div className="alert alert-success" role="alert">Password Changed Successfully</div>
                                }
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-lg-4 bg-light login-body">
                                <h3 className="text h3">Change Password </h3>
                                <form className="login-form" onSubmit={this.changePassword}>
                                    <div className="form-group">
                                        <input type="text" name="userId" className="form-control" placeholder="UserId*" defaultValue={this.props.match.params.userId} disabled/>
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
                                    <div className="form-group cancel">
                                        <Link className="form-control btn btn-danger" to={`/home/${this.props.match.params.userId}`}>Cancel</Link>
                                    </div>
                                </form>
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
        status: state.ChangePasswordReducers.status,
        isChanged : state.ChangePasswordReducers.isChanged
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        changePasswordAction : bindActionCreators(changePasswordAction,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword);