import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class PaymentHistory extends Component{

    componentDidMount(){
        const {userAction,match}=this.props;
        userAction.fetchPaymentsById(match.params.userId);
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
                sort : true
            },
            {
                dataField : 'method',
                text : 'Payment Method',
                sort : true,
                filter : textFilter()
            }
        ];

        const options = {
            sizePerPage:10,
            hideSizePerPage:true,
            hidePageListOnlyOnePage: true
        }
        const defaultSorted = [{
            dataField: 'paidDate',
            order: 'desc'
        }];
        const {isFetchedPaymentsById,paymentHistoryById}=this.props;
        if(isFetchedPaymentsById===true){
            return(
                <div className="container top-statements">
                    <div className="container heading-statements">
                        <h2 className="h2-statements">History of Payments For Bills</h2>
                    </div>
                    <div className="row">
                        <BootstrapTable
                            bootstrap4
                            keyField='userId'
                            data={paymentHistoryById}
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
        }else {
            return(
                <div>
                    still fetching ...
                </div>
            )
        }
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