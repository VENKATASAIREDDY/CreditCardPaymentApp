import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminAction from '../../../Store/Actions/AdminActions';
import { Link, Redirect } from 'react-router-dom';

class UpdateCustomerDetails extends Component {
    constructor(props) {
        super(props);

        this.userId = React.createRef();
        this.userName = React.createRef();
        this.email = React.createRef();
        this.contactNo = React.createRef();
        this.dob = React.createRef();
        this.doorNo = React.createRef();
        this.street = React.createRef();
        this.area = React.createRef();
        this.city = React.createRef();
        this.state = React.createRef();
        this.pincode = React.createRef();
        this.state = {
            errors:{}
        }

        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount() {
        const { adminAction, match } = this.props;
        adminAction.fetchPersonalDetails(match.params.customerId);
    }

    validate = () =>{
        let userName = this.userName.current.value;
        let email = this.email.current.value;
        let contactNo = this.contactNo.current.value;
        let dob = this.dob.current.value;
        let doorNo = this.doorNo.current.value;
        let street = this.street.current.value;
        let area = this.area.current.value;
        let city = this.city.current.value;
        let state = this.state.current.value;
        let pincode=this.pincode.current.value;
        let errors = {};
        let isValid = true;

        if (!userName) {
          isValid = false;
          errors["userName"] = "Please enter your Name";
        }else if(!userName.match("^[A-z][A-Z a-z]{5,50}$")){
            isValid = false;
            errors["userName"] = "Please enter correct Name";
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
        }else if(new Date(dob)>new Date()){
            isValid = false;
            errors["dob"] = "Please select valid date of birth";
        }

        if (!doorNo) {
        isValid = false;
        errors["doorNo"] = "Please enter your door number";
        }else if(!doorNo.match("^[A-z0-9][A-z 0-9./-]{1,10}$")){
            isValid=false;
            errors["doorNo"] = "enter Valid Door Number"
        }
    
        if (!street) {
        isValid = false;
        errors["street"] = "Please enter the street";
        }else if(!street.match("^[A-z][a-z , A-Z]{2,30}$")){
            isValid=false;
            errors["street"] = "Enter valid Street Name"
        }

        if (!city) {
        isValid = false;
        errors["city"] = "Please enter your city";
        }else if(!city.match("^[A-z][a-z A-Z]{1,30}$")){
            isValid=false;
            errors["city"] = "Enter valid City"
        }
    
        if (!area) {
        isValid = false;
        errors["area"] = "Please enter your area";
        }else if(!area.match("^[A-z][a-z , A-Z]{2,30}$")){
            isValid=false;
            errors["area"] = "Enter valid area"
        }

        if (!state) {
            isValid = false;
            errors["state"] = "Please enter your state";
        }else if(!state.match("^[A-z][a-z . A-Z]{1,30}$")){
            isValid=false;
            errors["state"] = "Enter valid State"
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
        })
    
        return isValid;
    }

    updateCustomer(e) {
        e.preventDefault();

        let payload = {
            userId: this.props.match.params.customerId,
            userName: this.userName.current.value,
            email: this.email.current.value,
            contactNo: this.contactNo.current.value,
            dob: this.dob.current.value,
            address: {
                doorNo: this.doorNo.current.value,
                street: this.street.current.value,
                area: this.area.current.value,
                city: this.city.current.value,
                state: this.state.current.value,
                pincode: this.pincode.current.value
            }
        }

        const { adminAction } = this.props;
        if(this.validate()){
            adminAction.updatePersonalDetails(this.props.match.params.customerId, payload);
        }
        

    }

    render() {
        const { isUpdatedPersonalDetails, personalDetails } = this.props;
        if(isUpdatedPersonalDetails){
            return(<Redirect to={`/admin/home/${this.props.match.params.userId}/CustomerDetails/${personalDetails.userId}`}/>)
        }
        return (
            <div className="container-fluid">
                {
                    personalDetails !== undefined ?
                        <form onSubmit={this.updateCustomer}>
                            <div className="container">
                                <div className="container bg-dark text-light personal-details-container shadow-lg">
                                    <div className="row blank">
                                    {
                                        (isUpdatedPersonalDetails===false) && <div className="alert alert-danger" role="alert"><strong>Failed </strong>{isUpdatedPersonalDetails}</div>
                                    }
                                    {
                                        (isUpdatedPersonalDetails===true) && <div> <div className="alert alert-success" role="alert"> Successfully Changed the Details </div></div>
                                    }
                                    </div>
                                    <div className="row personal-details">
                                        <div className="col-sm-3 pic">
                                            <i className="bi bi-person-square"></i>
                                        </div>
                                        <div className="col-sm-8 text-details">
                                            <div className="row">
                                                <h2 className="h2-personal-details person-name-update">
                                                    <input className="input-personal-details" defaultValue={personalDetails.userName} placeholder="Enter the Name" type="text" ref={this.userName} />
                                                </h2>
                                                <span className="text-danger h2-personal-details person-name-update">{this.state.errors.userName}</span>
                                            </div>
                                            <div className="row details-control">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-4 span-personal-details">
                                                    <i className="bi bi-envelope"> Email</i>
                                                </div>
                                                <div className="col-sm-6 span-personal-details">
                                                    <input className="input-personal-details" placeholder="Email" defaultValue={personalDetails.email} type="text" ref={this.email} />
                                                    <span className="span-personal-details text-danger">{this.state.errors.email}</span>
                                                </div>
                                            </div>
                                            <div className="row details-control">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-4 span-personal-details">
                                                    <i className="bi bi-telephone"> Contact </i>
                                                </div>
                                                <div className="col-sm-6 span-personal-details">
                                                    <input className="input-personal-details" placeholder="Contact Number" defaultValue={personalDetails.contactNo} type="text" ref={this.contactNo} />
                                                    <span className="span-personal-details text-danger">{this.state.errors.contactNo}</span>
                                                </div>
                                            </div>
                                            <div className="row details-control">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-4 span-personal-details">
                                                    <i className="bi bi-calendar4-event"> Date of Birth</i>
                                                </div>
                                                <div className="col-sm-5 span-personal-details">
                                                    <input className="input-personal-details" defaultValue={personalDetails.dob} type="date" ref={this.dob} />
                                                    <span className="span-personal-details text-danger">{this.state.errors.dob}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row person-address-update">
                                        <div className="col-sm-3 pic address-pic">
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                        <div className="col-sm-8 address-text">
                                            <div className="row details-control">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-4 span-personal-details">Address</div>
                                                <div className="col-sm-6 span-personal-details">
                                                    <input className="input-personal-details" placeholder="Door No/ Flat No" defaultValue={personalDetails.address.doorNo} type="text" ref={this.doorNo} />
                                                    <span className="span-personal-details text-danger">{this.state.errors.doorNo}</span>
                                                    <input className="input-personal-details" placeholder="Street Name" defaultValue={personalDetails.address.street} type="text" ref={this.street} />
                                                    <span className="span-personal-details text-danger">{this.state.errors.street}</span>
                                                    <input className="input-personal-details" placeholder="Area" defaultValue={personalDetails.address.area} type="text" ref={this.area} />
                                                    <span className="span-personal-details text-danger">{this.state.errors.area}</span>
                                                </div>
                                            </div>
                                            <div className="row details-control">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-4 span-personal-details">City</div>
                                                <div className="col-sm-6 span-personal-details">
                                                    <input className="input-personal-details" placeholder="City" defaultValue={personalDetails.address.city} type="text" ref={this.city} />
                                                    <span className="span-personal-details text-danger">{this.state.errors.city}</span>
                                                </div>
                                            </div>
                                            <div className="row details-control">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-4 span-personal-details"> State</div>
                                                <div className="col-sm-6 span-personal-details">
                                                    <input className="input-personal-details" placeholder="State" defaultValue={personalDetails.address.state} type="text" ref={this.state} />
                                                    <span className="span-personal-details text-danger">{this.state.errors.state}</span>
                                                </div>
                                            </div>
                                            <div className="row details-control">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-4 span-personal-details"> Pincode</div>
                                                <div className="col-sm-5 span-personal-details">
                                                    <input className="input-personal-details" placeholder="Pincode" defaultValue={personalDetails.address.pincode} type="text" ref={this.pincode} />
                                                    <span className="text-danger">{this.state.errors.pincode}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                            <div className="col-sm-3 buttons-update"> <input type="submit" value="update" className="btn btn-primary"/></div>
                                            <div className="col-sm-3 buttons-update"><Link className="btn btn-danger" to={`/admin/home/${this.props.match.params.userId}/CustomerDetails/${personalDetails.userId}`}>Cancel</Link></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        :
                        <h2>Loading....</h2>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        personalDetails: state.AdminReducers.personalDetails,
        isFetchedPersonalDetails: state.AdminReducers.isFetchedPersonalDetails,
        personalDetailsUpdate: state.AdminReducers.personalDetailsUpdate,
        isUpdatedPersonalDetails: state.AdminReducers.isUpdatedPersonalDetails

    }
}

function mapDispatchToProps(dispatch) {
    return {
        adminAction: bindActionCreators(adminAction, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCustomerDetails);