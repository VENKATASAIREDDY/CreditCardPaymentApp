import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../../Store/Actions/AdminActions';

class AllCustomers extends Component{

    componentDidMount() {
        this.props.adminActions.fetchAllCustomers();
    }

    render(){
        const users=this.props.customers;
        const columns = [
            {dataField:'userId', text:'USER ID', sort:true},
            {dataField:'userName', text:'NAME', sort:true},
            {dataField:'email', text:'EMAIL', sort:true},
            {dataField:'contactNo', text:'CONTACT NUMBER', sort:true},
            {dataField:'dob', text:'DATE OF BIRTH', sort:true},
            {dataField:'address.doorNo', text:'DOOR NUMBER', sort:true},
            {dataField:'address.street', text:'STREET', sort:true},
            {dataField:'address.area', text:'AREA', sort:true},
            {dataField:'address.city', text:'CITY', sort:true},
            {dataField:'address.state', text:'STATE', sort:true},
            {dataField:'address.pincode', text:'PINCODE', sort:true},
            {
                dataField: "userId",
                text:"ACTION",
                formatter: (rowContent, row) => {
                  return (
                      <div className="row">
                          <div className="col-sm-5">
                                <button type="button" className="btn btn-outline-primary" onClick={e => {
                                    alert(row.userId);
                                    }}>
                                    <i class="bi bi-eye-fill"></i> View                                    
                                </button>
                            </div>
                            <div className="col-sm-5">
                                <span class="oi oi-eye"></span>
                                <button type="button" className="btn btn-outline-danger" onClick={e => {
                                    alert(row.userId);
                                    console.log(row.userId);
                                    }}>
                                    <i class="bi bi-trash-fill"></i> Delete
                                </button>
                            </div>                        
                      </div>
                    
                  );
                }
              }
        ];
        const defaultSorted = [{
            dataField:'userId',
            order:'asc'
        }];
        const pagination =paginationFactory({
            page:1,
            sizePerPage:7,
            lastPageText:'>>',
            firstPageText:'<<',
            nextPageText:'>',
            prePageText:'<',
            showTotal:true,
            alwaysShowAllBtns:true,
            onPageChange: function (page, sizePerPage) {
                console.log('page', page);
                console.log('sizePerPage', sizePerPage);
              },
              onSizePerPageChange: function (page, sizePerPage) {
                console.log('page', page);
                console.log('sizePerPage', sizePerPage);
              }

        });
        const {SearchBar, ClearSearchButton } = Search;
        return(
            <div className="container">
                <div className="conatiner table-heading">
                    <h2 className="h2-admin-allusers">Manage Users</h2>
                </div>
                <div className="table-body">
                    <ToolkitProvider
                        bootstrap4
                        keyField='userId'
                        data={users}
                        columns={columns}
                        search
                    >{
                        props => (
                            <div className="row">
                                <div className="col-sm-12 table-search">
                                    <SearchBar {...props.searchProps}/>
                                    <ClearSearchButton {...props.searchProps}/>
                                </div>
                                <div className="col-sm-12 table-body">
                                <BootstrapTable
                                    defaultSorted={defaultSorted}
                                    pagination={pagination}
                                    {...props.baseProps}
                                />
                            </div>
                            </div>
                            
                        )
                    }
                    </ToolkitProvider>
                </div>
            </div>
        )
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