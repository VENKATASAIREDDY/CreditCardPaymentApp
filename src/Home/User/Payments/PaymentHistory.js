import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';

class PaymentHistory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            allPaymentHistoryOfUSer:[]
        };
    }
    componentDidMount(){
        const {userAction,match}=this.props;
        userAction.fetchPaymentsById(match.params.userId);
    }

    sortId=()=>{
        var sorted;
        sorted= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.cardNumber > b.cardNumber)?1:-1);
        })
        this.setState({
            allPaymentHistoryById:sorted
        })
    }
    sortIdDes=()=>{
        var sortedDes;
        sortedDes= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.cardNumber > b.cardNumber)?-1:1);
        })
        this.setState({
            allPaymentHistoryById:sortedDes
        })
    }
    sortDate=()=>{
        var sorted;
        sorted= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.paidDate > b.paidDate)?1:-1);
        })
        this.setState({
            allPaymentHistoryById:sorted
        })
    }
    sortDateDes=()=>{
        var sortedDes;
        sortedDes= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.paidDate > b.paidDate)?-1:1);
        })
        this.setState({
            allPaymentHistoryById:sortedDes
        })
    }
    sortTime=()=>{
        var sorted;
        sorted= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.paidTime > b.paidTime)?1:-1);
        })
        this.setState({
            allPaymentHistoryById:sorted
        })
    }
    sortTimeDes=()=>{
        var sortedDes;
        sortedDes= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.paidTime > b.paidTime)?-1:1);
        })
        this.setState({
            allPaymentHistoryById:sortedDes
        })
    }
    sortAmount=()=>{
        var sorted;
        sorted= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.amount> b.amount)?1:-1);
        })
        this.setState({
            allPaymentHistoryById:sorted
        })
    }
    sortAmountDes=()=>{
        var sortedDes;
        sortedDes= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.amount > b.amount)?-1:1);
        })
        this.setState({
            allPaymentHistoryById:sortedDes
        })
    }
    sortMethod=()=>{
        var sorted;
        sorted= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.method > b.method)?1:-1);
        })
        this.setState({
            allPaymentHistoryById:sorted
        })
    }
    sortMethodDes=()=>{
        var sortedDes;
        sortedDes= this.props.paymentHistoryById.sort((a,b)=>{
            return ((a.method > b.method)?-1:1);
        })
        this.setState({
            allPaymentHistoryById:sortedDes
        })
    }
    render(){
        const {isFetchedPaymentsById,paymentHistoryById}=this.props;
        if(isFetchedPaymentsById===true){
            return(
                <div className="container top-statements">
                    <div className="container heading-statements">
                        <h2 className="h2-statements">History of Payments For Bills</h2>
                    </div>
                    <div className="row">
                    <Table striped bordered hover size="xl" responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Card_Number<Link class="bi bi-arrow-down name-asc" onClick={this.sortId}></Link><Link class="bi bi-arrow-up name-desc" onClick={this.sortIdDes}></Link></th>
                                    <th>Amount<Link class="bi bi-arrow-down no-asc" onClick={this.sortAmount}></Link><Link class="bi bi-arrow-up no-desc" onClick={this.sortAmountDes}></Link></th>
                                    <th>method<Link class="bi bi-arrow-down dob-asc" onClick={this.sortMethod}></Link><Link class="bi bi-arrow-up dob-desc" onClick={this.sortMethodDes}></Link></th>
                                    <th>Paid Date<Link class="bi bi-arrow-down city-asc" onClick={this.sortDate}></Link><Link class="bi bi-arrow-up city-desc" onClick={this.sortDateDes}></Link></th>
                                    <th>Paid Time<Link class="bi bi-arrow-down city-asc" onClick={this.sortTime}></Link><Link class="bi bi-arrow-up city-desc" onClick={this.sortTimeDes}></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentHistoryById.map((payment,index)=>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{payment.cardNumber}</td>
                                            <td>{payment.amount}</td>
                                            <td>{payment.method}</td>
                                            <td>{payment.paidDate}</td>
                                            <td>{payment.paidTime}</td>                                            
                                        </tr>    
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }else {
        return(
            <div>
                still fetching ...
            </div>
        )}
    }
}
function mapStateToProps(state) {
    return { 
        paymentHistoryById : state.UserReducers.paymentHistoryById,
        isFetchedPaymentsById :state.UserReducers.isFetchedPaymentsById
        
    }
}  
    
function mapDispatchToProps (dispatch) {
    return {
        userAction : bindActionCreators(userAction,dispatch),
    }   
};

export default connect(mapStateToProps,mapDispatchToProps)(PaymentHistory);