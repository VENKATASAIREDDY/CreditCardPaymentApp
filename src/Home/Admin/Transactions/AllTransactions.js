import React, { Component } from 'react';
import '../Customers/CustomersStyle.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../../Store/Actions/AdminActions';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class AllTransactions extends Component{

    componentDidMount() {
        this.props.adminActions.fetchAllTransactions();
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
            dataField : 'description',
            text : 'Description of Transaction',
            sort : true,
            filter : textFilter()
        }
    ];

    const { SearchBar, ClearSearchButton } = Search;

    const defaultSorted = [{
        dataField: 'cardNumber',
        order: 'asc'
    }];
    const options = {
        sizePerPage:10,
        hideSizePerPage:true,
        hidePageListOnlyOnePage: true
    }

    const Caption =()=> <h3 className="caption-table-customers">Transactions of Credit Card</h3>
    const {allTransactions,isFetchedAllTransactions}=this.props;
    if(isFetchedAllTransactions!==undefined){
        return(
            <div className="container-fluid p3">
                <ToolkitProvider
                    bootstrap4
                    keyField='userId'
                    data={allTransactions}
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
        allTransactions: state.AdminReducers.allTransactions,
        isFetchedAllTransactions : state.AdminReducers.isFetchedAllTransactions
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        adminActions : bindActionCreators(adminActions,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(AllTransactions);