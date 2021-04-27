import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../../Store/Actions/AdminActions';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class TransactionHistoryOfCard extends Component{

    componentDidMount() {
        const {adminActions,match}=this.props;
        adminActions.fetchTransactions(match.params.cardNumber);
    }

    render(){
        const columns = [{
            dataField : 'cardNumber',
            text : 'Credit Card Number'
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
            dataField : 'description',
            text : 'Description of Transaction',
            sort : true,
            filter : textFilter()
        }
    ];

    const defaultSorted = [{
        dataField: 'transactionDate',
        order: 'desc'
    }];
    const options = {
        sizePerPage:10,
        hideSizePerPage:true,
        hidePageListOnlyOnePage: true
    }
    const {transactionHistory,isFetchedTransaction}=this.props;
    if(isFetchedTransaction!==undefined){
        return(
            <div className="container-fluid top-statements">
                    <div className="container-fluid heading-statements">
                        <h2 className="h2-statements">History of Transactions</h2>
                    </div>
                    <div className="row">
                    <BootstrapTable
                        defaultSorted = {defaultSorted}
                        keyField="cardNumber"
                        columns={columns}
                        data={transactionHistory}
                        pagination={paginationFactory(options)}
                        filter={filterFactory()}
                        striped
                        hover
                    />                                    
                </div>
            </div>            
        )
    }else{
        return(
            <div>Fetching...</div>
        )
    }
        
    }

}
function mapStateToProps(state) {
    return {
        transactionHistory: state.AdminReducers.transactionHistory,
        isFetchedTransaction : state.AdminReducers.isFetchedTransaction
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        adminActions : bindActionCreators(adminActions,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(TransactionHistoryOfCard);