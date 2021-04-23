import React, { Component } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';


class DeleteAccount extends Component {

    componentDidMount() {
        const { userAction, match } = this.props;
        userAction.deleteAccount(match.params.userId, match.params.accountNumber);
    }
    render() {
        const { accountDelete, isDeletedAccount } = this.props;
        if (isDeletedAccount === true) {
            return (
                <div>
                    <Redirect to={`/home/${this.props.match.params.userId}/accounts`} />
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
        isDeletedAccount: state.UserReducers.isDeletedAccount,
        accountDelete: state.UserReducers.accountDelete
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
