import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../Store/Actions/UserActions';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class PaymentHistoryOfCard extends Component{

    componentDidMount() {
        const{userActions,match}=this.props;
        userActions.fetchPayments(match.params.cardNumber);
    }

    render(){
        const columns = [{
                dataField : 'cardNumber',
                text : 'Credit Card Number'
            },{
                dataField : 'paidDate',
                text : 'Payment Date',
                sort :true,
                filter : textFilter()
            },
            {
                dataField : 'paidTime',
                text : 'Payment Time',
                sort : true
            },
            {
                dataField : 'amount',
                text : 'Amount',
                sort : true,
                filter : textFilter()
            },
            {
                dataField : 'method',
                text : 'Payment Method',
                sort : true,
                filter : textFilter()
            }
        ];

    const defaultSorted = [{
        dataField: 'paidDate',
        order: 'desc'
    }];
    const options = {
        sizePerPage:10,
        hideSizePerPage:true,
        hidePageListOnlyOnePage: true
    }

    const {paymentHistory,isFetchedPayments}=this.props;
    if(isFetchedPayments!==undefined){
        return(
            <div className="container top-statements">
                <div className="container heading-statements">
                    <h2 className="h2-statements">History of Payments For Bills</h2>
                </div>
                <div className="row">
                    <BootstrapTable
                        bootstrap4
                        keyField='userId'
                        data={paymentHistory}
                        columns={columns}
                        defaultSorted = {defaultSorted}
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
        paymentHistory: state.UserReducers.paymentHistory,
        isFetchedPayments : state.UserReducers.isFetchedPayments
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        userActions : bindActionCreators(userActions,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(PaymentHistoryOfCard);