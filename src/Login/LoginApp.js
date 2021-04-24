import { Alert } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as loginAction from '../Store/Actions/LoginActions';
import './LoginStyle.css';

class LoginApp extends Component{
    constructor(){
        super();
        this.state={
            userId:'',
            password:'',
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
        let password = this.state.password;
        let errors = {};
        let isValid = true;

        if (!userId) {
          isValid = false;
          errors["userId"] = "Please enter your UserId.";
        }
    
        if (!password) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }   
      
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    doLogin = event=>{
        event.preventDefault();

        const user={
            userId:this.state.userId,
            password:this.state.password
        };
        if(this.validate()){
            
            this.props.loginAction.doLogin(user);
        }
    }

    render(){
        const {login, isAuthUser} = this.props;
        if (login.role !== undefined && isAuthUser) {
            if (login.role === "ADMIN" && isAuthUser) {
                return <Redirect to={`/admin/home/${this.state.userId}`} />
            }
            else if (login.role === "USER" && isAuthUser) {
                return <Redirect to={`/home/${this.state.userId}`} />
            }
            else {
                return <Redirect to="/"/>
            }
        }
        return(
            <div className="container-fluid whole">
                <div className="container-fluid header">
                    <h2 className="h2-login">Welcome to Credit Card payment</h2>
                </div>
                <div className="container-fluid body">
                    <div className="container body-start">
                        <div className="row message">
                            <div className="col-md-4">
                                {
                                    (this.props.isAuthUser===false) && <div class="alert alert-danger" role="alert">Login Failed {this.props.failMessage}</div>
                                }
                                {
                                    (this.props.isAuthUser===true) && <div class="alert alert-success" role="alert">Login Successful</div>
                                }
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-lg-4 bg-light login-body">
                                <h3 className="text h3">Sign In</h3>
                                <form className="login-form" onSubmit={this.doLogin}>
                                    <div className="form-group">
                                        <input type="text" name="userId" className="form-control" placeholder="UserId*" onChange={this.handleInputChange} required={this.state.errors.userId}/>
                                        <span className="text-danger">{this.state.errors.userId}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Password*" onChange={this.handleInputChange}/>
                                        <span className="text-danger">{this.state.errors.password}</span>
                                    </div>
                                    <div className="form-group submit">
                                        <input type="submit" className="form-control btn-primary" value="Login"/>
                                    </div>
                                </form>
                                <div className="d-md-flex">
                                    <div className="w-50 text-left rememberme">
                                        <input type="checkbox"/> Remember Me
                                    </div>
                                    <div className="w-50 text-right changepassword">
                                        <Link to="/changePassword">Change Password</Link>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="mb-0"> First time signIn then <Link to="/signUp">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid fotter">
                    <h2 className="h2-login">Fotter</h2>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        login: state.LoginReducers.login,
        isAuthUser : state.LoginReducers.isAuthUser,
        failMessage:state.LoginReducers.failMessage
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        loginAction : bindActionCreators(loginAction,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginApp);