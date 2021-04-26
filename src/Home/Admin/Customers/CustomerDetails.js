import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Details/DetailsStyle.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminAction from '../../../Store/Actions/AdminActions';
import { Spinner } from 'react-bootstrap';


class CustomerDetails extends Component{

    componentDidMount(){
        const customerId=this.props.match.params.customerId;
        this.props.adminAction.fetchPersonalDetails(customerId);
    }

    render(){
        const {userId,customerId}=this.props.match.params;
        const {isFetchedPersonalDetails,personalDetails}=this.props;
        if(isFetchedPersonalDetails){
        return(
            <div className="container">
                <div className="container bg-dark text-light personal-details-container shadow-lg">
                    <div className="row edit-last">
                        <div className="col-sm-10 text-center"><h3 className="h3">Customer Details</h3></div>
                        <div className="col-sm-2">
                            <h3 className="edit-last"><Link to={`/admin/home/${userId}/customerDetails/update/${customerId}`}><i class="bi bi-pencil-square"></i></Link></h3>
                        </div>
                    </div>
                    <div className="row blank"></div>
                    <div className="row personal-details">
                        <div className="col-sm-3 pic">
                            <i class="bi bi-person-square"></i>
                        </div>
                        <div className="col-sm-8 text-details">
                            <div className="row">
                                <h2 className="h2-personal-details person-name">{personalDetails.userName}</h2>
                            </div>
                            <div className="row details-control">
                                <div className="col-sm-1"></div><div className="col-sm-4 span-personal-details"><i class="bi bi-envelope"> Email</i></div><div className="col-sm-6 span-personal-details">{personalDetails.email}</div><span className="span-personal-details"></span>
                            </div>
                            <div className="row details-control">
                                <div className="col-sm-1"></div><div className="col-sm-4 span-personal-details"><i class="bi bi-telephone"> Contact </i></div><div className="col-sm-6 span-personal-details">{personalDetails.contactNo}</div><span className="span-personal-details"></span>
                            </div>
                            <div className="row details-control">
                            <div className="col-sm-1"></div><div className="col-sm-4 span-personal-details"><i class="bi bi-calendar4-event"> Date of Birth</i></div><div className="col-sm-5 span-personal-details">{personalDetails.dob}</div><span className="span-personal-details"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row person-address">
                        <div className="col-sm-3 pic address-pic">
                            <i class="bi bi-geo-alt"></i>
                        </div>
                        <div className="col-sm-8 address-text">
                            <div className="row details-control">
                            <div className="col-sm-1"></div><div className="col-sm-4 span-personal-details">Address</div><div className="col-sm-6 span-personal-details">{personalDetails.address.doorNo}, {personalDetails.address.street}, {personalDetails.address.area}</div><span className="span-personal-details"></span>
                            </div>
                            <div className="row details-control">
                                <div className="col-sm-1"></div><div className="col-sm-4 span-personal-details">City</div><div className="col-sm-6 span-personal-details">{personalDetails.address.city}</div><span className="span-personal-details"></span>
                            </div>
                            <div className="row details-control">
                                <div className="col-sm-1"></div><div className="col-sm-4 span-personal-details"> State</div><div className="col-sm-6 span-personal-details">{personalDetails.address.state}</div><span className="span-personal-details"></span>
                            </div>
                            <div className="row details-control">
                            <div className="col-sm-1"></div><div className="col-sm-4 span-personal-details"> Pincode</div><div className="col-sm-5 span-personal-details">{personalDetails.address.pincode}</div><span className="span-personal-details"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div><Spinner/></div>
        )
    }
}
}
function mapStateToProps(state) {
    return { 
        personalDetails: state.AdminReducers.personalDetails,
        isFetchedPersonalDetails:state.AdminReducers.isFetchedPersonalDetails
    }
}  
    
function mapDispatchToProps (dispatch) {
    return {
        adminAction : bindActionCreators(adminAction,dispatch),
    }   
};

export default connect(mapStateToProps,mapDispatchToProps)(CustomerDetails);