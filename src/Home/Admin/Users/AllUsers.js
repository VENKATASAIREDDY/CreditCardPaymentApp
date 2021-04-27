import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../../Store/Actions/AdminActions';

class AllUsers extends Component {

    componentDidMount() {
        this.props.adminActions.fetchAllUsers();
    }

    render() {
        const users = this.props.users;
        const columns = [
            { 
                dataField: 'userId', 
                text: 'USER ID', 
                sort: true 
            },
            { 
                dataField: 'role', 
                text: 'ROLE', 
                sort: true 
            },
            {
                dataField: "userId",
                text: "ACTION",
                formatter: (rowContent, row) => {
                    return (
                        <div className="row">
                            <div className="col-sm-3">
                                <Link to={`/admin/home/${this.props.match.params.userId}/customerDetails/${row.userId}`} className="btn btn-outline-primary" onClick={e => {
                                }}>
                                    <i className="bi bi-eye-fill"></i> View
                              </Link>
                            </div>
                            <div className="col-sm-3">
                                <span className="oi oi-eye"></span>
                                <Link to={`/admin/home/${this.props.match.params.userId}/delete/${row.userId}`} className="btn btn-outline-danger" onClick={e => {
                                }}>
                                    <i className="bi bi-trash-fill"></i> Delete
                                </Link>
                            </div>
                        </div>

                    );
                }
            }
        ];
        const defaultSorted = [{
            dataField: 'userId',
            order: 'desc'
        }];
        const options = {
            sizePerPage:10,
            hideSizePerPage:true,
            hidePageListOnlyOnePage: true
        }
        const { SearchBar, ClearSearchButton } = Search;
        return (
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
                                        <SearchBar {...props.searchProps} />
                                        <ClearSearchButton {...props.searchProps} />
                                    </div>
                                    <div className="col-sm-12 table-body">
                                        <BootstrapTable
                                            defaultSorted={defaultSorted}
                                            {...props.baseProps}
                                            pagination={paginationFactory(options)}
                                            striped
                                            hover
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
        users: state.AdminReducers.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        adminActions: bindActionCreators(adminActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);