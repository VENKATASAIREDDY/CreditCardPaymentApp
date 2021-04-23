import React, { Component } from 'react';
import NavigationHomeBar from './NavigationHomeBar';
import UserRoutes from './UserRoutes';
import './HomeStyle.css';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';

// import * as userAction from '../../Store/Actions/UserActions';

class HomeApp extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         userId:'',
    //         creditCards:[]
    //     }
    // }

    // componentDidMount(){
    //     const userId=this.props.match.params.userId;
    //     this.props.userAction.fetchCreditCards(userId);
    //     this.props.userAction.fetchPersonalDetails(userId);
    // }

    render(){
        const userId=this.props.match.params.userId;
        // const {isFetchedCreditCards}=this.props;
        // // if(isFetchedCreditCards){
        // //     alert("Entered")
        // //     this.setState({
        // //         userId:userId,
        // //         creditCards:this.props.creditCards
        // //     })
        // // }
        return(
            <div className="container-fluid noPadding">
                <NavigationHomeBar userId={userId}/>
                <div className="container-fluid noPadding">
                    <UserRoutes/>
                </div>
            </div>
        )
    }
}
// function mapStateToProps(state) {
 
//     return { 
//         creditCards: state.UserReducers.creditCards,
//         personalDetails:state.UserReducers.personalDetails,
//         isFetchedPersonalDetails:state.UserReducers.isFetchedPersonalDetails,
//         isFetchedCreditCards:state.UserReducers.isFetchedCreditCards,
//     }
// }  
 
// function mapDispatchToProps (dispatch) {
//    return {
//         userAction : bindActionCreators(userAction,dispatch),
//    }   
// };

// export default connect(mapStateToProps,mapDispatchToProps)(HomeApp);
export default HomeApp;