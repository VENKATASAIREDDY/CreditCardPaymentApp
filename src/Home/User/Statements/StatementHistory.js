import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';
import './StatementStyles.css';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class StatementHistory extends Component{

    componentDidMount(){
        const {userAction,match}=this.props;
        userAction.fetchStatementsById(match.params.userId);
    }

render(){
    const columns = [
        {
            dataField : 'cardNumber',
            text : 'Credit Card Number',
            sort : true,
            filter : textFilter()
        },
        {
            dataField : 'customerName',
            text : 'Customer Name',
            sort : true
        },
        {
            dataField : 'billDate',
            text : 'Billed Date',
            sort :true,
            filter : textFilter()
        },
        {
            dataField : 'dueDate',
            text : 'Due Date',
            sort : true
        },
        {
            dataField : 'billAmount',
            text : 'Bill Amount',
            sort : true
        },
        {
            dataField : 'dueAmount',
            text : 'Due Amount',
            sort : true
        },
        {
            dataField: "statementId",
            text: "View Statement",
            formatter: (rowContent, row) => {
                return (
                    <div className="row">
                        <div className="col-sm-12">
                            <Link className="btn btn-primary" to={`/home/${this.props.match.params.userId}/statements/billed/${row.cardNumber}/${row.statementId}`}><i className="bi bi-eye-fill"></i>View</Link>
                        </div>
                    </div>
                );
            }
        }
    ];
    const options = {
        sizePerPage:10,
        hideSizePerPage:true,
        hidePageListOnlyOnePage: true
    }
    const defaultSorted = [{
        dataField: 'dueAmount',
        order: 'desc'
    }];
    const {isFetchedStatementsById,statementHistoryById}=this.props;
    if(isFetchedStatementsById===true){
        return(
            <div className="container top-statements">
                <div className="container heading-statements">
                    <h2 className="h2-statements">History of Statements</h2>
                </div>
                <div className="row">
                    <BootstrapTable
                        bootstrap4
                        keyField='userId'
                        data={statementHistoryById}
                        columns={columns}
                        pagination={paginationFactory(options)}
                        filter={filterFactory()}
                        defaultSorted = {defaultSorted}
                        striped
                        hover
                    />
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