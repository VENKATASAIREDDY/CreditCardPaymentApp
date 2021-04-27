import React, { Component } from 'react';
import './CustomersStyle.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../../Store/Actions/AdminActions';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Link } from 'react-router-dom';

class AllCustomers extends Component{

    componentDidMount() {
        this.props.adminActions.fetchAllCustomers();
    }

    render(){
        const columns = [{
            dataField : 'userId',
            text : 'Customer ID',
            sort : true
        },{
            dataField : 'userName',
            text : 'Customer Name',
            sort :true
        },
        {
            dataField : 'contactNo',
            text : 'Contact Number',
            sort : true
        },
        {
            dataField : 'email',
            text : 'Email ID',
            sort : true
        },
        {
            dataField : 'userId',
            text : 'Action',
            formatter: (rowContent, row) => {
                return (
                    <div className="row">
                        <div className="col-sm-5">
                              <Link to={`/admin/home/${this.props.match.params.userId}/customerDetails/${row.userId}`} className="btn btn-outline-primary" onClick={e => {
                                  }}>
                                  <i className="bi bi-eye-fill"></i> View                                    
                              </Link>
                          </div>                        
                    </div>
                  
                );
              }
        }
    ];

    const { SearchBar, ClearSearchButton } = Search;

    const defaultSorted = [{
        dataField: 'userId',
        order: 'desc'
    }];
    const options = {
        sizePerPage:5,
        hideSizePerPage:true
    }

    const Caption =()=> <h3 className="caption-table-customers">Manage Customers</h3>
    
    if(this.props.customers!==undefined){
        return(
            <div className="container-fluid p3">
                <ToolkitProvider
                    bootstrap4
                    keyField='userId'
                    data={this.props.customers}
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
                                        striped
                                        hover
                                        wrapperClasses="table-responsive"
                                    />                                    
                                </div>
                            </div>
                        )
                    }
                </ToolkitProvider>
                
                {/* <BootstrapTable 
                    bootstrap4 
                    keyField='userId' 
                    data={this.props.customers}
                    columns={columns}
                    caption={<Caption/>}
                    defaultSorted = {defaultSorted}
                    pagination={ paginationFactory() }
                    striped
                    hover
                /> */}
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
        customers: state.AdminReducers.customers
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        adminActions : bindActionCreators(adminActions,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(AllCustomers);