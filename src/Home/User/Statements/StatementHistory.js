import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';
import './StatementStyles.css';

class StatementHistory extends Component{

    constructor(props) {
        super(props);

        this.state = {
            allStatementHistoryById:[]
        };

    }

    componentDidMount(){
        const {userAction,match}=this.props;
        userAction.fetchStatementsById(match.params.userId);
    }

    sortId=()=>{
        var sortedID;
        sortedID= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.cardNumber > b.cardNumber)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sortedID
        })
    }
    sortIdDes=()=>{
        var sortedIDDes;
        sortedIDDes= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.cardNumber > b.cardNumber)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedIDDes
        })
    }
    sortDate=()=>{
        var sortedDate;
        sortedDate= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.billDate > b.billDate)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sortedDate
        })
    }
    sortDateDes=()=>{
        var sortedDateDes;
        sortedDateDes= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.billDate > b.billDate)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedDateDes
        })
    }
    sortDueDate=()=>{
        var sortedDueDate;
        sortedDueDate= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.dueDate > b.dueDate)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sortedDueDate
        })
    }
    sortDueDateDes=()=>{
        var sortedDueDateDes;
        sortedDueDateDes= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.dueDate > b.dueDate)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedDueDateDes
        })
    }
    sortBillAmount=()=>{
        var sortedID;
        sortedID= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.billAmount > b.billAmount)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sortedID
        })
    }
    sortBillAmountDes= ()=>{
        var sortedIDDes;
        sortedIDDes= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.billAmount > b.billAmount)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedIDDes
        })
    }
    sortDueAmount=()=>{
        var sortedID;
        sortedID= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.dueAmount > b.dueAmount)?1:-1);
        })
        this.setState({
            allStatementHistoryById:sortedID
        })
    }
    sortDueAmountDes=()=>{
        var sortedIDDes;
        sortedIDDes= this.props.statementHistoryById.sort((a,b)=>{
            return ((a.dueAmount > b.dueAmount)?-1:1);
        })
        this.setState({
            allStatementHistoryById:sortedIDDes
        })
    }

    render(){
        const {isFetchedStatementsById,statementHistoryById}=this.props;
        if(isFetchedStatementsById===true){
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
                                    <th>Name</th>
                                    <th>Bill Date<Link class="bi bi-arrow-down no-asc" onClick={this.sortDate}></Link><Link class="bi bi-arrow-up no-desc" onClick={this.sortDateDes}></Link></th>
                                    <th>Due Date<Link class="bi bi-arrow-down dob-asc" onClick={this.sortDueDate}></Link><Link class="bi bi-arrow-up dob-desc" onClick={this.sortDueDateDes}></Link></th>
                                    <th>Bill Amount<Link class="bi bi-arrow-down city-asc" onClick={this.sortBillAmount}></Link><Link class="bi bi-arrow-up city-desc" onClick={this.sortBillAmountDes}></Link></th>
                                    <th>Due Amount<Link class="bi bi-arrow-down state-asc" onClick={this.sortDueAmount}></Link><Link class="bi bi-arrow-up state-desc" onClick={this.sortDueAmountDes}></Link></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    statementHistoryById.map((statement,index)=>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{statement.cardNumber}</td>
                                            <td>{statement.customerName}</td>
                                            <td>{statement.billDate}</td>
                                            <td>{statement.dueDate}</td>
                                            <td>{statement.billAmount}</td>
                                            <td>{statement.dueAmount}</td>
                                            <td><Link className="btn btn-primary" to={`/home/${this.props.match.params.userId}/statements/billed/${statement.cardNumber}/${statement.statementId}`}>View</Link></td>
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
        statementHistoryById : state.UserReducers.statementHistoryById,
        isFetchedStatementsById :state.UserReducers.isFetchedStatementsById
        
    }
}  
    
function mapDispatchToProps (dispatch) {
    return {
        userAction : bindActionCreators(userAction,dispatch),
    }   
};

export default connect(mapStateToProps,mapDispatchToProps)(StatementHistory);