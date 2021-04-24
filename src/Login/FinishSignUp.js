import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as signUpAction from '../Store/Actions/SignUpActions';
import './LoginStyle.css';
// import './finishSignUpStyle.css';

class FinishSignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            email:'',
            contactNo:'',
            dob:'',
            doorNo:'',
            street:'',
            area:'',
            city:'',
            state:'',
            pincode:'',
            errors:{}
        }
    }
    
    handleInputChange = event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    validate = () =>{
        let userName = this.state.userName;
        let email = this.state.email;
        let contactNo = this.state.contactNo;
        let dob = this.state.dob;
        let doorNo = this.state.doorNo;
        let street = this.state.street;
        let area = this.state.area;
        let city = this.state.city;
        let state = this.state.state;
        let pincode=this.state.pincode;
        let errors = {};
        let isValid = true;

        if (!userName) {
          isValid = false;
          errors["userName"] = "Please enter your Name";
        }
    
        if (!email) {
          isValid = false;
          errors["email"] = "Please enter the email";
        }else if(!email.match("^[A-Za-z0-9]{3,}[@][a-z]{2,}[.][a-z.]{2,}[a-z]$")){
            isValid = false;
            errors["email"] = "enter valid email ex:abc@gamil.com"
        }
        
        if (!contactNo) {
            isValid = false;
            errors["contactNo"] = "Please enter your number";
        }else if(!contactNo.match("[6-9][0-9]{9}")){
            isValid = false;
            errors["contactNo"] = "enter valid number of length 10"
        }
    
        if (!dob) {
        isValid = false;
        errors["dob"] = "Please select the date of birth";
        } 

        if (!doorNo) {
        isValid = false;
        errors["doorNo"] = "Please enter your door number";
        }
    
        if (!street) {
        isValid = false;
        errors["street"] = "Please enter the street";
        } 

        if (!city) {
        isValid = false;
        errors["city"] = "Please enter your city";
        }
    
        if (!area) {
        isValid = false;
        errors["area"] = "Please enter your area";
        }

        if (!state) {
            isValid = false;
            errors["state"] = "Please enter your state";
        }
        
        if (!pincode) {
            isValid = false;
            errors["pincode"] = "Please enter your pincode";
        }else if(!pincode.match("[1-9][0-9]{5}")){
            isValid = false;
            errors["pincode"] = "enter valid pincode";
        }
      
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    finishSignUp = event=>{
        event.preventDefault();
        alert("entered")

        const user={
            userName:this.state.userName,
            email:this.state.email,
            contactNo:this.state.contactNo,
            dob:this.state.dob,
            doorNo:this.state.doorNo,
            street:this.state.street,
            area:this.state.area,
            city:this.state.city,
            state:this.state.state,
            pincode:this.state.pincode
        };
        if(this.validate()){
            this.props.signUpAction.finishSignUp(user,this.props.match.params.userId);
        }
    }

    render(){
        return(
            <div className="container-fluid whole">
                <div className="container-fluid header">
                    <h2>Welcome to Credit Card payment</h2>
                </div>
                <div className="container-fluid signUp-body">
                    <div className="row message">
                        <div className="col-md-4">
                            {
                                (this.props.isSignUpFinished===false) && <div class="alert alert-danger" role="alert"><strong>Failed </strong>{this.props.signUp}</div>
                            }
                            {
                                (this.props.isSignUpFinished===true) && <div class="alert alert-success" role="alert">Sign Up Successfully</div>
                            }
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 body-start bg-light">
                            <h2 className="h2">Fill the details to Complete SignUp</h2>
                            <form className="signUp-form" onSubmit={this.finishSignUp}>
                                <div className="row">
                                    <label htmlFor="firstName" className="col-lg-2 control-label">User Name* </label>
                                    <div className="col-lg-1">:</div>
                                    <div className="col-lg-6">
                                        <input type="text" id="userName" placeholder="Enter the Name" name="userName" onChange={this.handleInputChange} className="form-control signUp-form" autofocus/>
                                        <span className="validations text-danger">{this.state.errors.userName}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <label for="email" class="col-sm-2 control-label">Email* </label>
                                    <div className="col-lg-1">:</div>
                                    <div className="col-sm-6">
                                        <input type="email" id="email" placeholder="Email" className="form-control signUp-form" name= "email" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.email}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <label for="contactNumber" className="col-sm-2 control-label">Contact Number* </label>
                                    <div className="col-lg-1">:</div>
                                    <div className="col-sm-6">
                                        <input type="text" id="contactNumber" placeholder="Contact number" name="contactNo" className="form-control signUp-form" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.contactNo}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <label for="birthDate" className="col-sm-2 control-label">Date of Birth* </label>
                                    <div className="col-lg-1">:</div>
                                    <div className="col-sm-6">
                                        <input type="date" id="birthDate" className="form-control signUp-form" name="dob" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.dob}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <label for="address" className="col-sm-9 control-label">Address* </label>             
                                </div>
                                <hr className="mt-0"/>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <label for="doornumber" className="control-label">Door Number* </label>
                                        <input type="text" id="doornumber" className="form-control signUp-form" placeholder="Door No/ Flat No" name="doorNo" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.doorNo}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label for="Street" className="control-label">Street* </label>
                                        <input type="text" id="Street" className="form-control signUp-form" placeholder="Street Name" name="street" onChange={this.handleInputChange}/>
                                        <span className="validations text-danger">{this.state.errors.street}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label for="Area" className="control-label">Area* </label>
                                        <input type="text" id="Area" className="form-control signUp-form" placeholder="Area" name="area" onChange={this.handleInputChange} />
                                        <span className="validations text-danger">{this.state.errors.area}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <label for="City">City* </label>
                                        <input type="text" id="City" className="form-control signUp-form" placeholder="City Name" name="city" onChange={this.handleInputChange} />
                                        <span className="validations text-danger">{this.state.errors.city}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label for="State">State* </label>
                                        <input type="text" id="State" className="form-control signUp-form" placeholder="State" name="state" onChange={this.handleInputChange} />
                                        <span className="validations text-danger">{this.state.errors.state}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <label for="Pincode">Pincode* </label>
                                        <input type="text" id="Pincode" className="form-control signUp-form" placeholder="Pincode" name="pincode" onChange={this.handleInputChange} />
                                        <span className="validations text-danger">{this.state.errors.pincode}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-11">
                                        <span className="help-block">*Required fields</span>
                                    </div>
                                </div>
                                <div className="row bttn-signUp">
                                    <button type="submit" className="btn btn-primary signUp-bttn">Finish SignUp</button>
                                </div>
                            </form>
                            <div className="text-center">
                                <span className="text"> Click here to <Link to="/">signIn</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid fotter">
                    <h2>Fotter</h2>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        signUp: state.SignUpReducers.signUp,
        isSignUpFinished : state.SignUpReducers.isSignUpFinished
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        signUpAction : bindActionCreators(signUpAction,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(FinishSignUp);