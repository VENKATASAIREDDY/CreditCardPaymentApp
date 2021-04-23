import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../../Store/Actions/AdminActions';
import './CustomersStyle.css';
class AllCustomersNormal extends Component{
    constructor(props) {
        super(props);

        this.state = {
            allCustomers:[]
        };

    }
    componentDidMount() {
        this.props.adminActions.fetchAllCustomers();
    }

    sortId=()=>{
        var sortedID;
        sortedID= this.props.customers.sort((a,b)=>{
            return ((a.userId > b.userId)?1:-1);
        })
        this.setState({
            allCustomers:sortedID
        })
    }
    sortIdDes=()=>{
        var sortedIDDes;
        sortedIDDes= this.props.customers.sort((a,b)=>{
            return ((a.userId > b.userId)?-1:1);
        })
        this.setState({
            allCustomers:sortedIDDes
        })
    }
    sortName=()=>{
        var sortedName;
        sortedName= this.props.customers.sort((a,b)=>{
            return ((a.userName > b.userName)?1:-1);
        })
        this.setState({
            allCustomers:sortedName
        })
    }
    sortNameDes=()=>{
        var sortedNameDes;
        sortedNameDes= this.props.customers.sort((a,b)=>{
            return ((a.userName > b.userName)?-1:1);
        })
        this.setState({
            allCustomers:sortedNameDes
        })
    }
    sortEmail=()=>{
        var sortedEmail;
        sortedEmail= this.props.customers.sort((a,b)=>{
            return ((a.email > b.email)?1:-1);
        })
        this.setState({
            allCustomers:sortedEmail
        })
    }
    sortEmailDes=()=>{
        var sortedEmailDes;
        sortedEmailDes= this.props.customers.sort((a,b)=>{
            return ((a.email > b.email)?-1:1);
        })
        this.setState({
            allCustomers:sortedEmailDes
        })
    }
    sortNumber=()=>{
        var sortedNumber;
        sortedNumber= this.props.customers.sort((a,b)=>{
            return ((a.contactNo > b.contactNo)?1:-1);
        })
        this.setState({
            allCustomers:sortedNumber
        })
    }
    sortNumberDes=()=>{
        var sortedNumberDes;
        sortedNumberDes= this.props.customers.sort((a,b)=>{
            return ((a.contactNo > b.contactNo)?-1:1);
        })
        this.setState({
            allCustomers:sortedNumberDes
        })
    }
    sortDob=()=>{
        var sortedDob;
        sortedDob= this.props.customers.sort((a,b)=>{
            return ((a.dob > b.dob)?1:-1);
        })
        this.setState({
            allCustomers:sortedDob
        })
    }
    sortDobDes=()=>{
        var sortedDobDes;
        sortedDobDes= this.props.customers.sort((a,b)=>{
            return ((a.dob > b.dob)?-1:1);
        })
        this.setState({
            allCustomers:sortedDobDes
        })
    }
    sortState=()=>{
        var sortedState;
        sortedState= this.props.customers.sort((a,b)=>{
            return ((a.address.state > b.address.state)?1:-1);
        })
        this.setState({
            allCustomers:sortedState
        })
    }
    sortStateDes=()=>{
        var sortedStateDes;
        sortedStateDes= this.props.customers.sort((a,b)=>{
            return ((a.address.state > b.address.state)?-1:1);
        })
        this.setState({
            allCustomers:sortedStateDes
        })
    }
    sortCity=()=>{
        var sortedCity;
        sortedCity= this.props.customers.sort((a,b)=>{
            return ((a.address.city > b.address.city)?1:-1);
        })
        this.setState({
            allCustomers:sortedCity
        })
    }
    sortCityDes=()=>{
        var sortedCityDes;
        sortedCityDes= this.props.customers.sort((a,b)=>{
            return ((a.address.city > b.address.city)?-1:1);
        })
        this.setState({
            allCustomers:sortedCityDes
        })
    }
    sortPincode=()=>{
        var sortedPincode;
        sortedPincode= this.props.customers.sort((a,b)=>{
            return ((a.address.pincode > b.address.pincode)?1:-1);
        })
        this.setState({
            allCustomers:sortedPincode
        })
    }
    sortPincodeDes=()=>{
        var sortedPincodeDes;
        sortedPincodeDes= this.props.customers.sort((a,b)=>{
            return ((a.address.pincode > b.address.pincode)?-1:1);
        })
        this.setState({
            allCustomers:sortedPincodeDes
        })
    }


    render(){
        const {customers}=this.props;
        if(customers!==undefined){
            return(
                <div className="container-fluid main-customers">
                    <div className="container-fluid main-customers-start text-light">
                        <Table striped bordered hover size="xl" responsive>
                            <thead>
                                <tr>
                                    <th rowSpan="2">User ID<Link class="bi bi-arrow-down id-asc" onClick={this.sortId}></Link><Link class="bi bi-arrow-up id-desc" onClick={this.sortIdDes}></Link></th>
                                    <th rowSpan="2">Name<Link class="bi bi-arrow-down name-asc" onClick={this.sortName}></Link><Link class="bi bi-arrow-up name-desc" onClick={this.sortNameDes}></Link></th>
                                    <th rowSpan="2">Email<Link class="bi bi-arrow-down email-asc" onClick={this.sortEmail}></Link><Link class="bi bi-arrow-up email-desc" onClick={this.sortEmailDes}></Link></th>
                                    <th rowSpan="2">Contact Number<Link class="bi bi-arrow-down no-asc" onClick={this.sortNumber}></Link><Link class="bi bi-arrow-up no-desc" onClick={this.sortNumberDes}></Link></th>
                                    <th rowSpan="2">Date_of_Birth<Link class="bi bi-arrow-down dob-asc" onClick={this.sortDob}></Link><Link class="bi bi-arrow-up dob-desc" onClick={this.sortDobDes}></Link></th>
                                    <th colSpan="6">Address</th>
                                </tr>
                                <tr>
                                    <th>Door Number</th>
                                    <th>Street</th>
                                    <th>Area</th>
                                    <th>City<Link class="bi bi-arrow-down city-asc" onClick={this.sortCity}></Link><Link class="bi bi-arrow-up city-desc" onClick={this.sortCityDes}></Link></th>
                                    <th>State<Link class="bi bi-arrow-down state-asc" onClick={this.sortState}></Link><Link class="bi bi-arrow-up state-desc" onClick={this.sortStateDes}></Link></th>
                                    <th>Pincode<Link class="bi bi-arrow-down pin-asc" onClick={this.sortPincode}></Link><Link class="bi bi-arrow-up pin-desc" onClick={this.sortPincodeDes}></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map((customer)=>
                                        <tr>
                                            <td>{customer.userId}</td>
                                            <td>{customer.userName}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.contactNo}</td>
                                            <td>{customer.dob}</td>
                                             <td>{customer.address.doorNo}</td>
                                            <td>{customer.address.street}</td>
                                            <td>{customer.address.area}</td>
                                            <td>{customer.address.city}</td>
                                            <td>{customer.address.state}</td>
                                            <td>{customer.address.pincode}</td>
                                        </tr>    
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>                
                </div>
            )
        }else{
            return(
                <div>Loading...</div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        customers: state.AdminReducers.customers
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        adminActions : bindActionCreators(adminActions,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(AllCustomersNormal);