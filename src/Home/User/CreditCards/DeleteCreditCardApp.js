import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../Store/Actions/UserActions';


class DeleteCreditCard extends Component{

    componentDidMount() {
        const { userAction, match } = this.props;
        userAction.deleteCreditCard(match.params.cardNumber);
    }

    render() {
        return (
            <div>
                <Redirect to={`/home/${this.props.match.params.userId}/creditcards`}/>
            </div>
            
        );
    }
}
function mapStateToProps(state) {
    return {
        isDeletedCreditCard: state.UserReducers.isDeletedCreditCard
    }
}  
 
function mapDispatchToProps (dispatch) {
   return {
        userAction : bindActionCreators(userAction,dispatch)
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(DeleteCreditCard);
//     render(){
//         return(
//             <div>
//                 Welcome to Delete credit card
//                 {this.props.match.params.cardNumber}
//                 {this.props.match.params.userId}
//             </div>
//         )
//     }
// }
// export default DeleteCreditCard;