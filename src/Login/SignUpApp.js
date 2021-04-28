import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as signUpAction from '../Store/Actions/SignUpActions';
import './LoginStyle.css';
import Fotter from './Fotter';

class SignUpApp extends Component{
    constructor(){
        super();
        this.state={
            userId:'',
            key:'',
            createPassword:'',
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
        let key = this.state.key;
        let createPassword = this.state.createPassword;
        let confirmPassword = this.state.confirmPassword;
        let errors = {};
        let isValid = true;

        if (!userId) {
            isValid = false;
            errors["userId"] = "Please enter your UserId.";
        } else if (!userId.match("^[A-z][A-z0-9]{5,20}$")) {
            isValid = false;
            errors["userId"] = "Enter Valid User Id of Length min 6"
        }

        if (!key) {
            isValid = false;
            errors["key"] = "Please enter your password.";
        } else if (!key.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$")) {
            isValid = false;
            errors["key"] = "Enter Valid key given by admin of length min 8"
        } 

        if (!createPassword) {
            isValid = false;
            errors["createPassword"] = "Please enter your password.";
        }else if(!createPassword.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$")){
            isValid = false;
            errors["createPassword"] = "Password should contain atleast 1 Capital, Lower, Numeric and symbol with min of 8 charecters"
        }

        if (!confirmPassword) {
            isValid = false;
            errors["confirmPassword"] = "Please enter your password.";
        } 

        if((createPassword!==confirmPassword)){
            isValid = false;
            errors["confirmPassword"] = "Password and confirm Password didn't match"
        }
      
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    doSignUp = event=>{
        event.preventDefault();

        const user={
            userId:this.state.userId,
            key:this.state.key,
            createPassword : this.state.createPassword,
            confirmPassword : this.state.confirmPassword
        };
        if(this.validate()){
            this.props.signUpAction.doSignUp(user);
        }
    }

    render(){
        if(this.props.isSignedUp){
            return <Redirect to={`/finishSignUp/${this.state.userId}`}/>
        }
        return(
            <div className="container-fluid whole">
                <div className="container-fluid header">
                    <h2 className="h2-signup">Welcome to Credit Card payment</h2>
                </div>
                <div className="container-fluid body">
                    <div className="container body-start">
                        <div className="row message">
                            <div className="col-md-4">
                                {
                                    (this.props.isSignedUp===false) && <div className="alert alert-danger alert-dismissible fade show" role="alert"><strong>Failed </strong>{this.props.status}</div>
                                }
                                {
                                    (this.props.isSignedUp===true) && <div className="alert alert-success alert-dismissible fade show" role="alert">Sign Up Successfully</div>
                                }
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-lg-4 bg-light login-body">
                                <h3 className="text h3">Sign Up</h3>
                                <form className="login-form" onSubmit={this.doSignUp}>
                                    <div className="form-group">
                                        <input type="text" name="userId" className="form-control" placeholder="UserId*" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.userId}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="key" className="form-control" placeholder="key*" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.key}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="createPassword" className="form-control" placeholder="create Password*" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.createPassword}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="confirmPassword" className="form-control" placeholder="confirm Password*" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.confirmPassword}</span>
                                    </div>
                                    <div className="form-group submit">
                                        <input type="submit" className="form-control btn-primary" value="Next"/>
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
                    <Fotter/>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        status: state.SignUpReducers.status,
        isSignedUp : state.SignUpReducers.isSignedUp
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        signUpAction : bindActionCreators(signUpAction,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignUpApp);