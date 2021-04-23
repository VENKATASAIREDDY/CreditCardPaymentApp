import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './AccountsStyle.css';
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';

class AllAccounts extends Component{

    componentDidMount(){
        const userId=this.props.match.params.userId;
        this.props.userAction.fetchAccounts(userId);
    }

    render(){
        const userId=this.props.match.params.userId;
        const {isFetchedAccounts,accounts}=this.props;
        if(isFetchedAccounts===true){
            return(
                <div className="container top-padding">
                    <div className="container-fluid">
                        <div className="row">
                            { 
                                accounts.map((account)=>
                                    <div className="col-sm-6 account-details">
                                        <Card className="account-card">
                                            <div className="row">
                                                <div className="col-sm-12 logo-account"><i class="fa fa-bank"></i></div>
                                            </div>
                                            <div className="row account-control">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-4 label-details">Account Number</div>
                                                <div className="col-sm-1">:</div>
                                                <div className="col-sm-6 value-details">{account.accountNumber}</div>
                                                
                                            </div>
                                            <div className="row account-control view-details-hover">
                                                <div className="col-sm-12 noPadding">
                                                <div className="row account-control view-details">
                                                    <div className="col-sm-1"></div>
                                                    <div className="col-sm-4 label-details">Account Name</div>
                                                    <div className="col-sm-1">:</div>
                                                    <div className="col-sm-6 value-details">{account.accountName}</div>
                                                    
                                                </div>
                                                <div className="row account-control view-details">
                                                    <div className="col-sm-1"></div>
                                                    <div className="col-sm-4 label-details">Account Balance</div>
                                                    <div className="col-sm-1">:</div>
                                                    <div className="col-sm-6 value-details">{account.accountBalance}</div>
                                                    
                                                </div>
                                                <div className="row account-control view-details">
                                                    <div className="col-sm-1"></div>
                                                    <div className="col-sm-4 label-details">Account Type</div>
                                                    <div className="col-sm-1">:</div>
                                                    <div className="col-sm-6 value-details">{account.accountType}</div>
                                                </div>
                                                </div>
                                                
                                            </div>
                                            
                                            
                                            <div class="overlay"></div>
                                            <div className="row">
                                                <Link to={`/home/${userId}/accounts/delete/${account.accountNumber}`} class="btn btn-danger hover-btn-del hover-btn-del-account"><i class="bi bi-trash"></i> Delete </Link>             
                                            </div>
                                        </Card>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>Loading...</div>
            )
        }
    }
}
function mapStateToProps(state) {
    return { 
        accounts: state.UserReducers.accounts,
        isFetchedAccounts:state.UserReducers.isFetchedAccounts
    }
}  
    
function mapDispatchToProps (dispatch) {
    return {
        userAction : bindActionCreators(userAction,dispatch),
    }   
};

export default connect(mapStateToProps,mapDispatchToProps)(AllAccounts);