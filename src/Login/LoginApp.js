import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as loginAction from '../Store/Actions/LoginActions';
import Fotter from './Fotter';
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
        // var val= [event.target.name];
        
        // let check=this.state[val];
        

        // if(!check){
        //     isValid=false;
        //     errors[val]="Please enter details"
        // }else if(!check.match("^[A-z][A-z0-9]{5,10}$")){
        //     isValid=false;
        //     errors[val]="it should be of length 6 min"
        // }else{
        //     errors[val]=""
        // }
        let errors = {};
        let isValid = true;
        let userId= this.state.userId;
        let password = this.state.password;
        
        if (!userId) {
          isValid = false;
          errors["userId"] = "Please enter your UserId.";
        }else if(!userId.match("^[A-z][A-z0-9]{5,20}$")){
            isValid = false;
            errors["userId"] = "Enter Valid User Id of Length min 6"
        }
    
        if (!password) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }else if(!password.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$")){
            isValid = false;
            errors["password"] = "Enter Valid password of length min 8"
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
        if(localStorage.getItem("currentUser")){
            const {userId,role}=JSON.parse(localStorage.getItem("currentUser"));
            if(role==="ADMIN"){
                <Redirect to={`/admin/home/${userId}`}/>
            }
            if(role==="USER"){
                return <Redirect to={`/home/${userId}`}/>            
            }
        }
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
                                    (this.props.isAuthUser===false) && <div className="alert alert-danger" role="alert">Login Failed {this.props.failMessage}</div>
                                }
                                {
                                    (this.props.isAuthUser===true) && <div className="alert alert-success" role="alert">Login Successful</div>
                                }
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-lg-4 bg-light login-body">
                                <h3 className="text h3">Sign In</h3>
                                <form className="login-form" onSubmit={this.doLogin}>
                                    <div className="form-group">
                                        <input type="text" name="userId" className="form-control" placeholder="UserId*" onChange={this.handleInputChange} />
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
                <div className="container-fluid fotter noPadding">
                    {/* <h2 className="h2-login">Fotter</h2> */}
                    <Fotter/>
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