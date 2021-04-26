import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../Store/Actions/LoginActions';

class LogoutComponent extends React.Component {

    componentDidMount(){
        this.props.loginActions.logout();
    }

    render() {

        if(this.props.isLoggedOut !== undefined && this.props.isLoggedOut === true) {
            return <Redirect to="/"/>
        }else{
            return (
                <div>Unable to Logout</div>
            )
        }
    }
}

function mapStateToProps(state) {

    return {
        isLoggedOut: state.LoginReducers.isLoggedOut
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(loginActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);