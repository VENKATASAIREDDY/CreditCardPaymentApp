import React, { Component } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as adminAction from '../../../Store/Actions/adminActions';


class DeleteCustomer extends Component {

    componentDidMount() {
        const { adminAction, match } = this.props;
        adminAction.deleteUser(match.params.customerId);
    }
    render() {
        const { deleteCustomer, isDeleted } = this.props;
        if (isDeleted === true) {
            return (
                <div>
                    <Redirect to={`/admin/home/${this.props.match.params.userId}`} />
                </div>
            );
        } else {
            return(
            <div className="container">
                <div class="row spinner-border text-danger"></div>
            </div>
            )
            
        }

    }
}
function mapStateToProps(state) {
    return {
        isDeleted: state.AdminReducers.isDeleted,
        deleteUser: state.AdminReducers.deleteUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        adminAction: bindActionCreators(adminAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCustomer);
