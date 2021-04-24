import React, { Component } from 'react';
import NavigationHomeBar from './NavigationHomeBar';
import UserRoutes from './UserRoutes';
import './HomeStyle.css';

class HomeApp extends Component{

    render(){
        const userId=this.props.match.params.userId;
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
export default HomeApp;