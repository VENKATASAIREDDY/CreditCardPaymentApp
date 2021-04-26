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
            { dataField: 'userId', text: 'USER ID', sort: true },
            { dataField: 'role', text: 'ROLE', sort: true },
            {
                dataField: "userId",
                text: "ACTION",
                formatter: (rowContent, row) => {
                    return (
                        <div className="row">
                            <div className="col-sm-3">
                                <Link to={`/admin/home/${this.props.match.params.userId}/customerDetails/${row.userId}`} className="btn btn-outline-primary" onClick={e => {
                                }}>
                                    <i class="bi bi-eye-fill"></i> View
                              </Link>
                            </div>
                            <div className="col-sm-3">
                                <span class="oi oi-eye"></span>
                                <Link to={`/admin/home/${this.props.match.params.userId}/delete/${row.userId}`} className="btn btn-outline-danger" onClick={e => {
                                }}>
                                    <i class="bi bi-trash-fill"></i> Delete
                                </Link>
                            </div>
                        </div>

                    );
                }
            }
        ];
        const defaultSorted = [{
            dataField: 'userId',
            order: 'asc'
        }];
        const pagination = paginationFactory({
            page: 1,
            sizePerPage: 7,
            lastPageText: '>>',
            firstPageText: '<<',
            nextPageText: '>',
            prePageText: '<',
            showTotal: true,
            alwaysShowAllBtns: true,
        });
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
            // <div class="container-xl">
            //     <div class="table-responsive">
            //         <div class="table-wrapper">
            //             <div class="table-title">
            //                 <div class="row">
            //                     <div class="col-sm-8">
            //                         <h2>Manage User</h2>
            //                     </div>
            //                 </div>
            //             </div>
            //             <table class="table table-striped table-hover table-bordered">
            //                 <thead>
            //                     <tr>
            //                         <th>#</th>
            //                         <th>USER ID <i class="fa fa-sort"></i></th>
            //                         <th>ROLE</th>
            //                         <th colSpan="2">ACTION</th>
            //                     </tr>
            //                 </thead>
            //                 <tbody>
            //                 {
            //                     this.props.users.map((customer, index)=>
            //                     <tr>
            //                         <td>{index+1}</td>
            //                         <td>{customer.userId}</td>
            //                         <td>{customer.role}</td>
            //                         {/* <td><Link to={`/admin/users/${customer.userId}`}>view</Link></td>
            //                         <td><Link to={`/userDelete/${customer.userId}`}>Delete</Link></td> */}
            //                     </tr>)
            //                 }
            //                         {/* <td>
            //                             <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
            //                             <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
            //                             <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
            //                         </td> */}       
            //                 </tbody>
            //             </table>
            //         </div>
            //     </div>  
            // </div>   
            //                     {/* <td><Link to={`/admin/users/${customer.userId}`}>view</Link></td>
            //                     <td><Link to={`/userDelete/${customer.userId}`}>Delete</Link></td> */}
            //                 </tr>)
            //                 }
            //                 <tr>
            //                     {/* <td colSpan="5"><Link to={`/addUser`}>Add New User</Link></td> */}
            //                 </tr>

            //         </tbody>
            //     </table>
            // </div>
        )
    }
}
//     render(){
//         return(
//             <div className="container-fluid">
//                 <div className="container">
//                     <h2>All Users</h2>
//                 </div>

//             </div>
//         )
//     }
// }
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