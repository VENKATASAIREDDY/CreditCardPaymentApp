import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class TransactionHistory extends Component{
    
    componentDidMount(){
        const {userAction,match}=this.props;
        userAction.fetchTransactionsById(match.params.userId);
    }

    render(){
        const columns = [{
                dataField : 'cardNumber',
                text : 'Credit Card Number',
                sort : true,
                filter : textFilter()
            },
            {
                dataField : 'transactionDate',
                text : 'Transaction Date',
                sort :true,
                filter : textFilter()
            },
            {
                dataField : 'transactionTime',
                text : 'Transaction Time',
                sort : true
            },
            {
                dataField : 'amount',
                text : 'Transaction Amount',
                sort : true
            },
            {
                dataField : 'status',
                text : 'Status',
                sort : true
            },
            {
                dataField : 'description',
                text : 'Description',
                sort : true,
                filter : textFilter()
            }
        ];
        const options = {
            sizePerPage:10,
            hideSizePerPage:true,
            hidePageListOnlyOnePage: true
        }

        const {isFetchedTransactionsById,transactionHistoryById}=this.props;
        if(isFetchedTransactionsById===true){
            return(
                <div className="container-fluid top-statements">
                    <div className="container-fluid heading-statements">
                        <h2 className="h2-statements">History of Transactions</h2>
                    </div>
                    <div className="row">
                    <BootstrapTable
                        bootStrap4
                        keyField='userId'
                        data={transactionHistoryById}
                        columns={columns}
                        pagination={paginationFactory(options)}
                        filter={filterFactory()}
                        striped
                        hover
                        wrapperClasses="table-responsive"
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