import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../../Store/Actions/AdminActions';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Link } from 'react-router-dom';


class AllCreditCards extends Component{

    componentDidMount() {
        this.props.adminActions.fetchAllCreditCards();
    }

    render(){
        const columns = [{
            dataField : 'customerId',
            text : 'Customer ID',
            sort : true,
            filter : textFilter()
        },
        {
            dataField : 'cardNumber',
            text : 'Credit Card Number',
            sort : true,
            filter : textFilter()
        },
        {
            dataField : 'cardName',
            text : 'Card Name',
            sort : true,
            filter : textFilter()
        },
        {
            dataField : 'cardType',
            text : 'Card Type',
            sort :true,
            filter : textFilter()
        },
        {
            dataField : 'bankName',
            text : 'Bank Name',
            sort :true
        },
        {
            dataField : 'cardLimit',
            text : 'Card Limit',
            sort : true
        },
        {
            dataField : 'usedLimit',
            text : 'Used Amount',
            sort : true
        },
        {
            dataField : 'expiryDate',
            text : 'Expiry Date',
            sort : true
        },
        {
            dataField: "cardNumber",
            text: "Statements",
            formatter: (rowContent, row) => {
                return (
                    <div className="row">
                        <div className="col-sm-12">
                            <Link to={`/admin/home/${this.props.match.params.userId}/statements/history/${row.cardNumber}`} className="btn btn-outline-primary" onClick={e => {
                            }}>
                                <i className="bi bi-eye-fill"></i> View Statements
                          </Link>
                        </div>
                    </div>
                );
            }
        },
        {
            dataField: "cardNumber",
            text: "Transactions",
            formatter: (rowContent, row) => {
                return (
                    <div className="row">
                        <div className="col-sm-12">
                            <Link to={`/admin/home/${this.props.match.params.userId}/transactions/history/${row.cardNumber}`} className="btn btn-outline-primary" onClick={e => {
                            }}>
                                <i className="bi bi-eye-fill"></i> View Transactions
                          </Link>
                        </div>
                    </div>
                );
            }
        },
        {
            dataField: "cardNumber",
            text: "Payments",
            formatter: (rowContent, row) => {
                return (
                    <div className="row">
                        <div className="col-sm-12">
                            <Link to={`/admin/home/${this.props.match.params.userId}/payments/history/${row.cardNumber}`} className="btn btn-outline-primary" onClick={e => {
                            }}>
                                <i className="bi bi-eye-fill"></i> View Paymentss
                          </Link>
                        </div>
                    </div>
                );
            }
        }
    ];

    const { SearchBar, ClearSearchButton } = Search;

    const defaultSorted = [{
        dataField: 'dueAmount',
        order: 'desc'
    }];
    const options = {
        sizePerPage:10,
        hideSizePerPage:true,
        hidePageListOnlyOnePage: true
    }

    const Caption =()=> <h3 className="caption-table-customers">Credit Cards of Customers</h3>
    const {creditcards}=this.props;
    if(creditcards!==undefined){
        return(
            <div className="container-fluid p3">
                <ToolkitProvider
                    bootstrap4
                    keyField='userId'
                    data={creditcards}
                    columns={columns}
                    search
                >
                    {
                        props => (
                            <div className="container-fluid">
                                <Caption/>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-4 search-bar">
                                        <SearchBar {...props.searchProps}/>
                                    </div>
                                    <div className="col-sm-1">
                                        <ClearSearchButton {...props.searchProps}/>
                                    </div>
                                </div>
                                <div className="row row-table-all-customers">
                                    <BootstrapTable
                                        defaultSorted = {defaultSorted}
                                        {...props.baseProps}
                                        pagination={paginationFactory(options)}
                                        filter={filterFactory()}
                                        striped
                                        hover
                                        wrapperClasses="table-responsive"
                                    />                                    
                                </div>
                            </div>
                        )
                    }
                </ToolkitProvider>
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
        creditcards: state.AdminReducers.creditcards
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        adminActions : bindActionCreators(adminActions,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(AllCreditCards);