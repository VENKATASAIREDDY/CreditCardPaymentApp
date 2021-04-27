import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as adminAction from '../../../Store/Actions/AdminActions';


class DeleteUser extends Component {

    componentDidMount() {
        const { adminAction, match } = this.props;
        adminAction.deleteUser(match.params.customerId);
    }
    render() {
        const { isDeleted } = this.props;
        if (isDeleted === true) {
            return (
                <div>
                    <Redirect to={`/admin/home/${this.props.match.params.userId}`} />
                </div>
            );
        } else {
            return(
            <div className="container">
                <div className="row spinner-border text-danger"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);
