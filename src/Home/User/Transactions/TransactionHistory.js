import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';

class TransactionHistory extends Component{
    constructor(props) {
        super(props);

        this.state = {
            allTransactionHistoryById:[]
        };

    }

    componentDidMount(){
        const {userAction,match}=this.props;
        userAction.fetchTransactionsById(match.params.userId);
    }

    sortId=()=>{
        var sorted;
        sorted= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.cardNumber > b.cardNumber)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sorted
        })
    }
    sortIdDes=()=>{
        var sortedDes;
        sortedDes= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.cardNumber > b.cardNumber)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedDes
        })
    }
    sortDate=()=>{
        var sorted;
        sorted= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.transactionDate > b.transactionDate)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sorted
        })
    }
    sortDateDes=()=>{
        var sortedDes;
        sortedDes= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.transactionDate > b.transactionDate)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedDes
        })
    }
    sortTime=()=>{
        var sorted;
        sorted= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.transactionTime > b.transactionTime)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sorted
        })
    }
    sortTimeDes=()=>{
        var sortedDes;
        sortedDes= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.transactionTime > b.transactionTime)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedDes
        })
    }
    sortAmount=()=>{
        var sorted;
        sorted= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.amount> b.amount)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sorted
        })
    }
    sortAmountDes=()=>{
        var sortedDes;
        sortedDes= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.amount > b.amount)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedDes
        })
    }
    sortStatus=()=>{
        var sorted;
        sorted= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.status > b.status)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sorted
        })
    }
    sortStatusDes=()=>{
        var sortedDes;
        sortedDes= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.status > b.status)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedDes
        })
    }
    sortPerpose=()=>{
        var sorted;
        sorted= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.description > b.description)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sorted
        })
    }
    sortPerposeDes=()=>{
        var sortedDes;
        sortedDes= this.props.transactionHistoryById.sort((a,b)=>{
            return ((a.description > b.description)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedDes
        })
    }
    render(){
    const {isFetchedTransactionsById,transactionHistoryById}=this.props;
        if(isFetchedTransactionsById===true){
            return(
                <div className="container top-statements">
                    <div className="container heading-statements">
                        <h2 className="h2-statements">History of Statements</h2>
                    </div>
                    <div className="row">
                    <Table striped bordered hover size="xl" responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Card_Number<Link class="bi bi-arrow-down name-asc" onClick={this.sortId}></Link><Link class="bi bi-arrow-up name-desc" onClick={this.sortIdDes}></Link></th>
                                    <th>Transaction Date<Link class="bi bi-arrow-down city-asc" onClick={this.sortDate}></Link><Link class="bi bi-arrow-up city-desc" onClick={this.sortDateDes}></Link></th>
                                    <th>Transaction Time<Link class="bi bi-arrow-down city-asc" onClick={this.sortTime}></Link><Link class="bi bi-arrow-up city-desc" onClick={this.sortTimeDes}></Link></th>
                                    <th>Amount<Link class="bi bi-arrow-down no-asc" onClick={this.sortAmount}></Link><Link class="bi bi-arrow-up no-desc" onClick={this.sortAmountDes}></Link></th>
                                    <th>Status<Link class="bi bi-arrow-down dob-asc" onClick={this.sortStatus}></Link><Link class="bi bi-arrow-up dob-desc" onClick={this.sortStatusDes}></Link></th>
                                    <th>description<Link class="bi bi-arrow-down dob-asc" onClick={this.sortPerpose}></Link><Link class="bi bi-arrow-up dob-desc" onClick={this.sortPerposeDes}></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transactionHistoryById.map((transaction,index)=>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{transaction.cardNumber}</td>
                                            <td>{transaction.transactionDate}</td>
                                            <td>{transaction.transactionTime}</td>
                                            <td>{transaction.amount}</td>
                                            <td>{transaction.status}</td>
                                            <td>{transaction.description}</td>
                                            
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
        transactionHistoryById : state.UserReducers.transactionHistoryById,
        isFetchedTransactionsById :state.UserReducers.isFetchedTransactionsById
        
    }
}  
    
function mapDispatchToProps (dispatch) {
    return {
        userAction : bindActionCreators(userAction,dispatch),
    }   
};

export default connect(mapStateToProps,mapDispatchToProps)(TransactionHistory);